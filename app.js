import { app, update, query, errorHandler } from "mu";
import bodyParser from "body-parser";

import { readFile } from "fs/promises";
import * as RmlMapper from "@comake/rmlmapper-js";
import { mapping as bboMapping } from "./bbo-mapping.js";
import { existsSync } from "fs";
import {
  generateUpdateQuery,
  generateUploadResourceUriSelectQuery,
  generateGroupUriSelectQuery,
} from "./sparql-queries.js";

const STORAGE_FOLDER_PATH = "/share/";
const HEADER_MU_SESSION_ID = "mu-session-id";

app.use(
  bodyParser.json({
    type: function (req) {
      return /^application\/json/.test(req.get("content-type"));
    },
  })
);

app.post("/", async (req, res, next) => {
  const sessionUri = req.get(HEADER_MU_SESSION_ID);
  console.log("SESSION URI:", sessionUri);
  if (!sessionUri) {
    return res.status(401).send("Session ID header not found.");
  }
  const groupUriQuery = generateGroupUriSelectQuery(sessionUri);
  console.log("GROUP URI QUERY:", groupUriQuery);
  const groupUriResult = await query(groupUriQuery);
  const groupUriBindings = groupUriResult.results.bindings;
  console.log("GROUP URI BINDINGS:", groupUriBindings);
  if (groupUriBindings.length === 0) {
    return res.status(401).send("User not affiliated with any organization.");
  }
  const groupUri = groupUriBindings[0].groupUri.value;
  console.log("GROUP URI:", groupUri);

  const uploadResourceUuid = req.query.id;
  const selectQuery = generateUploadResourceUriSelectQuery(uploadResourceUuid);
  const result = await query(selectQuery);
  const bindings = result.results.bindings;
  if (bindings.length === 0) {
    return res.status(404).send("Not Found");
  }
  const uploadResourceUri = bindings[0].fileUrl.value;
  const uploadUri = bindings[0].uri.value;

  const filePath = uploadResourceUri.replace("share://", STORAGE_FOLDER_PATH);
  if (!existsSync(filePath)) {
    return res
      .status(500)
      .send(
        "Could not find file in path. Check if the physical file is available on the server and if this service has the right mountpoint."
      );
  }
  const bpmn = await readFile(filePath, "utf-8");
  let triples;
  try {
    triples = await translateToRdf(bpmn, uploadUri);
  } catch (e) {
    console.log(
      `Something unexpected went wrong while handling bpmn extraction!`
    );
    console.error(e);
    return next(e);
  }

  const bboQuery = generateUpdateQuery(triples);
  await update(bboQuery);
  return res
    .status(200)
    .send({ message: "bpmn extraction completed successfully" });
});

app.use(errorHandler);
async function translateToRdf(bpmn, uploadResourceUri) {
  if (!bpmn || bpmn.trim().length === 0) {
    const error = new Error(
      "Invalid content: The provided file does not contain any content."
    );
    error.statusCode = 400;
    throw error;
  }

  const inputFiles = {
    "input.bpmn": bpmn,
  };
  const options = {
    compact: {
      "@base": "http://data.lblod.info/",
    },
    toRDF: true,
    xpathLib: "xpath",
  };

  const triples = await RmlMapper.parseTurtle(
    bboMapping(uploadResourceUri),
    inputFiles,
    options
  );
  if (!triples || triples.trim().length === 0) {
    const error = new Error(
      "Invalid content: The provided file does not contain valid content."
    );
    error.statusCode = 400;
    throw error;
  }

  return triples;
}

import { app, update, query, errorHandler } from "mu";
import { querySudo } from "@lblod/mu-auth-sudo";
import bodyParser from "body-parser";

import { readFile } from "fs/promises";
import * as RmlMapper from "@comake/rmlmapper-js";
import { mapping as bboMapping } from "./bbo-mapping.js";
import { existsSync } from "fs";
import {
  generateUpdateQuery,
  generateFileUriSelectQuery,
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
  if (!sessionUri) {
    return res.status(401).send("Session ID header not found.");
  }
  const groupUriQuery = generateGroupUriSelectQuery(sessionUri);
  const groupUriResult = await querySudo(groupUriQuery);
  const groupUri = groupUriResult.results.bindings[0]?.groupUri?.value;
  if (!groupUri) {
    return res.status(401).send("User not affiliated with any organization.");
  }

  const virtualFileUuid = req.query.id;
  const fileUriQuery = generateFileUriSelectQuery(virtualFileUuid);
  const fileUriResult = await query(fileUriQuery);
  const fileUriBindings = fileUriResult.results.bindings;
  if (fileUriBindings.length === 0) {
    return res.status(404).send("Not Found");
  }
  const physicalFileUri = fileUriBindings[0].physicalFileUri.value;
  const virtualFileUri = fileUriBindings[0].virtualFileUri.value;

  const filePath = physicalFileUri.replace("share://", STORAGE_FOLDER_PATH);
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
    triples = await translateToRdf(bpmn, virtualFileUri);
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
async function translateToRdf(bpmn, virtualFileUri) {
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
    bboMapping(virtualFileUri),
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

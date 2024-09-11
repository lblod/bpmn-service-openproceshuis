import { app, update, query, errorHandler, uuid } from "mu";
import { querySudo } from "@lblod/mu-auth-sudo";
import bodyParser from "body-parser";
import { readFile, unlink } from "fs/promises";
import * as RmlMapper from "@comake/rmlmapper-js";
import { mapping as bboMapping } from "./bbo-mapping.js";
import { existsSync } from "fs";
import {
  generateBboTriplesInsertQuery,
  generateFileUriSelectQuery,
  generateGroupUriSelectQuery,
  generateFileGroupLinkInsertQuery,
} from "./sparql-queries.js";
import { runAsyncJob } from "./job.js";

const STORAGE_FOLDER_PATH = "/share/";
const HEADER_MU_SESSION_ID = "mu-session-id";
const JOB_GRAPH = "http://mu.semte.ch/graphs/bpmn-job";
const JOB_OPERATION =
  "http://redpencil.data.gift/id/jobs/concept/JobOperation/BpmnToRdf";

app.use(
  bodyParser.json({
    type: function (req) {
      return /^application\/json/.test(req.get("content-type"));
    },
  })
);

app.post("/", async (req, res) => {
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
  const virtualFileUri = fileUriBindings[0].virtualFileUri.value;
  const physicalFileUri = fileUriBindings[0].physicalFileUri.value;

  const fileGroupLinkInsertQuery = generateFileGroupLinkInsertQuery(
    virtualFileUri,
    groupUri
  );
  await update(fileGroupLinkInsertQuery);

  const filePath = physicalFileUri.replace("share://", STORAGE_FOLDER_PATH);
  if (!existsSync(filePath)) {
    return res
      .status(500)
      .send(
        "Could not find file in path. Check if the physical file is available on the server and if this service has the right mountpoint."
      );
  }

  runAsyncJob(JOB_GRAPH, JOB_OPERATION, groupUri, virtualFileUri, () =>
    extractAndInsertProcessSteps(filePath, virtualFileUri)
  );

  return res
    .status(202)
    .send({ message: "process steps extraction job running" });
});

app.use(errorHandler);

async function extractAndInsertProcessSteps(bpmnFilePath, virtualFileUri) {
  const bpmnFile = await readFile(bpmnFilePath, "utf-8");
  const bboTriples = await translateToRdf(bpmnFile, virtualFileUri);

  const bboTriplesBySubject = Object.values(
    bboTriples.reduce((bboTriplesBySubjectMap, triple) => {
      const subject = triple.split(" ")[0];
      if (!bboTriplesBySubjectMap[subject]) {
        bboTriplesBySubjectMap[subject] = [];
      }
      bboTriplesBySubjectMap[subject].push(triple);
      return bboTriplesBySubjectMap;
    }, {})
  );

  const maxChunkSize = 100;
  let index = 0;
  let bboTriplesChunk = [];

  while (index < bboTriplesBySubject.length) {
    if (
      bboTriplesChunk.length === 0 ||
      bboTriplesChunk.length + bboTriplesBySubject[index].length <= maxChunkSize
    ) {
      bboTriplesChunk = bboTriplesChunk.concat(bboTriplesBySubject[index]);
    }

    index++;

    if (
      index >= bboTriplesBySubject.length ||
      bboTriplesChunk.length + bboTriplesBySubject[index].length >= maxChunkSize
    ) {
      const insertBboTriplesQuery =
        generateBboTriplesInsertQuery(bboTriplesChunk);
      await update(insertBboTriplesQuery);
      bboTriplesChunk = [];
    }
  }
}

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

  return triples.split("\n");
}

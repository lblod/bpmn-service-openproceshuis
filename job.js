import {
  uuid,
  sparqlEscapeString,
  sparqlEscapeUri,
  sparqlEscapeDateTime
} from 'mu';
import { querySudo as query, updateSudo as update } from '@lblod/mu-auth-sudo';

const PREFIXES = `
  PREFIX mu: <http://mu.semte.ch/vocabularies/core/>
  PREFIX task: <http://redpencil.data.gift/vocabularies/tasks/>
  PREFIX dct: <http://purl.org/dc/terms/>
  PREFIX prov: <http://www.w3.org/ns/prov#>
  PREFIX nie: <http://www.semanticdesktop.org/ontologies/2007/01/19/nie#>
  PREFIX ext: <http://mu.semte.ch/vocabularies/ext/>
  PREFIX oslc: <http://open-services.net/ns/core#>
  PREFIX cogs: <http://vocab.deri.ie/cogs#>
  PREFIX adms: <http://www.w3.org/ns/adms#>
`;

const JOB_TYPE = 'http://vocab.deri.ie/cogs#Job';

const JOB_URI_PREFIX = 'http://redpencil.data.gift/id/job/';

const ERROR_TYPE = 'http://open-services.net/ns/core#Error';
const ERROR_URI_PREFIX = 'http://redpencil.data.gift/id/jobs/error/';


export const STATUS_BUSY = 'http://redpencil.data.gift/id/concept/JobStatus/busy';
export const STATUS_SUCCESS = 'http://redpencil.data.gift/id/concept/JobStatus/success';
export const STATUS_SCHEDULED = 'http://redpencil.data.gift/id/concept/JobStatus/scheduled';
export const STATUS_FAILED = 'http://redpencil.data.gift/id/concept/JobStatus/failed';
export const STATUS_CANCELED = 'http://redpencil.data.gift/id/concept/JobStatus/canceled';

export const ACTIVE_STATUSES = [STATUS_BUSY, STATUS_SCHEDULED];

async function createJob(jobsGraph, creatorUri, jobOperationUri, relatedResource) {
  const jobId = uuid();
  const jobUri = JOB_URI_PREFIX + `${jobId}`;
  const created = new Date();
  const createJobQuery = `
${PREFIXES}
    INSERT DATA {
      GRAPH ${sparqlEscapeUri(jobsGraph)}{
        ${sparqlEscapeUri(jobUri)} a ${sparqlEscapeUri(JOB_TYPE)};
                                   mu:uuid ${sparqlEscapeString(jobId)};
                                   dct:creator ${sparqlEscapeUri(creatorUri)};
                                   adms:status ${sparqlEscapeUri(STATUS_BUSY)};
                                   dct:created ${sparqlEscapeDateTime(created)};
                                   dct:modified ${sparqlEscapeDateTime(created)};
                                   ext:relatedTo ${sparqlEscapeUri(relatedResource)};
                                   task:operation ${sparqlEscapeUri(jobOperationUri)}.
      }
    }
  `;

  await update(createJobQuery);

  return jobUri;
}


export async function getJob(jobOperationUri, creatorUri, relatedResource) {
  if (!jobOperationUri?.length) {
    return null;
  }

  const q = `
   ${PREFIXES}

   SELECT distinct ?status {
    GRAPH ?g {
      ?jobUri a ${sparqlEscapeUri(JOB_TYPE)}.
      ?jobUri dct:creator ${sparqlEscapeUri(creatorUri)}.
      ?jobUri task:operation ${sparqlEscapeUri(jobOperationUri)}.
      ?joburi ext:relatedTo ${sparqlEscapeUri(relatedResource)};
      ?jobUri adms:status ?status.
    }
   }
  `;
  const result = await query(q);
  if (result.results.bindings.length !== 1) {
    return null;
  }
  switch (result.results.bindings[0].status.value) {
    case STATUS_SCHEDULED:
    case STATUS_BUSY: return 'busy';
    case STATUS_SUCCESS: return 'success';
    case STATUS_FAILED: return "failed";
    case STATUS_CANCELED: return "canceled";
    default: return null;
  }

}


async function storeError(jobsGraph, errorCreatorUri, errorMsg) {
  const id = uuid();
  const uri = ERROR_URI_PREFIX + id;

  const queryError = `
    ${PREFIXES}

    INSERT DATA {
      GRAPH ${sparqlEscapeUri(jobsGraph)} {
        ${sparqlEscapeUri(uri)} a ${sparqlEscapeUri(ERROR_TYPE)} ;
          mu:uuid ${sparqlEscapeString(id)} ;
          dct:subject "BPMN Service error" ;
          oslc:message ${sparqlEscapeString(errorMsg)} ;
          dct:created ${sparqlEscapeDateTime(new Date().toISOString())} ;
          dct:creator ${sparqlEscapeUri(errorCreatorUri)} .
      }
    }
  `;

  await update(queryError);
}

async function updateStatusJob(jobsGraph, jobUri, status) {
  let dateModified = new Date();
  const updateQuery = `
    ${PREFIXES}
    DELETE {
      GRAPH ?g {
        ?job adms:status ?status;
           dct:modified ?modified.
      }
    }
    WHERE {
      GRAPH ?g {
       BIND(${sparqlEscapeUri(jobUri)} AS ?job)
       ?job a ${sparqlEscapeUri(JOB_TYPE)};
         adms:status ?status;
         dct:modified ?modified.
      }
    }
    ;
    INSERT DATA {
      GRAPH ${sparqlEscapeUri(jobsGraph)}{
        ${sparqlEscapeUri(jobUri)} adms:status ${sparqlEscapeUri(status)};
           dct:modified ${sparqlEscapeDateTime(dateModified)}.
      }
    }
  `;

  await update(updateQuery);


}

export async function runAsyncJob(jobsGraph, jobOperation, creatorUri, relatedResource, asyncFunc = async () => { }) {
  try {
    const jobUri = await createJob(jobsGraph, creatorUri, jobOperation, relatedResource);
    await asyncFunc();
    await updateStatusJob(jobsGraph, jobUri, STATUS_SUCCESS);
  } catch (error) {
    console.error(`Error while scheduling job ${jobOperation}: ${error}`);
    console.error(error);
    await storeError(jobsGraph, creatorUri, error);
    await updateStatusJob(jobsGraph, jobUri, STATUS_FAILED);
  }
}

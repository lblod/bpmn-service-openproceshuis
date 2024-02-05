import { sparqlEscapeString } from "mu";

const PREFIXES = `
   PREFIX mu: <http://mu.semte.ch/vocabularies/core/>
   PREFIX nfo: <http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#>
   PREFIX dct: <http://purl.org/dc/terms/>
   PREFIX dbpedia: <http://dbpedia.org/ontology/>
   PREFIX nie: <http://www.semanticdesktop.org/ontologies/2007/01/19/nie#>
`;

export function generateUpdateQuery(triples) {
  return `INSERT DATA { ${triples} }`;
}

export function generateUploadResourceUriSelectQuery(uploadResourceUuid) {
  // prettier-ignore
  return `
    ${PREFIXES}
    SELECT * WHERE {
        ?uri mu:uuid ${sparqlEscapeString(uploadResourceUuid)};
             nfo:fileName ?fileName ;
             dbpedia:fileExtension ?extension .
        ?fileUrl nie:dataSource ?uri .
    }`;
}

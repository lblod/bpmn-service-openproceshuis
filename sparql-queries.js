import { sparqlEscapeString, sparqlEscapeUri } from "mu";

export function generateUpdateQuery(triples) {
  return `INSERT DATA { ${triples} }`;
}

export function generateUploadResourceUriSelectQuery(uploadResourceUuid) {
  return `
    PREFIX mu: <http://mu.semte.ch/vocabularies/core/>
    PREFIX nfo: <http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#>
    PREFIX dbpedia: <http://dbpedia.org/ontology/>
    PREFIX nie: <http://www.semanticdesktop.org/ontologies/2007/01/19/nie#>

    SELECT ?virtualFileUri ?physicalFileUri
    WHERE {
      ?virtualFileUri mu:uuid ${sparqlEscapeString(uploadResourceUuid)};
           nfo:fileName ?fileName ;
           dbpedia:fileExtension ?extension .
      ?physicalFileUri nie:dataSource ?virtualFileUri .
    }`;
}

export function generateGroupUriSelectQuery(sessionUri) {
  return `
    PREFIX muExt: <http://mu.semte.ch/vocabularies/ext/>

    SELECT ?groupUri
    WHERE {
      ${sparqlEscapeUri(sessionUri)} muExt:sessionGroup ?groupUri .
    }
  `;
}

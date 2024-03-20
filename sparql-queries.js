import { sparqlEscapeString, sparqlEscapeUri } from "mu";

export function generateUpdateQuery(triples) {
  return `INSERT DATA { ${triples} }`;
}

export function generateFileUriSelectQuery(virtualFileUuid) {
  return `
    PREFIX mu: <http://mu.semte.ch/vocabularies/core/>
    PREFIX nie: <http://www.semanticdesktop.org/ontologies/2007/01/19/nie#>

    SELECT ?virtualFileUri ?physicalFileUri
    WHERE {
      ?virtualFileUri mu:uuid ${sparqlEscapeString(virtualFileUuid)} .
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

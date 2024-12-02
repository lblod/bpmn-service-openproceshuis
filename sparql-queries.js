import { sparqlEscapeString, sparqlEscapeUri } from "mu";

export function generateTriplesInsertQuery(triples) {
  // prettier-ignore
  return `
    INSERT DATA {
      ${triples.join("\n")}
    }`;
}

export function generateFileUriSelectQuery(virtualFileUuid) {
  // prettier-ignore
  return `
    PREFIX mu: <http://mu.semte.ch/vocabularies/core/>
    PREFIX nie: <http://www.semanticdesktop.org/ontologies/2007/01/19/nie#>
    PREFIX dbpedia: <http://dbpedia.org/ontology/>

    SELECT ?virtualFileUri ?physicalFileUri ?fileExtension
    WHERE {
      ?virtualFileUri mu:uuid ${sparqlEscapeString(virtualFileUuid)} .
      ?physicalFileUri nie:dataSource ?virtualFileUri .
      ?physicalFileUri dbpedia:fileExtension ?fileExtension .
    }`;
}

export function generateGroupUriSelectQuery(sessionUri) {
  // prettier-ignore
  return `
    PREFIX muExt: <http://mu.semte.ch/vocabularies/ext/>

    SELECT ?groupUri
    WHERE {
      ${sparqlEscapeUri(sessionUri)} muExt:sessionGroup ?groupUri .
    }`;
}

export function generateFileGroupLinkInsertQuery(virtualFileUri, groupUri) {
  // prettier-ignore
  return `
    PREFIX schema: <https://schema.org/>

    INSERT DATA {
      ${sparqlEscapeUri(virtualFileUri)} schema:publisher ${sparqlEscapeUri(groupUri)} .
    }`;
}

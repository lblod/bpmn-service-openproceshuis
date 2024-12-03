import {
  uuid,
  sparqlEscapeString,
  sparqlEscapeUri,
  sparqlEscapeDateTime,
  sparqlEscapeInt,
} from "mu";

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
    PREFIX nfo: <http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#>
    PREFIX nie: <http://www.semanticdesktop.org/ontologies/2007/01/19/nie#>
    PREFIX dbpedia: <http://dbpedia.org/ontology/>

    SELECT *
    WHERE {
      ?virtualFileUri mu:uuid ${sparqlEscapeString(virtualFileUuid)} ;
        nfo:fileName ?virtualFileName ;
        dbpedia:fileExtension ?fileExtension .

      ?physicalFileUri nie:dataSource ?virtualFileUri .
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

export function generateBpmnVisioFileInsertQuery(
  virtualFileUuid,
  virtualFileUri,
  virtualFileName,
  fileSize,
  visioFileUri
) {
  const fileFormat = "text/xml; charset=utf-8";
  const fileExtension = "bpmn";
  const now = new Date();

  const physicalFileUuid = uuid();
  const physicalFileName = `${physicalFileUuid}.${fileExtension}`;
  const physicalFileUri = `share://${physicalFileName}`;

  // prettier-ignore
  return `
    PREFIX nfo: <http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#>
    PREFIX dbpedia: <http://dbpedia.org/ontology/>
    PREFIX mu: <http://mu.semte.ch/vocabularies/core/>
    PREFIX dc: <http://purl.org/dc/terms/>
    PREFIX nie: <http://www.semanticdesktop.org/ontologies/2007/01/19/nie#>

    INSERT DATA {
      ${sparqlEscapeUri(virtualFileUri)} a nfo:FileDataObject ;
          nfo:fileName ${sparqlEscapeString(virtualFileName)} ;
          mu:uuid ${sparqlEscapeString(virtualFileUuid)} ;
          dc:format ${sparqlEscapeString(fileFormat)} ;
          nfo:fileSize ${sparqlEscapeInt(fileSize)} ;
          dbpedia:fileExtension ${sparqlEscapeString(fileExtension)} ;
          dc:created ${sparqlEscapeDateTime(now)} ;
          dc:modified ${sparqlEscapeDateTime(now)} ;
          prov:wasDerivedFrom ${sparqlEscapeUri(visioFileUri)} .

      ${sparqlEscapeUri(physicalFileUri)} a nfo:FileDataObject ;
          nie:dataSource ${sparqlEscapeUri(virtualFileUri)} ;
          nfo:fileName ${sparqlEscapeString(physicalFileName)} ;
          mu:uuid ${sparqlEscapeString(physicalFileUuid)} ;
          dc:format ${sparqlEscapeString(fileFormat)} ;
          nfo:fileSize ${sparqlEscapeInt(fileSize)} ;
          dbpedia:fileExtension ${sparqlEscapeString(fileExtension)} ;
          dc:created ${sparqlEscapeDateTime(now)} ;
          dc:modified ${sparqlEscapeDateTime(now)} .
    }`;
}

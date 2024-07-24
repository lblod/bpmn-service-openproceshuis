# BPMN service Open Proces Huis

One of the Open Proces Huis' main functionalities lies in the processing of BPMN files. On the one hand, the process steps that make up a BPMN file process should be converted to triples and subsequently inserted into a given triplestore, and on the other, BPMN files should be available for download in different formats, which requires a conversion step. Both functionalities are handled by the OPH BPMN service, whose implementation can be found in this repo.

The OPH BPMN service is part of the [Open Proces Huis microservices stack](https://github.com/lblod/app-openproceshuis).

## Endpoints

The OPH BPMN service is effectively a REST API. It is implemented using the [Express](https://expressjs.com/) framework and exposes two endpoints.

> Note: The paths for the endpoints don't seem to make much sense considering the BPMN service on its own. However, the service is specifically designed to be part of the [OPH microservices stack](https://github.com/lblod/app-openproceshuis), which incorporates these endpoints into a longer list of available endpoints.

### POST `/`

The file targeted by the provided file ID is passed to an RML mapper, which expects a BPMN file and iterates over its BPMN elements. The rules specified in [bbo-mapping.js] outline which elements should be converted to triples and eventually inserted into the triplestore.

#### Headers

- `mu-session-id`: each authenticated user has its own session. Based on the user's session ID, the endpoint will find the group (_Bestuur_) and link it to the BPMN file as follows: `<file uri> schema:publisher <group uri>`. Make sure the stack containing the OPH BPMN service also contains the [mu-identifier](https://github.com/mu-semtech/mu-identifier) service, as it will automatically add this header to each authenticated request.

#### Query parameters

- `id`: the ID of the file whose process steps should be extracted and inserted into the triplestore.

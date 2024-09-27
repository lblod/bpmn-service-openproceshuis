import { readFile } from "fs/promises";

export async function generateMapping(virtualFileUri) {
  const dataModelRml = await readFile("bpmn-rml.ttl", "utf-8");
  return functionalRmlPrefixes + dataModelRml + functionalRml(virtualFileUri);
}

const functionalRmlPrefixes = `
@prefix dct: <http://purl.org/dc/terms/>.
@prefix rr: <http://www.w3.org/ns/r2rml#>.
@prefix teamingAI: <https://www.teamingai-project.eu/>.
@prefix muCore: <http://mu.semte.ch/vocabularies/core/>.
@prefix prov: <http://www.w3.org/ns/prov#>.
@prefix ns1: <http://lblod.data.gift/concepts/>.
`;

const functionalRml = (virtualFileUri) => `
teamingAI:AssociationMapping
    rr:predicateObjectMap [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:00cbc3c9-b2a8-4474-bbe9-c3a977f3feaf;
            rr:termType rr:IRI
        ]
    ].

teamingAI:BoundaryEventMapping
    rr:predicateObjectMap [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:9a72a481-d111-405b-903b-18242e121502;
            rr:termType rr:IRI
        ]
    ].

teamingAI:BusinessRuleTaskMapping
    rr:predicateObjectMap [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:546044f1-455c-4949-8d45-df024bc76b49;
            rr:termType rr:IRI
        ]
    ].

teamingAI:CollaborationMapping
    rr:predicateObjectMap [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:ff8338d3-c491-413c-aae3-2a57dc3f75f5;
            rr:termType rr:IRI
        ]
    ].

teamingAI:DataInputAssociationMapping
    rr:predicateObjectMap [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:7a53a259-0e26-4688-8137-be50458264ec;
            rr:termType rr:IRI
        ]
    ].

teamingAI:DataObjectMapping
    rr:predicateObjectMap [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:3e0a146b-b483-40e7-a901-3144d5be2ee2;
            rr:termType rr:IRI
        ]
    ].

teamingAI:DataObjectReferenceMapping
    rr:predicateObjectMap [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:ad8ee890-12a8-4a8a-bb23-10b3b2403df0;
            rr:termType rr:IRI
        ]
    ].

teamingAI:DataOutputAssociationMapping
    rr:predicateObjectMap [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:63da1337-6cd7-441c-a5c1-940f2fbd0f34;
            rr:termType rr:IRI
        ]
    ].

teamingAI:DataStoreReferenceMapping
    rr:predicateObjectMap [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:b5de5008-7aeb-41c5-a2f2-26f1d4ca6d49;
            rr:termType rr:IRI
        ]
    ].

teamingAI:EndEventMapping
    rr:predicateObjectMap [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:55e98451-1f29-420c-87e3-3e01a7d5abc5;
            rr:termType rr:IRI
        ]
    ].

teamingAI:ErrorEventDefinitionMapping
    rr:predicateObjectMap [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:107c7feb-64ff-409f-a5ce-1e85324274fc;
            rr:termType rr:IRI
        ]
    ].

teamingAI:ErrorMapping
    rr:predicateObjectMap [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:cc636682-385a-4e63-8043-740d34e06254;
            rr:termType rr:IRI
        ]
    ].

teamingAI:ExclusiveGatewayMapping
    rr:predicateObjectMap [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:0bf0aea4-798d-4d7a-bd44-34f09f763eb3;
            rr:termType rr:IRI
        ]
    ].

teamingAI:InclusiveGatewayMapping
    rr:predicateObjectMap [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:76d6c227-ca62-4b47-8829-ebf1b60c3671;
            rr:termType rr:IRI
        ]
    ].

teamingAI:IntermediateThrowEventMapping
    rr:predicateObjectMap [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:6f1559a6-e0af-41bf-b14e-ff2597a3d8dc;
            rr:termType rr:IRI
        ]
    ].

teamingAI:LaneMapping
    rr:predicateObjectMap [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:003fb962-c26b-468d-9baa-7a03d84c9322;
            rr:termType rr:IRI
        ]
    ].

teamingAI:LaneSetMapping
    rr:predicateObjectMap [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:73c4071b-a618-49df-8119-573a1e21e652;
            rr:termType rr:IRI
        ]
    ].

teamingAI:ManualTaskMapping
    rr:predicateObjectMap [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:969d520f-2946-4323-940a-b4e21891d428;
            rr:termType rr:IRI
        ]
    ].

teamingAI:MessageEventDefinitionMapping
    rr:predicateObjectMap [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:d45c81c4-ab87-4dc1-b324-1c3289e2c36a;
            rr:termType rr:IRI
        ]
    ].

teamingAI:MessageFlowMapping
    rr:predicateObjectMap [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:28b6c81b-e493-4dc4-b700-d062cc08e86a;
            rr:termType rr:IRI
        ]
    ].

teamingAI:ParallelGatewayMapping
    rr:predicateObjectMap [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:5099bb41-9d87-475c-80d0-5767ba32b0bb;
            rr:termType rr:IRI
        ]
    ].

teamingAI:ParticipantMapping
    rr:predicateObjectMap [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:9a54f457-bfc3-46ba-93db-560eaaa183d3;
            rr:termType rr:IRI
        ]
    ].

teamingAI:ProcessMapping
    rr:predicateObjectMap [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:0996925f-9d2c-497c-86df-fad62d974790;
            rr:termType rr:IRI
        ]
    ],
    [
        rr:predicate prov:wasDerivedFrom;
        rr:objectMap [ rr:template "${virtualFileUri}" ]
    ].

teamingAI:PropertyMapping
    rr:predicateObjectMap [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:e7bc4c02-f476-430a-b3a0-2fa62e9245eb;
            rr:termType rr:IRI
        ]
    ].

teamingAI:ReceiveTaskMapping
    rr:predicateObjectMap [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:3c8764ac-576d-4b4f-ae58-c42d30265240;
            rr:termType rr:IRI
        ]
    ].

teamingAI:ScriptTaskMapping
    rr:predicateObjectMap [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:2691ce7b-82ae-4a66-ba8a-d84d5103a69a;
            rr:termType rr:IRI
        ]
    ].

teamingAI:SendTaskMapping
    rr:predicateObjectMap [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:6c3de872-2ddf-465a-941b-3b7080d09866;
            rr:termType rr:IRI
        ]
    ].

teamingAI:SequenceFlowMapping
    rr:predicateObjectMap [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:e146c432-9a2f-41aa-b9a1-5efb8a8174e4;
            rr:termType rr:IRI
        ]
    ].

teamingAI:ServiceTaskMapping
    rr:predicateObjectMap [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:ca45e504-9421-4916-9f73-6500b9f45095;
            rr:termType rr:IRI
        ]
    ].

teamingAI:StartEventMapping
    rr:predicateObjectMap [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:298c0ed5-2624-4865-9c87-439d89640746;
            rr:termType rr:IRI
        ]
    ].

teamingAI:SubProcessMapping
    rr:predicateObjectMap [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:270b79df-7a22-4064-a8a0-f5713873700d;
            rr:termType rr:IRI
        ]
    ].

teamingAI:TaskMapping
    rr:predicateObjectMap [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:3a7c56c8-30b5-4b31-a1c9-f6d7ae0929b7;
            rr:termType rr:IRI
        ]
    ].

teamingAI:TextAnnotationMapping
    rr:predicateObjectMap [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:05dfacae-2772-458f-a54e-b996b0499501;
            rr:termType rr:IRI
        ]
    ].

teamingAI:UserTaskMapping
    rr:predicateObjectMap [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:8b23ea64-8748-46e6-90ce-dd85cfdafe8d;
            rr:termType rr:IRI
        ]
    ].
`;

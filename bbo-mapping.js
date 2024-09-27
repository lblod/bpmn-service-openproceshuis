const rmlExtension = (virtualFileUri) => `
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

const rmlExtensionPrefixes = `
@prefix dct: <http://purl.org/dc/terms/>.
@prefix rr: <http://www.w3.org/ns/r2rml#>.
@prefix teamingAI: <https://www.teamingai-project.eu/>.
@prefix muCore: <http://mu.semte.ch/vocabularies/core/>.
@prefix prov: <http://www.w3.org/ns/prov#>.
@prefix ns1: <http://lblod.data.gift/concepts/>.
`;

export const mapping = (virtualFileUri) => `
@prefix bbo: <https://www.irit.fr/recherches/MELODI/ontologies/BBO#>.
@prefix bboExtension: <https://www.teamingai-project.eg/BBOExtension#>.
@prefix dct: <http://purl.org/dc/terms/>.
@prefix ql: <http://semweb.mmlab.be/ns/ql#>.
@prefix rami: <https://w3id.org/i40/rami#>.
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.
@prefix rml: <http://semweb.mmlab.be/ns/rml#>.
@prefix rr: <http://www.w3.org/ns/r2rml#>.
@prefix teamingAI: <https://www.teamingai-project.eu/>.
@prefix fnml:   <http://semweb.mmlab.be/ns/fnml#>.
@prefix fno: 	<https://w3id.org/function/ontology#>.
@prefix idlab-fn: <http://example.com/idlab/function/>.
@prefix muCore: <http://mu.semte.ch/vocabularies/core/>.
@prefix prov: <http://www.w3.org/ns/prov#>.
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.
@prefix ns1: <http://lblod.data.gift/concepts/>.

<#UuidFunctionMapping>
    fnml:functionValue [
        rr:subjectMap <#UuidFunctionMapping>;
        rr:predicateObjectMap [
            rr:predicate fno:executes ;
            rr:objectMap [ rr:constant idlab-fn:random ]
        ]
    ].

teamingAI:AssociationMapping
    a rr:TriplesMap;

    rml:logicalSource [
        rml:source "input.bpmn";
        rml:referenceFormulation ql:XPath;
        rml:iterator "/*[name()='bpmn:definitions']/*[name()='bpmn:process']/*[name()='bpmn:association']"
    ];

    rr:subjectMap <#UuidFunctionMapping>;

    rr:predicateObjectMap [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bboExtension:Association ]
    ],
    [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:00cbc3c9-b2a8-4474-bbe9-c3a977f3feaf;
            rr:termType rr:IRI
        ]
    ],
    [
        rr:predicate teamingAI:belongsToProcess;
        rr:objectMap [ rr:parentTriplesMap teamingAI:ProcessMapping ]
    ],
    [
        rr:predicate bbo:has_sourceRef;
        rr:objectMap [ rr:template "{@sourceRef}" ]
    ],
    [
        rr:predicate bbo:has_targetRef;
        rr:objectMap [ rr:template "{@targetRef}" ]
    ].

teamingAI:BoundaryEventMapping
    a rr:TriplesMap;

    rml:logicalSource [
        rml:source "input.bpmn";
        rml:referenceFormulation ql:XPath;
        rml:iterator "/*[name()='bpmn:definitions']/*[name()='bpmn:process']/*[name()='bpmn:boundaryEvent']"
    ];

    rr:subjectMap <#UuidFunctionMapping>;

    rr:predicateObjectMap [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:BoundaryEvent ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:CatchEvent ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:Event ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:FlowNode ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:FlowElement ]
    ],
    [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:9a72a481-d111-405b-903b-18242e121502;
            rr:termType rr:IRI
        ]
    ],
    [
        rr:predicate bbo:attachedToRef;
        rr:objectMap [ rr:template "{@attachedToRef}" ]
    ],
    [
        rr:predicate bbo:name;
        rr:objectMap [ rml:reference "@name" ]
    ],
    [
        rr:predicate bbo:has_outgoing;
        rr:objectMap [ rr:template "{./*[name()='bpmn:outgoing']}" ]
    ],
    [
        rr:predicate bbo:has_eventDefinition;
        rr:objectMap [ rr:template "{./*[name()='bpmn:messageEventDefinition']/@id}" ]
    ],
    [
        rr:predicate bbo:has_eventDefinition;
        rr:objectMap [ rr:template "{./*[name()='bpmn:errorEventDefinition']/@id}" ]
    ],
    [
        rr:predicate teamingAI:belongsToProcess;
        rr:objectMap [ rr:parentTriplesMap teamingAI:ProcessMapping ]
    ].

teamingAI:BusinessRuleTaskMapping
    a rr:TriplesMap;

    rml:logicalSource [
        rml:source "input.bpmn";
        rml:referenceFormulation ql:XPath;
        rml:iterator "/*[name()='bpmn:definitions']/*[name()='bpmn:process']/*[name()='bpmn:businessRuleTask']"
    ];

    rr:subjectMap <#UuidFunctionMapping>;

    rr:predicateObjectMap [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:BusinessRuleTask ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:Task ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:Activity ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:FlowNode ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:FlowElement ]
    ],
    [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:546044f1-455c-4949-8d45-df024bc76b49;
            rr:termType rr:IRI
        ]
    ],
    [
        rr:predicate bbo:name;
        rr:objectMap [ rml:reference "@name" ]
    ],
    [
        rr:predicate teamingAI:belongsToProcess;
        rr:objectMap [ rr:parentTriplesMap teamingAI:ProcessMapping ]
    ].

teamingAI:CollaborationMapping
    a rr:TriplesMap;

    rml:logicalSource [
        rml:source "input.bpmn";
        rml:referenceFormulation ql:XPath;
        rml:iterator "/*[name()='bpmn:definitions']//*[name()='bpmn:collaboration']"
    ];

    rr:subjectMap <#UuidFunctionMapping>;

    rr:predicateObjectMap [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bboExtension:Collaboration ]
    ],
    [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:ff8338d3-c491-413c-aae3-2a57dc3f75f5;
            rr:termType rr:IRI
        ]
    ],
    [
        rr:predicate teamingAI:belongsToProcess;
        rr:objectMap [ rr:parentTriplesMap teamingAI:ProcessMapping ]
    ].

teamingAI:DataInputAssociationMapping
    a rr:TriplesMap;

    rml:logicalSource [
        rml:source "input.bpmn";
        rml:referenceFormulation ql:XPath;
        rml:iterator "/*[name()='bpmn:definitions']/*[name()='bpmn:process']//*[name()='bpmn:dataInputAssociation']"
    ];

    rr:subjectMap <#UuidFunctionMapping>;

    rr:predicateObjectMap [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bboExtension:DataInputAssociation ]
    ],
    [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:7a53a259-0e26-4688-8137-be50458264ec;
            rr:termType rr:IRI
        ]
    ],
    [
        rr:predicate teamingAI:belongsToProcess;
        rr:objectMap [ rr:parentTriplesMap teamingAI:ProcessMapping ]
    ],
    [
        rr:predicate bbo:has_sourceRef;
        rr:objectMap [ rr:template "{./*[name()='bpmn:sourceRef']}" ]
    ],
    [
        rr:predicate bbo:has_targetRef;
        rr:objectMap [ rr:template "{./*[name()='bpmn:targetRef']}" ]
    ],
    [
        rr:predicate bboExtension:is_dataInputFor;
        rr:objectMap [ rr:template "{../@id}" ]
    ].

teamingAI:DataObjectMapping
    a rr:TriplesMap;

    rml:logicalSource [
        rml:source "input.bpmn";
        rml:referenceFormulation ql:XPath;
        rml:iterator "/*[name()='bpmn:definitions']/*[name()='bpmn:process']//*[name()='bpmn:dataObject']"
    ];

    rr:subjectMap <#UuidFunctionMapping>;

    rr:predicateObjectMap [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bboExtension:DataObject ]
    ],
    [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:3e0a146b-b483-40e7-a901-3144d5be2ee2;
            rr:termType rr:IRI
        ]
    ],
    [
        rr:predicate teamingAI:belongsToProcess;
        rr:objectMap [ rr:parentTriplesMap teamingAI:ProcessMapping ]
    ].

teamingAI:DataObjectReferenceMapping
    a rr:TriplesMap;

    rml:logicalSource [
        rml:source "input.bpmn";
        rml:referenceFormulation ql:XPath;
        rml:iterator "/*[name()='bpmn:definitions']/*[name()='bpmn:process']//*[name()='bpmn:dataObjectReference']"
    ];

    rr:subjectMap <#UuidFunctionMapping>;

    rr:predicateObjectMap [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bboExtension:DataObjectReference ]
    ],
    [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:ad8ee890-12a8-4a8a-bb23-10b3b2403df0;
            rr:termType rr:IRI
        ]
    ],
    [
        rr:predicate bbo:name;
        rr:objectMap [ rml:reference "@name" ]
    ],
    [
        rr:predicate teamingAI:belongsToProcess;
        rr:objectMap [ rr:parentTriplesMap teamingAI:ProcessMapping ]
    ],
    [
        rr:predicate bboExtension:dataObjectRef;
        rr:objectMap [ rr:template "{@dataObjectRef}" ]
    ].

teamingAI:DataOutputAssociationMapping
    a rr:TriplesMap;

    rml:logicalSource [
        rml:source "input.bpmn";
        rml:referenceFormulation ql:XPath;
        rml:iterator "/*[name()='bpmn:definitions']/*[name()='bpmn:process']//*[name()='bpmn:dataOutputAssociation']"
    ];

    rr:subjectMap <#UuidFunctionMapping>;

    rr:predicateObjectMap [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bboExtension:DataOutputAssociation ]
    ],
    [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:63da1337-6cd7-441c-a5c1-940f2fbd0f34;
            rr:termType rr:IRI
        ]
    ],
    [
        rr:predicate teamingAI:belongsToProcess;
        rr:objectMap [ rr:parentTriplesMap teamingAI:ProcessMapping ]
    ],
    [
        rr:predicate bbo:has_targetRef;
        rr:objectMap [ rr:template "{./*[name()='bpmn:targetRef']}" ]
    ],
    [
        rr:predicate bboExtension:is_dataOutputFrom;
        rr:objectMap [ rr:template "{../@id}" ]
    ].

teamingAI:DataStoreReferenceMapping
    a rr:TriplesMap;

    rml:logicalSource [
        rml:source "input.bpmn";
        rml:referenceFormulation ql:XPath;
        rml:iterator "/*[name()='bpmn:definitions']/*[name()='bpmn:process']//*[name()='bpmn:dataStoreReference']"
    ];

    rr:subjectMap <#UuidFunctionMapping>;

    rr:predicateObjectMap [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bboExtension:DataStoreReference ]
    ],
    [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:b5de5008-7aeb-41c5-a2f2-26f1d4ca6d49;
            rr:termType rr:IRI
        ]
    ],
    [
        rr:predicate teamingAI:belongsToProcess;
        rr:objectMap [ rr:parentTriplesMap teamingAI:ProcessMapping ]
    ],
    [
        rr:predicate bbo:name;
        rr:objectMap [ rml:reference "@name" ]
    ].

teamingAI:EndEventMapping
    a rr:TriplesMap;

    rml:logicalSource [
        rml:source "input.bpmn";
        rml:referenceFormulation ql:XPath;
        rml:iterator "/*[name()='bpmn:definitions']/*[name()='bpmn:process']/*[name()='bpmn:endEvent']"
    ];

    rr:subjectMap <#UuidFunctionMapping>;

    rr:predicateObjectMap [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:EndEvent ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:ThrowEvent ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:Event ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:FlowNode ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:FlowElement ]
    ],
    [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:55e98451-1f29-420c-87e3-3e01a7d5abc5;
            rr:termType rr:IRI
        ]
    ],
    [
        rr:predicate teamingAI:belongsToProcess;
        rr:objectMap [ rr:parentTriplesMap teamingAI:ProcessMapping ]
    ],
    [
        rr:predicate bbo:name;
        rr:objectMap [ rml:reference "@name" ]
    ],
    [
        rr:predicate bbo:has_incoming;
        rr:objectMap [ rr:template "{./*[name()='bpmn:incoming']}" ]
    ].

teamingAI:ErrorEventDefinitionMapping
    a rr:TriplesMap;

    rml:logicalSource [
        rml:source "input.bpmn";
        rml:referenceFormulation ql:XPath;
        rml:iterator "//*[name()='bpmn:errorEventDefinition']"
    ];

    rr:subjectMap <#UuidFunctionMapping>;

    rr:predicateObjectMap [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:ErrorEventDefinition ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:EventDefinition ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:RootElement ]
    ],
    [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:107c7feb-64ff-409f-a5ce-1e85324274fc;
            rr:termType rr:IRI
        ]
    ],
    [
        rr:predicate teamingAI:belongsToProcess;
        rr:objectMap [ rr:parentTriplesMap teamingAI:ProcessMapping ]
    ].

teamingAI:ErrorMapping
    a rr:TriplesMap;

    rml:logicalSource [
        rml:source "input.bpmn";
        rml:referenceFormulation ql:XPath;
        rml:iterator "/*[name()='bpmn:definitions']/*[name()='bpmn:error']"
    ];

    rr:subjectMap <#UuidFunctionMapping>;

    rr:predicateObjectMap [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:Error ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:RootElement ]
    ],
    [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:cc636682-385a-4e63-8043-740d34e06254;
            rr:termType rr:IRI
        ]
    ],
    [
        rr:predicate bbo:name;
        rr:objectMap [ rml:reference "@name" ]
    ],
    [
        rr:predicate teamingAI:belongsToProcess;
        rr:objectMap [ rr:parentTriplesMap teamingAI:ProcessMapping ]
    ].

teamingAI:ExclusiveGatewayMapping
    a rr:TriplesMap;

    rml:logicalSource [
        rml:source "input.bpmn";
        rml:referenceFormulation ql:XPath;
        rml:iterator "/*[name()='bpmn:definitions']/*[name()='bpmn:process']//*[name()='bpmn:exclusiveGateway']"
    ];

    rr:subjectMap <#UuidFunctionMapping>;

    rr:predicateObjectMap [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:ExclusiveGateway ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:Gateway ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:FlowNode ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:FlowElement ]
    ],
    [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:0bf0aea4-798d-4d7a-bd44-34f09f763eb3;
            rr:termType rr:IRI
        ]
    ],
    [
        rr:predicate teamingAI:belongsToProcess;
        rr:objectMap [ rr:parentTriplesMap teamingAI:ProcessMapping ]
    ],
    [
        rr:predicate bbo:has_defaultElement;
        rr:objectMap [ rr:template "{@default}" ]
    ],
    [
        rr:predicate bbo:name;
        rr:objectMap [ rml:reference "@name" ]
    ],
    [
        rr:predicate bbo:has_outgoing;
        rr:objectMap [ rr:template "{./*[name()='bpmn:outgoing']}" ]
    ],
    [
        rr:predicate bbo:has_incoming;
        rr:objectMap [ rr:template "{./*[name()='bpmn:incoming']}" ]
    ].

teamingAI:InclusiveGatewayMapping
    a rr:TriplesMap;

    rml:logicalSource [
        rml:source "input.bpmn";
        rml:referenceFormulation ql:XPath;
        rml:iterator "/*[name()='bpmn:definitions']/*[name()='bpmn:process']//*[name()='bpmn:inclusiveGateway']"
    ];

    rr:subjectMap <#UuidFunctionMapping>;

    rr:predicateObjectMap [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:InclusiveGateway ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:Gateway ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:FlowNode ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:FlowElement ]
    ],
    [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:76d6c227-ca62-4b47-8829-ebf1b60c3671;
            rr:termType rr:IRI
        ]
    ],
    [
        rr:predicate teamingAI:belongsToProcess;
        rr:objectMap [ rr:parentTriplesMap teamingAI:ProcessMapping ]
    ],
    [
        rr:predicate bbo:has_defaultElement;
        rr:objectMap [ rr:template "{@default}" ]
    ],
    [
        rr:predicate bbo:name;
        rr:objectMap [ rml:reference "@name" ]
    ],
    [
        rr:predicate bbo:has_outgoing;
        rr:objectMap [ rr:template "{./*[name()='bpmn:outgoing']}" ]
    ],
    [
        rr:predicate bbo:has_incoming;
        rr:objectMap [ rr:template "{./*[name()='bpmn:incoming']}" ]
    ].

teamingAI:IntermediateThrowEventMapping
    a rr:TriplesMap;

    rml:logicalSource [
        rml:source "input.bpmn";
        rml:referenceFormulation ql:XPath;
        rml:iterator "/*[name()='bpmn:definitions']/*[name()='bpmn:process']//*[name()='bpmn:intermediateThrowEvent']"
    ];

    rr:subjectMap <#UuidFunctionMapping>;

    rr:predicateObjectMap [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:IntermediateThrowEvent ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:ThrowEvent ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:Event ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:FlowNode ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:FlowElement ]
    ],
    [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:6f1559a6-e0af-41bf-b14e-ff2597a3d8dc;
            rr:termType rr:IRI
        ]
    ],
    [
        rr:predicate teamingAI:belongsToProcess;
        rr:objectMap [ rr:parentTriplesMap teamingAI:ProcessMapping ]
    ],
    [
        rr:predicate bbo:name;
        rr:objectMap [ rml:reference "@name" ]
    ],
    [
        rr:predicate bbo:has_outgoing;
        rr:objectMap [ rr:template "{./*[name()='bpmn:outgoing']}" ]
    ],
    [
        rr:predicate bbo:has_incoming;
        rr:objectMap [ rr:template "{./*[name()='bpmn:incoming']}" ]
    ],
    [
        rr:predicate bbo:has_eventDefinition;
        rr:objectMap [ rr:template "{./*[name()='bpmn:messageEventDefinition']}" ]
    ].

teamingAI:LaneMapping
    a rr:TriplesMap;

    rml:logicalSource [
        rml:source "input.bpmn";
        rml:referenceFormulation ql:XPath;
        rml:iterator "/*[name()='bpmn:definitions']/*[name()='bpmn:process']/*[name()='bpmn:laneSet']/*[name()='bpmn:lane']"
    ];

    rr:subjectMap <#UuidFunctionMapping>;

    rr:predicateObjectMap [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bboExtension:Lane ]
    ],
    [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:003fb962-c26b-468d-9baa-7a03d84c9322;
            rr:termType rr:IRI
        ]
    ],
    [
        rr:predicate teamingAI:belongsToProcess;
        rr:objectMap [ rr:parentTriplesMap teamingAI:ProcessMapping ]
    ],
    [
        rr:predicate bbo:has_activity;
        rr:objectMap [ rr:template "{*[text()]}" ]
    ],
    [
        rr:predicate bbo:name;
        rr:objectMap [ rml:reference "@name" ]
    ].

teamingAI:LaneSetMapping
    a rr:TriplesMap;

    rml:logicalSource [
        rml:source "input.bpmn";
        rml:referenceFormulation ql:XPath;
        rml:iterator "/*[name()='bpmn:definitions']/*[name()='bpmn:process']/*[name()='bpmn:laneSet']"
    ];

    rr:subjectMap <#UuidFunctionMapping>;

    rr:predicateObjectMap [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bboExtension:LaneSet ]
    ],
    [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:73c4071b-a618-49df-8119-573a1e21e652;
            rr:termType rr:IRI
        ]
    ],
    [
        rr:predicate teamingAI:belongsToProcess;
        rr:objectMap [ rr:parentTriplesMap teamingAI:ProcessMapping ]
    ].

teamingAI:ManualTaskMapping
    a rr:TriplesMap;

    rml:logicalSource [
        rml:source "input.bpmn";
        rml:referenceFormulation ql:XPath;
        rml:iterator "/*[name()='bpmn:definitions']/*[name()='bpmn:process']/*[name()='bpmn:manualTask']"
    ];

    rr:subjectMap <#UuidFunctionMapping>;

    rr:predicateObjectMap [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:ManualTask ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:Task ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:Activity ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:FlowNode ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:FlowElement ]
    ],
    [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:969d520f-2946-4323-940a-b4e21891d428;
            rr:termType rr:IRI
        ]
    ],
    [
        rr:predicate bbo:name;
        rr:objectMap [ rml:reference "@name" ]
    ],
    [
        rr:predicate teamingAI:belongsToProcess;
        rr:objectMap [ rr:parentTriplesMap teamingAI:ProcessMapping ]
    ].

teamingAI:MessageEventDefinitionMapping
    a rr:TriplesMap;

    rml:logicalSource [
        rml:source "input.bpmn";
        rml:referenceFormulation ql:XPath;
        rml:iterator "//*[name()='bpmn:messageEventDefinition']"
    ];

    rr:subjectMap <#UuidFunctionMapping>;

    rr:predicateObjectMap [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:MessageEventDefinition ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:EventDefinition ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:RootElement ]
    ],
    [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:d45c81c4-ab87-4dc1-b324-1c3289e2c36a;
            rr:termType rr:IRI
        ]
    ],
    [
        rr:predicate teamingAI:belongsToProcess;
        rr:objectMap [ rr:parentTriplesMap teamingAI:ProcessMapping ]
    ].

teamingAI:MessageFlowMapping
    a rr:TriplesMap;

    rml:logicalSource [
        rml:source "input.bpmn";
        rml:referenceFormulation ql:XPath;
        rml:iterator "/*[name()='bpmn:definitions']/*[name()='bpmn:collaboration']/*[name()='bpmn:messageFlow']"
    ];

    rr:subjectMap <#UuidFunctionMapping>;

    rr:predicateObjectMap [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bboExtension:MessageFlow ]
    ],
    [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:28b6c81b-e493-4dc4-b700-d062cc08e86a;
            rr:termType rr:IRI
        ]
    ],
    [
        rr:predicate teamingAI:belongsToProcess;
        rr:objectMap [ rr:parentTriplesMap teamingAI:ProcessMapping ]
    ],
    [
        rr:predicate bbo:name;
        rr:objectMap [ rml:reference "@name" ]
    ],
    [
        rr:predicate bbo:has_sourceRef;
        rr:objectMap [ rr:template "{@sourceRef}" ]
    ],
    [
        rr:predicate bbo:has_targetRef;
        rr:objectMap [ rr:template "{@targetRef}" ]
    ].

teamingAI:ParallelGatewayMapping
    a rr:TriplesMap;

    rml:logicalSource [
        rml:source "input.bpmn";
        rml:referenceFormulation ql:XPath;
        rml:iterator "/*[name()='bpmn:definitions']/*[name()='bpmn:process']/*[name()='bpmn:parallelGateway']"
    ];

    rr:subjectMap <#UuidFunctionMapping>;

    rr:predicateObjectMap [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:ParallelGateway ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:Gateway ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:FlowNode ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:FlowElement ]
    ],
    [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:5099bb41-9d87-475c-80d0-5767ba32b0bb;
            rr:termType rr:IRI
        ]
    ],
    [
        rr:predicate bbo:has_defaultElement;
        rr:objectMap [ rr:template "{@default}" ]
    ],
    [
        rr:predicate teamingAI:belongsToProcess;
        rr:objectMap [ rr:parentTriplesMap teamingAI:ProcessMapping ]
    ],
    [
        rr:predicate bbo:name;
        rr:objectMap [ rml:reference "@name" ]
    ],
    [
        rr:predicate bbo:has_outgoing;
        rr:objectMap [ rr:template "{./*[name()='bpmn:outgoing']}" ]
    ],
    [
        rr:predicate bbo:has_incoming;
        rr:objectMap [ rr:template "{./*[name()='bpmn:incoming']}" ]
    ].

teamingAI:ParticipantMapping
    a rr:TriplesMap;

    rml:logicalSource [
        rml:source "input.bpmn";
        rml:referenceFormulation ql:XPath;
        rml:iterator "/*[name()='bpmn:definitions']/*[name()='bpmn:collaboration']/*[name()='bpmn:participant']"
    ];

    rr:subjectMap <#UuidFunctionMapping>;

    rr:predicateObjectMap [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bboExtension:Participant ]
    ],
    [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:9a54f457-bfc3-46ba-93db-560eaaa183d3;
            rr:termType rr:IRI
        ]
    ],
    [
        rr:predicate teamingAI:belongsToProcess;
        rr:objectMap [ rr:parentTriplesMap teamingAI:ProcessMapping ]
    ],
    [
        rr:predicate bbo:name;
        rr:objectMap [ rml:reference "@name" ]
    ],
    [
        rr:predicate bboExtension:processRef;
        rr:objectMap [ rr:template "{@processRef}" ]
    ].

teamingAI:ProcessMapping
    a rr:TriplesMap;

    rml:logicalSource [
        rml:source "input.bpmn";
        rml:referenceFormulation ql:XPath;
        rml:iterator "/*[name()='bpmn:definitions']/*[name()='bpmn:process']"
    ];

    rr:subjectMap <#UuidFunctionMapping>;

    rr:predicateObjectMap [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:Process ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:FlowElementsContainer ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:CallableElement ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:RootElement ]
    ],
    [
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
    a rr:TriplesMap;

    rml:logicalSource [
        rml:source "input.bpmn";
        rml:referenceFormulation ql:XPath;
        rml:iterator "/*[name()='bpmn:definitions']/*[name()='bpmn:process']//*[name()='bpmn:property']"
    ];

    rr:subjectMap <#UuidFunctionMapping>;

    rr:predicateObjectMap [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:Property ]
    ],
    [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:e7bc4c02-f476-430a-b3a0-2fa62e9245eb;
            rr:termType rr:IRI
        ]
    ],
    [
        rr:predicate bbo:name;
        rr:objectMap [ rml:reference "@name" ]
    ],
    [
        rr:predicate bbo:has_property_element;
        rr:objectMap [ rr:template "{../@id}" ]
    ],
    [
        rr:predicate teamingAI:belongsToProcess;
        rr:objectMap [ rr:parentTriplesMap teamingAI:ProcessMapping ]
    ].

teamingAI:ReceiveTaskMapping
    a rr:TriplesMap;

    rml:logicalSource [
        rml:source "input.bpmn";
        rml:referenceFormulation ql:XPath;
        rml:iterator "/*[name()='bpmn:definitions']/*[name()='bpmn:process']/*[name()='bpmn:receiveTask']"
    ];

    rr:subjectMap <#UuidFunctionMapping>;

    rr:predicateObjectMap [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:ReceiveTask ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:Task ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:Activity ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:FlowNode ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:FlowElement ]
    ],
    [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:3c8764ac-576d-4b4f-ae58-c42d30265240;
            rr:termType rr:IRI
        ]
    ],
    [
        rr:predicate bbo:name;
        rr:objectMap [ rml:reference "@name" ]
    ],
    [
        rr:predicate teamingAI:belongsToProcess;
        rr:objectMap [ rr:parentTriplesMap teamingAI:ProcessMapping ]
    ].

teamingAI:ScriptTaskMapping
    a rr:TriplesMap;

    rml:logicalSource [
        rml:source "input.bpmn";
        rml:referenceFormulation ql:XPath;
        rml:iterator "/*[name()='bpmn:definitions']/*[name()='bpmn:process']/*[name()='bpmn:scriptTask']"
    ];

    rr:subjectMap <#UuidFunctionMapping>;

    rr:predicateObjectMap [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:ScriptTask ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:Task ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:Activity ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:FlowNode ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:FlowElement ]
    ],
    [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:2691ce7b-82ae-4a66-ba8a-d84d5103a69a;
            rr:termType rr:IRI
        ]
    ],
    [
        rr:predicate bbo:name;
        rr:objectMap [ rml:reference "@name" ]
    ],
    [
        rr:predicate teamingAI:belongsToProcess;
        rr:objectMap [ rr:parentTriplesMap teamingAI:ProcessMapping ]
    ].

teamingAI:SendTaskMapping
    a rr:TriplesMap;

    rml:logicalSource [
        rml:source "input.bpmn";
        rml:referenceFormulation ql:XPath;
        rml:iterator "/*[name()='bpmn:definitions']/*[name()='bpmn:process']/*[name()='bpmn:sendTask']"
    ];

    rr:subjectMap <#UuidFunctionMapping>;

    rr:predicateObjectMap [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:SendTask ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:Task ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:Activity ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:FlowNode ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:FlowElement ]
    ],
    [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:6c3de872-2ddf-465a-941b-3b7080d09866;
            rr:termType rr:IRI
        ]
    ],
    [
        rr:predicate bbo:name;
        rr:objectMap [ rml:reference "@name" ]
    ],
    [
        rr:predicate teamingAI:belongsToProcess;
        rr:objectMap [ rr:parentTriplesMap teamingAI:ProcessMapping ]
    ].

teamingAI:SequenceFlowMapping
    a rr:TriplesMap;

    rml:logicalSource [
        rml:source "input.bpmn";
        rml:referenceFormulation ql:XPath;
        rml:iterator "/*[name()='bpmn:definitions']/*[name()='bpmn:process']/*[name()='bpmn:sequenceFlow']"
    ];

    rr:subjectMap <#UuidFunctionMapping>;

    rr:predicateObjectMap [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:SequenceFlow ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:FlowElement ]
    ],
    [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:e146c432-9a2f-41aa-b9a1-5efb8a8174e4;
            rr:termType rr:IRI
        ]
    ],
    [
        rr:predicate bbo:has_sourceRef;
        rr:objectMap [ rr:template "{@sourceRef}" ]
    ],
    [
        rr:predicate bbo:has_targetRef;
        rr:objectMap [ rr:template "{@targetRef}" ]
    ],
    [
        rr:predicate teamingAI:belongsToProcess;
        rr:objectMap [ rr:parentTriplesMap teamingAI:ProcessMapping ]
    ],
    [
        rr:predicate bbo:name;
        rr:objectMap [ rml:reference "@name" ]
    ].

teamingAI:ServiceTaskMapping
    a rr:TriplesMap;

    rml:logicalSource [
        rml:source "input.bpmn";
        rml:referenceFormulation ql:XPath;
        rml:iterator "/*[name()='bpmn:definitions']/*[name()='bpmn:process']/*[name()='bpmn:serviceTask']"
    ];

    rr:subjectMap <#UuidFunctionMapping>;

    rr:predicateObjectMap [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:ServiceTask ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:Task ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:Activity ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:FlowNode ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:FlowElement ]
    ],
    [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:ca45e504-9421-4916-9f73-6500b9f45095;
            rr:termType rr:IRI
        ]
    ],
    [
        rr:predicate bbo:name;
        rr:objectMap [ rml:reference "@name" ]
    ],
    [
        rr:predicate teamingAI:belongsToProcess;
        rr:objectMap [ rr:parentTriplesMap teamingAI:ProcessMapping ]
    ].

teamingAI:StartEventMapping
    a rr:TriplesMap;

    rml:logicalSource [
        rml:source "input.bpmn";
        rml:referenceFormulation ql:XPath;
        rml:iterator "/*[name()='bpmn:definitions']/*[name()='bpmn:process']/*[name()='bpmn:startEvent']"
    ];

    rr:subjectMap <#UuidFunctionMapping>;

    rr:predicateObjectMap [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:StartEvent ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:CatchEvent ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:Event ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:FlowNode ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:FlowElement ]
    ],
    [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:298c0ed5-2624-4865-9c87-439d89640746;
            rr:termType rr:IRI
        ]
    ],
    [
        rr:predicate bbo:has_outgoing;
        rr:objectMap [ rr:template "{./*[name()='bpmn:outgoing']}" ]
    ],
    [
        rr:predicate teamingAI:belongsToProcess;
        rr:objectMap [ rr:parentTriplesMap teamingAI:ProcessMapping ]
    ],
    [
        rr:predicate bbo:name;
        rr:objectMap [ rml:reference "@name" ]
    ].

teamingAI:SubProcessMapping
    a rr:TriplesMap;

    rml:logicalSource [
        rml:source "input.bpmn";
        rml:referenceFormulation ql:XPath;
        rml:iterator "/*[name()='bpmn:definitions']/*[name()='bpmn:process']/*[name()='bpmn:subProcess']"
    ];

    rr:subjectMap <#UuidFunctionMapping>;

    rr:predicateObjectMap [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:SubProcess ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:Activity ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:FlowNode ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:FlowElement ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:FlowElementsContainer ]
    ],
    [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:270b79df-7a22-4064-a8a0-f5713873700d;
            rr:termType rr:IRI
        ]
    ],
    [
        rr:predicate teamingAI:belongsToRAMILayer;
        rr:objectMap [ rr:constant rami:Business ]
    ],
    [
        rr:predicate teamingAI:belongsToView;
        rr:objectMap [ rr:constant teamingAI:BusinessProcessManagementView ]
    ],
    [
        rr:predicate teamingAI:belongsToProcess;
        rr:objectMap [ rr:parentTriplesMap teamingAI:ProcessMapping ]
    ].

teamingAI:TaskMapping
    a rr:TriplesMap;

    rml:logicalSource [
        rml:source "input.bpmn";
        rml:referenceFormulation ql:XPath;
        rml:iterator "/*[name()='bpmn:definitions']/*[name()='bpmn:process']/*[name()='bpmn:task']"
    ];

    rr:subjectMap <#UuidFunctionMapping>;

    rr:predicateObjectMap [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:Task ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:Activity ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:FlowNode ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:FlowElement ]
    ],
    [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:3a7c56c8-30b5-4b31-a1c9-f6d7ae0929b7;
            rr:termType rr:IRI
        ]
    ],
    [
        rr:predicate bbo:name;
        rr:objectMap [ rml:reference "@name" ]
    ],
    [
        rr:predicate teamingAI:belongsToProcess;
        rr:objectMap [ rr:parentTriplesMap teamingAI:ProcessMapping ]
    ].

teamingAI:TextAnnotationMapping
    a rr:TriplesMap;

    rml:logicalSource [
        rml:source "input.bpmn";
        rml:referenceFormulation ql:XPath;
        rml:iterator "/*[name()='bpmn:definitions']/*[name()='bpmn:process']/*[name()='bpmn:textAnnotation']"
    ];

    rr:subjectMap <#UuidFunctionMapping>;

    rr:predicateObjectMap [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bboExtension:TextAnnotation ]
    ],
    [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:05dfacae-2772-458f-a54e-b996b0499501;
            rr:termType rr:IRI
        ]
    ],
    [
        rr:predicate teamingAI:belongsToProcess;
        rr:objectMap [ rr:parentTriplesMap teamingAI:ProcessMapping ]
    ],
    [
        rr:predicate rdfs:comment;
        rr:objectMap [ rr:template "{*[text()]}" ]
    ].

teamingAI:UserTaskMapping
    a rr:TriplesMap;

    rml:logicalSource [
        rml:source "input.bpmn";
        rml:referenceFormulation ql:XPath;
        rml:iterator "/*[name()='bpmn:definitions']/*[name()='bpmn:process']/*[name()='bpmn:userTask']"
    ];

    rr:subjectMap <#UuidFunctionMapping>;

    rr:predicateObjectMap [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:UserTask ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:Task ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:Activity ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:FlowNode ]
    ],
    [
        rr:predicate rdf:type;
        rr:objectMap [ rr:constant bbo:FlowElement ]
    ],
    [
        rr:predicate muCore:uuid;
        rr:objectMap <#UuidFunctionMapping>
    ],
    [
        rr:predicate dct:type;
        rr:objectMap [
            rr:constant ns1:8b23ea64-8748-46e6-90ce-dd85cfdafe8d;
            rr:termType rr:IRI
        ]
    ],
    [
        rr:predicate bbo:name;
        rr:objectMap [ rml:reference "@name" ]
    ],
    [
        rr:predicate teamingAI:belongsToProcess;
        rr:objectMap [ rr:parentTriplesMap teamingAI:ProcessMapping ]
    ].

`;

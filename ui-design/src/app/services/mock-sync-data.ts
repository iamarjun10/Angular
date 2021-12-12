import { caseEnum, entityEnum, Syncdata } from './../models/syncdata';

export const SYNCDATA: Syncdata[] = [
    {
        'case': caseEnum.onlyInSource,
        'id': 'ABN_customer',
        'entity': entityEnum.license,
        'externalId': "Selly_AG1",
        'sourceValue': "AgentSelly",
        'destinationValue': "AgentSelly_AG"
    },
    {
        'case': caseEnum.inBoths,
        'id': 'ABN_customer',
        'entity': entityEnum.role,
        'externalId': "AgentSelly_AG1",
        'sourceValue': "AgentSelly",
        'destinationValue': "AgentSelly_AG"
    },
    {
        'case': caseEnum.onlyInSource,
        'id': 'ABN_customer',
        'entity': entityEnum.feature,
        'externalId': "Agent_AG1",
        'sourceValue': "AbcSelly",
        'destinationValue': "AgentSelly_AG"
    },
    {
        'case': caseEnum.onlyInDestination,
        'id': 'ABN_customer',
        'entity': entityEnum.role_feature,
        'externalId': "AgentSelly_AG1",
        'sourceValue': "Selly",
        'destinationValue': "AgentSelly_AG"
    },
    {
        'case': caseEnum.inBoths,
        'id': 'ABN_customer',
        'entity': entityEnum.license,
        'externalId': "AgentSelly",
        'sourceValue': "AgentSelly",
        'destinationValue': "AgentSelly"
    }
];
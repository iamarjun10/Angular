
export enum caseEnum {
    onlyInSource,
    onlyInDestination,
    inBoths
}

export enum entityEnum {
    role, 
    license, 
    feature, 
    license_feature, 
    role_feature, 
    group, 
    group_role
}

export class Syncdata {
	'case': caseEnum;
	'id': string;
	'entity': entityEnum;
	'externalId': string;
	'sourceValue': string;
	'destinationValue': string;
}
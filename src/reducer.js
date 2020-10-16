import { parseData, pageInfo, formatServerError, formatGraphQLError } from '@openimis/fe-core';

export const reducer = (
    state = {
        fetchingPolicies: false,
        fetchedPolicies: false,
        errorPolicies: null,
        policies: null,
        policiesPageInfo: { totalCount: 0 },
        policy: null,
        fetchingInsureeEligibility: false,
        fetchedInsureeEligibility: false,
        errorInsureeEligibility: null,
        insureeEligibility: null,
        fetchingItemEligibility: false,
        fetchedInsureeItemEligibility: false,
        errorInsureeItemEligibility: null,
        insureeItemEligibility: null,
        fetchingInsureeItemEligibility: false,
        fetchedInsureeServiceEligibility: false,
        errorInsureeServiceEligibility: null,
        insureeInsureeServiceEligibility: null,
        fetchedPolicyOfficers: false,
        errorPolicyOfficers: null,
        policyOfficers: null,
    },
    action) => {
    switch (action.type) {
        case 'POLICY_POLICY':
            return {
                ...state,
                policy: action.payload,
            };
        case 'INSUREE_FAMILY_OVERVIEW_REQ':
            return {
                ...state,
                fetchingPolicies: false,
                fetchedPolicies: false,
                policies: null,
                policy: null,
                errorPolicies: null,
            }
        case 'POLICY_INSUREE_POLICIES_REQ':
            return {
                ...state,
                fetchingPolicies: true,
                fetchedPolicies: false,
                policies: null,
                policy: null,
                errorPolicies: null,
            };
        case 'POLICY_INSUREE_POLICIES_RESP':
            return {
                ...state,
                fetchingPolicies: false,
                fetchedPolicies: true,
                policies: parseData(action.payload.data.policiesByInsuree),
                policiesPageInfo: pageInfo(action.payload.data.policiesByInsuree),
                errorPolicies: formatGraphQLError(action.payload)
            };
        case 'POLICY_INSUREE_POLICIES_ERR':
            return {
                ...state,
                fetchingPolicies: false,
                errorPolicies: formatServerError(action.payload),
            };
        case 'POLICY_FAMILY_POLICIES_REQ':
            return {
                ...state,
                fetchingPolicies: true,
                fetchedPolicies: false,
                policies: null,
                policy: null,
                errorPolicies: null,
            };
        case 'POLICY_FAMILY_POLICIES_RESP':
            return {
                ...state,
                fetchingPolicies: false,
                fetchedPolicies: true,
                policies: parseData(action.payload.data.policiesByFamily),
                policiesPageInfo: pageInfo(action.payload.data.policiesByFamily),
                errorPolicies: formatGraphQLError(action.payload)
            };
        case 'POLICY_FAMILY_POLICIES_ERR':
            return {
                ...state,
                fetchingPolicies: false,
                errorPolicies: formatServerError(action.payload),
            };
        case 'POLICY_INSUREE_ELIGIBILITY_REQ':
            return {
                ...state,
                fetchingInsureeEligibility: true,
                fetchedInsureeEligibility: false,
                insureeEligibility: null,
                errorInsureeEligibility: null,
            };
        case 'POLICY_INSUREE_ELIGIBILITY_RESP':
            return {
                ...state,
                fetchingInsureeEligibility: false,
                fetchedInsureeEligibility: true,
                insureeEligibility: action.payload.data.policyEligibilityByInsuree,
                errorInsureeEligibility: formatGraphQLError(action.payload),
            };
        case 'POLICY_INSUREE_ELIGIBILITY_ERR':
            return {
                ...state,
                fetchingInsureeEligibility: false,
                errorInsureeEligibility: formatServerError(action.payload),
            };
        case 'POLICY_INSUREE_ITEM_ELIGIBILITY_REQ':
            return {
                ...state,
                fetchingInsureeItemEligibility: true,
                fetchedInsureeItemEligibility: false,
                insureeItemEligibility: null,
                errorInsureeItemEligibility: null,
            };
        case 'POLICY_INSUREE_ITEM_ELIGIBILITY_RESP':
            return {
                ...state,
                fetchingInsureeItemEligibility: false,
                fetchedInsureeItemEligibility: true,
                insureeItemEligibility: action.payload.data.policyItemEligibilityByInsuree,
                errorInsureeItemEligibility: formatGraphQLError(action.payload),
            };
        case 'POLICY_INSUREE_ITEM_ELIGIBILITY_ERR':
            return {
                ...state,
                fetchingInsureeItemEligibility: false,
                errorInsureeItemEligibility: formatServerError(action.payload),
            };
        case 'POLICY_INSUREE_SERVICE_ELIGIBILITY_REQ':
            return {
                ...state,
                fetchingInsureeServiceEligibility: true,
                fetchedInsureeServiceEligibility: false,
                insureeServiceEligibility: null,
                errorInsureeServiceEligibility: null,
            };
        case 'POLICY_INSUREE_SERVICE_ELIGIBILITY_RESP':
            return {
                ...state,
                fetchingInsureeServiceEligibility: false,
                fetchedInsureeServiceEligibility: true,
                insureeServiceEligibility: action.payload.data.policyServiceEligibilityByInsuree,
                errorInsureeServiceEligibility: formatGraphQLError(action.payload),
            };
        case 'POLICY_INSUREE_SERVICE_ELIGIBILITY_ERR':
            return {
                ...state,
                fetchingInsureeServiceEligibility: false,
                errorInsureeServiceEligibility: formatServerError(action.payload),
            };
        case 'POLICY_POLICY_OFFICERS_REQ':
            return {
                ...state,
                fetchingPolicyOfficers: true,
                fetchedPolicyOfficers: false,
                policyOfficers: null,
                errorPolicyOfficers: null,
            };
        case 'POLICY_POLICY_OFFICERS_RESP':
            return {
                ...state,
                fetchingPolicyOfficers: false,
                fetchedPolicyOfficers: true,
                policyOfficers: parseData(action.payload.data.policyOfficers),
                errorPolicyOfficers: formatGraphQLError(action.payload)
            };
        case 'POLICY_POLICY_OFFICERS_ERR':
            return {
                ...state,
                fetchingPolicyOfficers: false,
                errorPolicyOfficers: formatServerError(action.payload)
            };
        case 'POLICY_POLICIES_REQ':
            return {
                ...state,
                fetchingPolicies: true,
                fetchedPolicies: false,
                policies: [],
                errorPolicies: null,
            };
        case 'POLICY_POLICIES_RESP':
            return {
                ...state,
                fetchingPolicies: false,
                fetchedPolicies: true,
                policies: parseData(action.payload.data.policies),
                policiesPageInfo: pageInfo(action.payload.data.policies),
                errorPolicies: formatGraphQLError(action.payload)
            };
        case 'POLICY_POLICIES_ERR':
            return {
                ...state,
                fetching: false,
                error: formatServerError(action.payload)
            };
        default:
            return state;
    }
};

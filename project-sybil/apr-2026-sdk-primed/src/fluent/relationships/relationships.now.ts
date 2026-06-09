import { Record } from '@servicenow/sdk/core'

// --- §24 Relationships ---

export const requestToExpenseRelationship = Record({
    $id: Now.ID['rel_request_expense'],
    table: 'sys_relationship',
    data: {
        name: 'Travel Request → Expenses',
        parent_table: 'x_snc_apr_trv_request',
        child_table: 'x_snc_apr_trv_expense',
        type: 'one_to_many',
        apply_to: 'all',
        active: true,
    },
})

export const userToRequestRelationship = Record({
    $id: Now.ID['rel_user_request'],
    table: 'sys_relationship',
    data: {
        name: 'User → Travel Requests',
        parent_table: 'sys_user',
        child_table: 'x_snc_apr_trv_request',
        type: 'one_to_many',
        apply_to: 'all',
        active: true,
    },
})

export const policyToRequestRelationship = Record({
    $id: Now.ID['rel_policy_request'],
    table: 'sys_relationship',
    data: {
        name: 'Policy → Travel Requests',
        parent_table: 'x_snc_apr_trv_policy',
        child_table: 'x_snc_apr_trv_request',
        type: 'one_to_many',
        apply_to: 'all',
        active: true,
    },
})

export const userToDelegationRelationship = Record({
    $id: Now.ID['rel_user_delegation'],
    table: 'sys_relationship',
    data: {
        name: 'User → Delegations',
        parent_table: 'sys_user',
        child_table: 'x_snc_apr_trv_delegation',
        type: 'one_to_many',
        apply_to: 'all',
        active: true,
    },
})

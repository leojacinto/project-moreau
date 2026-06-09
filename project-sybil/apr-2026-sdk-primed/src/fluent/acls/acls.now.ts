import { Acl } from '@servicenow/sdk/core'
import { travelUser, travelApprover, travelAdmin } from '../roles/roles.now'

// --- x_snc_apr_trv_request ACLs ---

export const requestRead = Acl({
    $id: Now.ID['request_read'],
    type: 'record',
    table: 'x_snc_apr_trv_request',
    operation: 'read',
    roles: [travelUser],
    description: 'Traveler sees own requests; manager sees direct reports',
    active: true,
    script: script`
        // Traveler sees own or manager sees direct reports
        var userId = gs.getUserID();
        answer = current.traveler == userId ||
                 current.traveler.manager == userId;
    `,
})

export const requestWrite = Acl({
    $id: Now.ID['request_write'],
    type: 'record',
    table: 'x_snc_apr_trv_request',
    operation: 'write',
    roles: [travelUser],
    description: 'Only if approval_status = Pending or Rejected',
    active: true,
    condition: 'approval_status=pending^ORapproval_status=rejected',
})

export const requestCreate = Acl({
    $id: Now.ID['request_create'],
    type: 'record',
    table: 'x_snc_apr_trv_request',
    operation: 'create',
    roles: [travelUser],
    description: 'Any authenticated user in scope',
    active: true,
})

export const requestDelete = Acl({
    $id: Now.ID['request_delete'],
    type: 'record',
    table: 'x_snc_apr_trv_request',
    operation: 'delete',
    roles: [travelAdmin],
    description: 'Admin only',
    active: true,
})

export const requestApprovalStatusWrite = Acl({
    $id: Now.ID['request_approval_status_write'],
    type: 'record',
    table: 'x_snc_apr_trv_request',
    field: 'approval_status',
    operation: 'write',
    roles: [travelApprover],
    description: 'Manager or delegate only',
    active: true,
})

// --- x_snc_apr_trv_expense ACLs ---

export const expenseRead = Acl({
    $id: Now.ID['expense_read'],
    type: 'record',
    table: 'x_snc_apr_trv_expense',
    operation: 'read',
    roles: [travelUser],
    description: 'Traveler sees own; finance sees all',
    active: true,
    script: script`
        var userId = gs.getUserID();
        answer = current.travel_request.traveler == userId ||
                 gs.hasRole('x_snc_apr_trv.finance');
    `,
})

export const expenseWrite = Acl({
    $id: Now.ID['expense_write'],
    type: 'record',
    table: 'x_snc_apr_trv_expense',
    operation: 'write',
    roles: [travelUser],
    description: 'Only if reimbursement_status = Submitted or Rejected',
    active: true,
    condition: 'reimbursement_status=submitted^ORreimbursement_status=rejected',
})

// --- x_snc_apr_trv_policy ACLs ---

export const policyRead = Acl({
    $id: Now.ID['policy_read'],
    type: 'record',
    table: 'x_snc_apr_trv_policy',
    operation: 'read',
    roles: [travelUser],
    description: 'All authenticated users',
    active: true,
})

export const policyWrite = Acl({
    $id: Now.ID['policy_write'],
    type: 'record',
    table: 'x_snc_apr_trv_policy',
    operation: 'write',
    roles: [travelAdmin],
    description: 'Admin only',
    active: true,
})

// --- x_snc_apr_trv_delegation ACLs ---

export const delegationRead = Acl({
    $id: Now.ID['delegation_read'],
    type: 'record',
    table: 'x_snc_apr_trv_delegation',
    operation: 'read',
    roles: [travelApprover],
    description: 'Approvers see own delegations',
    active: true,
})

export const delegationWrite = Acl({
    $id: Now.ID['delegation_write'],
    type: 'record',
    table: 'x_snc_apr_trv_delegation',
    operation: 'write',
    roles: [travelApprover],
    description: 'Delegator only',
    active: true,
    script: script`
        answer = current.delegator == gs.getUserID();
    `,
})

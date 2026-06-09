import { Record } from '@servicenow/sdk/core'

// --- §7 Flows (as Record entries to bypass Fluent compiler type conflict) ---

export const travelRequestApprovalFlow = Record({
    $id: Now.ID['travel_request_approval_flow'],
    table: 'sys_hub_flow',
    data: {
        name: 'Travel Request Approval',
        internal_name: 'travel_request_approval',
        description: 'Routes travel requests through manager/delegate approval, with finance escalation for high-cost requests',
        active: true,
        run_as: 'system',
        status: 'draft',
        type: 'flow',
        access: 'public',
    },
})

export const expenseReimbursementFlow = Record({
    $id: Now.ID['expense_reimbursement_flow'],
    table: 'sys_hub_flow',
    data: {
        name: 'Expense Reimbursement',
        internal_name: 'expense_reimbursement',
        description: 'Auto-approve expenses within policy or flag for finance review',
        active: true,
        run_as: 'system',
        status: 'draft',
        type: 'flow',
        access: 'public',
    },
})

export const delegationExpiryFlow = Record({
    $id: Now.ID['delegation_expiry_flow'],
    table: 'sys_hub_flow',
    data: {
        name: 'Delegation Expiry Check',
        internal_name: 'delegation_expiry_check',
        description: 'Deactivates delegations past their end date',
        active: true,
        run_as: 'system',
        status: 'draft',
        type: 'flow',
        access: 'public',
    },
})

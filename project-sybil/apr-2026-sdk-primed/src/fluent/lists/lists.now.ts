import { List, Record } from '@servicenow/sdk/core'

// --- Views ---
const requestDefaultView = Record({
    $id: Now.ID['view_request_default'],
    table: 'sys_ui_view',
    data: {
        name: 'Default',
        title: 'Default',
    },
})

const approverView = Record({
    $id: Now.ID['view_approver'],
    table: 'sys_ui_view',
    data: {
        name: 'approver',
        title: 'Approver',
    },
})

const financeView = Record({
    $id: Now.ID['view_finance'],
    table: 'sys_ui_view',
    data: {
        name: 'finance',
        title: 'Finance',
    },
})

const expenseDefaultView = Record({
    $id: Now.ID['view_expense_default'],
    table: 'sys_ui_view',
    data: {
        name: 'Default',
        title: 'Default',
    },
})

// --- §20 Lists ---

export const myTravelRequestsList = List({
    $id: Now.ID['list_my_travel_requests'],
    table: 'x_snc_apr_trv_request',
    view: requestDefaultView,
    columns: [
        { element: 'number', position: 0 },
        { element: 'destination_city', position: 1 },
        { element: 'departure_date', position: 2 },
        { element: 'return_date', position: 3 },
        { element: 'estimated_cost', position: 4 },
        { element: 'approval_status', position: 5 },
    ],
})

export const approvalQueueList = List({
    $id: Now.ID['list_approval_queue'],
    table: 'x_snc_apr_trv_request',
    view: approverView,
    columns: [
        { element: 'number', position: 0 },
        { element: 'traveler', position: 1 },
        { element: 'destination_city', position: 2 },
        { element: 'estimated_cost', position: 3 },
        { element: 'purpose', position: 4 },
        { element: 'sys_created_on', position: 5 },
    ],
})

export const financeList = List({
    $id: Now.ID['list_finance_view'],
    table: 'x_snc_apr_trv_request',
    view: financeView,
    columns: [
        { element: 'number', position: 0 },
        { element: 'traveler', position: 1 },
        { element: 'department', position: 2 },
        { element: 'estimated_cost', position: 3 },
        { element: 'actual_cost', position: 4 },
        { element: 'approval_status', position: 5 },
    ],
})

export const expenseList = List({
    $id: Now.ID['list_expenses'],
    table: 'x_snc_apr_trv_expense',
    view: expenseDefaultView,
    columns: [
        { element: 'number', position: 0 },
        { element: 'expense_type', position: 1 },
        { element: 'amount', position: 2 },
        { element: 'vendor', position: 3 },
        { element: 'expense_date', position: 4 },
        { element: 'reimbursement_status', position: 5 },
    ],
})

export const policyList = List({
    $id: Now.ID['list_policies_view'],
    table: 'x_snc_apr_trv_policy',
    view: requestDefaultView,
    columns: [
        { element: 'policy_name', position: 0 },
        { element: 'applies_to_country', position: 1 },
        { element: 'max_daily_hotel', position: 2 },
        { element: 'requires_finance_approval_above', position: 3 },
        { element: 'active', position: 4 },
    ],
})

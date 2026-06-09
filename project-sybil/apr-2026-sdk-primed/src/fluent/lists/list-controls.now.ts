import { Record } from '@servicenow/sdk/core'

// --- §21 List Controls ---

export const requestListControl = Record({
    $id: Now.ID['list_ctrl_request'],
    table: 'sys_ui_list_control',
    data: {
        name: 'x_snc_apr_trv_request',
        type: 'list',
        title: 'Travel Requests',
        active: true,
    },
})

export const expenseListControl = Record({
    $id: Now.ID['list_ctrl_expense'],
    table: 'sys_ui_list_control',
    data: {
        name: 'x_snc_apr_trv_expense',
        type: 'list',
        title: 'Travel Expenses',
        active: true,
    },
})

export const delegationListControl = Record({
    $id: Now.ID['list_ctrl_delegation'],
    table: 'sys_ui_list_control',
    data: {
        name: 'x_snc_apr_trv_delegation',
        type: 'list',
        title: 'Delegations',
        active: true,
    },
})

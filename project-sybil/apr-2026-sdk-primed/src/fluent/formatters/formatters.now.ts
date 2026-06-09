import { Record } from '@servicenow/sdk/core'

// --- §17 UI Formatters ---

export const expenseSummaryFormatter = Record({
    $id: Now.ID['fmt_expense_summary'],
    table: 'sys_ui_formatter',
    data: {
        name: 'x_snc_apr_trv_request.expense_summary',
        table: 'x_snc_apr_trv_request',
        formatter: 'x_snc_apr_trv_expense_summary',
        type: 'formatter',
        active: true,
        title: 'Expense Summary',
        description: 'Embedded formatter on request form showing total expenses by type as a mini bar chart',
    },
})

export const approvalTimelineFormatter = Record({
    $id: Now.ID['fmt_approval_timeline'],
    table: 'sys_ui_formatter',
    data: {
        name: 'x_snc_apr_trv_request.approval_timeline',
        table: 'x_snc_apr_trv_request',
        formatter: 'x_snc_apr_trv_approval_timeline',
        type: 'formatter',
        active: true,
        title: 'Approval Timeline',
        description: 'Activity formatter showing approval chain with timestamps',
    },
})

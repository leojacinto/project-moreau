import { UiAction } from '@servicenow/sdk/core'
import { travelApprover } from '../roles/roles.now'

export const approveAction = UiAction({
    $id: Now.ID['uia_approve'],
    table: 'x_snc_apr_trv_request',
    name: 'Approve',
    actionName: 'approve_travel_request',
    active: true,
    showUpdate: true,
    condition: "current.approval_status == 'pending'",
    roles: [travelApprover],
    form: {
        showButton: true,
        style: 'primary',
    },
    script: script`current.approval_status = 'approved';
current.work_notes = 'Approved by ' + gs.getUserDisplayName();
current.update();
action.setRedirectURL(current);`,
})

export const rejectAction = UiAction({
    $id: Now.ID['uia_reject'],
    table: 'x_snc_apr_trv_request',
    name: 'Reject',
    actionName: 'reject_travel_request',
    active: true,
    showUpdate: true,
    condition: "current.approval_status == 'pending'",
    roles: [travelApprover],
    form: {
        showButton: true,
        style: 'destructive',
    },
    client: {
        isClient: true,
        onClick: 'rejectRequest',
    },
    script: script`current.approval_status = 'rejected';
current.work_notes = 'Rejected by ' + gs.getUserDisplayName();
current.update();
action.setRedirectURL(current);`,
})

export const submitForReimbursement = UiAction({
    $id: Now.ID['uia_submit_reimbursement'],
    table: 'x_snc_apr_trv_request',
    name: 'Submit for Reimbursement',
    actionName: 'submit_reimbursement',
    active: true,
    showUpdate: true,
    condition: "current.approval_status == 'approved' && parseFloat(current.actual_cost) > 0",
    form: {
        showButton: true,
        style: 'primary',
    },
    script: script`gs.addInfoMessage('Reimbursement request submitted');
current.update();
action.setRedirectURL(current);`,
})

export const addExpense = UiAction({
    $id: Now.ID['uia_add_expense'],
    table: 'x_snc_apr_trv_request',
    name: 'Add Expense',
    actionName: 'add_expense',
    active: true,
    showUpdate: true,
    condition: "current.approval_status == 'approved'",
    form: {
        showLink: true,
    },
    script: script`action.setRedirectURL('x_snc_apr_trv_expense.do?sys_id=-1&sysparm_query=travel_request=' + current.sys_id);`,
})

export const exportToPdf = UiAction({
    $id: Now.ID['uia_export_pdf'],
    table: 'x_snc_apr_trv_request',
    name: 'Export to PDF',
    actionName: 'export_pdf',
    active: true,
    showUpdate: true,
    form: {
        showContextMenu: true,
    },
    script: script`var url = 'x_snc_apr_trv_request.do?sys_id=' + current.sys_id + '&PDF';
action.setRedirectURL(url);`,
})

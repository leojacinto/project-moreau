import { UiAction } from '@servicenow/sdk/core'

export const uaApprove = UiAction({
  $id: Now.ID['ua-approve'],
  name: 'Approve',
  table: 'x_snc_apr_tv3b_request',
  actionName: 'approve_travel',
  active: true,
  form: { showButton: true },
  condition: 'x_snc_apr_tv3b_approval_status=pending^EQ',
  roles: ['x_snc_apr_tv3b.approver'],
  script: `
if (typeof window == 'undefined') {
  current.x_snc_apr_tv3b_approval_status = 'approved';
  current.work_notes = 'Approved by ' + gs.getUserDisplayName();
  current.update();
  action.setRedirectURL(current);
}
`,
})

export const uaReject = UiAction({
  $id: Now.ID['ua-reject'],
  name: 'Reject',
  table: 'x_snc_apr_tv3b_request',
  actionName: 'reject_travel',
  active: true,
  form: { showButton: true },
  condition: 'x_snc_apr_tv3b_approval_status=pending^EQ',
  roles: ['x_snc_apr_tv3b.approver'],
  script: `
if (typeof window == 'undefined') {
  current.x_snc_apr_tv3b_approval_status = 'rejected';
  current.work_notes = 'Rejected by ' + gs.getUserDisplayName();
  current.update();
  action.setRedirectURL(current);
}
`,
})

export const uaSubmitReimbursement = UiAction({
  $id: Now.ID['ua-submit-reimbursement'],
  name: 'Submit for Reimbursement',
  table: 'x_snc_apr_tv3b_request',
  actionName: 'submit_reimbursement',
  active: true,
  form: { showButton: true },
  condition: 'x_snc_apr_tv3b_approval_status=approved^x_snc_apr_tv3b_actual_cost>0',
  roles: ['x_snc_apr_tv3b.user'],
  script: `
if (typeof window == 'undefined') {
  current.work_notes = 'Submitted for reimbursement by ' + gs.getUserDisplayName();
  current.update();
  action.setRedirectURL(current);
}
`,
})

export const uaAddExpense = UiAction({
  $id: Now.ID['ua-add-expense'],
  name: 'Add Expense',
  table: 'x_snc_apr_tv3b_request',
  actionName: 'add_expense',
  active: true,
  form: { showLink: true },
  condition: 'x_snc_apr_tv3b_approval_status=approved',
  roles: ['x_snc_apr_tv3b.user'],
  script: `
if (typeof window == 'undefined') {
  action.setRedirectURL('x_snc_apr_tv3b_expense.do?sys_id=-1&sysparm_query=x_snc_apr_tv3b_travel_request=' + current.sys_id);
}
`,
})

export const uaExportPdf = UiAction({
  $id: Now.ID['ua-export-pdf'],
  name: 'Export to PDF',
  table: 'x_snc_apr_tv3b_request',
  actionName: 'export_pdf',
  active: true,
  form: { showContextMenu: true },
  roles: ['x_snc_apr_tv3b.user'],
  script: `
if (typeof window == 'undefined') {
  action.setRedirectURL('x_snc_apr_tv3b_request.do?sys_id=' + current.sys_id + '&PDF');
}
`,
})

import { Flow, wfa, trigger } from '@servicenow/sdk/automation'

export const flowApproval = Flow(
  {
    $id: Now.ID['flow-approval'],
    name: 'Travel Request Approval',
    description: 'Routes travel requests through approval chain',
  },
  wfa.trigger(
    trigger.record.createdOrUpdated,
    { $id: Now.ID['flow-approval-trigger'] },
    { table: 'x_snc_apr_tv3b_request', condition: 'x_snc_apr_tv3b_approval_status=pending' },
  ),
)

export const flowFinanceEscalation = Flow(
  {
    $id: Now.ID['flow-finance-escalation'],
    name: 'Finance Escalation',
    description: 'Escalates high-cost requests to finance team',
  },
  wfa.trigger(
    trigger.record.updated,
    { $id: Now.ID['flow-finance-trigger'] },
    { table: 'x_snc_apr_tv3b_request', condition: 'x_snc_apr_tv3b_approval_status=finance_review' },
  ),
)

export const flowExpenseReimbursement = Flow(
  {
    $id: Now.ID['flow-expense-reimbursement'],
    name: 'Expense Reimbursement',
    description: 'Handles expense reimbursement processing',
  },
  wfa.trigger(
    trigger.record.created,
    { $id: Now.ID['flow-expense-trigger'] },
    { table: 'x_snc_apr_tv3b_expense' },
  ),
)

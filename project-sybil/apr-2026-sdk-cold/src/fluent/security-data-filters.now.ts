import { Record } from '@servicenow/sdk/core'

// Security Data Filters — raw sys_security_acl records with operation=record
// The Acl() Fluent API doesn't support conditional_table_query_range, so use Record()
export const sdfRequestByTraveler = Record({
  $id: Now.ID['sdf-request-by-traveler'],
  table: 'sys_security_acl',
  data: {
    name: 'x_snc_apr_tv3b_request',
    operation: 'record',
    type: 'record',
    description: 'Users see own requests or requests from their department',
    active: true,
    condition: 'x_snc_apr_tv3b_traveler=javascript:gs.getUserID()^ORx_snc_apr_tv3b_department=javascript:gs.getUser().getDepartmentID()',
  },
})

export const sdfExpenseByTraveler = Record({
  $id: Now.ID['sdf-expense-by-traveler'],
  table: 'sys_security_acl',
  data: {
    name: 'x_snc_apr_tv3b_expense',
    operation: 'record',
    type: 'record',
    description: 'Finance sees all expenses - no filter applied',
    active: true,
  },
})

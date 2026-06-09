import { Acl } from '@servicenow/sdk/core'

// x_snc_apr_tv3b_request ACLs
export const aclRequestRead = Acl({
  $id: Now.ID['acl-request-read'],
  type: 'record',
  table: 'x_snc_apr_tv3b_request',
  operation: 'read',
  roles: ['x_snc_apr_tv3b.user'],
  active: true,
  adminOverrides: true,
})

export const aclRequestWrite = Acl({
  $id: Now.ID['acl-request-write'],
  type: 'record',
  table: 'x_snc_apr_tv3b_request',
  operation: 'write',
  roles: ['x_snc_apr_tv3b.user'],
  active: true,
  adminOverrides: true,
  condition: 'x_snc_apr_tv3b_approval_status=pending^ORx_snc_apr_tv3b_approval_status=rejected',
})

export const aclRequestCreate = Acl({
  $id: Now.ID['acl-request-create'],
  type: 'record',
  table: 'x_snc_apr_tv3b_request',
  operation: 'create',
  roles: ['x_snc_apr_tv3b.user'],
  active: true,
  adminOverrides: true,
})

export const aclRequestDelete = Acl({
  $id: Now.ID['acl-request-delete'],
  type: 'record',
  table: 'x_snc_apr_tv3b_request',
  operation: 'delete',
  roles: ['x_snc_apr_tv3b.admin'],
  active: true,
  adminOverrides: true,
})

// Field-level ACL for approval_status
export const aclRequestApprovalStatusWrite = Acl({
  $id: Now.ID['acl-request-approval-write'],
  type: 'field',
  table: 'x_snc_apr_tv3b_request',
  field: 'x_snc_apr_tv3b_approval_status',
  operation: 'write',
  roles: ['x_snc_apr_tv3b.approver'],
  active: true,
})

// x_snc_apr_tv3b_expense ACLs
export const aclExpenseRead = Acl({
  $id: Now.ID['acl-expense-read'],
  type: 'record',
  table: 'x_snc_apr_tv3b_expense',
  operation: 'read',
  roles: ['x_snc_apr_tv3b.user'],
  active: true,
  adminOverrides: true,
})

export const aclExpenseWrite = Acl({
  $id: Now.ID['acl-expense-write'],
  type: 'record',
  table: 'x_snc_apr_tv3b_expense',
  operation: 'write',
  roles: ['x_snc_apr_tv3b.user'],
  active: true,
  adminOverrides: true,
  condition: 'x_snc_apr_tv3b_reimbursement_status=submitted^ORx_snc_apr_tv3b_reimbursement_status=rejected',
})

// x_snc_apr_tv3b_policy ACLs
export const aclPolicyRead = Acl({
  $id: Now.ID['acl-policy-read'],
  type: 'record',
  table: 'x_snc_apr_tv3b_policy',
  operation: 'read',
  roles: ['x_snc_apr_tv3b.user'],
  active: true,
  adminOverrides: true,
})

export const aclPolicyWrite = Acl({
  $id: Now.ID['acl-policy-write'],
  type: 'record',
  table: 'x_snc_apr_tv3b_policy',
  operation: 'write',
  roles: ['x_snc_apr_tv3b.admin'],
  active: true,
  adminOverrides: true,
})

// x_snc_apr_tv3b_delegation ACLs
export const aclDelegationRead = Acl({
  $id: Now.ID['acl-delegation-read'],
  type: 'record',
  table: 'x_snc_apr_tv3b_delegation',
  operation: 'read',
  roles: ['x_snc_apr_tv3b.approver'],
  active: true,
  adminOverrides: true,
})

export const aclDelegationWrite = Acl({
  $id: Now.ID['acl-delegation-write'],
  type: 'record',
  table: 'x_snc_apr_tv3b_delegation',
  operation: 'write',
  roles: ['x_snc_apr_tv3b.approver'],
  active: true,
  adminOverrides: true,
})

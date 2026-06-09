import { Role } from '@servicenow/sdk/core'

export const travelUser = Role({
  $id: Now.ID['travel-user'],
  name: 'x_snc_apr_tv3b.user',
  description: 'Submit travel requests and log expenses',
})

export const travelApprover = Role({
  $id: Now.ID['travel-approver'],
  name: 'x_snc_apr_tv3b.approver',
  description: 'Approve or reject travel requests for direct reports',
  containsRoles: [travelUser],
})

export const travelFinance = Role({
  $id: Now.ID['travel-finance'],
  name: 'x_snc_apr_tv3b.finance',
  description: 'Review high-cost requests and approve reimbursements',
  containsRoles: [travelUser],
})

export const travelAdmin = Role({
  $id: Now.ID['travel-admin'],
  name: 'x_snc_apr_tv3b.admin',
  description: 'Full configuration access',
  containsRoles: [travelFinance, travelApprover],
})

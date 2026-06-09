import { Role } from '@servicenow/sdk/core'

export const travelUser = Role({
    name: 'x_snc_apr_trv.user',
    description: 'Submit travel requests and log expenses',
})

export const travelApprover = Role({
    name: 'x_snc_apr_trv.approver',
    description: 'Approve or reject travel requests for direct reports',
    containsRoles: [travelUser],
})

export const travelFinance = Role({
    name: 'x_snc_apr_trv.finance',
    description: 'Review high-cost requests and approve reimbursements',
    containsRoles: [travelUser],
})

export const travelAdmin = Role({
    name: 'x_snc_apr_trv.admin',
    description: 'Full configuration access to travel management',
    containsRoles: [travelFinance, travelApprover],
})

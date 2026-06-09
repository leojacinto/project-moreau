import { Workspace } from '@servicenow/sdk/core'

export const travelWorkspace = Workspace({
  $id: Now.ID['travel-workspace'],
  title: 'Travel Management',
  path: 'travel-management',
  landingPath: 'home',
  order: 100,
  active: true,
  tables: [
    'x_snc_apr_tv3b_request',
    'x_snc_apr_tv3b_expense',
    'x_snc_apr_tv3b_policy',
    'x_snc_apr_tv3b_delegation',
  ],
})

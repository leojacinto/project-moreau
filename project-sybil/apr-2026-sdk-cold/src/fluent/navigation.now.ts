import { ApplicationMenu } from '@servicenow/sdk/core'

export const travelMenu = ApplicationMenu({
  $id: Now.ID['travel-menu'],
  title: 'Travel Management',
  order: 100,
  active: true,
  roles: ['x_snc_apr_tv3b.user'],
})

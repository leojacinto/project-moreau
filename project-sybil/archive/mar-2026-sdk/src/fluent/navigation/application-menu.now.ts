import { ApplicationMenu } from '@servicenow/sdk/core'

export const travelAppMenu = ApplicationMenu({
  $id: Now.ID['travel_app_menu'],
  title: 'Travel Requests',
  hint: 'Travel Request management',
  order: 100,
})

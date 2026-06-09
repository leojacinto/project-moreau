import { Workspace, UxListMenuConfig } from '@servicenow/sdk/core'

export const travelListConfig = UxListMenuConfig({
  $id: Now.ID['travel_list_menu_config'],
  name: 'Travel Request Lists',
  active: true,
  categories: [
    {
      $id: Now.ID['travel_list_category'],
      title: 'Travel Requests',
      active: true,
      order: 100,
      lists: [
        {
          $id: Now.ID['travel_list_all'],
          table: 'x_snc_travel_request',
          title: 'All Travel Requests',
          columns: 'number,x_snc_travel_destination,x_snc_travel_departure_date,x_snc_travel_return_date,x_snc_travel_estimated_cost,x_snc_travel_travel_type,x_snc_travel_state',
          active: true,
          order: 100,
        },
        {
          $id: Now.ID['travel_list_draft'],
          table: 'x_snc_travel_request',
          title: 'Draft Requests',
          columns: 'number,x_snc_travel_destination,x_snc_travel_departure_date,x_snc_travel_return_date,x_snc_travel_estimated_cost',
          condition: 'x_snc_travel_state=draft',
          active: true,
          order: 200,
        },
        {
          $id: Now.ID['travel_list_submitted'],
          table: 'x_snc_travel_request',
          title: 'Submitted for Approval',
          columns: 'number,x_snc_travel_destination,x_snc_travel_departure_date,x_snc_travel_return_date,x_snc_travel_estimated_cost,x_snc_travel_traveler',
          condition: 'x_snc_travel_state=submitted',
          active: true,
          order: 300,
        },
        {
          $id: Now.ID['travel_list_approved'],
          table: 'x_snc_travel_request',
          title: 'Approved Requests',
          columns: 'number,x_snc_travel_destination,x_snc_travel_departure_date,x_snc_travel_return_date,x_snc_travel_estimated_cost',
          condition: 'x_snc_travel_state=approved',
          active: true,
          order: 400,
        },
      ],
    },
  ],
})

export const travelWorkspace = Workspace({
  $id: Now.ID['travel_workspace'],
  title: 'Travel Requests',
  path: 'travel-requests',
  landingPath: 'home',
  order: 100,
  active: true,
  tables: ['x_snc_travel_request'],
  listConfig: travelListConfig,
})

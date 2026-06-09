import { Dashboard } from '@servicenow/sdk/core'
import { travelWorkspace } from '../workspace/travel-request-workspace.now'

export const travelDashboard = Dashboard({
  $id: Now.ID['travel_dashboard'],
  name: 'Travel Requests Overview',
  active: true,
  visibilities: [
    {
      $id: Now.ID['travel_dashboard_visibility'],
      experience: travelWorkspace,
    },
  ],
  tabs: [
    {
      $id: Now.ID['travel_dashboard_tab_overview'],
      name: 'Overview',
      active: true,
      widgets: [
        {
          $id: Now.ID['widget_total'],
          component: 'single-score',
          componentProps: {
            table: 'x_snc_travel_request',
            title: 'Total Requests',
            aggregate: 'COUNT',
          },
          height: 6,
          width: 4,
          position: { x: 0, y: 0 },
        },
        {
          $id: Now.ID['widget_draft'],
          component: 'single-score',
          componentProps: {
            table: 'x_snc_travel_request',
            title: 'Draft',
            aggregate: 'COUNT',
            conditions: 'x_snc_travel_state=draft',
          },
          height: 6,
          width: 4,
          position: { x: 4, y: 0 },
        },
        {
          $id: Now.ID['widget_submitted'],
          component: 'single-score',
          componentProps: {
            table: 'x_snc_travel_request',
            title: 'Submitted',
            aggregate: 'COUNT',
            conditions: 'x_snc_travel_state=submitted',
          },
          height: 6,
          width: 4,
          position: { x: 8, y: 0 },
        },
        {
          $id: Now.ID['widget_approved'],
          component: 'single-score',
          componentProps: {
            table: 'x_snc_travel_request',
            title: 'Approved',
            aggregate: 'COUNT',
            conditions: 'x_snc_travel_state=approved',
          },
          height: 6,
          width: 4,
          position: { x: 0, y: 6 },
        },
        {
          $id: Now.ID['widget_rejected'],
          component: 'single-score',
          componentProps: {
            table: 'x_snc_travel_request',
            title: 'Rejected',
            aggregate: 'COUNT',
            conditions: 'x_snc_travel_state=rejected',
          },
          height: 6,
          width: 4,
          position: { x: 4, y: 6 },
        },
        {
          $id: Now.ID['widget_completed'],
          component: 'single-score',
          componentProps: {
            table: 'x_snc_travel_request',
            title: 'Completed',
            aggregate: 'COUNT',
            conditions: 'x_snc_travel_state=completed',
          },
          height: 6,
          width: 4,
          position: { x: 8, y: 6 },
        },
        {
          $id: Now.ID['widget_by_state'],
          component: 'donut',
          componentProps: {
            table: 'x_snc_travel_request',
            title: 'Requests by State',
            aggregate: 'COUNT',
            groupBy: 'x_snc_travel_state',
          },
          height: 12,
          width: 6,
          position: { x: 0, y: 12 },
        },
        {
          $id: Now.ID['widget_by_type'],
          component: 'horizontal-bar',
          componentProps: {
            table: 'x_snc_travel_request',
            title: 'Requests by Travel Type',
            aggregate: 'COUNT',
            groupBy: 'x_snc_travel_travel_type',
          },
          height: 12,
          width: 6,
          position: { x: 6, y: 12 },
        },
      ],
    },
  ],
})

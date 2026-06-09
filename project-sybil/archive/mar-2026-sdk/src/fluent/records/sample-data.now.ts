import { Record } from '@servicenow/sdk/core'

Record({
  $id: Now.ID['sample_tokyo'],
  table: 'x_snc_travel_request',
  data: {
    x_snc_travel_destination: 'Tokyo, Japan',
    x_snc_travel_departure_date: '2026-04-15',
    x_snc_travel_return_date: '2026-04-22',
    x_snc_travel_purpose: 'Q2 partner summit',
    x_snc_travel_estimated_cost: 4200,
    x_snc_travel_travel_type: 'international',
    x_snc_travel_state: 'approved',
  },
})

Record({
  $id: Now.ID['sample_london'],
  table: 'x_snc_travel_request',
  data: {
    x_snc_travel_destination: 'London, UK',
    x_snc_travel_departure_date: '2026-05-01',
    x_snc_travel_return_date: '2026-05-05',
    x_snc_travel_purpose: 'EMEA customer success kickoff',
    x_snc_travel_estimated_cost: 3800,
    x_snc_travel_travel_type: 'international',
    x_snc_travel_state: 'submitted',
  },
})

Record({
  $id: Now.ID['sample_sydney'],
  table: 'x_snc_travel_request',
  data: {
    x_snc_travel_destination: 'Sydney, Australia',
    x_snc_travel_departure_date: '2026-06-10',
    x_snc_travel_return_date: '2026-06-14',
    x_snc_travel_purpose: 'APAC regional conference',
    x_snc_travel_estimated_cost: 5100,
    x_snc_travel_travel_type: 'international',
    x_snc_travel_state: 'draft',
  },
})

Record({
  $id: Now.ID['sample_berlin'],
  table: 'x_snc_travel_request',
  data: {
    x_snc_travel_destination: 'Berlin, Germany',
    x_snc_travel_departure_date: '2026-04-28',
    x_snc_travel_return_date: '2026-04-30',
    x_snc_travel_purpose: 'Engineering offsite',
    x_snc_travel_estimated_cost: 2900,
    x_snc_travel_travel_type: 'international',
    x_snc_travel_state: 'completed',
  },
})

Record({
  $id: Now.ID['sample_sf'],
  table: 'x_snc_travel_request',
  data: {
    x_snc_travel_destination: 'San Francisco, CA',
    x_snc_travel_departure_date: '2026-05-20',
    x_snc_travel_return_date: '2026-05-22',
    x_snc_travel_purpose: 'Knowledge 2026',
    x_snc_travel_estimated_cost: 1500,
    x_snc_travel_travel_type: 'domestic',
    x_snc_travel_state: 'rejected',
  },
})

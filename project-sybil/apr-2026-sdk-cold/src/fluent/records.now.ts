import { Record } from '@servicenow/sdk/core'

// Travel Policies (5 records)
export const policyGlobal = Record({
  $id: Now.ID['policy-global'],
  table: 'x_snc_apr_tv3b_policy',
  data: {
    x_snc_apr_tv3b_policy_name: 'Global Default',
    x_snc_apr_tv3b_applies_to_country: '*',
    x_snc_apr_tv3b_max_daily_hotel: 200,
    x_snc_apr_tv3b_max_daily_meals: 75,
    x_snc_apr_tv3b_max_flight_class: 'economy',
    x_snc_apr_tv3b_finance_threshold: 5000,
    x_snc_apr_tv3b_active: true,
  },
})

export const policyUSA = Record({
  $id: Now.ID['policy-usa'],
  table: 'x_snc_apr_tv3b_policy',
  data: {
    x_snc_apr_tv3b_policy_name: 'USA',
    x_snc_apr_tv3b_applies_to_country: 'United States',
    x_snc_apr_tv3b_max_daily_hotel: 300,
    x_snc_apr_tv3b_max_daily_meals: 100,
    x_snc_apr_tv3b_max_flight_class: 'economy',
    x_snc_apr_tv3b_finance_threshold: 5000,
    x_snc_apr_tv3b_active: true,
  },
})

export const policyJapan = Record({
  $id: Now.ID['policy-japan'],
  table: 'x_snc_apr_tv3b_policy',
  data: {
    x_snc_apr_tv3b_policy_name: 'Japan',
    x_snc_apr_tv3b_applies_to_country: 'Japan',
    x_snc_apr_tv3b_max_daily_hotel: 350,
    x_snc_apr_tv3b_max_daily_meals: 120,
    x_snc_apr_tv3b_max_flight_class: 'premium_economy',
    x_snc_apr_tv3b_finance_threshold: 8000,
    x_snc_apr_tv3b_active: true,
  },
})

export const policyUK = Record({
  $id: Now.ID['policy-uk'],
  table: 'x_snc_apr_tv3b_policy',
  data: {
    x_snc_apr_tv3b_policy_name: 'United Kingdom',
    x_snc_apr_tv3b_applies_to_country: 'United Kingdom',
    x_snc_apr_tv3b_max_daily_hotel: 280,
    x_snc_apr_tv3b_max_daily_meals: 90,
    x_snc_apr_tv3b_max_flight_class: 'economy',
    x_snc_apr_tv3b_finance_threshold: 5000,
    x_snc_apr_tv3b_active: true,
  },
})

export const policyAustralia = Record({
  $id: Now.ID['policy-australia'],
  table: 'x_snc_apr_tv3b_policy',
  data: {
    x_snc_apr_tv3b_policy_name: 'Australia',
    x_snc_apr_tv3b_applies_to_country: 'Australia',
    x_snc_apr_tv3b_max_daily_hotel: 250,
    x_snc_apr_tv3b_max_daily_meals: 85,
    x_snc_apr_tv3b_max_flight_class: 'economy',
    x_snc_apr_tv3b_finance_threshold: 5000,
    x_snc_apr_tv3b_active: true,
  },
})

// Travel Requests (5 records)
export const request1 = Record({
  $id: Now.ID['request-1'],
  table: 'x_snc_apr_tv3b_request',
  data: {
    x_snc_apr_tv3b_destination_city: 'Tokyo',
    x_snc_apr_tv3b_destination_country: 'Japan',
    x_snc_apr_tv3b_departure_date: '2025-08-01',
    x_snc_apr_tv3b_return_date: '2025-08-10',
    x_snc_apr_tv3b_estimated_cost: 9500,
    x_snc_apr_tv3b_purpose: 'conference',
    x_snc_apr_tv3b_approval_status: 'finance_review',
    x_snc_apr_tv3b_travel_type: 'international',
    short_description: 'Tokyo Tech Conference 2025',
  },
})

export const request2 = Record({
  $id: Now.ID['request-2'],
  table: 'x_snc_apr_tv3b_request',
  data: {
    x_snc_apr_tv3b_destination_city: 'New York',
    x_snc_apr_tv3b_destination_country: 'United States',
    x_snc_apr_tv3b_departure_date: '2025-07-15',
    x_snc_apr_tv3b_return_date: '2025-07-18',
    x_snc_apr_tv3b_estimated_cost: 3200,
    x_snc_apr_tv3b_purpose: 'client_meeting',
    x_snc_apr_tv3b_approval_status: 'approved',
    x_snc_apr_tv3b_travel_type: 'domestic',
    short_description: 'Client Meeting - NYC',
  },
})

export const request3 = Record({
  $id: Now.ID['request-3'],
  table: 'x_snc_apr_tv3b_request',
  data: {
    x_snc_apr_tv3b_destination_city: 'London',
    x_snc_apr_tv3b_destination_country: 'United Kingdom',
    x_snc_apr_tv3b_departure_date: '2025-09-01',
    x_snc_apr_tv3b_return_date: '2025-09-05',
    x_snc_apr_tv3b_estimated_cost: 4800,
    x_snc_apr_tv3b_purpose: 'training',
    x_snc_apr_tv3b_approval_status: 'pending',
    x_snc_apr_tv3b_travel_type: 'international',
    short_description: 'ITIL Training London',
  },
})

export const request4 = Record({
  $id: Now.ID['request-4'],
  table: 'x_snc_apr_tv3b_request',
  data: {
    x_snc_apr_tv3b_destination_city: 'San Francisco',
    x_snc_apr_tv3b_destination_country: 'United States',
    x_snc_apr_tv3b_departure_date: '2025-06-20',
    x_snc_apr_tv3b_return_date: '2025-06-22',
    x_snc_apr_tv3b_estimated_cost: 1500,
    x_snc_apr_tv3b_purpose: 'internal',
    x_snc_apr_tv3b_approval_status: 'rejected',
    x_snc_apr_tv3b_travel_type: 'domestic',
    short_description: 'Team Offsite SF',
  },
})

export const request5 = Record({
  $id: Now.ID['request-5'],
  table: 'x_snc_apr_tv3b_request',
  data: {
    x_snc_apr_tv3b_destination_city: 'Sydney',
    x_snc_apr_tv3b_destination_country: 'Australia',
    x_snc_apr_tv3b_departure_date: '2025-10-10',
    x_snc_apr_tv3b_return_date: '2025-10-17',
    x_snc_apr_tv3b_estimated_cost: 7200,
    x_snc_apr_tv3b_purpose: 'conference',
    x_snc_apr_tv3b_approval_status: 'approved',
    x_snc_apr_tv3b_travel_type: 'international',
    short_description: 'ServiceNow Knowledge Sydney',
  },
})

// Expenses (10 records)
export const expense1 = Record({
  $id: Now.ID['expense-1'],
  table: 'x_snc_apr_tv3b_expense',
  data: {
    x_snc_apr_tv3b_expense_type: 'airfare',
    x_snc_apr_tv3b_amount: 1200,
    x_snc_apr_tv3b_vendor: 'United Airlines',
    x_snc_apr_tv3b_expense_date: '2025-07-15',
    x_snc_apr_tv3b_reimbursement_status: 'approved',
    short_description: 'Flight to NYC',
  },
})

export const expense2 = Record({
  $id: Now.ID['expense-2'],
  table: 'x_snc_apr_tv3b_expense',
  data: {
    x_snc_apr_tv3b_expense_type: 'hotel',
    x_snc_apr_tv3b_amount: 850,
    x_snc_apr_tv3b_vendor: 'Marriott NYC',
    x_snc_apr_tv3b_expense_date: '2025-07-15',
    x_snc_apr_tv3b_reimbursement_status: 'approved',
    short_description: 'Hotel 3 nights NYC',
  },
})

export const expense3 = Record({
  $id: Now.ID['expense-3'],
  table: 'x_snc_apr_tv3b_expense',
  data: {
    x_snc_apr_tv3b_expense_type: 'meals',
    x_snc_apr_tv3b_amount: 320,
    x_snc_apr_tv3b_vendor: 'Various',
    x_snc_apr_tv3b_expense_date: '2025-07-16',
    x_snc_apr_tv3b_reimbursement_status: 'submitted',
    short_description: 'Meals NYC trip',
  },
})

export const expense4 = Record({
  $id: Now.ID['expense-4'],
  table: 'x_snc_apr_tv3b_expense',
  data: {
    x_snc_apr_tv3b_expense_type: 'transport',
    x_snc_apr_tv3b_amount: 95,
    x_snc_apr_tv3b_vendor: 'Yellow Cab',
    x_snc_apr_tv3b_expense_date: '2025-07-15',
    x_snc_apr_tv3b_reimbursement_status: 'approved',
    short_description: 'Airport transfers',
  },
})

export const expense5 = Record({
  $id: Now.ID['expense-5'],
  table: 'x_snc_apr_tv3b_expense',
  data: {
    x_snc_apr_tv3b_expense_type: 'airfare',
    x_snc_apr_tv3b_amount: 2800,
    x_snc_apr_tv3b_vendor: 'Qantas',
    x_snc_apr_tv3b_expense_date: '2025-10-10',
    x_snc_apr_tv3b_reimbursement_status: 'submitted',
    short_description: 'Flight to Sydney',
  },
})

export const expense6 = Record({
  $id: Now.ID['expense-6'],
  table: 'x_snc_apr_tv3b_expense',
  data: {
    x_snc_apr_tv3b_expense_type: 'hotel',
    x_snc_apr_tv3b_amount: 1750,
    x_snc_apr_tv3b_vendor: 'Four Seasons Sydney',
    x_snc_apr_tv3b_expense_date: '2025-10-10',
    x_snc_apr_tv3b_reimbursement_status: 'submitted',
    short_description: 'Hotel 7 nights Sydney',
  },
})

export const expense7 = Record({
  $id: Now.ID['expense-7'],
  table: 'x_snc_apr_tv3b_expense',
  data: {
    x_snc_apr_tv3b_expense_type: 'meals',
    x_snc_apr_tv3b_amount: 650,
    x_snc_apr_tv3b_vendor: 'Various',
    x_snc_apr_tv3b_expense_date: '2025-10-12',
    x_snc_apr_tv3b_reimbursement_status: 'submitted',
    short_description: 'Meals Sydney trip',
  },
})

export const expense8 = Record({
  $id: Now.ID['expense-8'],
  table: 'x_snc_apr_tv3b_expense',
  data: {
    x_snc_apr_tv3b_expense_type: 'visa',
    x_snc_apr_tv3b_amount: 180,
    x_snc_apr_tv3b_vendor: 'Australia Immigration',
    x_snc_apr_tv3b_expense_date: '2025-09-15',
    x_snc_apr_tv3b_reimbursement_status: 'approved',
    short_description: 'Australia visa fee',
  },
})

export const expense9 = Record({
  $id: Now.ID['expense-9'],
  table: 'x_snc_apr_tv3b_expense',
  data: {
    x_snc_apr_tv3b_expense_type: 'transport',
    x_snc_apr_tv3b_amount: 220,
    x_snc_apr_tv3b_vendor: 'Uber',
    x_snc_apr_tv3b_expense_date: '2025-10-10',
    x_snc_apr_tv3b_reimbursement_status: 'submitted',
    short_description: 'Ground transport Sydney',
  },
})

export const expense10 = Record({
  $id: Now.ID['expense-10'],
  table: 'x_snc_apr_tv3b_expense',
  data: {
    x_snc_apr_tv3b_expense_type: 'other',
    x_snc_apr_tv3b_amount: 75,
    x_snc_apr_tv3b_vendor: 'Conference Center',
    x_snc_apr_tv3b_expense_date: '2025-10-11',
    x_snc_apr_tv3b_reimbursement_status: 'rejected',
    short_description: 'Conference materials',
  },
})

// Delegations (2 records)
export const delegation1 = Record({
  $id: Now.ID['delegation-1'],
  table: 'x_snc_apr_tv3b_delegation',
  data: {
    x_snc_apr_tv3b_start_date: '2025-06-01',
    x_snc_apr_tv3b_end_date: '2025-12-31',
    x_snc_apr_tv3b_active: true,
  },
})

export const delegation2 = Record({
  $id: Now.ID['delegation-2'],
  table: 'x_snc_apr_tv3b_delegation',
  data: {
    x_snc_apr_tv3b_start_date: '2025-01-01',
    x_snc_apr_tv3b_end_date: '2025-03-31',
    x_snc_apr_tv3b_active: false,
  },
})

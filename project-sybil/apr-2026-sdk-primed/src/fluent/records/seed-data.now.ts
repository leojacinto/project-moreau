import { Record } from '@servicenow/sdk/core'

// --- §25 Travel Policies (5 records) ---

export const policyGlobal = Record({
    $id: Now.ID['seed_policy_global'],
    table: 'x_snc_apr_trv_policy',
    
    data: {
        policy_name: 'Global Default',
        applies_to_country: '*',
        max_daily_hotel: 200,
        max_daily_meals: 75,
        max_flight_class: 'economy',
        requires_finance_approval_above: 5000,
        active: true,
    },
})

export const policyUSA = Record({
    $id: Now.ID['seed_policy_usa'],
    table: 'x_snc_apr_trv_policy',
    
    data: {
        policy_name: 'USA',
        applies_to_country: 'United States',
        max_daily_hotel: 300,
        max_daily_meals: 100,
        max_flight_class: 'economy',
        requires_finance_approval_above: 5000,
        active: true,
    },
})

export const policyJapan = Record({
    $id: Now.ID['seed_policy_japan'],
    table: 'x_snc_apr_trv_policy',
    
    data: {
        policy_name: 'Japan',
        applies_to_country: 'Japan',
        max_daily_hotel: 350,
        max_daily_meals: 120,
        max_flight_class: 'premium_economy',
        requires_finance_approval_above: 8000,
        active: true,
    },
})

export const policyUK = Record({
    $id: Now.ID['seed_policy_uk'],
    table: 'x_snc_apr_trv_policy',
    
    data: {
        policy_name: 'United Kingdom',
        applies_to_country: 'United Kingdom',
        max_daily_hotel: 280,
        max_daily_meals: 90,
        max_flight_class: 'economy',
        requires_finance_approval_above: 5000,
        active: true,
    },
})

export const policyAustralia = Record({
    $id: Now.ID['seed_policy_australia'],
    table: 'x_snc_apr_trv_policy',
    
    data: {
        policy_name: 'Australia',
        applies_to_country: 'Australia',
        max_daily_hotel: 250,
        max_daily_meals: 85,
        max_flight_class: 'economy',
        requires_finance_approval_above: 5000,
        active: true,
    },
})

// --- §25 Sample Travel Requests (5 records) ---

export const sampleRequest1 = Record({
    $id: Now.ID['seed_request_1'],
    table: 'x_snc_apr_trv_request',
    
    data: {
        traveler: 'javascript:gs.getUserID()',
        short_description: 'Annual Tech Conference - San Francisco',
        destination_city: 'San Francisco',
        destination_country: 'United States',
        departure_date: '2026-06-15',
        return_date: '2026-06-19',
        estimated_cost: 3500,
        purpose: 'conference',
        travel_type: 'domestic',
        approval_status: 'approved',
    },
})

export const sampleRequest2 = Record({
    $id: Now.ID['seed_request_2'],
    table: 'x_snc_apr_trv_request',
    
    data: {
        traveler: 'javascript:gs.getUserID()',
        short_description: 'Client Meeting - Tokyo',
        destination_city: 'Tokyo',
        destination_country: 'Japan',
        departure_date: '2026-07-01',
        return_date: '2026-07-05',
        estimated_cost: 8500,
        purpose: 'client_meeting',
        travel_type: 'international',
        requires_visa: false,
        approval_status: 'finance_review',
    },
})

export const sampleRequest3 = Record({
    $id: Now.ID['seed_request_3'],
    table: 'x_snc_apr_trv_request',
    
    data: {
        traveler: 'javascript:gs.getUserID()',
        short_description: 'Training Workshop - London',
        destination_city: 'London',
        destination_country: 'United Kingdom',
        departure_date: '2026-05-20',
        return_date: '2026-05-23',
        estimated_cost: 4200,
        purpose: 'training',
        travel_type: 'international',
        requires_visa: true,
        approval_status: 'pending',
    },
})

export const sampleRequest4 = Record({
    $id: Now.ID['seed_request_4'],
    table: 'x_snc_apr_trv_request',
    
    data: {
        traveler: 'javascript:gs.getUserID()',
        short_description: 'Internal Offsite - Chicago',
        destination_city: 'Chicago',
        destination_country: 'United States',
        departure_date: '2026-04-10',
        return_date: '2026-04-12',
        estimated_cost: 1200,
        purpose: 'internal',
        travel_type: 'domestic',
        approval_status: 'approved',
    },
})

export const sampleRequest5 = Record({
    $id: Now.ID['seed_request_5'],
    table: 'x_snc_apr_trv_request',
    
    data: {
        traveler: 'javascript:gs.getUserID()',
        short_description: 'Partner Visit - Sydney',
        destination_city: 'Sydney',
        destination_country: 'Australia',
        departure_date: '2026-08-01',
        return_date: '2026-08-07',
        estimated_cost: 6800,
        purpose: 'client_meeting',
        travel_type: 'international',
        requires_visa: true,
        approval_status: 'rejected',
    },
})

// --- §25 Sample Expenses (10 records) ---

export const sampleExpense1 = Record({
    $id: Now.ID['seed_expense_1'],
    table: 'x_snc_apr_trv_expense',
    
    data: {
        short_description: 'Round-trip flight SFO',
        travel_request: sampleRequest1,
        expense_type: 'airfare',
        amount: 850,
        vendor: 'United Airlines',
        expense_date: '2026-06-15',
        reimbursement_status: 'approved',
    },
})

export const sampleExpense2 = Record({
    $id: Now.ID['seed_expense_2'],
    table: 'x_snc_apr_trv_expense',
    
    data: {
        short_description: 'Hotel 4 nights SFO',
        travel_request: sampleRequest1,
        expense_type: 'hotel',
        amount: 1200,
        vendor: 'Marriott Union Square',
        expense_date: '2026-06-15',
        reimbursement_status: 'approved',
    },
})

export const sampleExpense3 = Record({
    $id: Now.ID['seed_expense_3'],
    table: 'x_snc_apr_trv_expense',
    
    data: {
        short_description: 'Meals during conference',
        travel_request: sampleRequest1,
        expense_type: 'meals',
        amount: 320,
        vendor: 'Various restaurants',
        expense_date: '2026-06-16',
        reimbursement_status: 'approved',
    },
})

export const sampleExpense4 = Record({
    $id: Now.ID['seed_expense_4'],
    table: 'x_snc_apr_trv_expense',
    
    data: {
        short_description: 'Uber rides SFO',
        travel_request: sampleRequest1,
        expense_type: 'transport',
        amount: 145,
        vendor: 'Uber',
        expense_date: '2026-06-15',
        reimbursement_status: 'approved',
    },
})

export const sampleExpense5 = Record({
    $id: Now.ID['seed_expense_5'],
    table: 'x_snc_apr_trv_expense',
    
    data: {
        short_description: 'Flight to Chicago',
        travel_request: sampleRequest4,
        expense_type: 'airfare',
        amount: 380,
        vendor: 'American Airlines',
        expense_date: '2026-04-10',
        reimbursement_status: 'approved',
    },
})

export const sampleExpense6 = Record({
    $id: Now.ID['seed_expense_6'],
    table: 'x_snc_apr_trv_expense',
    
    data: {
        short_description: 'Hotel 2 nights Chicago',
        travel_request: sampleRequest4,
        expense_type: 'hotel',
        amount: 450,
        vendor: 'Hilton Chicago',
        expense_date: '2026-04-10',
        reimbursement_status: 'approved',
    },
})

export const sampleExpense7 = Record({
    $id: Now.ID['seed_expense_7'],
    table: 'x_snc_apr_trv_expense',
    
    data: {
        short_description: 'Meals Chicago offsite',
        travel_request: sampleRequest4,
        expense_type: 'meals',
        amount: 180,
        vendor: 'Various',
        expense_date: '2026-04-11',
        reimbursement_status: 'submitted',
    },
})

export const sampleExpense8 = Record({
    $id: Now.ID['seed_expense_8'],
    table: 'x_snc_apr_trv_expense',
    
    data: {
        short_description: 'Taxi to airport Chicago',
        travel_request: sampleRequest4,
        expense_type: 'transport',
        amount: 65,
        vendor: 'Yellow Cab',
        expense_date: '2026-04-12',
        reimbursement_status: 'submitted',
    },
})

export const sampleExpense9 = Record({
    $id: Now.ID['seed_expense_9'],
    table: 'x_snc_apr_trv_expense',
    
    data: {
        short_description: 'Conference registration SFO',
        travel_request: sampleRequest1,
        expense_type: 'other',
        amount: 899,
        vendor: 'TechConf 2026',
        expense_date: '2026-06-15',
        reimbursement_status: 'approved',
    },
})

export const sampleExpense10 = Record({
    $id: Now.ID['seed_expense_10'],
    table: 'x_snc_apr_trv_expense',
    
    data: {
        short_description: 'Visa application fee - Australia',
        travel_request: sampleRequest5,
        expense_type: 'visa',
        amount: 190,
        vendor: 'Australian Embassy',
        expense_date: '2026-07-15',
        reimbursement_status: 'rejected',
    },
})

// --- §25 Sample Delegations (2 records) ---

export const sampleDelegationActive = Record({
    $id: Now.ID['seed_delegation_active'],
    table: 'x_snc_apr_trv_delegation',
    
    data: {
        delegator: 'javascript:gs.getUserID()',
        delegate: 'javascript:gs.getUserID()',
        start_date: '2026-04-01',
        end_date: '2026-06-30',
        active: true,
    },
})

export const sampleDelegationExpired = Record({
    $id: Now.ID['seed_delegation_expired'],
    table: 'x_snc_apr_trv_delegation',
    
    data: {
        delegator: 'javascript:gs.getUserID()',
        delegate: 'javascript:gs.getUserID()',
        start_date: '2026-01-01',
        end_date: '2026-02-28',
        active: false,
    },
})

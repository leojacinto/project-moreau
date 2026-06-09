import '@servicenow/sdk/global';
import { Table, StringColumn, Record } from '@servicenow/sdk/core';

// -- Travel Policy Section table
// Stores the travel policy as discrete, searchable sections for RAG retrieval
export const x_snc_travel_a7t2p_travel_policy_section = Table({
    name: 'x_snc_travel_a7t2p_travel_policy_section',
    label: 'Travel Policy Section',
    accessible_from: 'public',
    actions: ['create', 'read', 'update', 'delete'],
    allow_web_service_access: true,
    schema: {
        section_id: StringColumn({ label: 'Section ID', maxLength: 40 }),
        title: StringColumn({ label: 'Title', maxLength: 200 }),
        policy_text: StringColumn({ label: 'Policy Text', maxLength: 8000 }),
        category: StringColumn({ label: 'Category', maxLength: 100 }),
        effective_date: StringColumn({ label: 'Effective Date', maxLength: 40 }),
    },
    display: 'title',
});

// -- Seed data: 15 policy sections

export const policy_section_1 = Record({
    $id: Now.ID['policy-section-purpose-and-scope'],
    table: 'x_snc_travel_a7t2p_travel_policy_section',
    data: {
        section_id: 'PURPOSE_AND_SCOPE',
        title: 'Purpose and Scope',
        category: 'approval',
        effective_date: '2026-04-01',
        policy_text: 'This policy establishes guidelines and procedures for all business-related travel to ensure employee safety, cost efficiency, and consistent practices across the organisation. It applies to all full-time, part-time, and contract employees travelling on company business, whether domestic or international. All travel must comply with this policy. Exceptions require written pre-approval from the appropriate authority as defined in the Approval Routing Matrix section. The Travel Approval Agent uses this policy as its authoritative source when processing travel requests.',
    },
});

export const policy_section_2 = Record({
    $id: Now.ID['policy-section-travel-approval'],
    table: 'x_snc_travel_a7t2p_travel_policy_section',
    data: {
        section_id: 'TRAVEL_APPROVAL',
        title: 'Travel Approval Requirements',
        category: 'approval',
        effective_date: '2026-04-01',
        policy_text: 'All business travel must be pre-approved before any bookings are made. Domestic travel requires direct manager approval. International travel requires VP-level approval or above. Conference or event attendance requires manager approval and a brief justification outlining expected business value. Approval requests must be submitted at least 10 business days in advance for domestic travel and 20 business days for international travel. Late submissions may still be processed but are flagged for review and may experience delays. Emergency travel (unplanned, business-critical) may be submitted with less notice but requires same-day manager notification and retrospective approval documentation within 3 business days.',
    },
});

export const policy_section_3 = Record({
    $id: Now.ID['policy-section-booking-procedures'],
    table: 'x_snc_travel_a7t2p_travel_policy_section',
    data: {
        section_id: 'BOOKING_PROCEDURES',
        title: 'Booking Procedures',
        category: 'booking',
        effective_date: '2026-04-01',
        policy_text: 'All travel must be booked through the company\'s designated travel management platform. Personal booking outside the platform will not be reimbursed unless pre-approved in writing by the Finance team. Employees should book the most cost-effective options that reasonably meet business needs. Loyalty programme preferences are permitted provided they do not result in materially higher costs. Flights should be booked at least 14 days in advance when possible to secure lower fares. Corporate discount codes and preferred supplier agreements should be used where available.',
    },
});

export const policy_section_4 = Record({
    $id: Now.ID['policy-section-air-travel'],
    table: 'x_snc_travel_a7t2p_travel_policy_section',
    data: {
        section_id: 'AIR_TRAVEL',
        title: 'Air Travel Policy',
        category: 'air',
        effective_date: '2026-04-01',
        policy_text: 'Flights under 6 hours: Economy class only. Flights 6 hours or longer: Premium economy is permitted without additional approval. Business class: Requires VP-level approval and is generally reserved for executive leadership or client-facing obligations where arrival condition materially affects business outcomes. First class: Not permitted under any circumstances. Employees should book flights at least 14 days in advance when possible to secure lower fares. Preferred airlines and corporate discount codes should be used where available. Seat selection and standard checked baggage fees are reimbursable. Excess baggage fees require justification. Flight change fees are reimbursable when changes are business-driven; personal convenience changes are not reimbursable.',
    },
});

export const policy_section_5 = Record({
    $id: Now.ID['policy-section-ground-transport'],
    table: 'x_snc_travel_a7t2p_travel_policy_section',
    data: {
        section_id: 'GROUND_TRANSPORT',
        title: 'Ground Transportation Policy',
        category: 'ground',
        effective_date: '2026-04-01',
        policy_text: 'Rental cars: Mid-size category or below. Full insurance coverage must be selected. Fuel-efficient or electric vehicles are preferred. Premium or luxury vehicles are not permitted without VP approval. Rideshare and taxis: Permitted for airport transfers and local business travel. Standard service tiers only. Premium tiers (e.g. Black, Lux) require written justification and manager approval. Personal vehicles: Reimbursed at the current government-published mileage rate. Toll and parking costs are reimbursable with receipts. Public transport: Encouraged where practical and fully reimbursable. This includes trains, buses, metro, and airport shuttles. Always the preferred option where time-practical.',
    },
});

export const policy_section_6 = Record({
    $id: Now.ID['policy-section-accommodation'],
    table: 'x_snc_travel_a7t2p_travel_policy_section',
    data: {
        section_id: 'ACCOMMODATION',
        title: 'Accommodation Policy',
        category: 'accommodation',
        effective_date: '2026-04-01',
        policy_text: 'Nightly rate cap: Up to $250 AUD per night for domestic travel, or $250 USD equivalent per night for international travel, excluding taxes and mandatory resort fees. Hotels should be selected based on proximity to the business venue, safety rating, and value. Preferred hotel chains with corporate rates should be used where available. Incidentals such as minibar, in-room entertainment, and laundry are not reimbursable unless the trip exceeds 5 consecutive nights, at which point a reasonable laundry allowance applies. Room service is permitted but counts against the daily meal per-diem. Rate exceptions above the cap require manager pre-approval with documented justification (e.g. conference hotel block, safety considerations in the area, no alternatives within cap radius).',
    },
});

export const policy_section_7 = Record({
    $id: Now.ID['policy-section-meals-per-diem'],
    table: 'x_snc_travel_a7t2p_travel_policy_section',
    data: {
        section_id: 'MEALS_PER_DIEM',
        title: 'Meals and Daily Expense Allowances',
        category: 'meals',
        effective_date: '2026-04-01',
        policy_text: 'Daily meal and incidental allowances follow a per-diem model. Breakfast: $25 AUD domestic, $25 USD international. Lunch: $30 AUD domestic, $30 USD international. Dinner: $50 AUD domestic, $50 USD international. Incidentals: $20 AUD domestic, $20 USD international. Daily total: $125 AUD domestic, $125 USD international. The per-diem is a daily cap, not an entitlement. Employees claim actual spend up to the cap. Receipts are required for individual items over $25. Alcohol is not reimbursable except during pre-approved client entertainment. When meals are provided by the event, conference, or client, the per-diem for that meal is not claimable. Team meals where multiple employees are present should be claimed by the most senior attendee to avoid duplicate claims.',
    },
});

export const policy_section_8 = Record({
    $id: Now.ID['policy-section-client-entertainment'],
    table: 'x_snc_travel_a7t2p_travel_policy_section',
    data: {
        section_id: 'CLIENT_ENTERTAINMENT',
        title: 'Client Entertainment Policy',
        category: 'entertainment',
        effective_date: '2026-04-01',
        policy_text: 'Client entertainment expenses require prior manager approval and must include: business purpose of the meeting, names and titles of all attendees (both company and client), itemised receipt, and clear connection to a business opportunity or relationship. A per-person cap of $100 applies unless a specific exception is approved by a VP or above. Entertainment venues should be professional and appropriate. Alcohol may be reimbursed as part of client entertainment only, within the per-person cap, and only when the primary purpose of the event is a business meal or meeting. Entertainment of prospects where no existing relationship exists requires VP pre-approval. Internal-only entertainment (team dinners, celebrations) is not covered under this policy and falls under the separate team events budget.',
    },
});

export const policy_section_9 = Record({
    $id: Now.ID['policy-section-expense-reporting'],
    table: 'x_snc_travel_a7t2p_travel_policy_section',
    data: {
        section_id: 'EXPENSE_REPORTING',
        title: 'Expense Reporting Requirements',
        category: 'expenses',
        effective_date: '2026-04-01',
        policy_text: 'All travel expenses must be submitted within 10 business days of trip completion via the company expense management system. Submissions must include: original itemised receipts (digital copies accepted), currency conversion documentation for international expenses (use the exchange rate on the date of the transaction), and the approved travel request reference number linking back to the pre-approved request. Late submissions beyond 30 days may not be reimbursed without VP-level exception approval. Expenses submitted without a matching pre-approved travel request will be returned for correction. Managers must review and approve expense reports within 5 business days of submission.',
    },
});

export const policy_section_10 = Record({
    $id: Now.ID['policy-section-non-reimbursable'],
    table: 'x_snc_travel_a7t2p_travel_policy_section',
    data: {
        section_id: 'NON_REIMBURSABLE',
        title: 'Non-Reimbursable Expenses',
        category: 'expenses',
        effective_date: '2026-04-01',
        policy_text: 'The following expenses are not eligible for reimbursement under any circumstances: personal entertainment, sightseeing, or excursions; airline lounge memberships (unless pre-approved for frequent travellers completing more than 12 flights per quarter); travel insurance purchased independently (the company provides coverage); fines, penalties, or parking violations; upgrades beyond policy guidelines without prior approval; expenses for accompanying family members or companions; loss or theft of personal belongings; gym or spa facilities at hotels; in-room movies or entertainment (unless trip exceeds 5 nights); personal phone calls beyond reasonable business communication; gifts for clients (covered under a separate gifts policy); charitable donations made during travel.',
    },
});

export const policy_section_11 = Record({
    $id: Now.ID['policy-section-travel-safety'],
    table: 'x_snc_travel_a7t2p_travel_policy_section',
    data: {
        section_id: 'TRAVEL_SAFETY',
        title: 'Travel Safety and Insurance',
        category: 'safety',
        effective_date: '2026-04-01',
        policy_text: 'The company provides comprehensive travel insurance covering medical emergencies, trip cancellation, and lost luggage for all approved business travel. Employees must: register all international trips with the company\'s travel security provider at least 5 business days before departure; review destination-specific safety advisories before departure; carry emergency contact details for the company\'s 24/7 travel assistance line; comply with all government travel advisories. Travel to regions under a government "Do Not Travel" advisory is prohibited without CEO-level exception. Travel to regions under "Reconsider Your Need to Travel" advisories requires VP approval and completion of a risk assessment form. Employees must maintain communication with their manager during international travel and report any safety concerns immediately through the travel assistance line.',
    },
});

export const policy_section_12 = Record({
    $id: Now.ID['policy-section-sustainability'],
    table: 'x_snc_travel_a7t2p_travel_policy_section',
    data: {
        section_id: 'SUSTAINABILITY',
        title: 'Sustainability Guidelines',
        category: 'sustainability',
        effective_date: '2026-04-01',
        policy_text: 'The company is committed to reducing the environmental impact of business travel. Before booking travel, employees should consider whether a virtual meeting could achieve the same business outcome. If travel is necessary: choose direct flights over connections where cost-comparable (direct flights typically produce fewer emissions); select hotels with recognised sustainability certifications; opt for electric or hybrid rental vehicles when available at comparable rates; use public transport where time-practical; combine multiple meetings into a single trip where possible to reduce total travel frequency. For domestic trips under 4 hours by train, rail travel is preferred over flying where schedules permit. The company tracks aggregate travel emissions quarterly and publishes departmental comparisons to encourage awareness.',
    },
});

export const policy_section_13 = Record({
    $id: Now.ID['policy-section-policy-violations'],
    table: 'x_snc_travel_a7t2p_travel_policy_section',
    data: {
        section_id: 'POLICY_VIOLATIONS',
        title: 'Policy Violations',
        category: 'violations',
        effective_date: '2026-04-01',
        policy_text: 'Non-compliance with this policy may result in: first instance - denial of expense reimbursement for the non-compliant items and a documented conversation with the employee\'s manager; repeated violations - formal performance management action and temporary suspension of travel approval privileges; wilful or fraudulent violations - immediate disciplinary action up to and including termination, and potential referral for legal review. Disputes should be raised with the employee\'s manager in the first instance and escalated to Finance if unresolved within 5 business days. Employees may also raise concerns through the company\'s anonymous ethics hotline. This policy is reviewed annually by Finance and Operations.',
    },
});

export const policy_section_14 = Record({
    $id: Now.ID['policy-section-extended-stay'],
    table: 'x_snc_travel_a7t2p_travel_policy_section',
    data: {
        section_id: 'EXTENDED_STAY',
        title: 'Extended Stay and Serviced Apartments',
        category: 'accommodation',
        effective_date: '2026-04-01',
        policy_text: 'For trips of 5 or more consecutive nights, employees should explore serviced apartments or extended-stay hotel options, which typically offer significant cost savings over standard hotel rates for longer durations. Extended stay accommodation often includes kitchen facilities, which can reduce meal costs. When an extended-stay option is selected at a rate below the nightly cap, the cost savings are noted in the travel request assessment. Sharing arrangements are not required but are encouraged for team travel where appropriate and where both parties agree. For relocations or temporary assignments exceeding 30 days, the corporate housing policy applies instead of this travel policy.',
    },
});

export const policy_section_15 = Record({
    $id: Now.ID['policy-section-approval-routing'],
    table: 'x_snc_travel_a7t2p_travel_policy_section',
    data: {
        section_id: 'APPROVAL_ROUTING',
        title: 'Approval Routing Matrix',
        category: 'approval',
        effective_date: '2026-04-01',
        policy_text: 'This matrix defines the minimum approval authority required for each travel scenario. Domestic travel under $2000 total: Manager approval. Domestic travel $2000-$5000 total: Manager approval, Finance notification. Domestic travel over $5000 total: VP approval. International travel under $5000 total: VP approval. International travel $5000-$15000 total: VP approval, Finance review. International travel over $15000 total: SVP approval. Business class air travel (any amount): VP approval. Client entertainment over $100 per person: VP approval. Conference attendance over $3000 total: VP approval, L&D notification. Emergency travel (retroactive): Manager approval within 3 business days. Group travel (3+ employees, same destination, same dates): VP approval required regardless of individual amounts, with group travel justification form. When multiple rules apply, the highest approval level governs. The Travel Approval Agent evaluates all applicable rules and routes to the highest required authority.',
    },
});

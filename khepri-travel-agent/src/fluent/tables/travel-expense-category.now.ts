import '@servicenow/sdk/global';
import { Table, StringColumn, Record } from '@servicenow/sdk/core';

// -- Travel Expense Category table
// Stores per-diem rates and non-reimbursable items for reference
export const x_snc_travel_a7t2p_travel_expense_category = Table({
    name: 'x_snc_travel_a7t2p_travel_expense_category',
    label: 'Travel Expense Category',
    accessible_from: 'public',
    actions: ['create', 'read', 'update', 'delete'],
    allow_web_service_access: true,
    display: 'category_name',
    schema: {
        category_id: StringColumn({ label: 'Category ID', maxLength: 40 }),
        category_name: StringColumn({ label: 'Category Name', maxLength: 200 }),
        domestic_rate: StringColumn({ label: 'Domestic Rate', maxLength: 40 }),
        international_rate: StringColumn({ label: 'International Rate', maxLength: 40 }),
        reimbursable: StringColumn({ label: 'Reimbursable', maxLength: 10 }),
        notes: StringColumn({ label: 'Notes', maxLength: 1000 }),
    },
});

// -- Seed data: 10 expense categories

export const expense_cat_1 = Record({
    $id: Now.ID['expense-cat-meal-breakfast'],
    table: 'x_snc_travel_a7t2p_travel_expense_category',
    data: {
        category_id: 'MEAL_BREAKFAST',
        category_name: 'Breakfast',
        domestic_rate: '25',
        international_rate: '25',
        reimbursable: 'true',
        notes: 'Per-diem allowance. Receipts not required under per-diem model.',
    },
});

export const expense_cat_2 = Record({
    $id: Now.ID['expense-cat-meal-lunch'],
    table: 'x_snc_travel_a7t2p_travel_expense_category',
    data: {
        category_id: 'MEAL_LUNCH',
        category_name: 'Lunch',
        domestic_rate: '30',
        international_rate: '30',
        reimbursable: 'true',
        notes: 'Per-diem allowance.',
    },
});

export const expense_cat_3 = Record({
    $id: Now.ID['expense-cat-meal-dinner'],
    table: 'x_snc_travel_a7t2p_travel_expense_category',
    data: {
        category_id: 'MEAL_DINNER',
        category_name: 'Dinner',
        domestic_rate: '50',
        international_rate: '50',
        reimbursable: 'true',
        notes: 'Per-diem allowance.',
    },
});

export const expense_cat_4 = Record({
    $id: Now.ID['expense-cat-meal-incidental'],
    table: 'x_snc_travel_a7t2p_travel_expense_category',
    data: {
        category_id: 'MEAL_INCIDENTAL',
        category_name: 'Incidentals',
        domestic_rate: '20',
        international_rate: '20',
        reimbursable: 'true',
        notes: 'Daily incidental allowance.',
    },
});

export const expense_cat_5 = Record({
    $id: Now.ID['expense-cat-exp-alcohol'],
    table: 'x_snc_travel_a7t2p_travel_expense_category',
    data: {
        category_id: 'EXP_ALCOHOL',
        category_name: 'Alcohol',
        domestic_rate: '0',
        international_rate: '0',
        reimbursable: 'false',
        notes: 'Not reimbursable except during pre-approved client entertainment.',
    },
});

export const expense_cat_6 = Record({
    $id: Now.ID['expense-cat-exp-personal'],
    table: 'x_snc_travel_a7t2p_travel_expense_category',
    data: {
        category_id: 'EXP_PERSONAL',
        category_name: 'Personal entertainment',
        domestic_rate: '0',
        international_rate: '0',
        reimbursable: 'false',
        notes: 'Sightseeing, excursions, personal entertainment are never reimbursable.',
    },
});

export const expense_cat_7 = Record({
    $id: Now.ID['expense-cat-exp-lounge'],
    table: 'x_snc_travel_a7t2p_travel_expense_category',
    data: {
        category_id: 'EXP_LOUNGE',
        category_name: 'Airline lounge membership',
        domestic_rate: '0',
        international_rate: '0',
        reimbursable: 'false',
        notes: 'Not reimbursable unless pre-approved for frequent travellers.',
    },
});

export const expense_cat_8 = Record({
    $id: Now.ID['expense-cat-exp-minibar'],
    table: 'x_snc_travel_a7t2p_travel_expense_category',
    data: {
        category_id: 'EXP_MINIBAR',
        category_name: 'Hotel incidentals (minibar/laundry)',
        domestic_rate: '0',
        international_rate: '0',
        reimbursable: 'false',
        notes: 'Not reimbursable unless trip exceeds 5 consecutive nights.',
    },
});

export const expense_cat_9 = Record({
    $id: Now.ID['expense-cat-exp-fines'],
    table: 'x_snc_travel_a7t2p_travel_expense_category',
    data: {
        category_id: 'EXP_FINES',
        category_name: 'Fines and penalties',
        domestic_rate: '0',
        international_rate: '0',
        reimbursable: 'false',
        notes: 'Parking violations, speeding fines, and penalties are never reimbursable.',
    },
});

export const expense_cat_10 = Record({
    $id: Now.ID['expense-cat-exp-companion'],
    table: 'x_snc_travel_a7t2p_travel_expense_category',
    data: {
        category_id: 'EXP_COMPANION',
        category_name: 'Companion travel',
        domestic_rate: '0',
        international_rate: '0',
        reimbursable: 'false',
        notes: 'Expenses for accompanying family members or companions are never reimbursable.',
    },
});

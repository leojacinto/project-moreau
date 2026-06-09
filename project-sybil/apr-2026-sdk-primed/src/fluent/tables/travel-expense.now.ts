import {
    Table,
    ReferenceColumn,
    StringColumn,
    DateColumn,
    DecimalColumn,
    ChoiceColumn,
} from '@servicenow/sdk/core'

export const x_snc_apr_trv_expense = Table({
    name: 'x_snc_apr_trv_expense',
    extends: 'task',
    label: 'Travel Expense',
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    autoNumber: {
        prefix: 'TEXP',
        number: 1000000,
        numberOfDigits: 7,
    },
    schema: {
        travel_request: ReferenceColumn({
            label: 'Travel Request',
            referenceTable: 'x_snc_apr_trv_request',
            mandatory: true,
        }),
        expense_type: ChoiceColumn({
            label: 'Expense Type',
            mandatory: true,
            choices: {
                airfare: { label: 'Airfare', sequence: 1 },
                hotel: { label: 'Hotel', sequence: 2 },
                meals: { label: 'Meals', sequence: 3 },
                transport: { label: 'Transport', sequence: 4 },
                visa: { label: 'Visa', sequence: 5 },
                other: { label: 'Other', sequence: 6 },
            },
        }),
        amount: DecimalColumn({
            label: 'Amount',
            mandatory: true,
        }),
        expense_date: DateColumn({
            label: 'Expense Date',
            mandatory: true,
        }),
        vendor: StringColumn({
            label: 'Vendor',
            maxLength: 200,
        }),
        reimbursement_status: ChoiceColumn({
            label: 'Reimbursement Status',
            defaultValue: 'submitted',
            choices: {
                submitted: { label: 'Submitted', sequence: 1 },
                approved: { label: 'Approved', sequence: 2 },
                paid: { label: 'Paid', sequence: 3 },
                rejected: { label: 'Rejected', sequence: 4 },
            },
        }),
    },
})

import {
    Table,
    ReferenceColumn,
    StringColumn,
    DateColumn,
    DecimalColumn,
    ChoiceColumn,
    BooleanColumn,
    MultiLineTextColumn,
} from '@servicenow/sdk/core'

export const x_snc_apr_trv_request = Table({
    name: 'x_snc_apr_trv_request',
    extends: 'task',
    label: 'Travel Request',
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    autoNumber: {
        prefix: 'TREQ',
        number: 1000000,
        numberOfDigits: 7,
    },
    schema: {
        traveler: ReferenceColumn({
            label: 'Traveler',
            referenceTable: 'sys_user',
            mandatory: true,
        }),
        destination_city: StringColumn({
            label: 'Destination City',
            maxLength: 100,
            mandatory: true,
        }),
        destination_country: StringColumn({
            label: 'Destination Country',
            maxLength: 100,
            mandatory: true,
        }),
        departure_date: DateColumn({
            label: 'Departure Date',
            mandatory: true,
        }),
        return_date: DateColumn({
            label: 'Return Date',
            mandatory: true,
        }),
        estimated_cost: DecimalColumn({
            label: 'Estimated Cost',
        }),
        actual_cost: DecimalColumn({
            label: 'Actual Cost',
        }),
        purpose: ChoiceColumn({
            label: 'Purpose',
            choices: {
                conference: { label: 'Conference', sequence: 1 },
                client_meeting: { label: 'Client Meeting', sequence: 2 },
                training: { label: 'Training', sequence: 3 },
                internal: { label: 'Internal', sequence: 4 },
                other: { label: 'Other', sequence: 5 },
            },
        }),
        department: ReferenceColumn({
            label: 'Department',
            referenceTable: 'cmn_department',
        }),
        approval_status: ChoiceColumn({
            label: 'Approval Status',
            defaultValue: 'pending',
            choices: {
                pending: { label: 'Pending', sequence: 1 },
                approved: { label: 'Approved', sequence: 2 },
                rejected: { label: 'Rejected', sequence: 3 },
                finance_review: { label: 'Finance Review', sequence: 4 },
            },
        }),
        travel_type: ChoiceColumn({
            label: 'Travel Type',
            choices: {
                domestic: { label: 'Domestic', sequence: 1 },
                international: { label: 'International', sequence: 2 },
            },
        }),
        requires_visa: BooleanColumn({
            label: 'Requires Visa',
        }),
        notes: MultiLineTextColumn({
            label: 'Notes',
        }),
    },
})

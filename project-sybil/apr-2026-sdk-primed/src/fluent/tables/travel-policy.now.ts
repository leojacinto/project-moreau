import {
    Table,
    StringColumn,
    DecimalColumn,
    ChoiceColumn,
    BooleanColumn,
} from '@servicenow/sdk/core'

export const x_snc_apr_trv_policy = Table({
    name: 'x_snc_apr_trv_policy',
    label: 'Travel Policy',
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    schema: {
        policy_name: StringColumn({
            label: 'Policy Name',
            maxLength: 200,
            mandatory: true,
        }),
        max_daily_hotel: DecimalColumn({
            label: 'Max Daily Hotel',
        }),
        max_daily_meals: DecimalColumn({
            label: 'Max Daily Meals',
        }),
        max_flight_class: ChoiceColumn({
            label: 'Max Flight Class',
            choices: {
                economy: { label: 'Economy', sequence: 1 },
                premium_economy: { label: 'Premium Economy', sequence: 2 },
                business: { label: 'Business', sequence: 3 },
            },
        }),
        applies_to_country: StringColumn({
            label: 'Applies to Country',
            maxLength: 100,
        }),
        requires_finance_approval_above: DecimalColumn({
            label: 'Requires Finance Approval Above',
        }),
        active: BooleanColumn({
            label: 'Active',
            defaultValue: true,
        }),
    },
})

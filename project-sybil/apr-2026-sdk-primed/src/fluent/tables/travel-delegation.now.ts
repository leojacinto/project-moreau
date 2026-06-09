import {
    Table,
    ReferenceColumn,
    DateColumn,
    BooleanColumn,
} from '@servicenow/sdk/core'

export const x_snc_apr_trv_delegation = Table({
    name: 'x_snc_apr_trv_delegation',
    label: 'Travel Delegation',
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    schema: {
        delegator: ReferenceColumn({
            label: 'Delegator',
            referenceTable: 'sys_user',
            mandatory: true,
        }),
        delegate: ReferenceColumn({
            label: 'Delegate',
            referenceTable: 'sys_user',
            mandatory: true,
        }),
        start_date: DateColumn({
            label: 'Start Date',
            mandatory: true,
        }),
        end_date: DateColumn({
            label: 'End Date',
            mandatory: true,
        }),
        active: BooleanColumn({
            label: 'Active',
            defaultValue: true,
        }),
    },
})

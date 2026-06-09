import { Record } from '@servicenow/sdk/core'

// --- §26 Data Sources & Import Maps ---

export const policyDataSource = Record({
    $id: Now.ID['import_policy'],
    table: 'sys_data_source',
    data: {
        name: 'Travel Policy Import',
        import_set_table_name: 'x_snc_apr_trv_policy_import',
        type: 'File',
        format: 'CSV',
        active: true,
    },
})

export const historicalRequestsDataSource = Record({
    $id: Now.ID['import_historical_requests'],
    table: 'sys_data_source',
    data: {
        name: 'Historical Requests Import',
        import_set_table_name: 'x_snc_apr_trv_request_import',
        type: 'File',
        format: 'CSV',
        active: true,
    },
})

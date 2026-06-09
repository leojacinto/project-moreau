import { Record } from '@servicenow/sdk/core'

// --- §31 LDAP / External Connections ---

export const corporateDirectoryConnection = Record({
    $id: Now.ID['conn_corporate_directory'],
    table: 'sys_connection',
    data: {
        name: 'Corporate Directory Sync',
        connection_type: 'ldap',
        description: 'Sync traveler cost center and department data from corporate HR system (simulated)',
        active: true,
    },
})

export const currencyExchangeAlias = Record({
    $id: Now.ID['conn_alias_currency_api'],
    table: 'sys_alias',
    data: {
        name: 'x_snc_apr_trv_currency_api',
        type: 'Connection and Credential Alias',
        description: 'Connection alias for currency exchange API - allows environment-specific endpoint wiring',
        active: true,
    },
})

export const currencyExchangeConnection = Record({
    $id: Now.ID['conn_currency_exchange'],
    table: 'sys_connection',
    data: {
        name: 'Currency Exchange API',
        connection_type: 'http',
        description: 'Fetch live exchange rates for international travel cost estimates',
        connection_url: 'https://api.exchangerate.host/latest',
        active: true,
    },
})

import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['9bba8b5e47304758f9de91ef016d433f'],
    table: 'sn_aia_skill_metadata',
    data: {
        description:
            'Assists new starters with onboarding questions including task status, team and manager information, IT provisioning status, building access status, and onboarding FAQs. Retrieves data from HRSD tasks, sys_user, and integration status tables. Does NOT call external systems — all data is sourced from ServiceNow platform records.',
        document_id: '6e0dcce96611457093baa6ca19d4e544',
        document_table: 'sn_aia_agent',
        internal_name: 'global.x_snc_fed_forum_on.Federal Onboarding Assistant',
        name: 'Federal Onboarding Assistant',
        sys_domain: 'global',
    },
})

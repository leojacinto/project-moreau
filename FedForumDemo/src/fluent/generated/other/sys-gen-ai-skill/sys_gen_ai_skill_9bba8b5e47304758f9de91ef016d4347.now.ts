import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['9bba8b5e47304758f9de91ef016d4347'],
    table: 'sys_gen_ai_skill',
    data: {
        skill_description:
            'Assists new starters with onboarding questions including task status, team and manager information, IT provisioning status, building access status, and onboarding FAQs. Retrieves data from HRSD tasks, sys_user, and integration status tables. Does NOT call external systems — all data is sourced from ServiceNow platform records.',
        skill_document: '9bba8b5e47304758f9de91ef016d433f',
        skill_name: 'Federal Onboarding Assistant',
        skill_table: 'sn_aia_skill_metadata',
        sys_domain: 'global',
        sys_domain_path: '/',
    },
})

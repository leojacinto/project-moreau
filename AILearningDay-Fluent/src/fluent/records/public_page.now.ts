import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// Make the UI page publicly accessible
Record({
    $id: Now.ID['public_page_record'],
    table: 'sys_public',
    data: {
        page: '/x_snc_ai_learnin_4_agenda.do',
        active: true
    }
})
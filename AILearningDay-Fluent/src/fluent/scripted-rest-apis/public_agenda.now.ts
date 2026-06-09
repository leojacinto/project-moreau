import '@servicenow/sdk/global'
import { RestApi } from '@servicenow/sdk/core'
import { publicAgendaScript } from '../../server/rest-api/public_agenda_script'

RestApi({
    $id: Now.ID['public_agenda_api'],
    name: 'Public AI Agenda API', 
    serviceId: 'public_agenda',
    routes: [{
        $id: Now.ID['public_agenda_route'],
        path: '/view',
        method: 'GET',
        authorization: false,
        authentication: false,
        script: publicAgendaScript
    }]
})
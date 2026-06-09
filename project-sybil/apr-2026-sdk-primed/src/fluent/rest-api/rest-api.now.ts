import { RestApi } from '@servicenow/sdk/core'

export const travelRequestApi = RestApi({
    $id: Now.ID['travel_request_api'],
    name: 'Travel Request API',
    serviceId: 'travel',
    active: true,
    consumes: 'application/json',
    produces: 'application/json',
    shortDescription: 'REST API for travel request management',
    routes: [
        {
            $id: Now.ID['api_get_requests'],
            name: 'Get Requests',
            method: 'GET',
            path: '/requests',
            shortDescription: 'List travel requests for authenticated user',
            script: script`(function process(request, response) {
                var gr = new GlideRecord('x_snc_apr_trv_request');
                gr.addQuery('traveler', gs.getUserID());
                gr.query();
                var results = [];
                while (gr.next()) {
                    results.push({
                        sys_id: gr.sys_id + '',
                        number: gr.number + '',
                        destination_city: gr.destination_city + '',
                        destination_country: gr.destination_country + '',
                        departure_date: gr.departure_date + '',
                        return_date: gr.return_date + '',
                        estimated_cost: gr.estimated_cost + '',
                        approval_status: gr.approval_status + ''
                    });
                }
                response.setBody({result: results});
            })(request, response);`,
        },
        {
            $id: Now.ID['api_get_request_detail'],
            name: 'Get Request Detail',
            method: 'GET',
            path: '/requests/{sys_id}',
            shortDescription: 'Get single request detail with expenses',
            script: script`(function process(request, response) {
                var sysId = request.pathParams.sys_id;
                var gr = new GlideRecord('x_snc_apr_trv_request');
                if (!gr.get(sysId)) {
                    response.setStatus(404);
                    response.setBody({error: 'Request not found'});
                    return;
                }
                var expenses = [];
                var exp = new GlideRecord('x_snc_apr_trv_expense');
                exp.addQuery('travel_request', sysId);
                exp.query();
                while (exp.next()) {
                    expenses.push({
                        sys_id: exp.sys_id + '',
                        expense_type: exp.expense_type + '',
                        amount: exp.amount + '',
                        vendor: exp.vendor + '',
                        expense_date: exp.expense_date + '',
                        reimbursement_status: exp.reimbursement_status + ''
                    });
                }
                response.setBody({
                    result: {
                        sys_id: gr.sys_id + '',
                        number: gr.number + '',
                        destination_city: gr.destination_city + '',
                        estimated_cost: gr.estimated_cost + '',
                        actual_cost: gr.actual_cost + '',
                        approval_status: gr.approval_status + '',
                        expenses: expenses
                    }
                });
            })(request, response);`,
        },
        {
            $id: Now.ID['api_create_request'],
            name: 'Create Request',
            method: 'POST',
            path: '/requests',
            shortDescription: 'Create travel request from JSON body',
            script: script`(function process(request, response) {
                var body = request.body.data;
                var gr = new GlideRecord('x_snc_apr_trv_request');
                gr.initialize();
                gr.traveler = gs.getUserID();
                gr.destination_city = body.destination_city || '';
                gr.destination_country = body.destination_country || '';
                gr.departure_date = body.departure_date || '';
                gr.return_date = body.return_date || '';
                gr.estimated_cost = body.estimated_cost || 0;
                gr.purpose = body.purpose || '';
                gr.approval_status = 'pending';
                var sysId = gr.insert();
                response.setStatus(201);
                response.setBody({result: {sys_id: sysId, number: gr.number + ''}});
            })(request, response);`,
        },
        {
            $id: Now.ID['api_approve_request'],
            name: 'Approve Request',
            method: 'PUT',
            path: '/requests/{sys_id}/approve',
            shortDescription: 'Approve a travel request',
            script: script`(function process(request, response) {
                var sysId = request.pathParams.sys_id;
                var gr = new GlideRecord('x_snc_apr_trv_request');
                if (!gr.get(sysId)) {
                    response.setStatus(404);
                    response.setBody({error: 'Request not found'});
                    return;
                }
                gr.approval_status = 'approved';
                gr.update();
                response.setBody({result: {sys_id: sysId, approval_status: 'approved'}});
            })(request, response);`,
        },
        {
            $id: Now.ID['api_reject_request'],
            name: 'Reject Request',
            method: 'PUT',
            path: '/requests/{sys_id}/reject',
            shortDescription: 'Reject a travel request with reason',
            script: script`(function process(request, response) {
                var sysId = request.pathParams.sys_id;
                var body = request.body.data;
                var gr = new GlideRecord('x_snc_apr_trv_request');
                if (!gr.get(sysId)) {
                    response.setStatus(404);
                    response.setBody({error: 'Request not found'});
                    return;
                }
                gr.approval_status = 'rejected';
                gr.work_notes = 'Rejected: ' + (body.reason || 'No reason provided');
                gr.update();
                response.setBody({result: {sys_id: sysId, approval_status: 'rejected'}});
            })(request, response);`,
        },
        {
            $id: Now.ID['api_get_policy'],
            name: 'Get Policy',
            method: 'GET',
            path: '/policy/{country}',
            shortDescription: 'Get travel policy for a country',
            script: script`(function process(request, response) {
                var country = request.pathParams.country;
                var util = new x_snc_apr_trv.TravelPolicyUtil();
                var policy = util.getPolicyForCountry(country);
                if (!policy) {
                    response.setStatus(404);
                    response.setBody({error: 'No policy found for country: ' + country});
                    return;
                }
                response.setBody({result: policy});
            })(request, response);`,
        },
    ],
})

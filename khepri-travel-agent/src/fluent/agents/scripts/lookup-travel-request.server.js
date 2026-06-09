// IIFE tool script for Look Up Travel Request
// Full logic inline — no ScriptInclude dependency
(function(inputs) {
    try {
        var requestNumber = inputs.request_number || '';
        var requesterEmail = inputs.requester_email || '';

        if (!requestNumber && !requesterEmail) {
            return JSON.stringify({
                success: false,
                error: 'Either request_number or requester_email must be provided'
            });
        }

        var baseUrl = gs.getProperty('glide.servlet.uri') || '';
        var gr = new GlideRecord('x_snc_travel_a7t2p_travel_request');

        if (requestNumber) {
            gr.addQuery('request_number', requestNumber);
            gr.query();

            if (!gr.next()) {
                return JSON.stringify({
                    success: false,
                    error: 'Travel request ' + requestNumber + ' not found'
                });
            }

            var sid = gr.getUniqueValue();
            return JSON.stringify({
                success: true,
                result_type: 'single',
                record_link: baseUrl + 'x_snc_travel_a7t2p_travel_request.do?sys_id=' + sid,
                request: {
                    sys_id: sid,
                    request_number: gr.getValue('request_number') || '',
                    requester_name: gr.getValue('requester_name') || '',
                    requester_email: gr.getValue('requester_email') || '',
                    travel_type: gr.getValue('travel_type') || '',
                    destination: gr.getValue('destination') || '',
                    departure_date: gr.getValue('departure_date') || '',
                    return_date: gr.getValue('return_date') || '',
                    business_purpose: gr.getValue('business_purpose') || '',
                    estimated_airfare: '$' + (gr.getValue('estimated_airfare') || '0'),
                    flight_class_requested: gr.getValue('flight_class_requested') || '',
                    estimated_flight_hours: gr.getValue('estimated_flight_hours') || '0',
                    estimated_accommodation_per_night: '$' + (gr.getValue('estimated_accommodation_per_night') || '0'),
                    estimated_accommodation_nights: gr.getValue('estimated_accommodation_nights') || '0',
                    ground_transport_type: gr.getValue('ground_transport_type') || '',
                    estimated_ground_transport: '$' + (gr.getValue('estimated_ground_transport') || '0'),
                    estimated_meals_total: '$' + (gr.getValue('estimated_meals_total') || '0'),
                    client_entertainment_required: gr.getValue('client_entertainment_required') || 'false',
                    estimated_entertainment: '$' + (gr.getValue('estimated_entertainment') || '0'),
                    total_estimated_cost: '$' + (gr.getValue('total_estimated_cost') || '0'),
                    approval_status: gr.getValue('approval_status') || '',
                    policy_assessment: gr.getValue('policy_assessment') || '',
                    approval_routing: gr.getValue('approval_routing') || '',
                    created_by_agent: gr.getValue('created_by_agent') || ''
                }
            });

        } else {
            gr.addQuery('requester_email', requesterEmail);
            gr.orderByDesc('sys_created_on');
            gr.query();

            var results = [];
            while (gr.next()) {
                var recId = gr.getUniqueValue();
                results.push({
                    request_number: gr.getValue('request_number') || '',
                    record_link: baseUrl + 'x_snc_travel_a7t2p_travel_request.do?sys_id=' + recId,
                    requester_name: gr.getValue('requester_name') || '',
                    destination: gr.getValue('destination') || '',
                    travel_type: gr.getValue('travel_type') || '',
                    departure_date: gr.getValue('departure_date') || '',
                    return_date: gr.getValue('return_date') || '',
                    flight_class_requested: gr.getValue('flight_class_requested') || '',
                    total_estimated_cost: '$' + (gr.getValue('total_estimated_cost') || '0'),
                    approval_status: gr.getValue('approval_status') || '',
                    approval_routing: gr.getValue('approval_routing') || '',
                    policy_assessment: gr.getValue('policy_assessment') || '',
                    business_purpose: gr.getValue('business_purpose') || ''
                });
            }

            if (results.length === 0) {
                return JSON.stringify({
                    success: false,
                    error: 'No travel requests found for email: ' + requesterEmail
                });
            }

            return JSON.stringify({
                success: true,
                result_type: 'list',
                count: results.length,
                list_link: baseUrl + 'x_snc_travel_a7t2p_travel_request_list.do?sysparm_query=requester_email=' + requesterEmail,
                requests: results
            });
        }

    } catch (e) {
        return JSON.stringify({
            success: false,
            error: 'Lookup tool failed: ' + e.message
        });
    }
})(inputs);

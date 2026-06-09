// IIFE tool script for Create Travel Request
// Full logic inline — no ScriptInclude dependency
(function(inputs) {
    try {
        // Generate next request number
        var gr = new GlideRecord('x_snc_travel_a7t2p_travel_request');
        gr.orderByDesc('request_number');
        gr.setLimit(1);
        gr.query();

        var nextNum = 1;
        if (gr.next()) {
            var lastNumber = gr.getValue('request_number') || 'TR0000';
            var numPart = parseInt(lastNumber.replace('TR', ''), 10);
            if (!isNaN(numPart)) {
                nextNum = numPart + 1;
            }
        }
        var padded = String(nextNum);
        while (padded.length < 4) { padded = '0' + padded; }
        var requestNumber = 'TR' + padded;

        // Parse numeric values
        var airfare = parseFloat(inputs.estimated_airfare) || 0;
        var accomPerNight = parseFloat(inputs.estimated_accommodation_per_night) || 0;
        var accomNights = parseFloat(inputs.estimated_accommodation_nights) || 0;
        var groundTransport = parseFloat(inputs.estimated_ground_transport) || 0;
        var mealsTotal = parseFloat(inputs.estimated_meals_total) || 0;
        var entertainment = parseFloat(inputs.estimated_entertainment) || 0;

        var accommodationTotal = accomPerNight * accomNights;
        var totalEstimatedCost = airfare + accommodationTotal + groundTransport + mealsTotal + entertainment;

        // Insert the record
        var rec = new GlideRecord('x_snc_travel_a7t2p_travel_request');
        rec.initialize();
        rec.setValue('request_number', requestNumber);
        rec.setValue('requester_name', inputs.requester_name || '');
        rec.setValue('requester_email', inputs.requester_email || '');
        rec.setValue('travel_type', inputs.travel_type || '');
        rec.setValue('destination', inputs.destination || '');
        rec.setValue('departure_date', inputs.departure_date || '');
        rec.setValue('return_date', inputs.return_date || '');
        rec.setValue('business_purpose', inputs.business_purpose || '');
        rec.setValue('estimated_airfare', String(airfare));
        rec.setValue('flight_class_requested', inputs.flight_class_requested || 'economy');
        rec.setValue('estimated_flight_hours', inputs.estimated_flight_hours || '0');
        rec.setValue('estimated_accommodation_per_night', String(accomPerNight));
        rec.setValue('estimated_accommodation_nights', String(accomNights));
        rec.setValue('ground_transport_type', inputs.ground_transport_type || '');
        rec.setValue('estimated_ground_transport', String(groundTransport));
        rec.setValue('estimated_meals_total', String(mealsTotal));
        rec.setValue('client_entertainment_required', inputs.client_entertainment_required || 'false');
        rec.setValue('estimated_entertainment', String(entertainment));
        rec.setValue('total_estimated_cost', String(Math.round(totalEstimatedCost)));
        rec.setValue('approval_status', 'pending_review');
        rec.setValue('created_by_agent', 'true');

        var sysId = rec.insert();

        if (!sysId) {
            return JSON.stringify({
                success: false,
                error: 'GlideRecord insert failed. Check ACLs and scope access for x_snc_travel_a7t2p_travel_request.'
            });
        }

        var baseUrl = gs.getProperty('glide.servlet.uri') || '';
        var recordLink = baseUrl + 'x_snc_travel_a7t2p_travel_request.do?sys_id=' + sysId;

        return JSON.stringify({
            success: true,
            request_number: requestNumber,
            sys_id: sysId,
            record_link: recordLink,
            status: 'pending_review',
            summary: {
                requester: (inputs.requester_name || '') + ' (' + (inputs.requester_email || '') + ')',
                travel_type: inputs.travel_type || '',
                destination: inputs.destination || '',
                dates: (inputs.departure_date || '') + ' to ' + (inputs.return_date || ''),
                flight_class: inputs.flight_class_requested || 'economy',
                flight_hours: inputs.estimated_flight_hours || '0',
                business_purpose: inputs.business_purpose || ''
            },
            cost_breakdown: {
                airfare: '$' + airfare,
                accommodation: '$' + accomPerNight + '/night x ' + accomNights + ' nights = $' + accommodationTotal,
                ground_transport: '$' + groundTransport + ' (' + (inputs.ground_transport_type || 'not specified') + ')',
                meals: '$' + mealsTotal,
                entertainment: (inputs.client_entertainment_required === 'true') ? '$' + entertainment : 'None',
                total_estimated_cost: '$' + Math.round(totalEstimatedCost)
            },
            next_step: 'Record created. Now run Evaluate Travel Request with request_number ' + requestNumber + ' to check policy compliance.'
        });

    } catch (e) {
        return JSON.stringify({
            success: false,
            error: 'Create tool failed: ' + e.message
        });
    }
})(inputs);

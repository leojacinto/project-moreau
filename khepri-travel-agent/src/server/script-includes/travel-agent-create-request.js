// @ts-nocheck
var TravelAgentCreateRequest = Class.create();
TravelAgentCreateRequest.prototype = {
    initialize: function() {},

    createRequest: function(requesterName, requesterEmail, travelType, destination,
        departureDate, returnDate, businessPurpose, estimatedAirfare, flightClassRequested,
        estimatedFlightHours, estimatedAccommodationPerNight, estimatedAccommodationNights,
        groundTransportType, estimatedGroundTransport, estimatedMealsTotal,
        clientEntertainmentRequired, estimatedEntertainment) {

        try {
            // Generate next request number
            var requestNumber = this._getNextRequestNumber();

            // Parse numeric values for cost calculation
            var airfare = parseFloat(estimatedAirfare) || 0;
            var accomPerNight = parseFloat(estimatedAccommodationPerNight) || 0;
            var accomNights = parseFloat(estimatedAccommodationNights) || 0;
            var groundTransport = parseFloat(estimatedGroundTransport) || 0;
            var mealsTotal = parseFloat(estimatedMealsTotal) || 0;
            var entertainment = parseFloat(estimatedEntertainment) || 0;

            // Calculate totals
            var accommodationTotal = accomPerNight * accomNights;
            var totalEstimatedCost = airfare + accommodationTotal + groundTransport + mealsTotal + entertainment;

            // Insert the record
            var gr = new GlideRecord('x_snc_travel_a7t2p_travel_request');
            gr.initialize();
            gr.setValue('request_number', requestNumber);
            gr.setValue('requester_name', requesterName || '');
            gr.setValue('requester_email', requesterEmail || '');
            gr.setValue('travel_type', travelType || '');
            gr.setValue('destination', destination || '');
            gr.setValue('departure_date', departureDate || '');
            gr.setValue('return_date', returnDate || '');
            gr.setValue('business_purpose', businessPurpose || '');
            gr.setValue('estimated_airfare', String(airfare));
            gr.setValue('flight_class_requested', flightClassRequested || 'economy');
            gr.setValue('estimated_flight_hours', estimatedFlightHours || '0');
            gr.setValue('estimated_accommodation_per_night', String(accomPerNight));
            gr.setValue('estimated_accommodation_nights', String(accomNights));
            gr.setValue('ground_transport_type', groundTransportType || '');
            gr.setValue('estimated_ground_transport', String(groundTransport));
            gr.setValue('estimated_meals_total', String(mealsTotal));
            gr.setValue('client_entertainment_required', clientEntertainmentRequired || 'false');
            gr.setValue('estimated_entertainment', String(entertainment));
            gr.setValue('total_estimated_cost', String(Math.round(totalEstimatedCost)));
            gr.setValue('approval_status', 'pending_review');
            gr.setValue('created_by_agent', 'true');

            var sysId = gr.insert();

            if (!sysId) {
                return JSON.stringify({
                    success: false,
                    error: 'GlideRecord insert returned no sys_id. The record may not have been created. Check ACLs and scope access for table x_snc_travel_a7t2p_travel_request.'
                });
            }

            // Build instance link
            var baseUrl = gs.getProperty('glide.servlet.uri') || '';
            var recordLink = baseUrl + 'x_snc_travel_a7t2p_travel_request.do?sys_id=' + sysId;
            var listLink = baseUrl + 'x_snc_travel_a7t2p_travel_request_list.do';

            // Calculate trip duration
            var tripDays = accomNights > 0 ? accomNights : '(not specified)';

            return JSON.stringify({
                success: true,
                request_number: requestNumber,
                sys_id: sysId,
                record_link: recordLink,
                list_link: listLink,
                status: 'pending_review',
                summary: {
                    requester: requesterName + ' (' + requesterEmail + ')',
                    travel_type: travelType,
                    destination: destination,
                    dates: departureDate + ' to ' + returnDate,
                    trip_duration_nights: tripDays,
                    business_purpose: businessPurpose,
                    flight_class: flightClassRequested || 'economy',
                    flight_hours: estimatedFlightHours || '0'
                },
                cost_breakdown: {
                    airfare: '$' + airfare,
                    accommodation: '$' + accomPerNight + '/night x ' + accomNights + ' nights = $' + accommodationTotal,
                    ground_transport: '$' + groundTransport + ' (' + (groundTransportType || 'not specified') + ')',
                    meals: '$' + mealsTotal,
                    entertainment: clientEntertainmentRequired === 'true' ? '$' + entertainment : 'None',
                    total_estimated_cost: '$' + Math.round(totalEstimatedCost)
                },
                next_step: 'Record created. Run Evaluate Travel Request with request_number ' + requestNumber + ' to check policy compliance and determine approval routing.'
            });

        } catch (e) {
            gs.error('[TravelAgent] CreateRequest error: ' + e.message);
            return JSON.stringify({
                success: false,
                error: 'Failed to create travel request: ' + e.message,
                debug: 'Check syslog_app_scope for [TravelAgent] prefix entries'
            });
        }
    },

    _getNextRequestNumber: function() {
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
        while (padded.length < 4) {
            padded = '0' + padded;
        }
        return 'TR' + padded;
    },

    type: 'TravelAgentCreateRequest'
};

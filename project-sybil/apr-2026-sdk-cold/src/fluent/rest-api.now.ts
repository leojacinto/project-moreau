import { RestApi } from '@servicenow/sdk/core'

export const travelApi = RestApi({
  $id: Now.ID['travel-api'],
  name: 'Travel Request API',
  serviceId: 'travel',
  active: true,
  shortDescription: 'API for managing travel requests',
  routes: [
    {
      $id: Now.ID['route-list-requests'],
      name: 'List Requests',
      method: 'GET',
      path: '/requests',
      script: `
(function process(request, response) {
  var gr = new GlideRecord('x_snc_apr_tv3b_request');
  gr.addQuery('x_snc_apr_tv3b_traveler', gs.getUserID());
  gr.query();
  var results = [];
  while (gr.next()) {
    results.push({
      sys_id: gr.sys_id + '',
      number: gr.number + '',
      destination_city: gr.x_snc_apr_tv3b_destination_city + '',
      estimated_cost: gr.x_snc_apr_tv3b_estimated_cost + '',
      approval_status: gr.x_snc_apr_tv3b_approval_status + ''
    });
  }
  response.setBody({ result: results });
})(request, response);
`,
    },
    {
      $id: Now.ID['route-get-request'],
      name: 'Get Request',
      method: 'GET',
      path: '/requests/{sys_id}',
      script: `
(function process(request, response) {
  var id = request.pathParams.sys_id;
  var gr = new GlideRecord('x_snc_apr_tv3b_request');
  if (gr.get(id)) {
    var result = {
      sys_id: gr.sys_id + '',
      number: gr.number + '',
      destination_city: gr.x_snc_apr_tv3b_destination_city + '',
      destination_country: gr.x_snc_apr_tv3b_destination_country + '',
      estimated_cost: gr.x_snc_apr_tv3b_estimated_cost + '',
      approval_status: gr.x_snc_apr_tv3b_approval_status + ''
    };
    response.setBody({ result: result });
  } else {
    response.setStatus(404);
    response.setBody({ error: 'Not found' });
  }
})(request, response);
`,
    },
    {
      $id: Now.ID['route-create-request'],
      name: 'Create Request',
      method: 'POST',
      path: '/requests',
      script: `
(function process(request, response) {
  var body = request.body.data;
  var gr = new GlideRecord('x_snc_apr_tv3b_request');
  gr.initialize();
  gr.x_snc_apr_tv3b_destination_city = body.destination_city;
  gr.x_snc_apr_tv3b_destination_country = body.destination_country;
  gr.x_snc_apr_tv3b_departure_date = body.departure_date;
  gr.x_snc_apr_tv3b_return_date = body.return_date;
  gr.x_snc_apr_tv3b_estimated_cost = body.estimated_cost;
  gr.x_snc_apr_tv3b_purpose = body.purpose;
  gr.x_snc_apr_tv3b_traveler = gs.getUserID();
  var id = gr.insert();
  response.setStatus(201);
  response.setBody({ result: { sys_id: id } });
})(request, response);
`,
    },
    {
      $id: Now.ID['route-approve-request'],
      name: 'Approve Request',
      method: 'PUT',
      path: '/requests/{sys_id}/approve',
      script: `
(function process(request, response) {
  var id = request.pathParams.sys_id;
  var gr = new GlideRecord('x_snc_apr_tv3b_request');
  if (gr.get(id)) {
    gr.x_snc_apr_tv3b_approval_status = 'approved';
    gr.update();
    response.setBody({ result: { status: 'approved' } });
  } else {
    response.setStatus(404);
    response.setBody({ error: 'Not found' });
  }
})(request, response);
`,
    },
    {
      $id: Now.ID['route-reject-request'],
      name: 'Reject Request',
      method: 'PUT',
      path: '/requests/{sys_id}/reject',
      script: `
(function process(request, response) {
  var id = request.pathParams.sys_id;
  var body = request.body.data;
  var gr = new GlideRecord('x_snc_apr_tv3b_request');
  if (gr.get(id)) {
    gr.x_snc_apr_tv3b_approval_status = 'rejected';
    gr.work_notes = 'Rejected: ' + (body.reason || 'No reason provided');
    gr.update();
    response.setBody({ result: { status: 'rejected' } });
  } else {
    response.setStatus(404);
    response.setBody({ error: 'Not found' });
  }
})(request, response);
`,
    },
    {
      $id: Now.ID['route-get-policy'],
      name: 'Get Policy',
      method: 'GET',
      path: '/policy/{country}',
      script: `
(function process(request, response) {
  var country = decodeURIComponent(request.pathParams.country);
  var gr = new GlideRecord('x_snc_apr_tv3b_policy');
  gr.addQuery('x_snc_apr_tv3b_applies_to_country', country);
  gr.addQuery('x_snc_apr_tv3b_active', true);
  gr.query();
  if (gr.next()) {
    response.setBody({
      result: {
        policy_name: gr.x_snc_apr_tv3b_policy_name + '',
        max_daily_hotel: gr.x_snc_apr_tv3b_max_daily_hotel + '',
        max_daily_meals: gr.x_snc_apr_tv3b_max_daily_meals + '',
        max_flight_class: gr.x_snc_apr_tv3b_max_flight_class + '',
        finance_threshold: gr.x_snc_apr_tv3b_finance_threshold + ''
      }
    });
  } else {
    response.setStatus(404);
    response.setBody({ error: 'No policy found for country' });
  }
})(request, response);
`,
    },
  ],
})

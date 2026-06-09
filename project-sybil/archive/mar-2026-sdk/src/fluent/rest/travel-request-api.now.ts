import { RestApi } from '@servicenow/sdk/core'

export const travelRequestApi = RestApi({
  $id: Now.ID['travel_request_api'],
  name: 'Travel Request API',
  serviceId: 'x_snc_travel_api',
  active: true,
  shortDescription: 'CRUD API for Travel Request records',
  produces: 'application/json',
  consumes: 'application/json',
  routes: [
    {
      $id: Now.ID['travel_api_list'],
      name: 'List Travel Requests',
      method: 'GET',
      path: '/requests',
      active: true,
      script: `(function process(request, response) {
        var gr = new GlideRecord('x_snc_travel_request');
        gr.orderByDesc('sys_created_on');
        gr.query();
        var results = [];
        while (gr.next()) {
          results.push({
            sys_id: gr.getUniqueValue(),
            number: gr.getValue('number') || '',
            x_snc_travel_destination: gr.getValue('x_snc_travel_destination') || '',
            x_snc_travel_departure_date: gr.getValue('x_snc_travel_departure_date') || '',
            x_snc_travel_return_date: gr.getValue('x_snc_travel_return_date') || '',
            x_snc_travel_purpose: gr.getValue('x_snc_travel_purpose') || '',
            x_snc_travel_estimated_cost: gr.getValue('x_snc_travel_estimated_cost') || '',
            x_snc_travel_travel_type: gr.getValue('x_snc_travel_travel_type') || '',
            x_snc_travel_state: gr.getValue('x_snc_travel_state') || 'draft'
          });
        }
        response.setBody({result: results});
      })(request, response);`,
    },
    {
      $id: Now.ID['travel_api_create'],
      name: 'Create Travel Request',
      method: 'POST',
      path: '/requests',
      active: true,
      script: `(function process(request, response) {
        var body = request.body.data;
        var gr = new GlideRecord('x_snc_travel_request');
        gr.initialize();
        if (body.x_snc_travel_destination) gr.setValue('x_snc_travel_destination', body.x_snc_travel_destination);
        if (body.x_snc_travel_departure_date) gr.setValue('x_snc_travel_departure_date', body.x_snc_travel_departure_date);
        if (body.x_snc_travel_return_date) gr.setValue('x_snc_travel_return_date', body.x_snc_travel_return_date);
        if (body.x_snc_travel_purpose) gr.setValue('x_snc_travel_purpose', body.x_snc_travel_purpose);
        if (body.x_snc_travel_estimated_cost) gr.setValue('x_snc_travel_estimated_cost', body.x_snc_travel_estimated_cost);
        if (body.x_snc_travel_travel_type) gr.setValue('x_snc_travel_travel_type', body.x_snc_travel_travel_type);
        if (body.x_snc_travel_state) gr.setValue('x_snc_travel_state', body.x_snc_travel_state);
        var sysId = gr.insert();
        response.setBody({result: {sys_id: sysId}});
      })(request, response);`,
    },
    {
      $id: Now.ID['travel_api_update'],
      name: 'Update Travel Request',
      method: 'PATCH',
      path: '/requests/{sys_id}',
      active: true,
      parameters: [
        { $id: Now.ID['travel_api_update_param'], name: 'sys_id', required: true, shortDescription: 'sys_id of record' },
      ],
      script: `(function process(request, response) {
        var sysId = request.pathParams.sys_id;
        var body = request.body.data;
        var gr = new GlideRecord('x_snc_travel_request');
        if (gr.get(sysId)) {
          for (var key in body) {
            if (body.hasOwnProperty(key)) gr.setValue(key, body[key]);
          }
          gr.update();
          response.setBody({result: {sys_id: sysId}});
        } else {
          response.setStatus(404);
          response.setBody({error: {message: 'Record not found'}});
        }
      })(request, response);`,
    },
    {
      $id: Now.ID['travel_api_delete'],
      name: 'Delete Travel Request',
      method: 'DELETE',
      path: '/requests/{sys_id}',
      active: true,
      parameters: [
        { $id: Now.ID['travel_api_delete_param'], name: 'sys_id', required: true, shortDescription: 'sys_id of record' },
      ],
      script: `(function process(request, response) {
        var sysId = request.pathParams.sys_id;
        var gr = new GlideRecord('x_snc_travel_request');
        if (gr.get(sysId)) {
          gr.deleteRecord();
          response.setBody({result: {deleted: true}});
        } else {
          response.setStatus(404);
          response.setBody({error: {message: 'Record not found'}});
        }
      })(request, response);`,
    },
  ],
})

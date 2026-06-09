import { BusinessRule } from '@servicenow/sdk/core'

export const defaultStateToDraft = BusinessRule({
  $id: Now.ID['default_state_to_draft'],
  name: 'Default State to Draft',
  table: 'x_snc_travel_request',
  when: 'before',
  action: ['insert'],
  active: true,
  order: 100,
  script: `
    (function executeRule(current, previous) {
      if (!current.x_snc_travel_state || current.x_snc_travel_state == '') {
        current.x_snc_travel_state = 'draft';
      }
    })(current, previous);
  `,
})

export const defaultTravelerToCurrentUser = BusinessRule({
  $id: Now.ID['default_traveler_to_current_user'],
  name: 'Default Traveler to Current User',
  table: 'x_snc_travel_request',
  when: 'before',
  action: ['insert'],
  active: true,
  order: 200,
  script: `
    (function executeRule(current, previous) {
      if (current.x_snc_travel_traveler.nil()) {
        current.x_snc_travel_traveler = gs.getUserID();
      }
    })(current, previous);
  `,
})

export const validateReturnDate = BusinessRule({
  $id: Now.ID['validate_return_date'],
  name: 'Validate Return Date After Departure',
  table: 'x_snc_travel_request',
  when: 'before',
  action: ['insert', 'update'],
  active: true,
  order: 300,
  script: `
    (function executeRule(current, previous) {
      var dep = current.x_snc_travel_departure_date.getGlideObject();
      var ret = current.x_snc_travel_return_date.getGlideObject();
      if (dep && ret && ret.compareTo(dep) < 0) {
        current.setAbortAction(true);
        gs.addErrorMessage('Return date must be after departure date');
      }
    })(current, previous);
  `,
})

export const validateEstimatedCost = BusinessRule({
  $id: Now.ID['validate_estimated_cost'],
  name: 'Validate Estimated Cost Positive',
  table: 'x_snc_travel_request',
  when: 'before',
  action: ['insert', 'update'],
  active: true,
  order: 400,
  script: `
    (function executeRule(current, previous) {
      var cost = parseFloat(current.x_snc_travel_estimated_cost);
      if (isNaN(cost) || cost <= 0) {
        current.setAbortAction(true);
        gs.addErrorMessage('Estimated cost must be positive');
      }
    })(current, previous);
  `,
})

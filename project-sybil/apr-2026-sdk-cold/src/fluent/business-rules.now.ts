import { BusinessRule } from '@servicenow/sdk/core'

export const brSetDepartment = BusinessRule({
  $id: Now.ID['br-set-department'],
  name: 'Set Department from Traveler',
  table: 'x_snc_apr_tv3b_request',
  order: 100,
  when: 'before',
  action: ['insert'],
  active: true,
  script: `
(function executeRule(current, previous) {
  if (current.x_snc_apr_tv3b_traveler) {
    var traveler = new GlideRecord('sys_user');
    if (traveler.get(current.x_snc_apr_tv3b_traveler)) {
      current.x_snc_apr_tv3b_department = traveler.department;
    }
  }
})(current, previous);
`,
})

export const brDeriveTravelType = BusinessRule({
  $id: Now.ID['br-derive-travel-type'],
  name: 'Derive Travel Type',
  table: 'x_snc_apr_tv3b_request',
  order: 200,
  when: 'before',
  action: ['insert', 'update'],
  active: true,
  script: `
(function executeRule(current, previous) {
  if (current.x_snc_apr_tv3b_destination_country) {
    var traveler = new GlideRecord('sys_user');
    if (traveler.get(current.x_snc_apr_tv3b_traveler)) {
      if (current.x_snc_apr_tv3b_destination_country == traveler.country) {
        current.x_snc_apr_tv3b_travel_type = 'domestic';
      } else {
        current.x_snc_apr_tv3b_travel_type = 'international';
      }
    }
  }
})(current, previous);
`,
})

export const brEscalateFinance = BusinessRule({
  $id: Now.ID['br-escalate-finance'],
  name: 'Escalate to Finance',
  table: 'x_snc_apr_tv3b_request',
  order: 100,
  when: 'after',
  action: ['update'],
  active: true,
  script: `
(function executeRule(current, previous) {
  if (current.x_snc_apr_tv3b_approval_status == 'approved' &&
      previous.x_snc_apr_tv3b_approval_status != 'approved') {
    var threshold = parseFloat(gs.getProperty('x_snc_apr_tv3b.finance_threshold', '5000'));
    if (parseFloat(current.x_snc_apr_tv3b_estimated_cost) > threshold) {
      current.x_snc_apr_tv3b_approval_status = 'finance_review';
      current.update();
    }
  }
})(current, previous);
`,
})

export const brCalculateActualCost = BusinessRule({
  $id: Now.ID['br-calculate-actual-cost'],
  name: 'Calculate Actual Cost',
  table: 'x_snc_apr_tv3b_request',
  order: 300,
  when: 'before',
  action: ['update'],
  active: true,
  script: `
(function executeRule(current, previous) {
  var gr = new GlideAggregate('x_snc_apr_tv3b_expense');
  gr.addQuery('x_snc_apr_tv3b_travel_request', current.sys_id);
  gr.addAggregate('SUM', 'x_snc_apr_tv3b_amount');
  gr.query();
  if (gr.next()) {
    current.x_snc_apr_tv3b_actual_cost = gr.getAggregate('SUM', 'x_snc_apr_tv3b_amount');
  }
})(current, previous);
`,
})

export const brPreventEditAfterApproval = BusinessRule({
  $id: Now.ID['br-prevent-edit-after-approval'],
  name: 'Prevent Edit After Approval',
  table: 'x_snc_apr_tv3b_request',
  order: 50,
  when: 'before',
  action: ['update'],
  active: true,
  script: `
(function executeRule(current, previous) {
  if ((current.x_snc_apr_tv3b_approval_status == 'approved' ||
       current.x_snc_apr_tv3b_approval_status == 'finance_review') &&
      !gs.hasRole('x_snc_apr_tv3b.admin')) {
    var protectedFields = ['x_snc_apr_tv3b_destination_city', 'x_snc_apr_tv3b_destination_country',
      'x_snc_apr_tv3b_departure_date', 'x_snc_apr_tv3b_return_date', 'x_snc_apr_tv3b_estimated_cost'];
    for (var i = 0; i < protectedFields.length; i++) {
      if (current[protectedFields[i]].changes()) {
        current.setAbortAction(true);
        gs.addErrorMessage('Cannot modify core fields after approval');
        return;
      }
    }
  }
})(current, previous);
`,
})

export const brCloseExpenses = BusinessRule({
  $id: Now.ID['br-close-expenses'],
  name: 'Close Expenses on Request Close',
  table: 'x_snc_apr_tv3b_request',
  order: 200,
  when: 'after',
  action: ['update'],
  active: true,
  script: `
(function executeRule(current, previous) {
  if (current.state == 3 && previous.state != 3) {
    var gr = new GlideRecord('x_snc_apr_tv3b_expense');
    gr.addQuery('x_snc_apr_tv3b_travel_request', current.sys_id);
    gr.addQuery('x_snc_apr_tv3b_reimbursement_status', 'submitted');
    gr.query();
    while (gr.next()) {
      gr.x_snc_apr_tv3b_reimbursement_status = 'approved';
      gr.update();
    }
  }
})(current, previous);
`,
})

export const brValidateExpenseDate = BusinessRule({
  $id: Now.ID['br-validate-expense-date'],
  name: 'Validate Expense Date Range',
  table: 'x_snc_apr_tv3b_expense',
  order: 100,
  when: 'before',
  action: ['insert', 'update'],
  active: true,
  script: `
(function executeRule(current, previous) {
  if (current.x_snc_apr_tv3b_expense_date && current.x_snc_apr_tv3b_travel_request) {
    var req = new GlideRecord('x_snc_apr_tv3b_request');
    if (req.get(current.x_snc_apr_tv3b_travel_request)) {
      var expDate = new GlideDateTime(current.x_snc_apr_tv3b_expense_date);
      var depDate = new GlideDateTime(req.x_snc_apr_tv3b_departure_date);
      var retDate = new GlideDateTime(req.x_snc_apr_tv3b_return_date);
      if (expDate.compareTo(depDate) < 0 || expDate.compareTo(retDate) > 0) {
        current.setAbortAction(true);
        gs.addErrorMessage('Expense date must be between departure and return dates');
      }
    }
  }
})(current, previous);
`,
})

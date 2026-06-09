import { BusinessRule } from '@servicenow/sdk/core'

export const setDepartmentFromTraveler = BusinessRule({
    $id: Now.ID['br_set_department'],
    name: 'Set Department from Traveler',
    table: 'x_snc_apr_trv_request',
    when: 'before',
    action: ['insert'],
    order: 100,
    active: true,
    script: script`(function executeRule(current, previous) {
        if (current.traveler) {
            var gr = new GlideRecord('sys_user');
            if (gr.get(current.traveler)) {
                current.department = gr.department;
            }
        }
    })(current, previous);`,
})

export const deriveTravelType = BusinessRule({
    $id: Now.ID['br_derive_travel_type'],
    name: 'Derive Travel Type',
    table: 'x_snc_apr_trv_request',
    when: 'before',
    action: ['insert', 'update'],
    order: 200,
    active: true,
    script: script`(function executeRule(current, previous) {
        if (current.traveler && current.destination_country) {
            var traveler = new GlideRecord('sys_user');
            if (traveler.get(current.traveler)) {
                var userCountry = traveler.country + '';
                var destCountry = current.destination_country + '';
                current.travel_type = (destCountry && userCountry && destCountry.toLowerCase() !== userCountry.toLowerCase()) ? 'international' : 'domestic';
            }
        }
    })(current, previous);`,
})

export const escalateToFinance = BusinessRule({
    $id: Now.ID['br_escalate_finance'],
    name: 'Escalate to Finance',
    table: 'x_snc_apr_trv_request',
    when: 'after',
    action: ['update'],
    order: 100,
    active: true,
    script: script`(function executeRule(current, previous) {
        if (current.approval_status == 'approved' && previous.approval_status != 'approved') {
            var threshold = gs.getProperty('x_snc_apr_trv.finance_threshold', '5000');
            if (parseFloat(current.estimated_cost) > parseFloat(threshold)) {
                current.approval_status = 'finance_review';
                current.update();
            }
        }
    })(current, previous);`,
})

export const calculateActualCost = BusinessRule({
    $id: Now.ID['br_calculate_actual_cost'],
    name: 'Calculate Actual Cost',
    table: 'x_snc_apr_trv_request',
    when: 'before',
    action: ['update'],
    order: 300,
    active: true,
    script: script`(function executeRule(current, previous) {
        var total = 0;
        var gr = new GlideRecord('x_snc_apr_trv_expense');
        gr.addQuery('travel_request', current.sys_id);
        gr.query();
        while (gr.next()) {
            total += parseFloat(gr.amount) || 0;
        }
        current.actual_cost = total;
    })(current, previous);`,
})

export const preventEditAfterApproval = BusinessRule({
    $id: Now.ID['br_prevent_edit_after_approval'],
    name: 'Prevent Edit After Approval',
    table: 'x_snc_apr_trv_request',
    when: 'before',
    action: ['update'],
    order: 50,
    active: true,
    script: script`(function executeRule(current, previous) {
        if (!gs.hasRole('x_snc_apr_trv.admin')) {
            var status = current.approval_status + '';
            if (status == 'approved' || status == 'finance_review') {
                var protectedFields = ['destination_city', 'destination_country', 'departure_date', 'return_date', 'estimated_cost', 'purpose'];
                for (var i = 0; i < protectedFields.length; i++) {
                    if (current[protectedFields[i]].changes()) {
                        current.setAbortAction(true);
                        gs.addErrorMessage('Cannot edit core fields after approval');
                        return;
                    }
                }
            }
        }
    })(current, previous);`,
})

export const closeExpensesOnRequestClose = BusinessRule({
    $id: Now.ID['br_close_expenses'],
    name: 'Close Expenses on Request Close',
    table: 'x_snc_apr_trv_request',
    when: 'after',
    action: ['update'],
    order: 200,
    active: true,
    script: script`(function executeRule(current, previous) {
        if (current.state == 3 && previous.state != 3) {
            var gr = new GlideRecord('x_snc_apr_trv_expense');
            gr.addQuery('travel_request', current.sys_id);
            gr.addQuery('reimbursement_status', 'submitted');
            gr.query();
            while (gr.next()) {
                gr.reimbursement_status = 'approved';
                gr.update();
            }
        }
    })(current, previous);`,
})

export const validateExpenseDateRange = BusinessRule({
    $id: Now.ID['br_validate_expense_date'],
    name: 'Validate Expense Date Range',
    table: 'x_snc_apr_trv_expense',
    when: 'before',
    action: ['insert', 'update'],
    order: 100,
    active: true,
    script: script`(function executeRule(current, previous) {
        if (current.travel_request && current.expense_date) {
            var req = new GlideRecord('x_snc_apr_trv_request');
            if (req.get(current.travel_request)) {
                var expDate = new GlideDateTime(current.expense_date + '');
                var depDate = new GlideDateTime(req.departure_date + '');
                var retDate = new GlideDateTime(req.return_date + '');
                if (expDate.compareTo(depDate) < 0 || expDate.compareTo(retDate) > 0) {
                    current.setAbortAction(true);
                    gs.addErrorMessage('Expense date must fall between departure and return dates');
                }
            }
        }
    })(current, previous);`,
})

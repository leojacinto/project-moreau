import { ScriptInclude } from '@servicenow/sdk/core'

export const travelPolicyUtil = ScriptInclude({
    $id: Now.ID['si_travel_policy_util'],
    name: 'TravelPolicyUtil',
    active: true,
    apiName: 'x_snc_apr_trv.TravelPolicyUtil',
    accessibleFrom: 'public',
    description: 'Server-side utility: getPolicyForCountry(country), getFinanceThreshold(), isWithinPolicy(request)',
    script: script`var TravelPolicyUtil = Class.create();
TravelPolicyUtil.prototype = {
    initialize: function() {},

    getPolicyForCountry: function(country) {
        var gr = new GlideRecord('x_snc_apr_trv_policy');
        gr.addQuery('applies_to_country', country);
        gr.addQuery('active', true);
        gr.query();
        if (gr.next()) {
            return {
                policy_name: gr.policy_name + '',
                max_daily_hotel: parseFloat(gr.max_daily_hotel) || 0,
                max_daily_meals: parseFloat(gr.max_daily_meals) || 0,
                max_flight_class: gr.max_flight_class + '',
                requires_finance_approval_above: parseFloat(gr.requires_finance_approval_above) || 0
            };
        }
        // Fallback to global default
        gr.initialize();
        gr.addQuery('applies_to_country', '*');
        gr.addQuery('active', true);
        gr.query();
        if (gr.next()) {
            return {
                policy_name: gr.policy_name + '',
                max_daily_hotel: parseFloat(gr.max_daily_hotel) || 0,
                max_daily_meals: parseFloat(gr.max_daily_meals) || 0,
                max_flight_class: gr.max_flight_class + '',
                requires_finance_approval_above: parseFloat(gr.requires_finance_approval_above) || 0
            };
        }
        return null;
    },

    getFinanceThreshold: function() {
        return parseFloat(gs.getProperty('x_snc_apr_trv.finance_threshold', '5000'));
    },

    isWithinPolicy: function(requestGR) {
        var policy = this.getPolicyForCountry(requestGR.destination_country + '');
        if (!policy) return true;
        return parseFloat(requestGR.estimated_cost) <= policy.requires_finance_approval_above;
    },

    type: 'TravelPolicyUtil'
};`,
})

export const travelDelegationUtil = ScriptInclude({
    $id: Now.ID['si_travel_delegation_util'],
    name: 'TravelDelegationUtil',
    active: true,
    apiName: 'x_snc_apr_trv.TravelDelegationUtil',
    description: 'Server-side: getActiveDelegate(manager_sys_id), isDelegationActive(delegator, date)',
    script: script`var TravelDelegationUtil = Class.create();
TravelDelegationUtil.prototype = {
    initialize: function() {},

    getActiveDelegate: function(managerSysId) {
        var gr = new GlideRecord('x_snc_apr_trv_delegation');
        gr.addQuery('delegator', managerSysId);
        gr.addQuery('active', true);
        var now = new GlideDateTime();
        gr.addQuery('start_date', '<=', now);
        gr.addQuery('end_date', '>=', now);
        gr.query();
        if (gr.next()) {
            return gr.delegate + '';
        }
        return null;
    },

    isDelegationActive: function(delegatorSysId, dateStr) {
        var gr = new GlideRecord('x_snc_apr_trv_delegation');
        gr.addQuery('delegator', delegatorSysId);
        gr.addQuery('active', true);
        var checkDate = dateStr ? new GlideDateTime(dateStr) : new GlideDateTime();
        gr.addQuery('start_date', '<=', checkDate);
        gr.addQuery('end_date', '>=', checkDate);
        gr.query();
        return gr.hasNext();
    },

    type: 'TravelDelegationUtil'
};`,
})

export const travelCostCalculator = ScriptInclude({
    $id: Now.ID['si_travel_cost_calculator'],
    name: 'TravelCostCalculator',
    active: true,
    apiName: 'x_snc_apr_trv.TravelCostCalculator',
    clientCallable: true,
    description: 'Client-callable via GlideAjax: getEstimatedDailyRate(country, expense_type), getPolicyLimit(country)',
    script: script`var TravelCostCalculator = Class.create();
TravelCostCalculator.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    getEstimatedDailyRate: function() {
        var country = this.getParameter('sysparm_country');
        var expenseType = this.getParameter('sysparm_expense_type');
        var util = new x_snc_apr_trv.TravelPolicyUtil();
        var policy = util.getPolicyForCountry(country);
        if (!policy) return '0';
        if (expenseType == 'hotel') return policy.max_daily_hotel + '';
        if (expenseType == 'meals') return policy.max_daily_meals + '';
        return '0';
    },

    getPolicyLimit: function() {
        var country = this.getParameter('sysparm_country');
        var util = new x_snc_apr_trv.TravelPolicyUtil();
        var policy = util.getPolicyForCountry(country);
        if (!policy) return '5000';
        return policy.requires_finance_approval_above + '';
    },

    getUserInfo: function() {
        var userId = gs.getUserID();
        var user = new GlideRecord('sys_user');
        user.get(userId);
        var dept = '';
        if (user.department) {
            var deptGr = new GlideRecord('cmn_department');
            if (deptGr.get(user.department)) {
                dept = deptGr.name + '';
            }
        }
        var mgr = '';
        if (user.manager) {
            var mgrGr = new GlideRecord('sys_user');
            if (mgrGr.get(user.manager)) {
                mgr = mgrGr.name + '';
            }
        }
        return JSON.stringify({department: dept, manager: mgr});
    },

    type: 'TravelCostCalculator'
});`,
})

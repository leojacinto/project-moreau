import { ScriptInclude } from '@servicenow/sdk/core'

export const siTravelPolicyUtil = ScriptInclude({
  $id: Now.ID['si-travel-policy-util'],
  name: 'TravelPolicyUtil',
  description: 'Server-side utility for travel policy lookups',
  active: true,
  accessibleFrom: 'package_private',
  script: `
var TravelPolicyUtil = Class.create();
TravelPolicyUtil.prototype = {
  initialize: function() {},

  getPolicyForCountry: function(country) {
    var gr = new GlideRecord('x_snc_apr_tv3b_policy');
    gr.addQuery('x_snc_apr_tv3b_applies_to_country', country);
    gr.addQuery('x_snc_apr_tv3b_active', true);
    gr.query();
    if (gr.next()) return gr;
    gr = new GlideRecord('x_snc_apr_tv3b_policy');
    gr.addQuery('x_snc_apr_tv3b_applies_to_country', '*');
    gr.addQuery('x_snc_apr_tv3b_active', true);
    gr.query();
    if (gr.next()) return gr;
    return null;
  },

  getFinanceThreshold: function() {
    return parseFloat(gs.getProperty('x_snc_apr_tv3b.finance_threshold', '5000'));
  },

  isWithinPolicy: function(request) {
    var policy = this.getPolicyForCountry(request.x_snc_apr_tv3b_destination_country + '');
    if (!policy) return true;
    return parseFloat(request.x_snc_apr_tv3b_estimated_cost) <= parseFloat(policy.x_snc_apr_tv3b_finance_threshold);
  },

  type: 'TravelPolicyUtil'
};
`,
})

export const siTravelDelegationUtil = ScriptInclude({
  $id: Now.ID['si-travel-delegation-util'],
  name: 'TravelDelegationUtil',
  description: 'Server-side utility for delegation lookups',
  active: true,
  accessibleFrom: 'package_private',
  script: `
var TravelDelegationUtil = Class.create();
TravelDelegationUtil.prototype = {
  initialize: function() {},

  getActiveDelegate: function(managerSysId) {
    var gr = new GlideRecord('x_snc_apr_tv3b_delegation');
    gr.addQuery('x_snc_apr_tv3b_delegator', managerSysId);
    gr.addQuery('x_snc_apr_tv3b_active', true);
    var today = new GlideDate();
    gr.addQuery('x_snc_apr_tv3b_start_date', '<=', today);
    gr.addQuery('x_snc_apr_tv3b_end_date', '>=', today);
    gr.query();
    if (gr.next()) return gr.x_snc_apr_tv3b_delegate + '';
    return null;
  },

  isDelegationActive: function(delegator, date) {
    var gr = new GlideRecord('x_snc_apr_tv3b_delegation');
    gr.addQuery('x_snc_apr_tv3b_delegator', delegator);
    gr.addQuery('x_snc_apr_tv3b_active', true);
    gr.addQuery('x_snc_apr_tv3b_start_date', '<=', date);
    gr.addQuery('x_snc_apr_tv3b_end_date', '>=', date);
    gr.query();
    return gr.hasNext();
  },

  type: 'TravelDelegationUtil'
};
`,
})

export const siTravelCostCalculator = ScriptInclude({
  $id: Now.ID['si-travel-cost-calculator'],
  name: 'TravelCostCalculator',
  description: 'Client-callable utility for cost calculations',
  active: true,
  clientCallable: true,
  accessibleFrom: 'public',
  script: `
var TravelCostCalculator = Class.create();
TravelCostCalculator.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {

  getEstimatedDailyRate: function() {
    var country = this.getParameter('sysparm_country');
    var expenseType = this.getParameter('sysparm_expense_type');
    var util = new TravelPolicyUtil();
    var policy = util.getPolicyForCountry(country);
    if (!policy) return '0';
    if (expenseType == 'hotel') return policy.x_snc_apr_tv3b_max_daily_hotel + '';
    if (expenseType == 'meals') return policy.x_snc_apr_tv3b_max_daily_meals + '';
    return '0';
  },

  getPolicyLimit: function() {
    var country = this.getParameter('sysparm_country');
    var util = new TravelPolicyUtil();
    var policy = util.getPolicyForCountry(country);
    if (!policy) return '5000';
    return policy.x_snc_apr_tv3b_finance_threshold + '';
  },

  type: 'TravelCostCalculator'
});
`,
})

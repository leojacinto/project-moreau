import { UiPage } from '@servicenow/sdk/core'

export const pageRequestSummary = UiPage({
  $id: Now.ID['page-request-summary'],
  endpoint: 'x_snc_apr_tv3b_request_summary.do',
  description: 'Single-page view showing request header, approval timeline, and expense breakdown',
  category: 'general',
  html: `<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
<div id="travel-summary-container">
  <h2>Travel Request Summary</h2>
  <div id="request-details"></div>
  <div id="expense-chart"></div>
  <div id="approval-timeline"></div>
</div>
<script>
var sysId = gel('sysparm_sys_id') ? gel('sysparm_sys_id').value : '';
if (sysId) {
  var ga = new GlideAjax('TravelCostCalculator');
  ga.addParam('sysparm_name', 'getPolicyLimit');
  ga.addParam('sysparm_country', '');
  ga.getXMLWait();
}
</script>
</j:jelly>`,
  clientScript: `
function loadSummary() {
  // Client-side summary loading logic
}
addLoadEvent(loadSummary);
`,
})

export const pageExpenseEntry = UiPage({
  $id: Now.ID['page-expense-entry'],
  endpoint: 'x_snc_apr_tv3b_expense_entry.do',
  description: 'Inline form for quick expense entry with receipt upload',
  category: 'general',
  html: `<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
<div id="expense-entry-container">
  <h2>Add Expense</h2>
  <form id="expense-form">
    <label>Expense Type:
      <select id="expense_type">
        <option value="airfare">Airfare</option>
        <option value="hotel">Hotel</option>
        <option value="meals">Meals</option>
        <option value="transport">Transport</option>
        <option value="visa">Visa</option>
        <option value="other">Other</option>
      </select>
    </label>
    <label>Amount: <input type="text" id="amount" /></label>
    <label>Vendor: <input type="text" id="vendor" /></label>
    <label>Date: <input type="text" id="expense_date" /></label>
    <input type="hidden" id="sysparm_ck" value="$[SP]" />
    <button type="button" onclick="submitExpense()">Submit</button>
  </form>
</div>
<script>
function submitExpense() {
  // Submit expense via form POST
  var form = gel('expense-form');
  if (form) form.submit();
}
</script>
</j:jelly>`,
  clientScript: `
function initExpenseForm() {
  // Initialize expense entry form
}
addLoadEvent(initExpenseForm);
`,
})

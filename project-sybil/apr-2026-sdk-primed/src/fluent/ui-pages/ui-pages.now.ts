import { UiPage } from '@servicenow/sdk/core'

export const travelRequestSummaryPage = UiPage({
    $id: Now.ID['uip_travel_summary'],
    endpoint: 'x_snc_apr_trv_summary.do',
    category: 'general',
    description: 'Travel Request Summary - shows request header, approval timeline, expense breakdown, and policy compliance',
    html: `<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
<div id="travel-summary-app">
    <h2>Travel Request Summary</h2>
    <div id="request-header"></div>
    <div id="approval-timeline">
        <h3>Approval Timeline</h3>
        <div id="timeline-entries"></div>
    </div>
    <div id="expense-breakdown">
        <h3>Expense Breakdown</h3>
        <canvas id="expense-chart" width="400" height="200"></canvas>
    </div>
    <div id="policy-compliance">
        <h3>Policy Compliance</h3>
        <div id="compliance-indicator"></div>
    </div>
</div>
<script>
    var sysId = gel('sysparm_sys_id') ? gel('sysparm_sys_id').value : '';
    if (sysId) {
        var ga = new GlideAjax('x_snc_apr_trv.TravelCostCalculator');
        ga.addParam('sysparm_name', 'getPolicyLimit');
        ga.addParam('sysparm_country', '');
        ga.getXMLAnswer(function(answer) {
            var el = document.getElementById('compliance-indicator');
            if (el) el.innerHTML = 'Finance threshold: $' + answer;
        });
    }
</script>
</j:jelly>`,
    clientScript: `// Travel Request Summary client script
function loadSummary() {
    var sysId = gel('sysparm_sys_id') ? gel('sysparm_sys_id').value : '';
    if (!sysId) return;
    // Load request details via GlideAjax
}`,
    processingScript: `// Server-side processing for travel summary page
(function process(g_request, g_response, g_processor) {
    var sysId = g_request.getParameter('sys_id') || '';
    // Server processing logic
})(g_request, g_response, g_processor);`,
})

export const expenseEntryForm = UiPage({
    $id: Now.ID['uip_expense_entry'],
    endpoint: 'x_snc_apr_trv_expense_entry.do',
    category: 'general',
    description: 'Inline expense entry form with receipt upload and policy validation',
    html: `<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
<div id="expense-entry-app">
    <h2>Add Travel Expense</h2>
    <form id="expense-form">
        <input type="hidden" id="sysparm_ck" name="sysparm_ck" value="$[SP]"/>
        <div class="form-group">
            <label for="expense_type">Expense Type</label>
            <select id="expense_type" name="expense_type">
                <option value="airfare">Airfare</option>
                <option value="hotel">Hotel</option>
                <option value="meals">Meals</option>
                <option value="transport">Transport</option>
                <option value="visa">Visa</option>
                <option value="other">Other</option>
            </select>
        </div>
        <div class="form-group">
            <label for="amount">Amount</label>
            <input type="text" id="amount" name="amount" />
        </div>
        <div class="form-group">
            <label for="vendor">Vendor</label>
            <input type="text" id="vendor" name="vendor" />
        </div>
        <div class="form-group">
            <label for="expense_date">Expense Date</label>
            <input type="text" id="expense_date" name="expense_date" />
        </div>
        <div class="form-group">
            <label for="receipt">Receipt</label>
            <input type="file" id="receipt" name="receipt" />
        </div>
        <button type="submit">Submit Expense</button>
    </form>
    <div id="policy-warning" style="display:none; color: orange;"></div>
</div>
<script>
    document.getElementById('expense-form').addEventListener('submit', function(e) {
        e.preventDefault();
        // Submit via AJAX
    });
</script>
</j:jelly>`,
    clientScript: `// Expense entry form client script
function validateExpense() {
    var amount = parseFloat(document.getElementById('amount').value);
    if (amount > 50) {
        var receipt = document.getElementById('receipt').value;
        if (!receipt) {
            alert('Receipt is required for expenses over $50');
            return false;
        }
    }
    return true;
}`,
    processingScript: `// Server-side processing for expense entry
(function process(g_request, g_response, g_processor) {
    var travelRequestId = g_request.getParameter('travel_request') || '';
    var expenseType = g_request.getParameter('expense_type') || '';
    var amount = g_request.getParameter('amount') || '0';
    var vendor = g_request.getParameter('vendor') || '';
    var expenseDate = g_request.getParameter('expense_date') || '';

    if (travelRequestId && expenseType) {
        var gr = new GlideRecord('x_snc_apr_trv_expense');
        gr.initialize();
        gr.travel_request = travelRequestId;
        gr.expense_type = expenseType;
        gr.amount = amount;
        gr.vendor = vendor;
        gr.expense_date = expenseDate;
        gr.reimbursement_status = 'submitted';
        gr.insert();
    }
})(g_request, g_response, g_processor);`,
})

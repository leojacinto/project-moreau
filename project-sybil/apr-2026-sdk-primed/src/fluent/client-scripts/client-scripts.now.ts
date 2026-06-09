import { ClientScript } from '@servicenow/sdk/core'

export const showVisaField = ClientScript({
    $id: Now.ID['cs_show_visa'],
    name: 'Show Visa Field',
    table: 'x_snc_apr_trv_request',
    type: 'onChange',
    field: 'travel_type',
    active: true,
    global: true,
    ui_type: 'all',
    description: 'Show requires_visa field only when travel_type = International',
    script: script`function onChange(control, oldValue, newValue, isLoading) {
        if (isLoading) return;
        g_form.setVisible('requires_visa', newValue == 'international');
    }`,
})

export const warnHighCost = ClientScript({
    $id: Now.ID['cs_warn_high_cost'],
    name: 'Warn High Cost',
    table: 'x_snc_apr_trv_request',
    type: 'onChange',
    field: 'estimated_cost',
    active: true,
    global: true,
    ui_type: 'all',
    description: 'If estimated_cost > threshold, show info message about finance approval',
    script: script`function onChange(control, oldValue, newValue, isLoading) {
        if (isLoading) return;
        var cost = parseFloat(newValue);
        if (cost > 5000) {
            g_form.addInfoMessage('This request will require finance approval');
        }
    }`,
})

export const confirmSubmission = ClientScript({
    $id: Now.ID['cs_confirm_submission'],
    name: 'Confirm Submission',
    table: 'x_snc_apr_trv_request',
    type: 'onSubmit',
    active: true,
    global: true,
    ui_type: 'all',
    description: 'Confirm dialog before submit if estimated_cost is blank',
    script: script`function onSubmit() {
        var cost = g_form.getValue('estimated_cost');
        if (!cost || cost == '0') {
            return confirm('Estimated cost is blank. Do you want to continue?');
        }
        return true;
    }`,
})

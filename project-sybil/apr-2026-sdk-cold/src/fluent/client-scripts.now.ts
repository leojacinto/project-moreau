import { ClientScript } from '@servicenow/sdk/core'

export const csShowVisa = ClientScript({
  $id: Now.ID['cs-show-visa'],
  name: 'Show Visa Field',
  table: 'x_snc_apr_tv3b_request',
  type: 'onChange',
  field: 'x_snc_apr_tv3b_travel_type',
  active: true,
  script: `
function onChange(control, oldValue, newValue, isLoading) {
  if (isLoading) return;
  g_form.setDisplay('x_snc_apr_tv3b_requires_visa', newValue == 'international');
}
`,
})

export const csWarnHighCost = ClientScript({
  $id: Now.ID['cs-warn-high-cost'],
  name: 'Warn High Cost',
  table: 'x_snc_apr_tv3b_request',
  type: 'onChange',
  field: 'x_snc_apr_tv3b_estimated_cost',
  active: true,
  script: `
function onChange(control, oldValue, newValue, isLoading) {
  if (isLoading) return;
  if (parseFloat(newValue) > 5000) {
    g_form.showFieldMsg('x_snc_apr_tv3b_estimated_cost', 'This request will require finance approval', 'info');
  } else {
    g_form.hideFieldMsg('x_snc_apr_tv3b_estimated_cost');
  }
}
`,
})

export const csConfirmSubmission = ClientScript({
  $id: Now.ID['cs-confirm-submission'],
  name: 'Confirm Submission',
  table: 'x_snc_apr_tv3b_request',
  type: 'onSubmit',
  active: true,
  script: `
function onSubmit() {
  var cost = g_form.getValue('x_snc_apr_tv3b_estimated_cost');
  if (!cost || cost == '' || cost == '0') {
    return confirm('Estimated cost is blank. Are you sure you want to submit?');
  }
  return true;
}
`,
})

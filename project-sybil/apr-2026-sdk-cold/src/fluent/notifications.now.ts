import { EmailNotification } from '@servicenow/sdk/core'

export const notifRequestSubmitted = EmailNotification({
  $id: Now.ID['notif-request-submitted'],
  name: 'Travel Request Submitted',
  table: 'x_snc_apr_tv3b_request',
  active: true,
  triggerConditions: {
    generationType: 'engine',
    onRecordInsert: true,
    condition: 'x_snc_apr_tv3b_approval_status=pending',
  },
  recipientDetails: {
    recipientFields: ['x_snc_apr_tv3b_traveler.manager'],
  },
  emailContent: {
    subject: 'New Travel Request from ${x_snc_apr_tv3b_traveler}',
    messageHtml: '<p>A new travel request has been submitted by ${x_snc_apr_tv3b_traveler} to ${x_snc_apr_tv3b_destination_city}.</p><p>Estimated cost: ${x_snc_apr_tv3b_estimated_cost}</p>',
  },
})

export const notifRequestApproved = EmailNotification({
  $id: Now.ID['notif-request-approved'],
  name: 'Travel Request Approved',
  table: 'x_snc_apr_tv3b_request',
  active: true,
  triggerConditions: {
    generationType: 'engine',
    onRecordUpdate: true,
    condition: 'x_snc_apr_tv3b_approval_status=approved^x_snc_apr_tv3b_approval_statusCHANGES',
  },
  recipientDetails: {
    recipientFields: ['x_snc_apr_tv3b_traveler'],
  },
  emailContent: {
    subject: 'Travel Request Approved - ${x_snc_apr_tv3b_destination_city}',
    messageHtml: '<p>Your travel request to ${x_snc_apr_tv3b_destination_city} has been approved.</p>',
  },
})

export const notifRequestRejected = EmailNotification({
  $id: Now.ID['notif-request-rejected'],
  name: 'Travel Request Rejected',
  table: 'x_snc_apr_tv3b_request',
  active: true,
  triggerConditions: {
    generationType: 'engine',
    onRecordUpdate: true,
    condition: 'x_snc_apr_tv3b_approval_status=rejected^x_snc_apr_tv3b_approval_statusCHANGES',
  },
  recipientDetails: {
    recipientFields: ['x_snc_apr_tv3b_traveler'],
  },
  emailContent: {
    subject: 'Travel Request Rejected',
    messageHtml: '<p>Your travel request to ${x_snc_apr_tv3b_destination_city} was rejected. Please check the activity log for details.</p>',
  },
})

export const notifFinanceReview = EmailNotification({
  $id: Now.ID['notif-finance-review'],
  name: 'Finance Review Required',
  table: 'x_snc_apr_tv3b_request',
  active: true,
  triggerConditions: {
    generationType: 'engine',
    onRecordUpdate: true,
    condition: 'x_snc_apr_tv3b_approval_status=finance_review^x_snc_apr_tv3b_approval_statusCHANGES',
  },
  recipientDetails: {
    recipientGroups: [],
    recipientFields: [],
  },
  emailContent: {
    subject: 'Finance Review Required - Travel Request',
    messageHtml: '<p>Travel request from ${x_snc_apr_tv3b_traveler} requires finance review.</p><p>Estimated cost: ${x_snc_apr_tv3b_estimated_cost}</p>',
  },
})

export const notifExpenseFlagged = EmailNotification({
  $id: Now.ID['notif-expense-flagged'],
  name: 'Expense Flagged',
  table: 'x_snc_apr_tv3b_expense',
  active: true,
  triggerConditions: {
    generationType: 'engine',
    onRecordInsert: true,
  },
  recipientDetails: {
    recipientFields: [],
  },
  emailContent: {
    subject: 'Expense Flagged - ${x_snc_apr_tv3b_expense_type}',
    messageHtml: '<p>An expense of ${x_snc_apr_tv3b_amount} for ${x_snc_apr_tv3b_expense_type} has been flagged for review.</p>',
  },
})

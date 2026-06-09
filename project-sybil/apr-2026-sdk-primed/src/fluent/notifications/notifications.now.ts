import { EmailNotification } from '@servicenow/sdk/core'

export const requestSubmitted = EmailNotification({
    $id: Now.ID['notif_request_submitted'],
    table: 'x_snc_apr_trv_request',
    name: 'Travel Request Submitted',
    description: 'Notify manager when new travel request is submitted',
    active: true,
    triggerConditions: {
        onRecordInsert: true,
        condition: 'approval_status=pending',
    },
    recipientDetails: {
        recipientFields: ['traveler.manager'],
    },
    emailContent: {
        subject: 'New Travel Request: ${number} - ${destination_city}',
        messageHtml: '<p>A new travel request has been submitted by ${traveler} to ${destination_city}.</p><p>Estimated Cost: ${estimated_cost}</p><p>Purpose: ${purpose}</p>',
    },
})

export const requestApproved = EmailNotification({
    $id: Now.ID['notif_request_approved'],
    table: 'x_snc_apr_trv_request',
    name: 'Travel Request Approved',
    description: 'Notify traveler when request is approved',
    active: true,
    triggerConditions: {
        onRecordUpdate: true,
        condition: 'approval_statusCHANGESTO approved',
    },
    recipientDetails: {
        recipientFields: ['traveler'],
    },
    emailContent: {
        subject: 'Travel Request Approved: ${number}',
        messageHtml: '<p>Your travel request to ${destination_city} has been approved.</p><p>Departure: ${departure_date}</p><p>Return: ${return_date}</p>',
    },
})

export const requestRejected = EmailNotification({
    $id: Now.ID['notif_request_rejected'],
    table: 'x_snc_apr_trv_request',
    name: 'Travel Request Rejected',
    description: 'Notify traveler when request is rejected',
    active: true,
    triggerConditions: {
        onRecordUpdate: true,
        condition: 'approval_statusCHANGESTO rejected',
    },
    recipientDetails: {
        recipientFields: ['traveler'],
    },
    emailContent: {
        subject: 'Travel Request Rejected: ${number}',
        messageHtml: '<p>Your travel request to ${destination_city} was rejected. Please check the activity log for details.</p>',
    },
})

export const financeReviewRequired = EmailNotification({
    $id: Now.ID['notif_finance_review'],
    table: 'x_snc_apr_trv_request',
    name: 'Finance Review Required',
    description: 'Notify finance team when request needs finance review',
    active: true,
    triggerConditions: {
        onRecordUpdate: true,
        condition: 'approval_statusCHANGESTO finance_review',
    },
    recipientDetails: {
        recipientFields: ['assigned_to'],
    },
    emailContent: {
        subject: 'Finance Review Required: ${number}',
        messageHtml: '<p>Travel request from ${traveler} requires finance review.</p><p>Destination: ${destination_city}</p><p>Estimated Cost: ${estimated_cost}</p>',
    },
})

export const expenseFlagged = EmailNotification({
    $id: Now.ID['notif_expense_flagged'],
    table: 'x_snc_apr_trv_expense',
    name: 'Expense Flagged',
    description: 'Notify finance when expense exceeds policy limit',
    active: true,
    triggerConditions: {
        onRecordInsert: true,
    },
    recipientDetails: {
        recipientFields: ['travel_request.assigned_to'],
    },
    emailContent: {
        subject: 'Expense Exceeds Policy: ${expense_type}',
        messageHtml: '<p>An expense of ${amount} for ${expense_type} has been submitted that may exceed policy limits.</p><p>Vendor: ${vendor}</p>',
    },
})

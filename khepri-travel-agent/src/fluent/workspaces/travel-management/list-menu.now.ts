import '@servicenow/sdk/global';
import { UxListMenuConfig, Applicability, Role } from '@servicenow/sdk/core';

// -- Roles
export const travelUserRole = Role({
    $id: Now.ID['travel-workspace-user-role'],
    name: 'x_snc_travel_a7t2p.user',
    containsRoles: ['canvas_user'],
});

export const travelAdminRole = Role({
    $id: Now.ID['travel-workspace-admin-role'],
    name: 'x_snc_travel_a7t2p.admin',
    containsRoles: ['canvas_admin'],
});

// -- Applicability
export const travelApplicability = Applicability({
    $id: Now.ID['travel-workspace-applicability'],
    name: 'Travel Management Users',
    roles: [travelUserRole, travelAdminRole],
});

// -- List Menu Configuration
export const travelListConfig = UxListMenuConfig({
    $id: Now.ID['travel-workspace-list-config'],
    name: 'Travel Management List Configuration',
    description: 'Navigation for the Corporate Travel Management Workspace',
    categories: [
        {
            $id: Now.ID['travel-requests-category'],
            title: 'Travel Requests',
            order: 10,
            lists: [
                {
                    $id: Now.ID['travel-requests-all'],
                    title: 'All Requests',
                    order: 10,
                    condition: '',
                    table: 'x_snc_travel_a7t2p_travel_request',
                    columns: 'request_number,requester_name,destination,travel_type,departure_date,return_date,total_estimated_cost,approval_status',
                    applicabilities: [
                        {
                            $id: Now.ID['travel-requests-all-applicability'],
                            applicability: travelApplicability,
                        },
                    ],
                },
                {
                    $id: Now.ID['travel-requests-pending'],
                    title: 'Pending Review',
                    order: 20,
                    condition: 'approval_statusINpending_review,pending_manager,pending_vp',
                    table: 'x_snc_travel_a7t2p_travel_request',
                    columns: 'request_number,requester_name,destination,travel_type,departure_date,total_estimated_cost,approval_status,approval_routing',
                    applicabilities: [
                        {
                            $id: Now.ID['travel-requests-pending-applicability'],
                            applicability: travelApplicability,
                        },
                    ],
                },
                {
                    $id: Now.ID['travel-requests-approved'],
                    title: 'Approved',
                    order: 30,
                    condition: 'approval_status=approved',
                    table: 'x_snc_travel_a7t2p_travel_request',
                    columns: 'request_number,requester_name,destination,travel_type,departure_date,return_date,total_estimated_cost',
                    applicabilities: [
                        {
                            $id: Now.ID['travel-requests-approved-applicability'],
                            applicability: travelApplicability,
                        },
                    ],
                },
                {
                    $id: Now.ID['travel-requests-flagged'],
                    title: 'Flagged / VP Required',
                    order: 40,
                    condition: 'approval_routing=vp',
                    table: 'x_snc_travel_a7t2p_travel_request',
                    columns: 'request_number,requester_name,destination,flight_class_requested,estimated_accommodation_per_night,total_estimated_cost,approval_status,policy_assessment',
                    applicabilities: [
                        {
                            $id: Now.ID['travel-requests-flagged-applicability'],
                            applicability: travelApplicability,
                        },
                    ],
                },
            ],
        },
        {
            $id: Now.ID['travel-policy-category'],
            title: 'Policy & Rules',
            order: 20,
            lists: [
                {
                    $id: Now.ID['travel-policy-sections-list'],
                    title: 'Policy Sections',
                    order: 10,
                    condition: '',
                    table: 'x_snc_travel_a7t2p_travel_policy_section',
                    columns: 'section_id,title,category,effective_date',
                    applicabilities: [
                        {
                            $id: Now.ID['travel-policy-sections-applicability'],
                            applicability: travelApplicability,
                        },
                    ],
                },
                {
                    $id: Now.ID['travel-approval-rules-list'],
                    title: 'Approval Rules',
                    order: 20,
                    condition: '',
                    table: 'x_snc_travel_a7t2p_travel_approval_rule',
                    columns: 'rule_id,rule_name,condition_field,condition_operator,condition_value,action,approval_level',
                    applicabilities: [
                        {
                            $id: Now.ID['travel-approval-rules-applicability'],
                            applicability: travelApplicability,
                        },
                    ],
                },
                {
                    $id: Now.ID['travel-expense-categories-list'],
                    title: 'Expense Categories',
                    order: 30,
                    condition: '',
                    table: 'x_snc_travel_a7t2p_travel_expense_category',
                    columns: 'category_id,category_name,domestic_rate,international_rate,reimbursable,notes',
                    applicabilities: [
                        {
                            $id: Now.ID['travel-expense-categories-applicability'],
                            applicability: travelApplicability,
                        },
                    ],
                },
            ],
        },
    ],
});

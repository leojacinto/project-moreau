import { Workspace, UxListMenuConfig, Applicability } from '@servicenow/sdk/core'
import { travelUser, travelApprover, travelFinance } from '../roles/roles.now'

const travelApplicability = Applicability({
    $id: Now.ID['travel_workspace_applicability'],
    name: 'Travel Management Audience',
    roles: [travelUser, travelApprover, travelFinance],
})

const travelListConfig = UxListMenuConfig({
    $id: Now.ID['travel_list_config'],
    name: 'Travel Management Lists',
    description: 'List configuration for Travel Management workspace',
    categories: [
        {
            $id: Now.ID['cat_my_requests'],
            title: 'My Requests',
            order: 10,
            lists: [
                {
                    $id: Now.ID['list_pending_requests'],
                    title: 'Pending',
                    order: 10,
                    condition: 'approval_status=pending^traveler=javascript:gs.getUserID()^EQ',
                    table: 'x_snc_apr_trv_request',
                    columns: 'number,destination_city,departure_date,return_date,estimated_cost,approval_status',
                    applicabilities: [
                        {
                            $id: Now.ID['pending_applicability'],
                            active: true,
                            applicability: travelApplicability,
                        },
                    ],
                },
                {
                    $id: Now.ID['list_all_my_requests'],
                    title: 'All',
                    order: 20,
                    condition: 'traveler=javascript:gs.getUserID()^EQ',
                    table: 'x_snc_apr_trv_request',
                    columns: 'number,destination_city,departure_date,return_date,estimated_cost,approval_status',
                    applicabilities: [
                        {
                            $id: Now.ID['all_my_applicability'],
                            active: true,
                            applicability: travelApplicability,
                        },
                    ],
                },
            ],
        },
        {
            $id: Now.ID['cat_approvals'],
            title: 'Approvals',
            order: 20,
            lists: [
                {
                    $id: Now.ID['list_awaiting_approval'],
                    title: 'Awaiting My Approval',
                    order: 10,
                    condition: 'approval_status=pending^EQ',
                    table: 'x_snc_apr_trv_request',
                    columns: 'number,traveler,destination_city,estimated_cost,purpose,sys_created_on',
                    applicabilities: [
                        {
                            $id: Now.ID['approval_applicability'],
                            active: true,
                            applicability: travelApplicability,
                        },
                    ],
                },
            ],
        },
        {
            $id: Now.ID['cat_expenses'],
            title: 'Expenses',
            order: 30,
            lists: [
                {
                    $id: Now.ID['list_my_expenses'],
                    title: 'My Expenses',
                    order: 10,
                    condition: 'travel_request.traveler=javascript:gs.getUserID()^EQ',
                    table: 'x_snc_apr_trv_expense',
                    columns: 'number,expense_type,amount,vendor,expense_date,reimbursement_status',
                    applicabilities: [
                        {
                            $id: Now.ID['expense_applicability'],
                            active: true,
                            applicability: travelApplicability,
                        },
                    ],
                },
            ],
        },
        {
            $id: Now.ID['cat_policies'],
            title: 'Policies',
            order: 40,
            lists: [
                {
                    $id: Now.ID['list_policies'],
                    title: 'Travel Policies',
                    order: 10,
                    table: 'x_snc_apr_trv_policy',
                    columns: 'policy_name,applies_to_country,max_daily_hotel,max_daily_meals,max_flight_class,active',
                    applicabilities: [
                        {
                            $id: Now.ID['policy_list_applicability'],
                            active: true,
                            applicability: travelApplicability,
                        },
                    ],
                },
            ],
        },
    ],
})

export const travelManagementWorkspace = Workspace({
    $id: Now.ID['travel_management_workspace'],
    title: 'Travel Management',
    path: 'travel-management',
    landingPath: 'home',
    active: true,
    tables: ['x_snc_apr_trv_request', 'x_snc_apr_trv_expense', 'x_snc_apr_trv_policy', 'x_snc_apr_trv_delegation'],
    listConfig: travelListConfig,
})

import '@servicenow/sdk/global';
import { Workspace, Acl } from '@servicenow/sdk/core';
import { travelListConfig } from './list-menu.now';

// -- Workspace
export const travelWorkspace = Workspace({
    $id: Now.ID['travel-management-workspace'],
    title: 'Travel Management',
    path: 'travel-management',
    tables: [
        'x_snc_travel_a7t2p_travel_request',
        'x_snc_travel_a7t2p_travel_policy_section',
        'x_snc_travel_a7t2p_travel_approval_rule',
        'x_snc_travel_a7t2p_travel_expense_category',
    ],
    listConfig: travelListConfig,
});

// -- ACL for workspace route
Acl({
    $id: Now.ID['travel-workspace-acl'],
    localOrExisting: 'Existing',
    type: 'ux_route',
    operation: 'read',
    roles: ['x_snc_travel_a7t2p.user', 'x_snc_travel_a7t2p.admin'],
    table: 'now',
    field: 'travel-management.*',
});

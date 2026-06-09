import '@servicenow/sdk/global';
import { Record } from '@servicenow/sdk/core';

/**
 * sys_ux_form_action records map UI Actions to workspace form buttons.
 * Without these, buttons won't appear in configurable workspaces.
 * 
 * IMPORTANT: ui_action field must contain the actual sys_id of the UI action,
 * not a Now.ID reference (which doesn't resolve properly in Record data fields).
 * These sys_ids are deterministic from the Fluent $id hash and won't change.
 */

Record({
    table: 'sys_ux_form_action',
    $id: Now.ID['ux_fa_verify_clearance'],
    data: {
        ui_action: 'a39adbca4d9148c09a4c35cb9ebedb06',
        action_type: 'ui_action',
        name: 'Verify Clearance',
        table: 'x_snc_fed_forum_on_orchestration',
        active: true,
        specificity: '20',
    },
});

Record({
    table: 'sys_ux_form_action',
    $id: Now.ID['ux_fa_initiate_onboarding'],
    data: {
        ui_action: '3bf4cc308cc34f2393d22cf178d54d6e',
        action_type: 'ui_action',
        name: 'Initiate Onboarding',
        table: 'x_snc_fed_forum_on_orchestration',
        active: true,
        specificity: '20',
    },
});

Record({
    table: 'sys_ux_form_action',
    $id: Now.ID['ux_fa_provision_identity'],
    data: {
        ui_action: '1aed15b5ce1b4ff09b359b5a1b1835fb',
        action_type: 'ui_action',
        name: 'Provision Identity',
        table: 'x_snc_fed_forum_on_orchestration',
        active: true,
        specificity: '20',
    },
});

Record({
    table: 'sys_ux_form_action',
    $id: Now.ID['ux_fa_request_building_access'],
    data: {
        ui_action: '335c1d69ff1d482aa2f4e258ff88206e',
        action_type: 'ui_action',
        name: 'Request Building Access',
        table: 'x_snc_fed_forum_on_orchestration',
        active: true,
        specificity: '20',
    },
});

Record({
    table: 'sys_ux_form_action',
    $id: Now.ID['ux_fa_mark_ready'],
    data: {
        ui_action: 'b9d541fb9bbe45b88f49eb91000a8c62',
        action_type: 'ui_action',
        name: 'Mark Ready',
        table: 'x_snc_fed_forum_on_orchestration',
        active: true,
        specificity: '20',
    },
});

// Reset Demo Data intentionally excluded from workspace — platform list only

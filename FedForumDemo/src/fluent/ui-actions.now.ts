import '@servicenow/sdk/global'
import { UiAction } from '@servicenow/sdk/core'

export const uaVerifyClearance = UiAction({
    $id: Now.ID['ua_verify_clearance'],
    table: 'x_snc_fed_forum_on_orchestration',
    name: 'Verify Clearance',
    actionName: 'verify_clearance',
    active: true,
    order: 100,
    hint: 'Trigger AGSVA clearance verification flow',
    showUpdate: true,
    condition: "current.state == 'draft'",
    form: { showButton: true, style: 'primary' },
    workspace: { isConfigurableWorkspace: true, showFormButtonV2: true, clientScriptV2: "function onClick(g_form) { g_form.submit('verify_clearance'); }" },
    script: `current.work_notes = '[AGSVA] Launching RPA bot to verify clearance status (no API available)...';
current.update();
current.work_notes = '[AGSVA] RPA bot authenticated to AGSVA portal — navigating to clearance lookup';
current.update();
current.work_notes = '[AGSVA] RPA bot querying clearance reference ' + current.agsva_record.agsva_reference + ' for ' + current.employee_name;
current.update();
current.work_notes = '[AGSVA] RPA bot extracted: Clearance Level: ' + current.agsva_record.clearance_level.getDisplayValue() + ' — Status: ' + current.agsva_record.clearance_status.getDisplayValue() + ' — Expiry: ' + current.agsva_record.expiry_date;
current.update();
var transferNote = current.agsva_record.transfer_status == 'not_required' ? 'No sponsorship transfer required.' : 'Transfer status: ' + current.agsva_record.transfer_status.getDisplayValue() + ' to ' + current.agsva_record.transfer_to_entity;
current.work_notes = '[AGSVA] RPA bot confirmed: ' + transferNote;
current.update();
current.work_notes = '[AGSVA] ✓ RPA clearance verification complete — record validated and written back to ServiceNow';
current.state = 'clearance_verified';
current.update();
try { sn_fd.FlowAPI.getRunner().subflow('x_snc_fed_forum_on.agsva_clearance_verification').inBackground().withInputs({ orchestration_sys_id: current.sys_id.toString() }).run(); } catch(e) {}
var ss = new GlideRecord('x_snc_fed_forum_on_demo_screenshot');
ss.addQuery('phase', 'verify_clearance');
ss.query();
if (ss.next()) { var sa = new GlideSysAttachment(); var attGr = new GlideRecord('sys_attachment'); attGr.addQuery('table_name', 'x_snc_fed_forum_on_demo_screenshot'); attGr.addQuery('table_sys_id', ss.getUniqueValue()); attGr.query(); while (attGr.next()) { var stream = sa.getContentStream(attGr.getUniqueValue()); sa.writeContentStream(current, attGr.getValue('file_name'), attGr.getValue('content_type'), stream); } }
gs.addInfoMessage('AGSVA Clearance Verification triggered');`,
})

export const uaInitiateOnboarding = UiAction({
    $id: Now.ID['ua_initiate_onboarding'],
    table: 'x_snc_fed_forum_on_orchestration',
    name: 'Initiate Onboarding',
    actionName: 'initiate_onboarding',
    active: true,
    order: 200,
    hint: 'Trigger onboarding initiation flow',
    showUpdate: true,
    condition: "current.state == 'clearance_verified'",
    form: { showButton: true, style: 'primary' },
    workspace: { isConfigurableWorkspace: true, showFormButtonV2: true, clientScriptV2: "function onClick(g_form) { g_form.submit('initiate_onboarding'); }" },
    script: `current.work_notes = '[SAP HCM] Retrieving employee master for ' + current.sap_record.sap_employee_id + '...';
current.update();
current.work_notes = '[SAP HCM] Employee: ' + current.sap_record.first_name + ' ' + current.sap_record.last_name + ' — Position: ' + current.sap_record.position_title + ' — Org Unit: ' + current.sap_record.org_unit;
current.update();
current.work_notes = '[SAP HCM] Cost Centre: ' + current.sap_record.cost_centre + ' — Manager: ' + current.sap_record.manager_name + ' — Start Date: ' + current.sap_record.start_date;
current.update();
current.work_notes = '[HRSD] Creating onboarding lifecycle event in HR Service Delivery...';
current.update();
current.work_notes = '[HRSD] Lifecycle event created — activities assigned to ' + current.sap_record.manager_name + ' (buddy/manager tasks)';
current.update();
current.work_notes = '[HRSD] ✓ Onboarding initiated — employee record linked, lifecycle event active';
current.state = 'in_progress';
current.update();
try { sn_fd.FlowAPI.getRunner().subflow('x_snc_fed_forum_on.initiate_cleared_starter_onboarding').inBackground().withInputs({ orchestration_sys_id: current.sys_id.toString() }).run(); } catch(e) {}
var ss = new GlideRecord('x_snc_fed_forum_on_demo_screenshot');
ss.addQuery('phase', 'initiate_onboarding');
ss.query();
if (ss.next()) { var sa = new GlideSysAttachment(); var attGr = new GlideRecord('sys_attachment'); attGr.addQuery('table_name', 'x_snc_fed_forum_on_demo_screenshot'); attGr.addQuery('table_sys_id', ss.getUniqueValue()); attGr.query(); while (attGr.next()) { var stream = sa.getContentStream(attGr.getUniqueValue()); sa.writeContentStream(current, attGr.getValue('file_name'), attGr.getValue('content_type'), stream); } }
gs.addInfoMessage('Onboarding Initiation triggered');`,
})

export const uaProvisionIdentity = UiAction({
    $id: Now.ID['ua_provision_identity'],
    table: 'x_snc_fed_forum_on_orchestration',
    name: 'Provision Identity',
    actionName: 'provision_identity',
    active: true,
    order: 300,
    hint: 'Trigger Entra ID account provisioning',
    showUpdate: true,
    condition: "current.state == 'in_progress' && current.entra_record.account_status != 'active'",
    form: { showButton: true, style: 'primary' },
    workspace: { isConfigurableWorkspace: true, showFormButtonV2: true, clientScriptV2: "function onClick(g_form) { g_form.submit('provision_identity'); }" },
    script: `current.work_notes = '[Entra ID] Initiating SCIM provisioning for ' + current.employee_name + '...';
current.update();
// Update Entra account record directly
var entra = new GlideRecord('x_snc_fed_forum_on_entra_account');
if (entra.get(current.entra_record)) {
    entra.setValue('account_status', 'active');
    entra.setValue('mfa_enrolled', 'true');
    entra.setValue('provisioned_by', 'ServiceNow Automation');
    entra.setValue('assigned_licenses', 'E5, Power BI Pro');
    entra.setValue('entra_object_id', gs.generateGUID());
    entra.update();
}
current.work_notes = '[Entra ID] SCIM: Account created — UPN: ' + current.entra_record.upn + ' — Object ID: ' + current.entra_record.entra_object_id;
current.update();
current.work_notes = '[Entra ID] SCIM: Group memberships assigned — E5 license inherited via group policy';
current.update();
current.work_notes = '[Entra ID] Intune: Pushing Authenticator app to managed device via Company Portal';
current.update();
current.work_notes = '[Entra ID] Conditional Access: MFA policy applied — user will be prompted on first sign-in';
current.update();
current.work_notes = '[Entra ID] ✓ Identity provisioned — account active, Conditional Access enforced, Authenticator staged for Day 1';
current.update();
// Log integration step
try { sn_fd.FlowAPI.getRunner().subflow('x_snc_fed_forum_on.log_integration_step').inBackground().withInputs({ orchestration_sys_id: current.sys_id.toString(), sequence: 1, target_system: 'Entra ID', action_text: 'Provision Account', detail: 'Created account, assigned licenses, enrolled MFA', duration_ms: 2400, final_status: 'success' }).run(); } catch(e) {}
var ss = new GlideRecord('x_snc_fed_forum_on_demo_screenshot');
ss.addQuery('phase', 'provision_identity');
ss.query();
if (ss.next()) { var sa = new GlideSysAttachment(); var attGr = new GlideRecord('sys_attachment'); attGr.addQuery('table_name', 'x_snc_fed_forum_on_demo_screenshot'); attGr.addQuery('table_sys_id', ss.getUniqueValue()); attGr.query(); while (attGr.next()) { var stream = sa.getContentStream(attGr.getUniqueValue()); sa.writeContentStream(current, attGr.getValue('file_name'), attGr.getValue('content_type'), stream); } }
gs.addInfoMessage('Entra ID Account provisioned successfully');`,
})

export const uaRequestBuildingAccess = UiAction({
    $id: Now.ID['ua_request_building_access'],
    table: 'x_snc_fed_forum_on_orchestration',
    name: 'Request Building Access',
    actionName: 'request_building_access',
    active: true,
    order: 400,
    hint: 'Trigger facilities access request',
    showUpdate: true,
    condition: "current.state == 'in_progress' && current.facility_record.pass_status != 'issued' && current.facility_record.pass_status != 'collected'",
    form: { showButton: true, style: 'primary' },
    workspace: { isConfigurableWorkspace: true, showFormButtonV2: true, clientScriptV2: "function onClick(g_form) { g_form.submit('request_building_access'); }" },
    script: `current.work_notes = '[Facilities] Initiating building access request for ' + current.employee_name + '...';
current.update();
// Update Facility access record directly
var fac = new GlideRecord('x_snc_fed_forum_on_facility_access');
if (fac.get(current.facility_record)) {
    fac.setValue('pass_status', 'issued');
    fac.setValue('issued_date', new GlideDateTime().getDate().toString());
    fac.setValue('badge_number', 'CBR-' + new GlideDateTime().getDate().toString().replace(/-/g, ''));
    fac.setValue('access_zones', 'Level 4, Level 5, Bike Storage');
    fac.setValue('photo_id_verified', 'true');
    fac.update();
}
current.work_notes = '[Facilities] Building: ' + current.facility_record.building;
current.update();
current.work_notes = '[Facilities] Photo ID verified — badge number generated: ' + current.facility_record.badge_number;
current.update();
current.work_notes = '[Facilities] Access zones allocated: ' + current.facility_record.access_zones;
current.update();
current.work_notes = '[Facilities] ✓ Building access issued — badge ready for collection';
current.update();
// Log integration step
try { sn_fd.FlowAPI.getRunner().subflow('x_snc_fed_forum_on.log_integration_step').inBackground().withInputs({ orchestration_sys_id: current.sys_id.toString(), sequence: 1, target_system: 'Facilities', action_text: 'Issue Building Access', detail: 'Badge issued, zones allocated, photo ID verified', duration_ms: 1800, final_status: 'success' }).run(); } catch(e) {}
var ss = new GlideRecord('x_snc_fed_forum_on_demo_screenshot');
ss.addQuery('phase', 'request_building_access');
ss.query();
if (ss.next()) { var sa = new GlideSysAttachment(); var attGr = new GlideRecord('sys_attachment'); attGr.addQuery('table_name', 'x_snc_fed_forum_on_demo_screenshot'); attGr.addQuery('table_sys_id', ss.getUniqueValue()); attGr.query(); while (attGr.next()) { var stream = sa.getContentStream(attGr.getUniqueValue()); sa.writeContentStream(current, attGr.getValue('file_name'), attGr.getValue('content_type'), stream); } }
gs.addInfoMessage('Facilities Access issued successfully');`,
})

export const uaMarkReady = UiAction({
    $id: Now.ID['ua_mark_ready'],
    table: 'x_snc_fed_forum_on_orchestration',
    name: 'Mark Ready',
    actionName: 'mark_ready',
    active: true,
    order: 500,
    hint: 'Run readiness check across all systems',
    showUpdate: true,
    condition: "current.state == 'in_progress' && current.entra_record.account_status == 'active' && (current.facility_record.pass_status == 'issued' || current.facility_record.pass_status == 'collected')",
    form: { showButton: true, style: 'primary' },
    workspace: { isConfigurableWorkspace: true, showFormButtonV2: true, clientScriptV2: "function onClick(g_form) { g_form.submit('mark_ready'); }" },
    script: `current.work_notes = '[HRSD] Initiating readiness check across all systems...';
current.update();
current.work_notes = '[AGSVA] ✓ Clearance: ' + current.agsva_record.clearance_level.getDisplayValue() + ' — Active';
current.update();
current.work_notes = '[Entra ID] ✓ Account: ' + current.entra_record.upn + ' — Active, MFA enrolled';
current.update();
current.work_notes = '[Facilities] ✓ Badge: ' + current.facility_record.badge_number + ' — Issued, zones allocated';
current.update();
current.work_notes = '[SAP HCM] ✓ Employee: ' + current.sap_record.sap_employee_id + ' — Record confirmed';
current.update();
current.work_notes = '[HRSD] All systems verified — marking employee as READY for Day 1';
current.state = 'complete';
current.overall_readiness = 'ready';
current.update();
try { sn_fd.FlowAPI.getRunner().subflow('x_snc_fed_forum_on.readiness_check').inBackground().withInputs({ orchestration_sys_id: current.sys_id.toString() }).run(); } catch(e) {}
var ss = new GlideRecord('x_snc_fed_forum_on_demo_screenshot');
ss.addQuery('phase', 'mark_ready');
ss.query();
if (ss.next()) { var sa = new GlideSysAttachment(); var attGr = new GlideRecord('sys_attachment'); attGr.addQuery('table_name', 'x_snc_fed_forum_on_demo_screenshot'); attGr.addQuery('table_sys_id', ss.getUniqueValue()); attGr.query(); while (attGr.next()) { var stream = sa.getContentStream(attGr.getUniqueValue()); sa.writeContentStream(current, attGr.getValue('file_name'), attGr.getValue('content_type'), stream); } }
gs.addInfoMessage('Readiness Check triggered');`,
})



export const uaResetDemo = UiAction({
    $id: Now.ID['ua_reset_demo'],
    table: 'x_snc_fed_forum_on_orchestration',
    name: 'Reset Demo Data',
    actionName: 'reset_demo_data',
    active: true,
    hint: 'Delete all records and re-seed fresh demo data',
    showUpdate: true,
    showInsert: true,
    order: 50,
    roles: ['admin'],
    list: {
        showBannerButton: true,
        showButton: false,
        style: 'destructive',
    },
    workspace: { isConfigurableWorkspace: true, showFormButtonV2: false },
    script: `// Kill old dead-scope Reset button if it still exists
var oldReset = new GlideRecord('sys_ui_action');
if (oldReset.get('c325c434b05d4d07bae9f67a6e679312')) { oldReset.deleteRecord(); }

// Clear and reseed
var tables = ['x_snc_fed_forum_on_integration_log','x_snc_fed_forum_on_orchestration','x_snc_fed_forum_on_facility_access','x_snc_fed_forum_on_entra_account','x_snc_fed_forum_on_agsva_clearance','x_snc_fed_forum_on_sap_employee'];
for (var i = 0; i < tables.length; i++) { var del = new GlideRecord(tables[i]); del.deleteMultiple(); }

function ins(table, fields) { var gr = new GlideRecord(table); gr.initialize(); for (var k in fields) { gr.setValue(k, fields[k]); } return gr.insert(); }

var sap1 = ins('x_snc_fed_forum_on_sap_employee', { sap_employee_id:'10045821', first_name:'Priya', last_name:'Sharma', preferred_name:'Priya', date_of_birth:'1991-03-14', nationality:'Australian', gender:'female', email_work:'priya.sharma@agency.gov.au', email_personal:'priya.s@gmail.com', mobile:'+61 412 345 678', position_title:'APS6 Policy Officer', position_id:'50012345', org_unit:'Digital Policy Branch', department:'Department of Digital Transformation', cost_centre:'4410-2200', personnel_area:'Canberra', manager_name:'David Chen', manager_email:'david.chen@agency.gov.au', employment_status:'pending', start_date:'2026-05-25', company_code:'1000' });
var agsva1 = ins('x_snc_fed_forum_on_agsva_clearance', { agsva_reference:'CLR-2026-08841', subject_first_name:'Priya', subject_last_name:'Sharma', date_of_birth:'1991-03-14', clearance_level:'nv1', clearance_status:'active', issuing_date:'2024-06-15', expiry_date:'2034-06-15', sponsoring_entity:'Department of Home Affairs', transfer_status:'in_progress', transfer_to_entity:'Department of Digital Transformation' });
var entra1 = ins('x_snc_fed_forum_on_entra_account', { upn:'priya.sharma@agency.gov.au', display_name:'Priya Sharma', sap_employee_id:'10045821', account_status:'not_created', mfa_enrolled:'false' });
var fac1 = ins('x_snc_fed_forum_on_facility_access', { employee_name:'Priya Sharma', sap_employee_id:'10045821', building:'50 Marcus Clarke Street, Canberra ACT 2601', after_hours:'false', pass_status:'not_requested', photo_id_verified:'false' });
ins('x_snc_fed_forum_on_orchestration', { number:'ONB0194', employee_name:'Priya Sharma', sap_record:sap1, agsva_record:agsva1, entra_record:entra1, facility_record:fac1, state:'draft', target_start_date:'2026-05-25', overall_readiness:'not_ready' });

var sap2 = ins('x_snc_fed_forum_on_sap_employee', { sap_employee_id:'10045822', first_name:'Marcus', last_name:'Johnson', preferred_name:'Marc', date_of_birth:'1987-09-22', nationality:'Australian', gender:'male', email_work:'marcus.johnson@agency.gov.au', position_title:'EL1 Cyber Security Analyst', position_id:'50012390', org_unit:'Cyber Operations Branch', department:'Department of Digital Transformation', cost_centre:'4410-3100', personnel_area:'Canberra', manager_name:'Sarah Mitchell', manager_email:'sarah.mitchell@agency.gov.au', employment_status:'pending', start_date:'2026-06-02', company_code:'1000' });
var agsva2 = ins('x_snc_fed_forum_on_agsva_clearance', { agsva_reference:'CLR-2026-09102', subject_first_name:'Marcus', subject_last_name:'Johnson', date_of_birth:'1987-09-22', clearance_level:'nv2', clearance_status:'active', issuing_date:'2023-01-10', expiry_date:'2033-01-10', sponsoring_entity:'Department of Digital Transformation', transfer_status:'complete' });
var entra2 = ins('x_snc_fed_forum_on_entra_account', { upn:'marcus.johnson@agency.gov.au', display_name:'Marcus Johnson', sap_employee_id:'10045822', account_status:'not_created', mfa_enrolled:'false' });
var fac2 = ins('x_snc_fed_forum_on_facility_access', { employee_name:'Marcus Johnson', sap_employee_id:'10045822', building:'50 Marcus Clarke Street, Canberra ACT 2601', after_hours:'false', pass_status:'not_requested', photo_id_verified:'false' });
ins('x_snc_fed_forum_on_orchestration', { employee_name:'Marcus Johnson', sap_record:sap2, agsva_record:agsva2, entra_record:entra2, facility_record:fac2, state:'clearance_verified', target_start_date:'2026-06-02', overall_readiness:'not_ready' });

var sap3 = ins('x_snc_fed_forum_on_sap_employee', { sap_employee_id:'10045823', first_name:'Emily', last_name:'Nguyen', preferred_name:'Em', date_of_birth:'1994-12-03', nationality:'Australian', gender:'female', email_work:'emily.nguyen@agency.gov.au', position_title:'APS5 Data Engineer', position_id:'50012401', org_unit:'Data Insights Branch', department:'Department of Digital Transformation', cost_centre:'4410-2500', personnel_area:'Sydney', manager_name:'David Chen', manager_email:'david.chen@agency.gov.au', employment_status:'pending', start_date:'2026-05-19', company_code:'1000' });
var agsva3 = ins('x_snc_fed_forum_on_agsva_clearance', { agsva_reference:'CLR-2026-07553', subject_first_name:'Emily', subject_last_name:'Nguyen', date_of_birth:'1994-12-03', clearance_level:'baseline', clearance_status:'active', issuing_date:'2025-11-20', expiry_date:'2035-11-20', sponsoring_entity:'Department of Digital Transformation', transfer_status:'not_required' });
var entra3 = ins('x_snc_fed_forum_on_entra_account', { upn:'emily.nguyen@agency.gov.au', display_name:'Emily Nguyen', sap_employee_id:'10045823', account_status:'provisioning', mfa_enrolled:'false', assigned_licenses:'E5, Power BI Pro' });
var fac3 = ins('x_snc_fed_forum_on_facility_access', { employee_name:'Emily Nguyen', sap_employee_id:'10045823', building:'477 Pitt Street, Sydney NSW 2000', after_hours:'true', pass_status:'requested', photo_id_verified:'true' });
ins('x_snc_fed_forum_on_orchestration', { employee_name:'Emily Nguyen', sap_record:sap3, agsva_record:agsva3, entra_record:entra3, facility_record:fac3, state:'in_progress', target_start_date:'2026-05-19', overall_readiness:'partially_ready' });

var sap4 = ins('x_snc_fed_forum_on_sap_employee', { sap_employee_id:'10045819', first_name:'James', last_name:'O Brien', preferred_name:'Jim', date_of_birth:'1985-07-11', nationality:'Australian', gender:'male', email_work:'james.obrien@agency.gov.au', position_title:'EL2 Solution Architect', position_id:'50012280', org_unit:'Enterprise Architecture Branch', department:'Department of Digital Transformation', cost_centre:'4410-1800', personnel_area:'Canberra', manager_name:'David Chen', manager_email:'david.chen@agency.gov.au', employment_status:'active', start_date:'2026-04-28', company_code:'1000' });
var agsva4 = ins('x_snc_fed_forum_on_agsva_clearance', { agsva_reference:'CLR-2025-06291', subject_first_name:'James', subject_last_name:'O Brien', date_of_birth:'1985-07-11', clearance_level:'nv1', clearance_status:'active', issuing_date:'2022-03-01', expiry_date:'2032-03-01', sponsoring_entity:'Department of Digital Transformation', transfer_status:'not_required' });
var entra4 = ins('x_snc_fed_forum_on_entra_account', { upn:'james.obrien@agency.gov.au', display_name:'James O Brien', sap_employee_id:'10045819', account_status:'active', mfa_enrolled:'true', assigned_licenses:'E5, Visio Plan 2, Project Plan 3', provisioned_by:'ServiceNow Automation', entra_object_id:'a3f1c8e2-9d4b-4a1e-b5c7-2f8e6d3a9b01' });
var fac4 = ins('x_snc_fed_forum_on_facility_access', { badge_number:'CBR-20260428', employee_name:'James O Brien', sap_employee_id:'10045819', building:'50 Marcus Clarke Street, Canberra ACT 2601', access_zones:'Level 4, Level 5, Server Room B, Bike Storage', after_hours:'true', pass_status:'collected', issued_date:'2026-04-28', photo_id_verified:'true' });
ins('x_snc_fed_forum_on_orchestration', { employee_name:'James O Brien', sap_record:sap4, agsva_record:agsva4, entra_record:entra4, facility_record:fac4, state:'complete', target_start_date:'2026-04-28', overall_readiness:'ready' });

// --- INTEGRATION LOG SEED DATA ---
ins('x_snc_fed_forum_on_integration_log', { sequence:1, target_system:'agsva', action:'RPA bot: Verify clearance status for Priya Sharma', status:'success', detail:'RPA authenticated to AGSVA portal. NV1 clearance confirmed active. Expiry 2034-06-15.', duration_ms:1240 });
ins('x_snc_fed_forum_on_integration_log', { sequence:1, target_system:'agsva', action:'RPA bot: Verify clearance status for Marcus Johnson', status:'success', detail:'RPA authenticated to AGSVA portal. NV2 clearance confirmed active. Transfer complete.', duration_ms:980 });
ins('x_snc_fed_forum_on_integration_log', { sequence:1, target_system:'agsva', action:'RPA bot: Verify clearance status for Emily Nguyen', status:'success', detail:'RPA authenticated to AGSVA portal. Baseline clearance active. No transfer required.', duration_ms:1102 });
ins('x_snc_fed_forum_on_integration_log', { sequence:1, target_system:'agsva', action:'RPA bot: Verify clearance status for James O Brien', status:'success', detail:'RPA authenticated to AGSVA portal. NV1 clearance active. No transfer required.', duration_ms:875 });
ins('x_snc_fed_forum_on_integration_log', { sequence:1, target_system:'agsva', action:'RPA bot: Transfer clearance sponsorship request', status:'in_flight', detail:'RPA submitted transfer form on AGSVA portal. Awaiting acknowledgement.', duration_ms:3200 });
ins('x_snc_fed_forum_on_integration_log', { sequence:2, target_system:'sap_hcm', action:'Retrieve employee master for 10045821', status:'success', detail:'Priya Sharma record retrieved. Status: Pending.', duration_ms:2150 });
ins('x_snc_fed_forum_on_integration_log', { sequence:2, target_system:'sap_hcm', action:'Retrieve employee master for 10045822', status:'success', detail:'Marcus Johnson record retrieved. Status: Pending.', duration_ms:1980 });
ins('x_snc_fed_forum_on_integration_log', { sequence:2, target_system:'sap_hcm', action:'Retrieve employee master for 10045823', status:'success', detail:'Emily Nguyen record retrieved. Status: Pending.', duration_ms:2340 });
ins('x_snc_fed_forum_on_integration_log', { sequence:2, target_system:'sap_hcm', action:'Update employment status to Active for 10045819', status:'success', detail:'James O Brien status updated in SAP HCM.', duration_ms:3100 });
ins('x_snc_fed_forum_on_integration_log', { sequence:2, target_system:'sap_hcm', action:'Retrieve cost centre allocation for 10045821', status:'failed', detail:'SAP RFC timeout after 30s. Cost centre CC-4520 unavailable.', duration_ms:30000 });
ins('x_snc_fed_forum_on_integration_log', { sequence:3, target_system:'sap_hcm', action:'Retry cost centre allocation for 10045821', status:'success', detail:'Cost centre CC-4520 confirmed on retry.', duration_ms:2800 });
ins('x_snc_fed_forum_on_integration_log', { sequence:3, target_system:'entra_id', action:'SCIM: Provision UPN priya.sharma@agency.gov.au', status:'pending', detail:'Account creation queued via SCIM. Group memberships pending.', duration_ms:450 });
ins('x_snc_fed_forum_on_integration_log', { sequence:3, target_system:'entra_id', action:'SCIM: Provision UPN marcus.johnson@agency.gov.au', status:'pending', detail:'Account creation queued via SCIM. Group memberships pending.', duration_ms:420 });
ins('x_snc_fed_forum_on_integration_log', { sequence:3, target_system:'entra_id', action:'SCIM: Provision UPN emily.nguyen@agency.gov.au', status:'in_flight', detail:'SCIM provisioning in progress. Awaiting license assignment via group membership.', duration_ms:5600 });
ins('x_snc_fed_forum_on_integration_log', { sequence:3, target_system:'entra_id', action:'SCIM: Activate UPN james.obrien@agency.gov.au', status:'success', detail:'Account active via SCIM. E5 license inherited from group. Conditional Access policy applied.', duration_ms:8200 });
ins('x_snc_fed_forum_on_integration_log', { sequence:4, target_system:'entra_id', action:'Intune: Push Authenticator to managed device', status:'success', detail:'Authenticator app deployed via Intune Company Portal pre-Day 1.', duration_ms:1500 });
ins('x_snc_fed_forum_on_integration_log', { sequence:4, target_system:'entra_id', action:'Conditional Access: MFA policy assigned', status:'success', detail:'MFA enforcement via Conditional Access. User prompted on first sign-in.', duration_ms:920 });
ins('x_snc_fed_forum_on_integration_log', { sequence:4, target_system:'facilities', action:'Request building pass for Priya Sharma', status:'pending', detail:'Pass request submitted for 50 Marcus Clarke St.', duration_ms:680 });
ins('x_snc_fed_forum_on_integration_log', { sequence:4, target_system:'facilities', action:'Request building pass for Emily Nguyen', status:'in_flight', detail:'Pass request processing for 477 Pitt St. Photo ID pending.', duration_ms:1450 });
ins('x_snc_fed_forum_on_integration_log', { sequence:4, target_system:'facilities', action:'Issue building pass for James O Brien', status:'success', detail:'Badge #B-4421 issued. Zones: Level 3, Server Room, Carpark.', duration_ms:2100 });
ins('x_snc_fed_forum_on_integration_log', { sequence:5, target_system:'facilities', action:'Activate after-hours access for James O Brien', status:'success', detail:'After-hours access enabled for Badge #B-4421.', duration_ms:750 });
ins('x_snc_fed_forum_on_integration_log', { sequence:5, target_system:'hrsd', action:'Create lifecycle event for Priya Sharma', status:'success', detail:'Onboarding lifecycle event created in HRSD.', duration_ms:1800 });
ins('x_snc_fed_forum_on_integration_log', { sequence:5, target_system:'hrsd', action:'Create lifecycle event for Marcus Johnson', status:'success', detail:'Onboarding lifecycle event created in HRSD.', duration_ms:1650 });
ins('x_snc_fed_forum_on_integration_log', { sequence:5, target_system:'hrsd', action:'Create lifecycle event for Emily Nguyen', status:'success', detail:'Onboarding lifecycle event created in HRSD.', duration_ms:1720 });
ins('x_snc_fed_forum_on_integration_log', { sequence:5, target_system:'hrsd', action:'Complete lifecycle event for James O Brien', status:'success', detail:'All onboarding activities marked complete.', duration_ms:2200 });
ins('x_snc_fed_forum_on_integration_log', { sequence:6, target_system:'hrsd', action:'Trigger Day 1 welcome notification', status:'success', detail:'Welcome email and checklist sent to James O Brien.', duration_ms:560 });
ins('x_snc_fed_forum_on_integration_log', { sequence:6, target_system:'hrsd', action:'Assign mandatory training modules', status:'failed', detail:'LMS integration timeout. Training assignment deferred.', duration_ms:30000 });

// --- 46 PADDING RECORDS (orchestration-only, for dashboard density — 46 + 4 working = 50 total) ---
var padding = [
['Arun Sharma','complete','2025-01-15','ready'],['Sean O Brien','complete','2025-01-22','ready'],['Wei Zhang','complete','2025-02-03','ready'],['Amara Okafor','complete','2025-02-10','ready'],['Liam McCarthy','complete','2025-02-17','ready'],['Sophie Nguyen','complete','2025-03-03','ready'],['Marcus Brown','complete','2025-03-10','ready'],['Aisha Patel','complete','2025-03-17','ready'],['Tom Henderson','complete','2025-03-24','ready'],['Mei Lin','complete','2025-04-01','ready'],['Daniel Foster','complete','2025-04-07','ready'],['Fatima Al-Rashid','complete','2025-04-14','ready'],['Ryan Cooper','complete','2025-04-21','ready'],['Emily Watson','complete','2025-04-28','ready'],['Raj Krishnamurthy','complete','2025-05-05','ready'],['Sarah Campbell','in_progress','2025-05-12','ready'],['Chris Williams','in_progress','2025-05-19','ready'],['Zara Khan','in_progress','2025-05-26','partially_ready'],['Nathan Taylor','in_progress','2025-06-02','partially_ready'],['Olivia Martin','in_progress','2025-06-09','ready'],['Alex Petrov','in_progress','2025-06-16','partially_ready'],['Jasmine Lee','in_progress','2025-06-23','ready'],['Connor Murphy','in_progress','2025-06-30','partially_ready'],['Anita Desai','in_progress','2025-07-07','ready'],['Ben Richardson','in_progress','2025-07-14','partially_ready'],['Lucy Parker','provisioning','2025-07-21','partially_ready'],['Hamza Ahmed','provisioning','2025-07-28','partially_ready'],['Grace Sullivan','provisioning','2025-08-04','partially_ready'],['Josh Turner','provisioning','2025-08-11','partially_ready'],['Nadia Volkov','provisioning','2025-08-18','partially_ready'],['Patrick Doherty','provisioning','2025-08-25','not_ready'],['Chloe Anderson','provisioning','2025-09-01','not_ready'],['Arjun Mehta','provisioning','2025-09-08','partially_ready'],['Tara O Neill','clearance_verified','2025-09-15','not_ready'],['Michael Scott','clearance_verified','2025-09-22','not_ready'],['Hannah Wright','clearance_verified','2025-09-29','not_ready'],['David Yamamoto','clearance_verified','2025-10-06','not_ready'],['Isabella Romano','clearance_verified','2025-10-13','partially_ready'],['Sam Johnston','clearance_verified','2025-10-20','not_ready'],['Maya Singh','clearance_verified','2025-10-27','not_ready'],['Ethan Clark','draft','2025-11-03','not_ready'],['Lily Adams','draft','2025-11-10','not_ready'],['Omar Hassan','draft','2025-11-17','not_ready'],['Kate Brennan','draft','2025-11-24','not_ready'],['Luke Fitzgerald','draft','2025-12-01','not_ready'],['Jake Morrison','draft','2025-12-08','not_ready']
];
for (var p = 0; p < padding.length; p++) { ins('x_snc_fed_forum_on_orchestration', { employee_name:padding[p][0], state:padding[p][1], target_start_date:padding[p][2], overall_readiness:padding[p][3] }); }

gs.addInfoMessage('Demo reset complete — 50 orchestration records + 26 integration logs');`,
})

import '@servicenow/sdk/global';
import { ScriptInclude } from '@servicenow/sdk/core';

export const ResetDemoDataAjax = ScriptInclude({
    $id: Now.ID['ResetDemoDataAjax'],
    name: 'ResetDemoDataAjax',
    description: 'Client-callable script include for resetting demo data via GlideAjax',
    clientCallable: true,
    active: true,
    accessibleFrom: 'package_private',
    script: `var ResetDemoDataAjax = Class.create();
ResetDemoDataAjax.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {
    resetData: function() {
        // DELETE ALL sys_ux_form_action records for this table (orphaned ones block workspace buttons)
        var fa = new GlideRecord('sys_ux_form_action');
        fa.addQuery('table', 'x_snc_fed_forum_on_orchestration');
        fa.deleteMultiple();

        // DELETE orphaned UI actions by exact sys_ids (from dead scope 2036727747e04bd0f9de91ef016d43ea)
        var deadIds = ['070ecdb4bd6640a8870bec71c353e5e2','4d198b6e71f54869a3efb8038ffb18f4','75806458557c44ed8273e714eee28f18','c325c434b05d4d07bae9f67a6e679312','e2e1b5deb9c048c2993a2414cfdc2cca','f443b034a3ff472fb0072e090d8a3f75'];
        for (var d = 0; d < deadIds.length; d++) {
            var deadRec = new GlideRecord('sys_ui_action');
            if (deadRec.get(deadIds[d])) { deadRec.deleteRecord(); }
        }

        // Also catch any others from dead scope
        var deadUaDirect = new GlideRecord('sys_ui_action');
        deadUaDirect.addQuery('table', 'x_snc_fed_forum_on_orchestration');
        deadUaDirect.addQuery('sys_scope', '2036727747e04bd0f9de91ef016d43ea');
        deadUaDirect.deleteMultiple();

        // Delete orphaned work_notes field from dead scope (causes duplicate on form)
        var deadDict = new GlideRecord('sys_dictionary');
        if (deadDict.get('f084d64847748314f9de91ef016d4329')) { deadDict.deleteRecord(); }

        // Recreate sys_ux_form_action records (toggle workspace flag to force platform BR)
        var validUa = new GlideRecord('sys_ui_action');
        validUa.addQuery('table', 'x_snc_fed_forum_on_orchestration');
        validUa.addQuery('sys_scope', gs.getCurrentApplicationId());
        validUa.query();
        while (validUa.next()) {
            validUa.setValue('format_for_configurable_workspace', '0');
            validUa.update();
            validUa.setValue('format_for_configurable_workspace', '1');
            validUa.update();
        }

        // DELETE all "Copy Log to Activity Stream" BRs (duplicates from previous installs)
        var brCleanup = new GlideRecord('sys_script');
        brCleanup.addQuery('name', 'Copy Log to Activity Stream');
        brCleanup.addQuery('collection', 'x_snc_fed_forum_on_integration_log');
        brCleanup.deleteMultiple();

        var tables = [
            'x_snc_fed_forum_on_integration_log',
            'x_snc_fed_forum_on_orchestration',
            'x_snc_fed_forum_on_facility_access',
            'x_snc_fed_forum_on_entra_account',
            'x_snc_fed_forum_on_agsva_clearance',
            'x_snc_fed_forum_on_sap_employee'
        ];
        for (var i = 0; i < tables.length; i++) {
            var del = new GlideRecord(tables[i]);
            del.deleteMultiple();
        }

        function insertRecord(table, fields) {
            var gr = new GlideRecord(table);
            gr.initialize();
            for (var key in fields) {
                gr.setValue(key, fields[key]);
            }
            return gr.insert();
        }

        var sap1 = insertRecord('x_snc_fed_forum_on_sap_employee', { sap_employee_id:'10045821', first_name:'Priya', last_name:'Sharma', preferred_name:'Priya', date_of_birth:'1991-03-14', nationality:'Australian', gender:'female', email_work:'priya.sharma@agency.gov.au', email_personal:'priya.s@gmail.com', mobile:'+61 412 345 678', position_title:'APS6 Policy Officer', position_id:'50012345', org_unit:'Digital Policy Branch', department:'Department of Digital Transformation', cost_centre:'4410-2200', personnel_area:'Canberra', manager_name:'David Chen', manager_email:'david.chen@agency.gov.au', employment_status:'pending', start_date:'2026-05-25', company_code:'1000' });
        var agsva1 = insertRecord('x_snc_fed_forum_on_agsva_clearance', { agsva_reference:'CLR-2026-08841', subject_first_name:'Priya', subject_last_name:'Sharma', date_of_birth:'1991-03-14', clearance_level:'nv1', clearance_status:'active', issuing_date:'2024-06-15', expiry_date:'2034-06-15', sponsoring_entity:'Department of Home Affairs', transfer_status:'in_progress', transfer_to_entity:'Department of Digital Transformation' });
        var entra1 = insertRecord('x_snc_fed_forum_on_entra_account', { upn:'priya.sharma@agency.gov.au', display_name:'Priya Sharma', sap_employee_id:'10045821', account_status:'not_created', mfa_enrolled:'false' });
        var fac1 = insertRecord('x_snc_fed_forum_on_facility_access', { employee_name:'Priya Sharma', sap_employee_id:'10045821', building:'50 Marcus Clarke Street, Canberra ACT 2601', after_hours:'false', pass_status:'not_requested', photo_id_verified:'false' });
        insertRecord('x_snc_fed_forum_on_orchestration', { number:'ONB0194', employee_name:'Priya Sharma', sap_record:sap1, agsva_record:agsva1, entra_record:entra1, facility_record:fac1, state:'draft', target_start_date:'2026-05-25', overall_readiness:'not_ready' });

        var sap2 = insertRecord('x_snc_fed_forum_on_sap_employee', { sap_employee_id:'10045822', first_name:'Marcus', last_name:'Johnson', preferred_name:'Marc', date_of_birth:'1987-09-22', nationality:'Australian', gender:'male', email_work:'marcus.johnson@agency.gov.au', position_title:'EL1 Cyber Security Analyst', position_id:'50012390', org_unit:'Cyber Operations Branch', department:'Department of Digital Transformation', cost_centre:'4410-3100', personnel_area:'Canberra', manager_name:'Sarah Mitchell', manager_email:'sarah.mitchell@agency.gov.au', employment_status:'pending', start_date:'2026-06-02', company_code:'1000' });
        var agsva2 = insertRecord('x_snc_fed_forum_on_agsva_clearance', { agsva_reference:'CLR-2026-09102', subject_first_name:'Marcus', subject_last_name:'Johnson', date_of_birth:'1987-09-22', clearance_level:'nv2', clearance_status:'active', issuing_date:'2023-01-10', expiry_date:'2033-01-10', sponsoring_entity:'Department of Digital Transformation', transfer_status:'complete' });
        var entra2 = insertRecord('x_snc_fed_forum_on_entra_account', { upn:'marcus.johnson@agency.gov.au', display_name:'Marcus Johnson', sap_employee_id:'10045822', account_status:'not_created', mfa_enrolled:'false' });
        var fac2 = insertRecord('x_snc_fed_forum_on_facility_access', { employee_name:'Marcus Johnson', sap_employee_id:'10045822', building:'50 Marcus Clarke Street, Canberra ACT 2601', after_hours:'false', pass_status:'not_requested', photo_id_verified:'false' });
        insertRecord('x_snc_fed_forum_on_orchestration', { employee_name:'Marcus Johnson', sap_record:sap2, agsva_record:agsva2, entra_record:entra2, facility_record:fac2, state:'clearance_verified', target_start_date:'2026-06-02', overall_readiness:'not_ready' });

        var sap3 = insertRecord('x_snc_fed_forum_on_sap_employee', { sap_employee_id:'10045823', first_name:'Emily', last_name:'Nguyen', preferred_name:'Em', date_of_birth:'1994-12-03', nationality:'Australian', gender:'female', email_work:'emily.nguyen@agency.gov.au', position_title:'APS5 Data Engineer', position_id:'50012401', org_unit:'Data Insights Branch', department:'Department of Digital Transformation', cost_centre:'4410-2500', personnel_area:'Sydney', manager_name:'David Chen', manager_email:'david.chen@agency.gov.au', employment_status:'pending', start_date:'2026-05-19', company_code:'1000' });
        var agsva3 = insertRecord('x_snc_fed_forum_on_agsva_clearance', { agsva_reference:'CLR-2026-07553', subject_first_name:'Emily', subject_last_name:'Nguyen', date_of_birth:'1994-12-03', clearance_level:'baseline', clearance_status:'active', issuing_date:'2025-11-20', expiry_date:'2035-11-20', sponsoring_entity:'Department of Digital Transformation', transfer_status:'not_required' });
        var entra3 = insertRecord('x_snc_fed_forum_on_entra_account', { upn:'emily.nguyen@agency.gov.au', display_name:'Emily Nguyen', sap_employee_id:'10045823', account_status:'provisioning', mfa_enrolled:'false', assigned_licenses:'E5, Power BI Pro' });
        var fac3 = insertRecord('x_snc_fed_forum_on_facility_access', { employee_name:'Emily Nguyen', sap_employee_id:'10045823', building:'477 Pitt Street, Sydney NSW 2000', after_hours:'true', pass_status:'requested', photo_id_verified:'true' });
        insertRecord('x_snc_fed_forum_on_orchestration', { employee_name:'Emily Nguyen', sap_record:sap3, agsva_record:agsva3, entra_record:entra3, facility_record:fac3, state:'in_progress', target_start_date:'2026-05-19', overall_readiness:'partially_ready' });

        var sap4 = insertRecord('x_snc_fed_forum_on_sap_employee', { sap_employee_id:'10045819', first_name:'James', last_name:'O Brien', preferred_name:'Jim', date_of_birth:'1985-07-11', nationality:'Australian', gender:'male', email_work:'james.obrien@agency.gov.au', position_title:'EL2 Solution Architect', position_id:'50012280', org_unit:'Enterprise Architecture Branch', department:'Department of Digital Transformation', cost_centre:'4410-1800', personnel_area:'Canberra', manager_name:'David Chen', manager_email:'david.chen@agency.gov.au', employment_status:'active', start_date:'2026-04-28', company_code:'1000' });
        var agsva4 = insertRecord('x_snc_fed_forum_on_agsva_clearance', { agsva_reference:'CLR-2025-06291', subject_first_name:'James', subject_last_name:'O Brien', date_of_birth:'1985-07-11', clearance_level:'nv1', clearance_status:'active', issuing_date:'2022-03-01', expiry_date:'2032-03-01', sponsoring_entity:'Department of Digital Transformation', transfer_status:'not_required' });
        var entra4 = insertRecord('x_snc_fed_forum_on_entra_account', { upn:'james.obrien@agency.gov.au', display_name:'James O Brien', sap_employee_id:'10045819', account_status:'active', mfa_enrolled:'true', assigned_licenses:'E5, Visio Plan 2, Project Plan 3', provisioned_by:'ServiceNow Automation', entra_object_id:'a3f1c8e2-9d4b-4a1e-b5c7-2f8e6d3a9b01' });
        var fac4 = insertRecord('x_snc_fed_forum_on_facility_access', { badge_number:'CBR-20260428', employee_name:'James O Brien', sap_employee_id:'10045819', building:'50 Marcus Clarke Street, Canberra ACT 2601', access_zones:'Level 4, Level 5, Server Room B, Bike Storage', after_hours:'true', pass_status:'collected', issued_date:'2026-04-28', photo_id_verified:'true' });
        insertRecord('x_snc_fed_forum_on_orchestration', { employee_name:'James O Brien', sap_record:sap4, agsva_record:agsva4, entra_record:entra4, facility_record:fac4, state:'complete', target_start_date:'2026-04-28', overall_readiness:'ready' });

        // --- INTEGRATION LOG SEED DATA ---
        insertRecord('x_snc_fed_forum_on_integration_log', { sequence:1, target_system:'agsva', action:'RPA bot: Verify clearance status for Priya Sharma', status:'success', detail:'RPA authenticated to AGSVA portal. NV1 clearance confirmed active. Expiry 2034-06-15.', duration_ms:1240 });
        insertRecord('x_snc_fed_forum_on_integration_log', { sequence:1, target_system:'agsva', action:'RPA bot: Verify clearance status for Marcus Johnson', status:'success', detail:'RPA authenticated to AGSVA portal. NV2 clearance confirmed active. Transfer complete.', duration_ms:980 });
        insertRecord('x_snc_fed_forum_on_integration_log', { sequence:1, target_system:'agsva', action:'RPA bot: Verify clearance status for Emily Nguyen', status:'success', detail:'RPA authenticated to AGSVA portal. Baseline clearance active. No transfer required.', duration_ms:1102 });
        insertRecord('x_snc_fed_forum_on_integration_log', { sequence:1, target_system:'agsva', action:'RPA bot: Verify clearance status for James O Brien', status:'success', detail:'RPA authenticated to AGSVA portal. NV1 clearance active. No transfer required.', duration_ms:875 });
        insertRecord('x_snc_fed_forum_on_integration_log', { sequence:1, target_system:'agsva', action:'RPA bot: Transfer clearance sponsorship request', status:'in_flight', detail:'RPA submitted transfer form on AGSVA portal. Awaiting acknowledgement.', duration_ms:3200 });
        insertRecord('x_snc_fed_forum_on_integration_log', { sequence:2, target_system:'sap_hcm', action:'Retrieve employee master for 10045821', status:'success', detail:'Priya Sharma record retrieved. Status: Pending.', duration_ms:2150 });
        insertRecord('x_snc_fed_forum_on_integration_log', { sequence:2, target_system:'sap_hcm', action:'Retrieve employee master for 10045822', status:'success', detail:'Marcus Johnson record retrieved. Status: Pending.', duration_ms:1980 });
        insertRecord('x_snc_fed_forum_on_integration_log', { sequence:2, target_system:'sap_hcm', action:'Retrieve employee master for 10045823', status:'success', detail:'Emily Nguyen record retrieved. Status: Pending.', duration_ms:2340 });
        insertRecord('x_snc_fed_forum_on_integration_log', { sequence:2, target_system:'sap_hcm', action:'Update employment status to Active for 10045819', status:'success', detail:'James O Brien status updated in SAP HCM.', duration_ms:3100 });
        insertRecord('x_snc_fed_forum_on_integration_log', { sequence:2, target_system:'sap_hcm', action:'Retrieve cost centre allocation for 10045821', status:'failed', detail:'SAP RFC timeout after 30s. Cost centre CC-4520 unavailable.', duration_ms:30000 });
        insertRecord('x_snc_fed_forum_on_integration_log', { sequence:3, target_system:'sap_hcm', action:'Retry cost centre allocation for 10045821', status:'success', detail:'Cost centre CC-4520 confirmed on retry.', duration_ms:2800 });
        insertRecord('x_snc_fed_forum_on_integration_log', { sequence:3, target_system:'entra_id', action:'SCIM: Provision UPN priya.sharma@agency.gov.au', status:'pending', detail:'Account creation queued via SCIM. Group memberships pending.', duration_ms:450 });
        insertRecord('x_snc_fed_forum_on_integration_log', { sequence:3, target_system:'entra_id', action:'SCIM: Provision UPN marcus.johnson@agency.gov.au', status:'pending', detail:'Account creation queued via SCIM. Group memberships pending.', duration_ms:420 });
        insertRecord('x_snc_fed_forum_on_integration_log', { sequence:3, target_system:'entra_id', action:'SCIM: Provision UPN emily.nguyen@agency.gov.au', status:'in_flight', detail:'SCIM provisioning in progress. Awaiting license assignment via group membership.', duration_ms:5600 });
        insertRecord('x_snc_fed_forum_on_integration_log', { sequence:3, target_system:'entra_id', action:'SCIM: Activate UPN james.obrien@agency.gov.au', status:'success', detail:'Account active via SCIM. E5 license inherited from group. Conditional Access policy applied.', duration_ms:8200 });
        insertRecord('x_snc_fed_forum_on_integration_log', { sequence:4, target_system:'entra_id', action:'Intune: Push Authenticator to managed device', status:'success', detail:'Authenticator app deployed via Intune Company Portal pre-Day 1.', duration_ms:1500 });
        insertRecord('x_snc_fed_forum_on_integration_log', { sequence:4, target_system:'entra_id', action:'Conditional Access: MFA policy assigned', status:'success', detail:'MFA enforcement via Conditional Access. User prompted on first sign-in.', duration_ms:920 });
        insertRecord('x_snc_fed_forum_on_integration_log', { sequence:4, target_system:'facilities', action:'Request building pass for Priya Sharma', status:'pending', detail:'Pass request submitted for 50 Marcus Clarke St.', duration_ms:680 });
        insertRecord('x_snc_fed_forum_on_integration_log', { sequence:4, target_system:'facilities', action:'Request building pass for Emily Nguyen', status:'in_flight', detail:'Pass request processing for 477 Pitt St. Photo ID pending.', duration_ms:1450 });
        insertRecord('x_snc_fed_forum_on_integration_log', { sequence:4, target_system:'facilities', action:'Issue building pass for James O Brien', status:'success', detail:'Badge #B-4421 issued. Zones: Level 3, Server Room, Carpark.', duration_ms:2100 });
        insertRecord('x_snc_fed_forum_on_integration_log', { sequence:5, target_system:'facilities', action:'Activate after-hours access for James O Brien', status:'success', detail:'After-hours access enabled for Badge #B-4421.', duration_ms:750 });
        insertRecord('x_snc_fed_forum_on_integration_log', { sequence:5, target_system:'hrsd', action:'Create lifecycle event for Priya Sharma', status:'success', detail:'Onboarding lifecycle event created in HRSD.', duration_ms:1800 });
        insertRecord('x_snc_fed_forum_on_integration_log', { sequence:5, target_system:'hrsd', action:'Create lifecycle event for Marcus Johnson', status:'success', detail:'Onboarding lifecycle event created in HRSD.', duration_ms:1650 });
        insertRecord('x_snc_fed_forum_on_integration_log', { sequence:5, target_system:'hrsd', action:'Create lifecycle event for Emily Nguyen', status:'success', detail:'Onboarding lifecycle event created in HRSD.', duration_ms:1720 });
        insertRecord('x_snc_fed_forum_on_integration_log', { sequence:5, target_system:'hrsd', action:'Complete lifecycle event for James O Brien', status:'success', detail:'All onboarding activities marked complete.', duration_ms:2200 });
        insertRecord('x_snc_fed_forum_on_integration_log', { sequence:6, target_system:'hrsd', action:'Trigger Day 1 welcome notification', status:'success', detail:'Welcome email and checklist sent to James O Brien.', duration_ms:560 });
        insertRecord('x_snc_fed_forum_on_integration_log', { sequence:6, target_system:'hrsd', action:'Assign mandatory training modules', status:'failed', detail:'LMS integration timeout. Training assignment deferred.', duration_ms:30000 });

        // --- 46 PADDING RECORDS (orchestration-only — 46 + 4 working = 50 total) ---
        var padding = [
['Arun Sharma','complete','2025-01-15','ready'],['Sean O Brien','complete','2025-01-22','ready'],['Wei Zhang','complete','2025-02-03','ready'],['Amara Okafor','complete','2025-02-10','ready'],['Liam McCarthy','complete','2025-02-17','ready'],['Sophie Nguyen','complete','2025-03-03','ready'],['Marcus Brown','complete','2025-03-10','ready'],['Aisha Patel','complete','2025-03-17','ready'],['Tom Henderson','complete','2025-03-24','ready'],['Mei Lin','complete','2025-04-01','ready'],['Daniel Foster','complete','2025-04-07','ready'],['Fatima Al-Rashid','complete','2025-04-14','ready'],['Ryan Cooper','complete','2025-04-21','ready'],['Emily Watson','complete','2025-04-28','ready'],['Raj Krishnamurthy','complete','2025-05-05','ready'],['Sarah Campbell','in_progress','2025-05-12','ready'],['Chris Williams','in_progress','2025-05-19','ready'],['Zara Khan','in_progress','2025-05-26','partially_ready'],['Nathan Taylor','in_progress','2025-06-02','partially_ready'],['Olivia Martin','in_progress','2025-06-09','ready'],['Alex Petrov','in_progress','2025-06-16','partially_ready'],['Jasmine Lee','in_progress','2025-06-23','ready'],['Connor Murphy','in_progress','2025-06-30','partially_ready'],['Anita Desai','in_progress','2025-07-07','ready'],['Ben Richardson','in_progress','2025-07-14','partially_ready'],['Lucy Parker','provisioning','2025-07-21','partially_ready'],['Hamza Ahmed','provisioning','2025-07-28','partially_ready'],['Grace Sullivan','provisioning','2025-08-04','partially_ready'],['Josh Turner','provisioning','2025-08-11','partially_ready'],['Nadia Volkov','provisioning','2025-08-18','partially_ready'],['Patrick Doherty','provisioning','2025-08-25','not_ready'],['Chloe Anderson','provisioning','2025-09-01','not_ready'],['Arjun Mehta','provisioning','2025-09-08','partially_ready'],['Tara O Neill','clearance_verified','2025-09-15','not_ready'],['Michael Scott','clearance_verified','2025-09-22','not_ready'],['Hannah Wright','clearance_verified','2025-09-29','not_ready'],['David Yamamoto','clearance_verified','2025-10-06','not_ready'],['Isabella Romano','clearance_verified','2025-10-13','partially_ready'],['Sam Johnston','clearance_verified','2025-10-20','not_ready'],['Maya Singh','clearance_verified','2025-10-27','not_ready'],['Ethan Clark','draft','2025-11-03','not_ready'],['Lily Adams','draft','2025-11-10','not_ready'],['Omar Hassan','draft','2025-11-17','not_ready'],['Kate Brennan','draft','2025-11-24','not_ready'],['Luke Fitzgerald','draft','2025-12-01','not_ready'],['Jake Morrison','draft','2025-12-08','not_ready']
        ];
        for (var p = 0; p < padding.length; p++) { insertRecord('x_snc_fed_forum_on_orchestration', { employee_name:padding[p][0], state:padding[p][1], target_start_date:padding[p][2], overall_readiness:padding[p][3] }); }

        // --- TRIGGER PA DATA COLLECTION (populates indicator scorecard) ---
        try {
            var paJobGr = new GlideRecord('sysauto_pa');
            if (paJobGr.get('3559fd775c4843a2936f7429c3e5ea79')) {
                var trigger = new GlideRecord('sys_trigger');
                trigger.initialize();
                trigger.setValue('name', 'Run PA Collection - Fed Onboarding');
                trigger.setValue('trigger_type', '0');
                trigger.setValue('system_id', paJobGr.getUniqueValue());
                trigger.setValue('next_action', new GlideDateTime());
                trigger.insert();
            }
        } catch(e) {
            // PA collection trigger failed silently - not critical
        }

        return JSON.stringify({success: true, message: '50 orchestration records + 26 integration logs created'});
    },
    type: 'ResetDemoDataAjax'
});`,
});

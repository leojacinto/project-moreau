var tables = ['x_snc_fed_forum_on_integration_log','x_snc_fed_forum_on_orchestration','x_snc_fed_forum_on_facility_access','x_snc_fed_forum_on_entra_account','x_snc_fed_forum_on_agsva_clearance','x_snc_fed_forum_on_sap_employee'];
for(var i=0;i<tables.length;i++){var d=new GlideRecord(tables[i]);d.deleteMultiple();}
function ins(t,f){var g=new GlideRecord(t);g.initialize();for(var k in f)g.setValue(k,f[k]);return g.insert();}
var s1=ins('x_snc_fed_forum_on_sap_employee',{sap_employee_id:'10045821',first_name:'Priya',last_name:'Sharma',position_title:'APS6 Policy Officer',department:'Department of Digital Transformation',employment_status:'pending',start_date:'2026-05-25'});
var a1=ins('x_snc_fed_forum_on_agsva_clearance',{agsva_reference:'CLR-2026-08841',subject_first_name:'Priya',subject_last_name:'Sharma',clearance_level:'nv1',clearance_status:'active',expiry_date:'2034-06-15',transfer_status:'in_progress'});
var e1=ins('x_snc_fed_forum_on_entra_account',{upn:'priya.sharma@agency.gov.au',display_name:'Priya Sharma',account_status:'not_created',mfa_enrolled:'false'});
var f1=ins('x_snc_fed_forum_on_facility_access',{employee_name:'Priya Sharma',building:'50 Marcus Clarke St, Canberra',pass_status:'not_requested'});
ins('x_snc_fed_forum_on_orchestration',{employee_name:'Priya Sharma',sap_record:s1,agsva_record:a1,entra_record:e1,facility_record:f1,state:'draft',target_start_date:'2026-05-25',overall_readiness:'not_ready'});
var s2=ins('x_snc_fed_forum_on_sap_employee',{sap_employee_id:'10045822',first_name:'Marcus',last_name:'Johnson',position_title:'EL1 Cyber Security Analyst',department:'Department of Digital Transformation',employment_status:'pending',start_date:'2026-06-02'});
var a2=ins('x_snc_fed_forum_on_agsva_clearance',{agsva_reference:'CLR-2026-09102',subject_first_name:'Marcus',subject_last_name:'Johnson',clearance_level:'nv2',clearance_status:'active',expiry_date:'2033-01-10',transfer_status:'complete'});
var e2=ins('x_snc_fed_forum_on_entra_account',{upn:'marcus.johnson@agency.gov.au',display_name:'Marcus Johnson',account_status:'not_created',mfa_enrolled:'false'});
var f2=ins('x_snc_fed_forum_on_facility_access',{employee_name:'Marcus Johnson',building:'50 Marcus Clarke St, Canberra',pass_status:'not_requested'});
ins('x_snc_fed_forum_on_orchestration',{employee_name:'Marcus Johnson',sap_record:s2,agsva_record:a2,entra_record:e2,facility_record:f2,state:'clearance_verified',target_start_date:'2026-06-02',overall_readiness:'not_ready'});
var s3=ins('x_snc_fed_forum_on_sap_employee',{sap_employee_id:'10045823',first_name:'Emily',last_name:'Nguyen',position_title:'APS5 Data Engineer',department:'Department of Digital Transformation',employment_status:'pending',start_date:'2026-05-19'});
var a3=ins('x_snc_fed_forum_on_agsva_clearance',{agsva_reference:'CLR-2026-07553',subject_first_name:'Emily',subject_last_name:'Nguyen',clearance_level:'baseline',clearance_status:'active',expiry_date:'2035-11-20',transfer_status:'not_required'});
var e3=ins('x_snc_fed_forum_on_entra_account',{upn:'emily.nguyen@agency.gov.au',display_name:'Emily Nguyen',account_status:'provisioning',mfa_enrolled:'false'});
var f3=ins('x_snc_fed_forum_on_facility_access',{employee_name:'Emily Nguyen',building:'477 Pitt St, Sydney',pass_status:'requested'});
ins('x_snc_fed_forum_on_orchestration',{employee_name:'Emily Nguyen',sap_record:s3,agsva_record:a3,entra_record:e3,facility_record:f3,state:'in_progress',target_start_date:'2026-05-19',overall_readiness:'partially_ready'});
var s4=ins('x_snc_fed_forum_on_sap_employee',{sap_employee_id:'10045819',first_name:'James',last_name:'O Brien',position_title:'EL2 Solution Architect',department:'Department of Digital Transformation',employment_status:'active',start_date:'2026-04-28'});
var a4=ins('x_snc_fed_forum_on_agsva_clearance',{agsva_reference:'CLR-2025-06291',subject_first_name:'James',subject_last_name:'O Brien',clearance_level:'nv1',clearance_status:'active',expiry_date:'2032-03-01',transfer_status:'not_required'});
var e4=ins('x_snc_fed_forum_on_entra_account',{upn:'james.obrien@agency.gov.au',display_name:'James O Brien',account_status:'active',mfa_enrolled:'true'});
var f4=ins('x_snc_fed_forum_on_facility_access',{employee_name:'James O Brien',building:'50 Marcus Clarke St, Canberra',pass_status:'collected'});
ins('x_snc_fed_forum_on_orchestration',{employee_name:'James O Brien',sap_record:s4,agsva_record:a4,entra_record:e4,facility_record:f4,state:'complete',target_start_date:'2026-04-28',overall_readiness:'ready'});
gs.info('Done - 4 records created');
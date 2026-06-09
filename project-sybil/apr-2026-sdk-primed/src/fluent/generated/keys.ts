import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    all_my_applicability: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '300dc18165c24469a74afdebaf51822b'
                    }
                    api_approve_request: {
                        table: 'sys_ws_operation'
                        id: '6ad92d47eb554d98b9922498af1f2802'
                    }
                    api_create_request: {
                        table: 'sys_ws_operation'
                        id: 'ed99df4d823741058bcbe30e47bb158f'
                    }
                    api_get_policy: {
                        table: 'sys_ws_operation'
                        id: 'a31bab7f67e946969066c20aeae29427'
                    }
                    api_get_request_detail: {
                        table: 'sys_ws_operation'
                        id: 'd0e66499f6264cc6bcfa82d775190f41'
                    }
                    api_get_requests: {
                        table: 'sys_ws_operation'
                        id: '218c4bd139b24e3289398893c26b357e'
                    }
                    api_reject_request: {
                        table: 'sys_ws_operation'
                        id: 'f9184d83c3df4758a5d06dc4d9d2f95a'
                    }
                    approval_applicability: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '4f3e72cc9a144a6d8933bd468b1c56a9'
                    }
                    atf_acl_approver: {
                        table: 'sys_atf_test'
                        id: '43570ff221634d69b40724350933658c'
                    }
                    atf_acl_approver_script: {
                        table: 'sys_atf_step'
                        id: 'abdd84e05ab040c0b6a87846cdcc6f56'
                    }
                    atf_acl_finance: {
                        table: 'sys_atf_test'
                        id: 'acca173c1f98459ea6b52b6679a912a6'
                    }
                    atf_acl_finance_script: {
                        table: 'sys_atf_step'
                        id: 'aaf9dbc2f2794fdbadfc2377d64bb64b'
                    }
                    atf_acl_own_script: {
                        table: 'sys_atf_step'
                        id: '3c35a208223b402d849ce67a7ec2edc5'
                    }
                    atf_acl_traveler_own: {
                        table: 'sys_atf_test'
                        id: '626207cd6d0840399701f44654377faf'
                    }
                    atf_approval_flow: {
                        table: 'sys_atf_test'
                        id: '6eb52c9d189d41d288b5f428b21a9ecd'
                    }
                    atf_approval_flow_script: {
                        table: 'sys_atf_step'
                        id: '04e25d3090774fd890d7b0aa834d77d7'
                    }
                    atf_delegation_reroute: {
                        table: 'sys_atf_test'
                        id: 'd71845b1c99d405b95270420685f4971'
                    }
                    atf_delegation_script: {
                        table: 'sys_atf_step'
                        id: '55a45f1ce1cd4c008ad98b4f2e61da49'
                    }
                    atf_dept_auto_populate: {
                        table: 'sys_atf_test'
                        id: '0f33b55f24bb480db5444195d57cbd25'
                    }
                    atf_dept_script: {
                        table: 'sys_atf_step'
                        id: '91a2b37410cf40bfa5aa15dbb5c93e54'
                    }
                    atf_expense_date_script: {
                        table: 'sys_atf_step'
                        id: '858a75adda1a4017872ec343903a29e2'
                    }
                    atf_expense_date_validation: {
                        table: 'sys_atf_test'
                        id: '52e8cc00444d4837b20f808bd162f7b9'
                    }
                    atf_finance_escalation: {
                        table: 'sys_atf_test'
                        id: 'a83f086cb3334e9a9a48b390d919049a'
                    }
                    atf_finance_insert: {
                        table: 'sys_atf_step'
                        id: '664ab2b02e9849c19db924030f8f2723'
                    }
                    atf_finance_log: {
                        table: 'sys_atf_step'
                        id: '53030942243845b89654ef1f39d140ba'
                    }
                    atf_high_cost_script: {
                        table: 'sys_atf_step'
                        id: '9d0212cc36a8444498eb26e14b29794d'
                    }
                    atf_high_cost_warning: {
                        table: 'sys_atf_test'
                        id: '6ee47d30724b496ca296844542ca0d50'
                    }
                    atf_policy_lookup: {
                        table: 'sys_atf_test'
                        id: '0be2a690b4b448768dd09d79ddd56ea5'
                    }
                    atf_policy_lookup_step: {
                        table: 'sys_atf_step'
                        id: 'ba15d04831ca4dfeb6986aa08b0a7650'
                    }
                    atf_visa_script: {
                        table: 'sys_atf_step'
                        id: 'ea7076b40b134162a25744f08d557371'
                    }
                    atf_visa_visibility: {
                        table: 'sys_atf_test'
                        id: 'b3d876060e7a4534a3cbf9af12fbbd7b'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: 'e7659cd1074446bcabd2643434eb1030'
                    }
                    br_calculate_actual_cost: {
                        table: 'sys_script'
                        id: 'fbf6837c3c59490fb0a56d63d65e1fba'
                    }
                    br_close_expenses: {
                        table: 'sys_script'
                        id: '6e69dbc4301247bd945c77d01b4e6e91'
                    }
                    br_derive_travel_type: {
                        table: 'sys_script'
                        id: 'fbf1dbe515b0410fbb6c6e994fc1b1b8'
                    }
                    br_escalate_finance: {
                        table: 'sys_script'
                        id: '094299c32dc34077aaa143390bf5a4a0'
                    }
                    br_prevent_edit_after_approval: {
                        table: 'sys_script'
                        id: '2b468a1ec77e49548ba469e4731480cb'
                    }
                    br_set_department: {
                        table: 'sys_script'
                        id: '16fd25a1ca894e01a34d318f8cd4a4db'
                    }
                    br_validate_expense_date: {
                        table: 'sys_script'
                        id: '3668bd053fa7449abc102fd75f743417'
                    }
                    cat_approvals: {
                        table: 'sys_ux_list_category'
                        id: '845ac5d3df124463b646c415ebe426fb'
                    }
                    cat_cs_auto_populate: {
                        table: 'catalog_script_client'
                        id: '129f6f4cafdd48198b983800829a5f67'
                    }
                    cat_cs_validate_dates: {
                        table: 'catalog_script_client'
                        id: '13bedb896b13429fa0a1ef21577696e3'
                    }
                    cat_cs_visa_reminder: {
                        table: 'catalog_script_client'
                        id: '3f8aee65140f4ca590018f6b31f2a984'
                    }
                    cat_expenses: {
                        table: 'sys_ux_list_category'
                        id: 'cad266dd83a347ef9ce3a17406299268'
                    }
                    cat_my_requests: {
                        table: 'sys_ux_list_category'
                        id: 'ee8bc4b05e8844268f7d687262890626'
                    }
                    cat_policies: {
                        table: 'sys_ux_list_category'
                        id: '8ce0c135293742c6b418eb3a5e088a73'
                    }
                    cat_uip_notes_high_cost: {
                        table: 'catalog_ui_policy'
                        id: 'ca14ff97ca7646dcbcdb1111f95a6dbb'
                    }
                    cat_uip_visa_international: {
                        table: 'catalog_ui_policy'
                        id: 'fc7c4ec6da9a43a5ba0f929852599556'
                    }
                    conn_alias_currency_api: {
                        table: 'sys_alias'
                        id: '7de0b1187c024bb5990c3c0145152cc5'
                    }
                    conn_corporate_directory: {
                        table: 'sys_connection'
                        id: 'a1f4bc2953434ceabfc64626df2d3f77'
                    }
                    conn_currency_exchange: {
                        table: 'sys_connection'
                        id: '381dd8801395435aa2b23ec77d57c542'
                    }
                    cs_confirm_submission: {
                        table: 'sys_script_client'
                        id: '286cbd33606c44ddb05d5860b9779c50'
                    }
                    cs_show_visa: {
                        table: 'sys_script_client'
                        id: '29b89dc4e2204e029a782e5a64a3c325'
                    }
                    cs_warn_high_cost: {
                        table: 'sys_script_client'
                        id: '51ca73e7bacb41b9828c9618cfee8b4c'
                    }
                    csp_read_cmn_department: {
                        table: 'sys_scope_privilege'
                        id: '8a77d25798294fc188fd91549ebee2ce'
                    }
                    csp_read_core_country: {
                        table: 'sys_scope_privilege'
                        id: 'd2c73553f7bd4625b56efa92840476a5'
                    }
                    csp_read_sys_user: {
                        table: 'sys_scope_privilege'
                        id: 'b109f796cc2f43d081dd39eb35022b6a'
                    }
                    csp_read_sys_user_has_role: {
                        table: 'sys_scope_privilege'
                        id: '8854a1d780564d39b83faa570ee82f3b'
                    }
                    delegation_expiry_flow: {
                        table: 'sys_hub_flow'
                        id: 'd46a5da7fca0405fb71abc5cd8c4f396'
                    }
                    delegation_read: {
                        table: 'sys_security_acl'
                        id: '47371d8ebbcf40e990d9d389f18b5364'
                    }
                    delegation_write: {
                        table: 'sys_security_acl'
                        id: 'ac2ee804b63146b6a7aa862b8d1ddf2f'
                    }
                    expense_applicability: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: 'c7a1d6079c3f4c8cbb2180089e345140'
                    }
                    expense_read: {
                        table: 'sys_security_acl'
                        id: '1ec3ae660cc24ef5a170e5e6d6a1a216'
                    }
                    expense_reimbursement_flow: {
                        table: 'sys_hub_flow'
                        id: '87692f74ec34449ca45f9c059b07760d'
                    }
                    expense_write: {
                        table: 'sys_security_acl'
                        id: '18d698fbb3d24c9dba7798a5f81d44a0'
                    }
                    fmt_approval_timeline: {
                        table: 'sys_ui_formatter'
                        id: '3cf3813ee6a54619833b178bc9f92a8b'
                    }
                    fmt_expense_summary: {
                        table: 'sys_ui_formatter'
                        id: '629ac49ae931447581994fdb1c489523'
                    }
                    import_historical_requests: {
                        table: 'sys_data_source'
                        id: '5cdc6dea1e6a420fbf5bfcee92cee53e'
                    }
                    import_policy: {
                        table: 'sys_data_source'
                        id: '0c2b0da3879744febc5052519a6b66a7'
                    }
                    js_module_travel_charts: {
                        table: 'sys_ux_lib_source_script'
                        id: '0803477f92644166b9fa6b0f1f3a2f44'
                    }
                    js_module_travel_utils: {
                        table: 'sys_ux_lib_source_script'
                        id: 'ca1ae1ca00604e94aae2cc8a8684a767'
                    }
                    list_all_my_requests: {
                        table: 'sys_ux_list'
                        id: '1af704b4fcd04d65b4995f8535ca72fa'
                    }
                    list_awaiting_approval: {
                        table: 'sys_ux_list'
                        id: 'b338f0d08dc0456a8e7fbcf3c31546c4'
                    }
                    list_ctrl_delegation: {
                        table: 'sys_ui_list_control'
                        id: '3d1d16d1e1a34f53bdff09302df38c54'
                    }
                    list_ctrl_expense: {
                        table: 'sys_ui_list_control'
                        id: '3c376abdade546c79bacf7dc0da9d2a1'
                    }
                    list_ctrl_request: {
                        table: 'sys_ui_list_control'
                        id: '3a1871f2b436404e916cd9c3d5d6b8de'
                    }
                    list_my_expenses: {
                        table: 'sys_ux_list'
                        id: 'b80e7b5a784e4ccc8eb93d78a78c2005'
                    }
                    list_pending_requests: {
                        table: 'sys_ux_list'
                        id: '35e5a8efd4784b2a927ee5eff4881cac'
                    }
                    list_policies: {
                        table: 'sys_ux_list'
                        id: '3641da933161479c8e51c6edf2f5224b'
                    }
                    mod_all_expenses: {
                        table: 'sys_app_module'
                        id: '46f06bbf10944b4793807943906bb75e'
                    }
                    mod_all_requests: {
                        table: 'sys_app_module'
                        id: '2f27590922014c919ee32284ef7cbbd0'
                    }
                    mod_awaiting_approval: {
                        table: 'sys_app_module'
                        id: '2c51fdd19e7a48c38ba8160fca6cc2dc'
                    }
                    mod_dashboard: {
                        table: 'sys_app_module'
                        id: 'ae59899cfb3744bdaa51a1e67cb44f5a'
                    }
                    mod_delegations: {
                        table: 'sys_app_module'
                        id: '5f4fb32431d34225bd4be0dfb133a666'
                    }
                    mod_finance_queue: {
                        table: 'sys_app_module'
                        id: 'ec39d96ad6444b3faca6069886f955aa'
                    }
                    mod_my_expenses: {
                        table: 'sys_app_module'
                        id: 'b47d3d21cf5a44d7ad4b119303d57a43'
                    }
                    mod_my_requests: {
                        table: 'sys_app_module'
                        id: '1894de6631a14a05b8694b65c5789fe9'
                    }
                    mod_policies: {
                        table: 'sys_app_module'
                        id: '27c107fc0d3a47759a9ab31212f34923'
                    }
                    notif_expense_flagged: {
                        table: 'sysevent_email_action'
                        id: '4777d2f4d97e4bd4bd9b8c482bfad76e'
                    }
                    notif_finance_review: {
                        table: 'sysevent_email_action'
                        id: '84d2207054cd4ec28c99c19642753bb2'
                    }
                    notif_request_approved: {
                        table: 'sysevent_email_action'
                        id: 'f43c58eb83054c4d9cdd64eb7843fa62'
                    }
                    notif_request_rejected: {
                        table: 'sysevent_email_action'
                        id: '9acde3ab7c9a4a06ba075a790dfe4261'
                    }
                    notif_request_submitted: {
                        table: 'sysevent_email_action'
                        id: 'b94f53df23bb436593a650cc1a7dfa48'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'e6fde774877d4fc4b6fb83983618a86a'
                    }
                    pending_applicability: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '75853a09fdb04af6b2ad85322a42a1f6'
                    }
                    policy_list_applicability: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '6571b172eb4b46e594610ceed012c6b3'
                    }
                    policy_read: {
                        table: 'sys_security_acl'
                        id: '62c05f737a9a4c3bb4eb80c3730da677'
                    }
                    policy_write: {
                        table: 'sys_security_acl'
                        id: '75c8fea1f14440df914790658bc25626'
                    }
                    prop_auto_approve_below: {
                        table: 'sys_properties'
                        id: '7f4ae3abe1bc497881248168be1232a5'
                    }
                    prop_default_flight_class: {
                        table: 'sys_properties'
                        id: '8018bec86ffc4b57a62050190eca00b8'
                    }
                    prop_finance_threshold: {
                        table: 'sys_properties'
                        id: '79a02a6313b242eba9c4995def255b70'
                    }
                    prop_max_advance_booking: {
                        table: 'sys_properties'
                        id: 'b0a7f025fb7240159c732e9f87761c6d'
                    }
                    prop_receipt_required_above: {
                        table: 'sys_properties'
                        id: 'd4ba4ce4610f4c94af202bde67c2cc16'
                    }
                    rel_policy_request: {
                        table: 'sys_relationship'
                        id: '00b0eb6bb7084c2ca0cea29796744d1f'
                    }
                    rel_request_expense: {
                        table: 'sys_relationship'
                        id: '44a3f4df4af1412081e8d702b1b18a2f'
                    }
                    rel_user_delegation: {
                        table: 'sys_relationship'
                        id: '99cb6a0e5f6049669310e9dae1d119d4'
                    }
                    rel_user_request: {
                        table: 'sys_relationship'
                        id: '9702549b006443a79c03b00c63199002'
                    }
                    request_approval_status_write: {
                        table: 'sys_security_acl'
                        id: '867fc28dc0fd4892b6d3829ef9b8ed54'
                    }
                    request_create: {
                        table: 'sys_security_acl'
                        id: 'd1e2501558764392acaf9a47f8a3639c'
                    }
                    request_delete: {
                        table: 'sys_security_acl'
                        id: '813a1dbe155a4c7a98efd96f35e94b2e'
                    }
                    request_read: {
                        table: 'sys_security_acl'
                        id: '4907306fca7d4faf934b3b6b53898ef4'
                    }
                    request_write: {
                        table: 'sys_security_acl'
                        id: '8a0a205e50a544a8b8514ff5db1090a8'
                    }
                    sec_attr_dept_restricted: {
                        table: 'sys_security_type'
                        id: '32cf1a260a99414e901c93312b3ed35b'
                    }
                    sec_filter_dept_scope: {
                        table: 'sys_security_acl'
                        id: '02f2ba4fba394baeacb93d4eafd7a5b7'
                    }
                    sec_filter_finance_full: {
                        table: 'sys_security_acl'
                        id: 'cb4980fe824e4c87942edb986e4e67c3'
                    }
                    seed_delegation_active: {
                        table: 'x_snc_apr_trv_delegation'
                        id: '29795f5400574ee4ad49e10f512d9617'
                    }
                    seed_delegation_expired: {
                        table: 'x_snc_apr_trv_delegation'
                        id: '4bca54e298a0467a81a20c52b39d394c'
                    }
                    seed_expense_1: {
                        table: 'x_snc_apr_trv_expense'
                        id: 'c9be47514d574e7cbd3c36f8697ad313'
                    }
                    seed_expense_10: {
                        table: 'x_snc_apr_trv_expense'
                        id: 'aedfed6a9b2942088443d94bbb005271'
                    }
                    seed_expense_2: {
                        table: 'x_snc_apr_trv_expense'
                        id: '6400a39f837b47d1bc3d887cf912576d'
                    }
                    seed_expense_3: {
                        table: 'x_snc_apr_trv_expense'
                        id: 'c4fa2b2fdfcd44bd9857e5a4a269fd12'
                    }
                    seed_expense_4: {
                        table: 'x_snc_apr_trv_expense'
                        id: '3cfc575f6a624302be1c9ee41c9518b5'
                    }
                    seed_expense_5: {
                        table: 'x_snc_apr_trv_expense'
                        id: '277d9e3ae34a47d3ab8063fe113a7450'
                    }
                    seed_expense_6: {
                        table: 'x_snc_apr_trv_expense'
                        id: '3a9e7844791e4a29b0d2ae0f2b4066e1'
                    }
                    seed_expense_7: {
                        table: 'x_snc_apr_trv_expense'
                        id: '9d53432e06ae4cffa3edead80af807e9'
                    }
                    seed_expense_8: {
                        table: 'x_snc_apr_trv_expense'
                        id: '7da92374a70547b8b3a3492d513dd577'
                    }
                    seed_expense_9: {
                        table: 'x_snc_apr_trv_expense'
                        id: 'ebd97a74b6394cf09e5a130190ca2ec2'
                    }
                    seed_policy_australia: {
                        table: 'x_snc_apr_trv_policy'
                        id: 'ececdfb5fb2c4899b4b89b33f7c0fcaa'
                    }
                    seed_policy_global: {
                        table: 'x_snc_apr_trv_policy'
                        id: '31123a4b8fef49c1b937f8a4260f80e1'
                    }
                    seed_policy_japan: {
                        table: 'x_snc_apr_trv_policy'
                        id: '346d222394034c6d8941d7e1e1d968d8'
                    }
                    seed_policy_uk: {
                        table: 'x_snc_apr_trv_policy'
                        id: 'feb6fa26e43b42deb6166e0185630f3c'
                    }
                    seed_policy_usa: {
                        table: 'x_snc_apr_trv_policy'
                        id: 'f7bde2c4b7234a499257e0a475d0542d'
                    }
                    seed_request_1: {
                        table: 'x_snc_apr_trv_request'
                        id: '2603f73b3ebd489e81588bfe54b76323'
                    }
                    seed_request_2: {
                        table: 'x_snc_apr_trv_request'
                        id: '857aadb959f34999b602d7cd0cb0a1ba'
                    }
                    seed_request_3: {
                        table: 'x_snc_apr_trv_request'
                        id: 'cbba9e8ebf054308b4a84e41fa307809'
                    }
                    seed_request_4: {
                        table: 'x_snc_apr_trv_request'
                        id: '26686f06f1ab490290d9ca9c9d040403'
                    }
                    seed_request_5: {
                        table: 'x_snc_apr_trv_request'
                        id: '62a3529c0fae4db7b23063f85dce4fc1'
                    }
                    si_travel_cost_calculator: {
                        table: 'sys_script_include'
                        id: '737ca6306b144ea9977fec7e348b7b21'
                    }
                    si_travel_delegation_util: {
                        table: 'sys_script_include'
                        id: '1f01d5a1b14f4290985edd63bd1387f1'
                    }
                    si_travel_policy_util: {
                        table: 'sys_script_include'
                        id: '43e9f901591444fa9f0da33387991f95'
                    }
                    submit_travel_request_item: {
                        table: 'sc_cat_item'
                        id: 'aa1fe7a55be044e185438a6af938b390'
                    }
                    travel_details_varset: {
                        table: 'item_option_new_set'
                        id: '5790243939ca4063bda34c4b5078ee70'
                    }
                    travel_list_config: {
                        table: 'sys_ux_list_menu_config'
                        id: '5415d83a9dc54e9ba1424f6e05efd34a'
                    }
                    travel_management_menu: {
                        table: 'sys_app_application'
                        id: '45f2a81db136492799ad8aa2ee44f766'
                    }
                    travel_management_workspace: {
                        table: 'sys_ux_page_registry'
                        id: '61773b8663924cfe924eb9708e6ef51c'
                    }
                    travel_management_workspace_sys_ux_app_config_workspace: {
                        table: 'sys_ux_app_config'
                        id: 'dd388a6e0ee2408a80c2d43f8358ddbb'
                    }
                    travel_management_workspace_sys_ux_app_route_home: {
                        table: 'sys_ux_app_route'
                        id: '4a3c7579d95f415d844a5e031b0b47ef'
                    }
                    travel_management_workspace_sys_ux_app_route_list: {
                        table: 'sys_ux_app_route'
                        id: 'c7acf882ebe24ccb9bc510d16387795a'
                    }
                    travel_management_workspace_sys_ux_app_route_record: {
                        table: 'sys_ux_app_route'
                        id: 'c0ff36854e564e97b1cc70fd34dccded'
                    }
                    'travel_management_workspace_sys_ux_app_route_simple-list': {
                        table: 'sys_ux_app_route'
                        id: '91b01a3b46f042aa88e620124fe1cd98'
                    }
                    travel_management_workspace_sys_ux_macroponent_record: {
                        table: 'sys_ux_macroponent'
                        id: '78f679663df942199f04f96549f1ddc9'
                    }
                    travel_management_workspace_sys_ux_page_property_chrome_footer: {
                        table: 'sys_ux_page_property'
                        id: '6bccc8bdcb834c2fbf61d9d454f8b7c4'
                    }
                    travel_management_workspace_sys_ux_page_property_chrome_header: {
                        table: 'sys_ux_page_property'
                        id: '8faf17d8027743a88f14a3d66a49d13c'
                    }
                    travel_management_workspace_sys_ux_page_property_chrome_tab: {
                        table: 'sys_ux_page_property'
                        id: 'd02ec197b7a9469eb858795c757b6e26'
                    }
                    travel_management_workspace_sys_ux_page_property_chrome_toolbar: {
                        table: 'sys_ux_page_property'
                        id: '74f07046c6814377a781435da5290d28'
                    }
                    travel_management_workspace_sys_ux_page_property_listConfigId: {
                        table: 'sys_ux_page_property'
                        id: 'a2a2ed63309240c1bb14cc2b3f48cf0f'
                    }
                    travel_management_workspace_sys_ux_page_property_view: {
                        table: 'sys_ux_page_property'
                        id: '33cecbe36d994887a1b494e9f14790be'
                    }
                    travel_management_workspace_sys_ux_page_property_wbApplicabilityConfigId: {
                        table: 'sys_ux_page_property'
                        id: 'ffcd4420f684479eb3f6801befa40a72'
                    }
                    travel_management_workspace_sys_ux_registry_m2m_category_unifiedNav: {
                        table: 'sys_ux_registry_m2m_category'
                        id: '23d5acd1ab5e421fbbd70a256c316663'
                    }
                    travel_management_workspace_sys_ux_screen_home: {
                        table: 'sys_ux_screen'
                        id: '3728a5e6ae8a4398ac7cbff1385e27ad'
                    }
                    travel_management_workspace_sys_ux_screen_list: {
                        table: 'sys_ux_screen'
                        id: 'd2f81d06f4a74fd6b6731d49f09195c4'
                    }
                    travel_management_workspace_sys_ux_screen_record: {
                        table: 'sys_ux_screen'
                        id: 'b6e29d14e41340be80f552e1c8efe782'
                    }
                    'travel_management_workspace_sys_ux_screen_simple-list': {
                        table: 'sys_ux_screen'
                        id: '6dccafca3360415ba6677ca33e62b68b'
                    }
                    travel_management_workspace_sys_ux_screen_type_home: {
                        table: 'sys_ux_screen_type'
                        id: '68bb97ad8293446997b8157e09bc6395'
                    }
                    travel_management_workspace_sys_ux_screen_type_list: {
                        table: 'sys_ux_screen_type'
                        id: '41e1f0453ae44db8bca5e18ed7eebdb0'
                    }
                    travel_management_workspace_sys_ux_screen_type_record: {
                        table: 'sys_ux_screen_type'
                        id: '84cb7d79d6ff429b83d4c281781b83b9'
                    }
                    'travel_management_workspace_sys_ux_screen_type_simple-list': {
                        table: 'sys_ux_screen_type'
                        id: 'c5f49fddda404666b019fbd058d46335'
                    }
                    travel_request_api: {
                        table: 'sys_ws_definition'
                        id: '3e7e5f9362cd46168ce1461ac6a76359'
                    }
                    travel_request_approval_flow: {
                        table: 'sys_hub_flow'
                        id: 'bb667ab9cdda47179563d47bbd917e22'
                    }
                    travel_workspace_applicability: {
                        table: 'sys_ux_applicability'
                        id: '241642741e4a4c0896a74ed8b127f111'
                    }
                    traveler_info_varset: {
                        table: 'item_option_new_set'
                        id: '18e7c309dc604bfc9f9e2c53ad0e6d03'
                    }
                    uia_add_expense: {
                        table: 'sys_ui_action'
                        id: '8ea928bbf6324368abad811ed2878d63'
                    }
                    uia_approve: {
                        table: 'sys_ui_action'
                        id: 'b7d90f4f39f0499990e1b36439ccf477'
                    }
                    uia_export_pdf: {
                        table: 'sys_ui_action'
                        id: 'eb767501470041b6a88a4fac74f3472c'
                    }
                    uia_reject: {
                        table: 'sys_ui_action'
                        id: 'cbeeb71b9b7244c38025b1352aef9eda'
                    }
                    uia_submit_reimbursement: {
                        table: 'sys_ui_action'
                        id: '1ba1100c9a494f83968820305d7f05ed'
                    }
                }
                composite: [
                    {
                        table: 'question_choice'
                        id: '037e8f3abe93431f81dd463ae9bec4db'
                        key: {
                            question: {
                                id: '071b6aad8d7e4e318a6f0339790ecde1'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '5790243939ca4063bda34c4b5078ee70'
                                    name: 'purpose'
                                }
                            }
                            value: 'conference'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '039518b4eed54769b85f3fcc213e2563'
                        key: {
                            sys_security_acl: '62c05f737a9a4c3bb4eb80c3730da677'
                            sys_user_role: {
                                id: 'd3ac24b30b2042faa4f254e3ced7ad56'
                                key: {
                                    name: 'x_snc_apr_trv.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'catalog_ui_policy_action'
                        id: '0431b4b8371b4a6dbe73b5853a73960c'
                        key: {
                            ui_policy: 'ca14ff97ca7646dcbcdb1111f95a6dbb'
                            catalog_variable: 'IO:additional_notes'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '05bdccf831724db3a71718319d1be35b'
                        key: {
                            category: 'x_snc_apr_trv_request'
                            prefix: 'TREQ'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '06c2fb6bbcf4415e8ea247824f67a6f0'
                        key: {
                            name: 'x_snc_apr_trv_expense'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '071b6aad8d7e4e318a6f0339790ecde1'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '5790243939ca4063bda34c4b5078ee70'
                            name: 'purpose'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '088979d5c30142349c703dfd713b587e'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'purpose'
                            value: 'internal'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '089f95016cea488e9efee4c9483be628'
                        key: {
                            sys_security_acl: '867fc28dc0fd4892b6d3829ef9b8ed54'
                            sys_user_role: {
                                id: '7d8134e539904aceb40ab5f64cc8ae42'
                                key: {
                                    name: 'x_snc_apr_trv.approver'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '09078fe918284e6f9fa133ff5e8c18f8'
                        key: {
                            name: 'x_snc_apr_trv_expense'
                            element: 'reimbursement_status'
                            value: 'rejected'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '09cece8e8c794b079c0cf56996d98ca2'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '55a45f1ce1cd4c008ad98b4f2e61da49'
                            variable: '989d9e235324220002c6435723dc3484'
                        }
                    },
                    {
                        table: 'sys_ui_view'
                        id: '0dd24df0e8f34ae0888d6b9fc203d31a'
                        key: {
                            name: 'finance'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0ffc8a8c247f4001b63963c050d52f94'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'departure_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1075a40db2b24cc0a9c4a6ac58faafb3'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'approval_status'
                            value: 'approved'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '10f8efd278ad431b9d56ee57f39b665c'
                        key: {
                            sys_security_acl: '8a0a205e50a544a8b8514ff5db1090a8'
                            sys_user_role: {
                                id: 'd3ac24b30b2042faa4f254e3ced7ad56'
                                key: {
                                    name: 'x_snc_apr_trv.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '120bdf050e2f4745b48788ec8fc2c2b1'
                        key: {
                            list_id: {
                                id: 'a0bda343c4ae434c97be1e731592a760'
                                key: {
                                    name: 'x_snc_apr_trv_expense'
                                    view: {
                                        id: '598a30d6e73f40c09440b10ecbeeba45'
                                        key: {
                                            name: 'Default'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'vendor'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '12575862689542a1a0fb5a94cf0cf193'
                        key: {
                            name: 'x_snc_apr_trv_expense'
                            element: 'expense_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '141fc57f655140779cf52291c41457cf'
                        key: {
                            name: 'x_snc_apr_trv_policy'
                            element: 'max_daily_hotel'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '1447e0417351464e9f1fe91ae8b0fc91'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'ea7076b40b134162a25744f08d557371'
                            variable: '42f2564b73031300440211d8faf6a777'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '14fd1f6e36b44b61b154823606dbf2fe'
                        key: {
                            name: 'x_snc_apr_trv_delegation'
                            element: 'start_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '17de35de5b1a45ca9c16ca4f88cd48f8'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'department'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '18d45d9d55204d16ac7a8e1f8ba011c4'
                        key: {
                            ui_policy: {
                                id: '88a28c6ecc51481ca3ad59122594a71c'
                                key: {
                                    table: 'x_snc_apr_trv_request'
                                    short_description: 'Read Only After Approval'
                                }
                            }
                            field: 'destination_country'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1b25dd34583b446892446056abc47d77'
                        key: {
                            name: 'x_snc_apr_trv_expense'
                            element: 'vendor'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1b72d6a536704e7895121f287ee4bee0'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'purpose'
                            value: 'conference'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1c0d57108fa1404b96fc8b2d0581f99d'
                        key: {
                            name: 'x_snc_apr_trv_delegation'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '1d8fabbbf5d54e64a4e72aae84595768'
                        key: {
                            list_id: {
                                id: 'a0bda343c4ae434c97be1e731592a760'
                                key: {
                                    name: 'x_snc_apr_trv_expense'
                                    view: {
                                        id: '598a30d6e73f40c09440b10ecbeeba45'
                                        key: {
                                            name: 'Default'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'expense_date'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: '1d93ba4a7a724e309176ef079c097296'
                        key: {
                            table: 'x_snc_apr_trv_request'
                            short_description: 'Hide Actual Cost Before Trip'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1dfadc9b6b5544f8ba9246739742f457'
                        key: {
                            sys_security_acl: '75c8fea1f14440df914790658bc25626'
                            sys_user_role: {
                                id: '7a70907adb0c4674bb27c08814155512'
                                key: {
                                    name: 'x_snc_apr_trv.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '1fbcc5d1bb064c76b8d81ecac6dd474b'
                        key: {
                            role: {
                                id: '7a70907adb0c4674bb27c08814155512'
                                key: {
                                    name: 'x_snc_apr_trv.admin'
                                }
                            }
                            contains: {
                                id: '7152d1f25e7d4b078faeb087459ac985'
                                key: {
                                    name: 'x_snc_apr_trv.finance'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '20922335b5c647409619678506b561b3'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'return_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '22c7bbcfb00d48d7bb4959716447c9f0'
                        key: {
                            name: 'x_snc_apr_trv_policy'
                            element: 'max_flight_class'
                            value: 'business'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '2335e190fce34d11be33c2caa2d54523'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '5790243939ca4063bda34c4b5078ee70'
                            name: 'destination_city'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '23bde3a4bed6446989bb31dfcdafb3a7'
                        key: {
                            list_id: {
                                id: '8d7defcbafd94119b931c6e7d1ad27aa'
                                key: {
                                    name: 'x_snc_apr_trv_policy'
                                    view: {
                                        id: '598a30d6e73f40c09440b10ecbeeba45'
                                        key: {
                                            name: 'Default'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'requires_finance_approval_above'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '262907daae0d44d0b9385a3d0cb18c6b'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'traveler'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '267298ec838f469094e1a711ec5e257a'
                        key: {
                            role: {
                                id: '7a70907adb0c4674bb27c08814155512'
                                key: {
                                    name: 'x_snc_apr_trv.admin'
                                }
                            }
                            contains: {
                                id: '7d8134e539904aceb40ab5f64cc8ae42'
                                key: {
                                    name: 'x_snc_apr_trv.approver'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '276b611b79db459393e5540a534efff3'
                        key: {
                            name: 'x_snc_apr_trv_delegation'
                            element: 'delegate'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '28ddc8e8da924f12aba9a00cae02b09f'
                        key: {
                            question: {
                                id: '071b6aad8d7e4e318a6f0339790ecde1'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '5790243939ca4063bda34c4b5078ee70'
                                    name: 'purpose'
                                }
                            }
                            value: 'internal'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2a7d3a9a6d6e4611b5774b25c255840b'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '91a2b37410cf40bfa5aa15dbb5c93e54'
                            variable: '42f2564b73031300440211d8faf6a777'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '2a99635b316445c1a0a14f354c077c51'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '5790243939ca4063bda34c4b5078ee70'
                            name: 'departure_date'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: '2acab564e43e4228a1dad6ba64643416'
                        key: {
                            endpoint: 'x_snc_apr_trv_summary.do'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '2af4049c581f4443a1a68a2e28f72a6e'
                        key: {
                            ui_policy: {
                                id: '66744d53b12c4d06ab46f9c56ca7d4ee'
                                key: {
                                    table: 'x_snc_apr_trv_request'
                                    short_description: 'Mandatory Purpose for International'
                                }
                            }
                            field: 'purpose'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '2b792bcdf0e54903961761fdce2f4a3c'
                        key: {
                            list_id: {
                                id: 'c9f60155c4d34b31936e07a38a6a256c'
                                key: {
                                    name: 'x_snc_apr_trv_request'
                                    view: {
                                        id: 'c9eeff717dd1465297a4ffec7737e634'
                                        key: {
                                            name: 'approver'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'sys_created_on'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2d4d5bd30f324133a017fbb265b0d5e7'
                        key: {
                            name: 'x_snc_apr_trv_expense'
                            element: 'amount'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '32012f860f9c4c2f86b95dea411aaef8'
                        key: {
                            name: 'x_snc_apr_trv_policy'
                            element: 'applies_to_country'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '32175e5ed0584abe979d08cabf462862'
                        key: {
                            name: 'x_snc_apr_trv_delegation'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '33230f17b2e34326a20adfc59eeaf82e'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '55a45f1ce1cd4c008ad98b4f2e61da49'
                            variable: '42f2564b73031300440211d8faf6a777'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '34020752071a4589b67db07b26259bb9'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '3c35a208223b402d849ce67a7ec2edc5'
                            variable: '42f2564b73031300440211d8faf6a777'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '369bde60f5314977b5156ebea29cf86c'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'purpose'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '387b8a6af58749de8540b97aff472121'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'purpose'
                            value: 'training'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '3b5c7c9c954a4d7ca4f63d41c24e8edc'
                        deleted: true
                        key: {
                            map: 'f7f32c8d013446aa89acf399529b47cd'
                            target_field: 'max_daily_hotel'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '3c253fa6fb6d43909cca14cdc389ca58'
                        key: {
                            list_id: {
                                id: '3d4e892d37104b6282f2cf732680d376'
                                key: {
                                    name: 'x_snc_apr_trv_request'
                                    view: {
                                        id: '0dd24df0e8f34ae0888d6b9fc203d31a'
                                        key: {
                                            name: 'finance'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'estimated_cost'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3d0b8a7775bb4941910fc1d0647445e0'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '53030942243845b89654ef1f39d140ba'
                            variable: '523c79985f30220012b44adb7f46663a'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '3d4e892d37104b6282f2cf732680d376'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            view: {
                                id: '0dd24df0e8f34ae0888d6b9fc203d31a'
                                key: {
                                    name: 'finance'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3e32a3c47987485c820991ca6220115d'
                        key: {
                            name: 'x_snc_apr_trv_delegation'
                            element: 'end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4206bb220a2d4cd58dcc571642725c77'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '42a8729d20bb47e393c8efe07d525202'
                        key: {
                            field: 'script'
                            id: '3c35a208223b402d849ce67a7ec2edc5'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '43d5b5a9c91b4cc785cfe391f2c0c870'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'travel_type'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '43ffc37b96c84c7d91b9d070612a3e14'
                        key: {
                            sys_ui_action: 'b7d90f4f39f0499990e1b36439ccf477'
                            sys_user_role: {
                                id: '7d8134e539904aceb40ab5f64cc8ae42'
                                key: {
                                    name: 'x_snc_apr_trv.approver'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '447c7b1ea53241d8a6b7f19e250a5e72'
                        key: {
                            name: 'x_snc_apr_trv_expense'
                            element: 'amount'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '448614156f624c05906fcdc6e4ae8381'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'approval_status'
                            value: 'finance_review'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '4524ac59aa8c42ff972450708ba08105'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'travel_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '45ab4738d76e41258a9971314d749b64'
                        key: {
                            name: 'x_snc_apr_trv_delegation'
                            element: 'delegator'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '45d30b09672a4783aca7605a58a30723'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'travel_type'
                            value: 'domestic'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4641efa651cf47f8b6fae3156a241064'
                        key: {
                            sys_security_acl: '47371d8ebbcf40e990d9d389f18b5364'
                            sys_user_role: {
                                id: '7d8134e539904aceb40ab5f64cc8ae42'
                                key: {
                                    name: 'x_snc_apr_trv.approver'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4655b879b8c04c13ad608a89aa690714'
                        key: {
                            sys_security_acl: 'ac2ee804b63146b6a7aa862b8d1ddf2f'
                            sys_user_role: {
                                id: '7d8134e539904aceb40ab5f64cc8ae42'
                                key: {
                                    name: 'x_snc_apr_trv.approver'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '476e751ce2fa45eb96ff1dd16efc5d9e'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'approval_status'
                            value: 'pending'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '479d4d1a32fa4ff99c2f16a9c82d4ea5'
                        key: {
                            list_id: {
                                id: 'b256133d8ad349f0842688622416783d'
                                key: {
                                    name: 'x_snc_apr_trv_request'
                                    view: {
                                        id: '598a30d6e73f40c09440b10ecbeeba45'
                                        key: {
                                            name: 'Default'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'departure_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4863e53987a247ceb9b286f13720c12e'
                        key: {
                            name: 'x_snc_apr_trv_delegation'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '4881828f567a4e46a61578b3c4fde9e3'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '5790243939ca4063bda34c4b5078ee70'
                            name: 'estimated_cost'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '48b3787e36b04b87bc4bf3ed8ec45669'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'ba15d04831ca4dfeb6986aa08b0a7650'
                            variable: '42f2564b73031300440211d8faf6a777'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '499c706a0c5c47fa87c1b658ae5dc885'
                        key: {
                            name: 'x_snc_apr_trv_policy'
                            element: 'policy_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '49f5c368f5664f46a755607ac2e8e729'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'return_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4a425dc843e741f98eda5190f80f7532'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'actual_cost'
                            language: 'en'
                        }
                    },
                    {
                        table: 'io_set_item'
                        id: '4a5fc6d3d03c4df88d180c367d512275'
                        key: {
                            sc_cat_item: 'aa1fe7a55be044e185438a6af938b390'
                            variable_set: '18e7c309dc604bfc9f9e2c53ad0e6d03'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '4c302f8008b24b87aa552b3b2425ae2e'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '5790243939ca4063bda34c4b5078ee70'
                            name: 'destination_country'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '4cdaeb67f4dc4e7f814fc9771c878881'
                        key: {
                            list_id: {
                                id: '3d4e892d37104b6282f2cf732680d376'
                                key: {
                                    name: 'x_snc_apr_trv_request'
                                    view: {
                                        id: '0dd24df0e8f34ae0888d6b9fc203d31a'
                                        key: {
                                            name: 'finance'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'department'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4e2ceb11b62344bab7a41902b4874dee'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'approval_status'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '50d099e4cc3b4982a7c82831e3b02f0d'
                        key: {
                            question: {
                                id: '071b6aad8d7e4e318a6f0339790ecde1'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '5790243939ca4063bda34c4b5078ee70'
                                    name: 'purpose'
                                }
                            }
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '516caba3a5de499bb5e37e24437bbf3a'
                        key: {
                            name: 'x_snc_apr_trv_delegation'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5187aea35f9b4ec1a99d5fb6c1ae78f6'
                        key: {
                            name: 'x_snc_apr_trv_expense'
                            element: 'expense_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '51d5be59fcec44168fedc8b2e10d191b'
                        key: {
                            name: 'x_snc_apr_trv_delegation'
                            element: 'start_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '522049a54da34a83aeb267495add60bc'
                        key: {
                            field: 'script'
                            id: '04e25d3090774fd890d7b0aa834d77d7'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '528db23bca9e4310999c9b7f2e6eee86'
                        key: {
                            name: 'x_snc_apr_trv_expense'
                            element: 'expense_type'
                            value: 'visa'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '52ef2a4921504904aa979310282a40e7'
                        key: {
                            sys_security_acl: '18d698fbb3d24c9dba7798a5f81d44a0'
                            sys_user_role: {
                                id: 'd3ac24b30b2042faa4f254e3ced7ad56'
                                key: {
                                    name: 'x_snc_apr_trv.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5314df6456e545fbaabf11b07f4a5329'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'requires_visa'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '54b1dcc2bbf74022b3d8da42d69be407'
                        key: {
                            ui_policy: {
                                id: '88a28c6ecc51481ca3ad59122594a71c'
                                key: {
                                    table: 'x_snc_apr_trv_request'
                                    short_description: 'Read Only After Approval'
                                }
                            }
                            field: 'estimated_cost'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '556dbfd580ad4b5ba8b26ddf4223a502'
                        deleted: true
                        key: {
                            map: 'f7f32c8d013446aa89acf399529b47cd'
                            target_field: 'active'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '55fb2aed0cc44db6b203d1c7ca00feed'
                        key: {
                            field: 'script'
                            id: 'aaf9dbc2f2794fdbadfc2377d64bb64b'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '56b5a1899bb9406fa4ab6d0f6caf8db3'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'purpose'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '56cf78b6640743e195a38aede1a991b3'
                        key: {
                            list_id: {
                                id: 'b256133d8ad349f0842688622416783d'
                                key: {
                                    name: 'x_snc_apr_trv_request'
                                    view: {
                                        id: '598a30d6e73f40c09440b10ecbeeba45'
                                        key: {
                                            name: 'Default'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '58454d50f0d841cc9d8b5a74e2f912b7'
                        key: {
                            name: 'x_snc_apr_trv_policy'
                            element: 'max_flight_class'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '591c91fafbcc4b10b1d35382df8f07b7'
                        key: {
                            question: {
                                id: '071b6aad8d7e4e318a6f0339790ecde1'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '5790243939ca4063bda34c4b5078ee70'
                                    name: 'purpose'
                                }
                            }
                            value: 'training'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '59695c5d51c04ea48f9f63719ea63e1d'
                        key: {
                            name: 'x_snc_apr_trv_policy'
                            element: 'requires_finance_approval_above'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '597390132bea4a8982a68aec5fb61f11'
                        key: {
                            name: 'x_snc_apr_trv_expense'
                            element: 'expense_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_view'
                        id: '598a30d6e73f40c09440b10ecbeeba45'
                        key: {
                            name: 'Default'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5ae0f21226e94b83a083ccac555ad3f4'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'aaf9dbc2f2794fdbadfc2377d64bb64b'
                            variable: '989d9e235324220002c6435723dc3484'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '5c494e5709a945a1bfa5e2c5478e277f'
                        key: {
                            field: 'script'
                            id: 'ba15d04831ca4dfeb6986aa08b0a7650'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '5c659084233c481ca7823e9e818d0f56'
                        key: {
                            ui_policy: {
                                id: '88a28c6ecc51481ca3ad59122594a71c'
                                key: {
                                    table: 'x_snc_apr_trv_request'
                                    short_description: 'Read Only After Approval'
                                }
                            }
                            field: 'return_date'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '5cfba1fdd7b24b468c46a174400ff97f'
                        key: {
                            list_id: {
                                id: '8d7defcbafd94119b931c6e7d1ad27aa'
                                key: {
                                    name: 'x_snc_apr_trv_policy'
                                    view: {
                                        id: '598a30d6e73f40c09440b10ecbeeba45'
                                        key: {
                                            name: 'Default'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '5dafaad3b56441e38eeed3bce672fb0f'
                        key: {
                            list_id: {
                                id: '3d4e892d37104b6282f2cf732680d376'
                                key: {
                                    name: 'x_snc_apr_trv_request'
                                    view: {
                                        id: '0dd24df0e8f34ae0888d6b9fc203d31a'
                                        key: {
                                            name: 'finance'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'actual_cost'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '5f055088574d4450918f1064f940e79e'
                        deleted: true
                        key: {
                            map: '3c21d1ce690445988357247318dcdc9e'
                            target_field: 'traveler'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5f21c9e621964981b36e0893b71008fc'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'destination_city'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: '603900f3c6bb47f4af63bff951435b7c'
                        key: {
                            endpoint: 'x_snc_apr_trv_expense_entry.do'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '613d5b423d8246e2ad2d283138617358'
                        key: {
                            list_id: {
                                id: 'b256133d8ad349f0842688622416783d'
                                key: {
                                    name: 'x_snc_apr_trv_request'
                                    view: {
                                        id: '598a30d6e73f40c09440b10ecbeeba45'
                                        key: {
                                            name: 'Default'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'destination_city'
                        }
                    },
                    {
                        table: 'catalog_ui_policy_action'
                        id: '631a1fa384734da7b6ef8affe0744f01'
                        key: {
                            ui_policy: 'fc7c4ec6da9a43a5ba0f929852599556'
                            catalog_variable: 'IO:requires_visa'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '6488710e6ac24503b5a5e36904750393'
                        deleted: true
                        key: {
                            map: '3c21d1ce690445988357247318dcdc9e'
                            target_field: 'return_date'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '64f8eeb435314e6a97430b5c0911ca43'
                        deleted: true
                        key: {
                            map: '3c21d1ce690445988357247318dcdc9e'
                            target_field: 'destination_city'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: '66744d53b12c4d06ab46f9c56ca7d4ee'
                        key: {
                            table: 'x_snc_apr_trv_request'
                            short_description: 'Mandatory Purpose for International'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '66c8acd122f545ef9551674590f98852'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'requires_visa'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '68c24f4ebe93460ab0d65dd15ee5b316'
                        key: {
                            name: 'x_snc_apr_trv_expense'
                            element: 'expense_type'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '68df76c22f4a497c8da810d9e546b916'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '18e7c309dc604bfc9f9e2c53ad0e6d03'
                            name: 'traveler_manager'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6903d179efd241c59dd1538404317a00'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'destination_country'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '699d3f669413472f94796153edf79d57'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'actual_cost'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6a0e76ef8be545e7adedb70b4b93569c'
                        key: {
                            name: 'x_snc_apr_trv_policy'
                            element: 'max_daily_meals'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '6a433f9f003c4a0db3dcd0c5fb8270e8'
                        key: {
                            list_id: {
                                id: 'a0bda343c4ae434c97be1e731592a760'
                                key: {
                                    name: 'x_snc_apr_trv_expense'
                                    view: {
                                        id: '598a30d6e73f40c09440b10ecbeeba45'
                                        key: {
                                            name: 'Default'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '6a67f6c0bbc54a6997591ad2c2b41a8d'
                        key: {
                            list_id: {
                                id: 'a0bda343c4ae434c97be1e731592a760'
                                key: {
                                    name: 'x_snc_apr_trv_expense'
                                    view: {
                                        id: '598a30d6e73f40c09440b10ecbeeba45'
                                        key: {
                                            name: 'Default'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'expense_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6bf89645ff064914b98bf3c5548056a9'
                        key: {
                            name: 'x_snc_apr_trv_expense'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '6effe364b8d64eaf9876d10ec1c1b72b'
                        key: {
                            list_id: {
                                id: '3d4e892d37104b6282f2cf732680d376'
                                key: {
                                    name: 'x_snc_apr_trv_request'
                                    view: {
                                        id: '0dd24df0e8f34ae0888d6b9fc203d31a'
                                        key: {
                                            name: 'finance'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'approval_status'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6f02169a8bf6485e87736dcf6b76d845'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '9d0212cc36a8444498eb26e14b29794d'
                            variable: '989d9e235324220002c6435723dc3484'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '70a2efccaa2643f89273409bbb5f1e12'
                        key: {
                            list_id: {
                                id: 'c9f60155c4d34b31936e07a38a6a256c'
                                key: {
                                    name: 'x_snc_apr_trv_request'
                                    view: {
                                        id: 'c9eeff717dd1465297a4ffec7737e634'
                                        key: {
                                            name: 'approver'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '7152d1f25e7d4b078faeb087459ac985'
                        key: {
                            name: 'x_snc_apr_trv.finance'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '73d8ea2902f94645933d6f6fc07af6bd'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'destination_city'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '7447f61094df4800b016ef5047ff266d'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '18e7c309dc604bfc9f9e2c53ad0e6d03'
                            name: 'traveler_name'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '74580ac7492f49c885fd0007f257a433'
                        key: {
                            field: 'script'
                            id: '858a75adda1a4017872ec343903a29e2'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '754ee052262846a5806fe6a2a59ec66e'
                        key: {
                            name: 'x_snc_apr_trv_expense'
                            element: 'expense_type'
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '75bacaf16f8a43e1b83ba6a88f802106'
                        deleted: true
                        key: {
                            map: '3c21d1ce690445988357247318dcdc9e'
                            target_field: 'destination_country'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '77454d0c13e24a48bd42ab3abec29841'
                        key: {
                            list_id: {
                                id: '8d7defcbafd94119b931c6e7d1ad27aa'
                                key: {
                                    name: 'x_snc_apr_trv_policy'
                                    view: {
                                        id: '598a30d6e73f40c09440b10ecbeeba45'
                                        key: {
                                            name: 'Default'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'applies_to_country'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '779467d264624cc4b6bba682a1c2a8a4'
                        key: {
                            list_id: {
                                id: 'b256133d8ad349f0842688622416783d'
                                key: {
                                    name: 'x_snc_apr_trv_request'
                                    view: {
                                        id: '598a30d6e73f40c09440b10ecbeeba45'
                                        key: {
                                            name: 'Default'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'return_date'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7884588c495c47978b9c800e5a94320d'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '04e25d3090774fd890d7b0aa834d77d7'
                            variable: '42f2564b73031300440211d8faf6a777'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '7a70907adb0c4674bb27c08814155512'
                        key: {
                            name: 'x_snc_apr_trv.admin'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '7b670ab7b40c48319c75b8fca72fa998'
                        deleted: true
                        key: {
                            map: 'f7f32c8d013446aa89acf399529b47cd'
                            target_field: 'max_daily_meals'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7c1f9030b512425197931ef47751bcda'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'abdd84e05ab040c0b6a87846cdcc6f56'
                            variable: '989d9e235324220002c6435723dc3484'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7c42a6b30e854ecc89af3e6782a7aae7'
                        key: {
                            name: 'x_snc_apr_trv_policy'
                            element: 'max_flight_class'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '7d8134e539904aceb40ab5f64cc8ae42'
                        key: {
                            name: 'x_snc_apr_trv.approver'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '7da2a6f20cd34451acd812561fda9bdd'
                        key: {
                            field: 'script'
                            id: 'abdd84e05ab040c0b6a87846cdcc6f56'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7db9a1576704464bb46ca5dd372e383a'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '82bb59e74d6b4b18a26553f082bc7aad'
                        key: {
                            name: 'x_snc_apr_trv_expense'
                            element: 'expense_type'
                            value: 'hotel'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '83603b5e14f84252bd32989b5d72e95a'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'ea7076b40b134162a25744f08d557371'
                            variable: '989d9e235324220002c6435723dc3484'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8518f1e1c3854361a2c9b03cca87798a'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '664ab2b02e9849c19db924030f8f2723'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '86cbb0c2590a441c8a076af0ce10a160'
                        key: {
                            name: 'x_snc_apr_trv_expense'
                            element: 'reimbursement_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'io_set_item'
                        id: '86fb35885356476d81e38f54a2b94f87'
                        key: {
                            sc_cat_item: 'aa1fe7a55be044e185438a6af938b390'
                            variable_set: '5790243939ca4063bda34c4b5078ee70'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '8799aed42c6a45a1884c818a31901ed8'
                        key: {
                            list_id: {
                                id: '3d4e892d37104b6282f2cf732680d376'
                                key: {
                                    name: 'x_snc_apr_trv_request'
                                    view: {
                                        id: '0dd24df0e8f34ae0888d6b9fc203d31a'
                                        key: {
                                            name: 'finance'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'traveler'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: '88a28c6ecc51481ca3ad59122594a71c'
                        key: {
                            table: 'x_snc_apr_trv_request'
                            short_description: 'Read Only After Approval'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '8a7072c0ea32484f97d657faee7dcc1a'
                        key: {
                            category: 'x_snc_apr_trv_expense'
                            prefix: 'TEXP'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8ab8ba8155f94a4b8956d916f8c2a8a9'
                        key: {
                            name: 'x_snc_apr_trv_policy'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8adf8550216b47709cff2540d64a4c80'
                        key: {
                            name: 'x_snc_apr_trv_delegation'
                            element: 'end_date'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '8c08a7cff1314e3396883be9bec0a6cf'
                        key: {
                            name: 'x_snc_apr_trv_expense'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '8d7defcbafd94119b931c6e7d1ad27aa'
                        key: {
                            name: 'x_snc_apr_trv_policy'
                            view: {
                                id: '598a30d6e73f40c09440b10ecbeeba45'
                                key: {
                                    name: 'Default'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8dac85c75fde4aa784c6b1267614dd44'
                        key: {
                            name: 'x_snc_apr_trv_policy'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8ed5764c199347a38762bdba7af256dd'
                        key: {
                            sys_security_acl: '4907306fca7d4faf934b3b6b53898ef4'
                            sys_user_role: {
                                id: 'd3ac24b30b2042faa4f254e3ced7ad56'
                                key: {
                                    name: 'x_snc_apr_trv.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8f54a5fdcd2843359a222ea4777b2e3e'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '91a2b37410cf40bfa5aa15dbb5c93e54'
                            variable: '989d9e235324220002c6435723dc3484'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8fac499e939642c4a7c1b5b7e41642f3'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'approval_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '9044f33636f24d47a0f4260a3d12fb30'
                        key: {
                            field: 'script'
                            id: '9d0212cc36a8444498eb26e14b29794d'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '929a2d5e727b4ccba2199a0040981dc8'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'purpose'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '93d4022491984c009ed4c88602e082de'
                        key: {
                            name: 'x_snc_apr_trv_expense'
                            element: 'reimbursement_status'
                            value: 'approved'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '9643cf3cd12e46e7aa0b41b6d99bc1a2'
                        key: {
                            field: 'script'
                            id: '55a45f1ce1cd4c008ad98b4f2e61da49'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9693b941558840ce956f6e1afe9f2b4d'
                        key: {
                            name: 'x_snc_apr_trv_policy'
                            element: 'max_daily_meals'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '96963fcb33514000b115e6e1c7ca1403'
                        key: {
                            ui_policy: {
                                id: '88a28c6ecc51481ca3ad59122594a71c'
                                key: {
                                    table: 'x_snc_apr_trv_request'
                                    short_description: 'Read Only After Approval'
                                }
                            }
                            field: 'purpose'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '979a763599a64559aafdcbf9cb48b200'
                        key: {
                            name: 'x_snc_apr_trv_expense'
                            element: 'reimbursement_status'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '9832f4c3a6b843b4a12d157230b86f7b'
                        key: {
                            question: {
                                id: '071b6aad8d7e4e318a6f0339790ecde1'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '5790243939ca4063bda34c4b5078ee70'
                                    name: 'purpose'
                                }
                            }
                            value: 'client_meeting'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '990f9e943c9040b0b7e8835375e06c51'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'aaf9dbc2f2794fdbadfc2377d64bb64b'
                            variable: '42f2564b73031300440211d8faf6a777'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9a3fb8f7b64749848dd9b1606e6e3d85'
                        key: {
                            name: 'x_snc_apr_trv_expense'
                            element: 'travel_request'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '9b1390e2271d4a01bcbd83ea0df09fbf'
                        key: {
                            list_id: {
                                id: '3d4e892d37104b6282f2cf732680d376'
                                key: {
                                    name: 'x_snc_apr_trv_request'
                                    view: {
                                        id: '0dd24df0e8f34ae0888d6b9fc203d31a'
                                        key: {
                                            name: 'finance'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '9c842bffdfca469b9c6edf90c7fd8404'
                        key: {
                            name: 'x_snc_apr_trv_delegation'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '9d9d6ae6d2cf4c16af86f8250ee0e829'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '18e7c309dc604bfc9f9e2c53ad0e6d03'
                            name: 'traveler_department'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '9db0c4b9f90d4868964842de87cc1405'
                        key: {
                            name: 'x_snc_apr_trv_expense'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'a065a261a20f4389ab16f044d108d0f6'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '5790243939ca4063bda34c4b5078ee70'
                            name: 'requires_visa'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'a0bda343c4ae434c97be1e731592a760'
                        key: {
                            name: 'x_snc_apr_trv_expense'
                            view: {
                                id: '598a30d6e73f40c09440b10ecbeeba45'
                                key: {
                                    name: 'Default'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'a170a4db475e49c7bb0cb149f142b0ed'
                        key: {
                            ui_policy: {
                                id: '88a28c6ecc51481ca3ad59122594a71c'
                                key: {
                                    table: 'x_snc_apr_trv_request'
                                    short_description: 'Read Only After Approval'
                                }
                            }
                            field: 'departure_date'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a2d4b086d5b24b38ac54cce5b18e06ee'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '664ab2b02e9849c19db924030f8f2723'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a309ab363ceb4ea9b5f1cd49d44efb26'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '9d0212cc36a8444498eb26e14b29794d'
                            variable: '42f2564b73031300440211d8faf6a777'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a342edd3880544db858e907988a7709e'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'estimated_cost'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a39509c20a134d4d9b16e9cb696f5ece'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '3c35a208223b402d849ce67a7ec2edc5'
                            variable: '989d9e235324220002c6435723dc3484'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a451b20e8ac643a8836d974b18b1b4b5'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'destination_country'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a45454c387534691acdc1ba99bbfbba5'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'abdd84e05ab040c0b6a87846cdcc6f56'
                            variable: '42f2564b73031300440211d8faf6a777'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'aae2a33ace4f4aeb91e5d5f158d5e6f4'
                        key: {
                            list_id: {
                                id: '8d7defcbafd94119b931c6e7d1ad27aa'
                                key: {
                                    name: 'x_snc_apr_trv_policy'
                                    view: {
                                        id: '598a30d6e73f40c09440b10ecbeeba45'
                                        key: {
                                            name: 'Default'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'policy_name'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'abae5c8788684c078d4036ea0ccab5b5'
                        key: {
                            list_id: {
                                id: 'b256133d8ad349f0842688622416783d'
                                key: {
                                    name: 'x_snc_apr_trv_request'
                                    view: {
                                        id: '598a30d6e73f40c09440b10ecbeeba45'
                                        key: {
                                            name: 'Default'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'estimated_cost'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ad29ad8999a74cc7bd86508821067785'
                        key: {
                            name: 'x_snc_apr_trv_policy'
                            element: 'requires_finance_approval_above'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ad7006e3a2fb44c0bb5cb37ddd419dd4'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'purpose'
                            value: 'other'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'adc12ca1b8ab43b8a4b10123b980a35f'
                        key: {
                            name: 'x_snc_apr_trv_policy'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'b0fb3ccfe6a84773b6f8ccdc071c101d'
                        key: {
                            field: 'script'
                            id: 'ea7076b40b134162a25744f08d557371'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'b17f581558a240e0b223957160ac87c6'
                        key: {
                            ui_policy: {
                                id: '88a28c6ecc51481ca3ad59122594a71c'
                                key: {
                                    table: 'x_snc_apr_trv_request'
                                    short_description: 'Read Only After Approval'
                                }
                            }
                            field: 'destination_city'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'b256133d8ad349f0842688622416783d'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            view: {
                                id: '598a30d6e73f40c09440b10ecbeeba45'
                                key: {
                                    name: 'Default'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b3dea9dab6824cb99b57b5e503aac4c1'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'ba15d04831ca4dfeb6986aa08b0a7650'
                            variable: '989d9e235324220002c6435723dc3484'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b420c85e600543efa7583f92b66a81a7'
                        key: {
                            name: 'x_snc_apr_trv_policy'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b4ee7f32dbe94215b84a15e74ec0feb2'
                        key: {
                            name: 'x_snc_apr_trv_expense'
                            element: 'expense_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b593d25dc8974c56a7cf26333da006ae'
                        key: {
                            name: 'x_snc_apr_trv_policy'
                            element: 'policy_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b940286b5a7847e5a34bebe62c770cd8'
                        key: {
                            name: 'x_snc_apr_trv_policy'
                            element: 'applies_to_country'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b9979459e65e4f54866e76eabf1c0a15'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'purpose'
                            value: 'client_meeting'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bbdef9dc21b845efb4f25820076fcfe0'
                        key: {
                            name: 'x_snc_apr_trv_policy'
                            element: 'max_flight_class'
                            value: 'premium_economy'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'bd3f40a7d18c4faa9410822695133fb3'
                        key: {
                            list_id: {
                                id: 'a0bda343c4ae434c97be1e731592a760'
                                key: {
                                    name: 'x_snc_apr_trv_expense'
                                    view: {
                                        id: '598a30d6e73f40c09440b10ecbeeba45'
                                        key: {
                                            name: 'Default'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'amount'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'bd7cd8e1c6034eaab84a8d1a3e6b5d22'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '5790243939ca4063bda34c4b5078ee70'
                            name: 'additional_notes'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bdcb1cf3e0d04df587ae1c8f1c7d9f07'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'bf53ddcfd433460ab0f02d37c0ea7eeb'
                        deleted: true
                        key: {
                            map: 'f7f32c8d013446aa89acf399529b47cd'
                            target_field: 'applies_to_country'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'bf82ce196420458295d25f690c09c000'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '664ab2b02e9849c19db924030f8f2723'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'c0204e01a082439fb2f2a999195e5077'
                        deleted: true
                        key: {
                            map: 'f7f32c8d013446aa89acf399529b47cd'
                            target_field: 'policy_name'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'c25f1e0335e64be99494501351a6183f'
                        key: {
                            list_id: {
                                id: 'c9f60155c4d34b31936e07a38a6a256c'
                                key: {
                                    name: 'x_snc_apr_trv_request'
                                    view: {
                                        id: 'c9eeff717dd1465297a4ffec7737e634'
                                        key: {
                                            name: 'approver'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'purpose'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'c2dfceba93664a868202c9ccb1731617'
                        key: {
                            name: 'x_snc_apr_trv_policy'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c2f51e92e062410f8e3432f867851f59'
                        key: {
                            name: 'x_snc_apr_trv_policy'
                            element: 'max_flight_class'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c44912fee7d14d979460b3910821f4f0'
                        key: {
                            name: 'x_snc_apr_trv_expense'
                            element: 'expense_type'
                            value: 'transport'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'c487af838cce432c9c9bd757ed66169c'
                        key: {
                            name: 'x_snc_apr_trv_request'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'c490812cc1a64a989efa366835f9e766'
                        key: {
                            name: 'x_snc_apr_trv_request'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c4ccb95f39e441e19711396e2077fafb'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'travel_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'c5787210efb24138b77e4be0a672011a'
                        key: {
                            role: {
                                id: '7d8134e539904aceb40ab5f64cc8ae42'
                                key: {
                                    name: 'x_snc_apr_trv.approver'
                                }
                            }
                            contains: {
                                id: 'd3ac24b30b2042faa4f254e3ced7ad56'
                                key: {
                                    name: 'x_snc_apr_trv.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c6170dd8810f472d97f9adbcc9133773'
                        key: {
                            sys_security_acl: '1ec3ae660cc24ef5a170e5e6d6a1a216'
                            sys_user_role: {
                                id: 'd3ac24b30b2042faa4f254e3ced7ad56'
                                key: {
                                    name: 'x_snc_apr_trv.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'c65611ee8475456ba041f8d159a30c9c'
                        key: {
                            ui_policy: {
                                id: '1d93ba4a7a724e309176ef079c097296'
                                key: {
                                    table: 'x_snc_apr_trv_request'
                                    short_description: 'Hide Actual Cost Before Trip'
                                }
                            }
                            field: 'actual_cost'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c74f02e9e34b43e78f3e853f2ecd4cb5'
                        key: {
                            name: 'x_snc_apr_trv_delegation'
                            element: 'delegate'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c7ae3d87da8843b39b7e052ad3968e49'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '04e25d3090774fd890d7b0aa834d77d7'
                            variable: '989d9e235324220002c6435723dc3484'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'c837a93a1b424a158a541ea8517ac98d'
                        key: {
                            list_id: {
                                id: 'c9f60155c4d34b31936e07a38a6a256c'
                                key: {
                                    name: 'x_snc_apr_trv_request'
                                    view: {
                                        id: 'c9eeff717dd1465297a4ffec7737e634'
                                        key: {
                                            name: 'approver'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'estimated_cost'
                        }
                    },
                    {
                        table: 'sys_ui_view'
                        id: 'c9eeff717dd1465297a4ffec7737e634'
                        key: {
                            name: 'approver'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'c9f60155c4d34b31936e07a38a6a256c'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            view: {
                                id: 'c9eeff717dd1465297a4ffec7737e634'
                                key: {
                                    name: 'approver'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd0fbe59e0cdf4bb186650dc8ceb5b54e'
                        key: {
                            name: 'x_snc_apr_trv_expense'
                            element: 'reimbursement_status'
                            value: 'submitted'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd2326ab8cc7f46c280abfa465356ae51'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'travel_type'
                            value: 'international'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd2b664aa67824f5d89a34784a5180c45'
                        key: {
                            name: 'x_snc_apr_trv_delegation'
                            element: 'delegator'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd3128113125a4e58939fc3f36023b141'
                        key: {
                            name: 'x_snc_apr_trv_expense'
                            element: 'reimbursement_status'
                            value: 'paid'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'd3ac24b30b2042faa4f254e3ced7ad56'
                        key: {
                            name: 'x_snc_apr_trv.user'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd5fda94875b74da4abf02698c7fb3285'
                        key: {
                            name: 'x_snc_apr_trv_policy'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd7dcdc0e5d2a477f9d8992967fd186ae'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'estimated_cost'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd88a8c4537434636949b8fbc1a97e6db'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'traveler'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd953de1d342f4e52a3042cee476c92d1'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'departure_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'db33f08e4d4543528a254454619688fd'
                        key: {
                            list_id: {
                                id: '8d7defcbafd94119b931c6e7d1ad27aa'
                                key: {
                                    name: 'x_snc_apr_trv_policy'
                                    view: {
                                        id: '598a30d6e73f40c09440b10ecbeeba45'
                                        key: {
                                            name: 'Default'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'max_daily_hotel'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'dd027c95fda74620b77d650be7c2382d'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '858a75adda1a4017872ec343903a29e2'
                            variable: '42f2564b73031300440211d8faf6a777'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'dd15d57448f24f3488dbd04495460520'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'approval_status'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ddaa124f98f3412b8cf1d2850275758b'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '664ab2b02e9849c19db924030f8f2723'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'df09873653c749cf90abfb85a6b37105'
                        deleted: true
                        key: {
                            map: 'f7f32c8d013446aa89acf399529b47cd'
                            target_field: 'requires_finance_approval_above'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'df14899c128a4f1a91e0af08c02e5285'
                        key: {
                            field: 'script'
                            id: '91a2b37410cf40bfa5aa15dbb5c93e54'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'e13c7716da6a4a02be60bbbb7c1f3599'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '5790243939ca4063bda34c4b5078ee70'
                            name: 'return_date'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'e39454e7de5a495793dd21c0089573b7'
                        deleted: true
                        key: {
                            map: 'f7f32c8d013446aa89acf399529b47cd'
                            target_field: 'max_flight_class'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'e3c269f224004378bc1beaed2b327cc1'
                        deleted: true
                        key: {
                            map: '3c21d1ce690445988357247318dcdc9e'
                            target_field: 'departure_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e4b7e257e771429295e0afc9e8b807ee'
                        key: {
                            name: 'x_snc_apr_trv_expense'
                            element: 'expense_type'
                            value: 'meals'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e52577bd061d4031add633bf4b2b728e'
                        key: {
                            name: 'x_snc_apr_trv_expense'
                            element: 'expense_type'
                            value: 'airfare'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e6c8b89ca57f4deb8da17c2416331f6e'
                        key: {
                            name: 'x_snc_apr_trv_expense'
                            element: 'vendor'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'e7ec145d31264c599bee2bded965efb3'
                        key: {
                            list_id: {
                                id: 'b256133d8ad349f0842688622416783d'
                                key: {
                                    name: 'x_snc_apr_trv_request'
                                    view: {
                                        id: '598a30d6e73f40c09440b10ecbeeba45'
                                        key: {
                                            name: 'Default'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'approval_status'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e7f694d382f549b5b136e1b3ce2bed62'
                        key: {
                            sys_security_acl: '813a1dbe155a4c7a98efd96f35e94b2e'
                            sys_user_role: {
                                id: '7a70907adb0c4674bb27c08814155512'
                                key: {
                                    name: 'x_snc_apr_trv.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'eb06c035f91b4cc39ab096b0d0a28959'
                        key: {
                            sys_security_acl: 'd1e2501558764392acaf9a47f8a3639c'
                            sys_user_role: {
                                id: 'd3ac24b30b2042faa4f254e3ced7ad56'
                                key: {
                                    name: 'x_snc_apr_trv.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'eb3c8196c6f143189006cd15c2755dfe'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '858a75adda1a4017872ec343903a29e2'
                            variable: '989d9e235324220002c6435723dc3484'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'ec837128ef9b41d99a06ed54493c924b'
                        key: {
                            role: {
                                id: '7152d1f25e7d4b078faeb087459ac985'
                                key: {
                                    name: 'x_snc_apr_trv.finance'
                                }
                            }
                            contains: {
                                id: 'd3ac24b30b2042faa4f254e3ced7ad56'
                                key: {
                                    name: 'x_snc_apr_trv.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'ec8f01274bf346239f65e9d2e0aa9f57'
                        key: {
                            list_id: {
                                id: 'c9f60155c4d34b31936e07a38a6a256c'
                                key: {
                                    name: 'x_snc_apr_trv_request'
                                    view: {
                                        id: 'c9eeff717dd1465297a4ffec7737e634'
                                        key: {
                                            name: 'approver'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'destination_city'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'ec9230ba339f4369b42b17324b77d328'
                        key: {
                            list_id: {
                                id: 'c9f60155c4d34b31936e07a38a6a256c'
                                key: {
                                    name: 'x_snc_apr_trv_request'
                                    view: {
                                        id: 'c9eeff717dd1465297a4ffec7737e634'
                                        key: {
                                            name: 'approver'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'traveler'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'edf40b27415c4dddac6c395cc2a328ea'
                        key: {
                            name: 'x_snc_apr_trv_expense'
                            element: 'travel_request'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'f0d3053803f14af88115f69c42e012ef'
                        deleted: true
                        key: {
                            map: '3c21d1ce690445988357247318dcdc9e'
                            target_field: 'purpose'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f101e3bd444d46438dda30068f527e37'
                        key: {
                            name: 'x_snc_apr_trv_delegation'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f120e4f80085490fb328acf13d1f845f'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f293028d98e54f4aad4e07b634623fad'
                        key: {
                            name: 'x_snc_apr_trv_expense'
                            element: 'reimbursement_status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f2ca7060107a41429486a8a52948e921'
                        key: {
                            name: 'x_snc_apr_trv_policy'
                            element: 'max_daily_hotel'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f37aaeae6d464008a72552f6a1aa49dd'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'approval_status'
                            value: 'rejected'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'f55d00368eca40c2a3414981f504d009'
                        key: {
                            list_id: {
                                id: 'a0bda343c4ae434c97be1e731592a760'
                                key: {
                                    name: 'x_snc_apr_trv_expense'
                                    view: {
                                        id: '598a30d6e73f40c09440b10ecbeeba45'
                                        key: {
                                            name: 'Default'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'reimbursement_status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f7dc379e3145460abfc160fd8019af04'
                        key: {
                            name: 'x_snc_apr_trv_policy'
                            element: 'max_flight_class'
                            value: 'economy'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'fb60ae42aae6496fa591a107f68b86d0'
                        deleted: true
                        key: {
                            map: '3c21d1ce690445988357247318dcdc9e'
                            target_field: 'estimated_cost'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'fc99f5843aad4e6f8f3c85169a03a837'
                        key: {
                            sys_ui_action: 'cbeeb71b9b7244c38025b1352aef9eda'
                            sys_user_role: {
                                id: '7d8134e539904aceb40ab5f64cc8ae42'
                                key: {
                                    name: 'x_snc_apr_trv.approver'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ff02568d84b2421387494426a74d1d95'
                        key: {
                            name: 'x_snc_apr_trv_request'
                            element: 'department'
                            language: 'en'
                        }
                    },
                ]
            }
        }
    }
}

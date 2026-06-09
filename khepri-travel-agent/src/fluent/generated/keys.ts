import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    '181177f82b2c4f103ee9f286f291bfed': {
                        table: 'ais_semantic_component_field'
                        id: '181177f82b2c4f103ee9f286f291bfed'
                    }
                    '6fb87b7c2ba08f103ee9f286f291bffe': {
                        table: 'sys_scope_privilege'
                        id: '6fb87b7c2ba08f103ee9f286f291bffe'
                    }
                    '6fb8bb7c2ba08f103ee9f286f291bf04': {
                        table: 'sys_scope_privilege'
                        id: '6fb8bb7c2ba08f103ee9f286f291bf04'
                    }
                    '87213b3c2b2c4f103ee9f286f291bf07': {
                        table: 'ais_semantic_component_field'
                        id: '87213b3c2b2c4f103ee9f286f291bf07'
                    }
                    '91d1ffb42b6c4f103ee9f286f291bf55': {
                        table: 'ais_ai_agent_semantic_search_configuration_m2m'
                        id: '91d1ffb42b6c4f103ee9f286f291bf55'
                    }
                    'ais-datasource-travel-policy': {
                        table: 'ais_datasource'
                        id: '5414a90e96de46c28e5468d9b770fc9e'
                    }
                    'ais-ds-attribute': {
                        table: 'ais_datasource_attribute'
                        id: '06d7a4dfae4a452d9b99ebbef57508db'
                    }
                    'ais-field-attr-text': {
                        table: 'ais_datasource_field_attribute'
                        id: '090af3d075a04bc38ca1599e93b3419f'
                    }
                    'ais-field-attr-title': {
                        table: 'ais_datasource_field_attribute'
                        id: '95a39472dd424098b9aaf36f84fbc2c7'
                    }
                    'ais-profile-source-m2m-travel-policy': {
                        table: 'ais_search_profile_ais_search_source_m2m'
                        id: '2941acf8e6864f13b7b40a5a2417c15e'
                    }
                    'ais-search-profile-travel-policy': {
                        table: 'ais_search_profile'
                        id: '00c0d9f8da1d4f55aa0c49ada8da7752'
                    }
                    'ais-search-source-travel-policy': {
                        table: 'ais_search_source'
                        id: '012b945efbd147589d51e7a812387363'
                    }
                    'ais-semantic-index-travel-policy': {
                        table: 'ais_semantic_index_configuration'
                        id: '71d8ca2f5da5426cbbf9b985a1727e22'
                    }
                    'ais-snippet-config-travel-policy': {
                        table: 'ais_semantic_snippetization_configuration'
                        id: 'a2ff47e6331e4250b662ceaa9461c2e0'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: 'f62a19e3de5f4dedbdc1a869a5c0508e'
                    }
                    'csp-aia-agent-create': {
                        table: 'sys_scope_privilege'
                        id: '65ac879765f24d0d95d45c612eedccf2'
                    }
                    'csp-aia-agent-read': {
                        table: 'sys_scope_privilege'
                        id: '51276d7e8df14085a3d56e631d1a2f05'
                    }
                    'csp-aia-agent-tool-m2m-create': {
                        table: 'sys_scope_privilege'
                        id: '62485c0862a14d2595a42b851457e6b8'
                    }
                    'csp-aia-agent-tool-m2m-read': {
                        table: 'sys_scope_privilege'
                        id: 'ca41a52889d843e788a952acbe97d3b3'
                    }
                    'csp-aia-agent-tool-m2m-write': {
                        table: 'sys_scope_privilege'
                        id: 'dbb0da74b2c0471e89ffaa28a7c433d5'
                    }
                    'csp-aia-agent-write': {
                        table: 'sys_scope_privilege'
                        id: '0ee08cf7e3a34221ba8aecc19682184c'
                    }
                    'csp-aia-config-create': {
                        table: 'sys_scope_privilege'
                        id: '35a365b5da8044bdb17a4c735fc6775f'
                    }
                    'csp-aia-config-read': {
                        table: 'sys_scope_privilege'
                        id: 'bad275f5be3146039f2765558dfa87be'
                    }
                    'csp-aia-config-write': {
                        table: 'sys_scope_privilege'
                        id: '405a75736d814bdc97820f8851897b91'
                    }
                    'csp-aia-tool-create': {
                        table: 'sys_scope_privilege'
                        id: '74954c8f57d9405aa24a205bf26e4ca4'
                    }
                    'csp-aia-tool-read': {
                        table: 'sys_scope_privilege'
                        id: 'e40fb1babe7a4be0848059ed087a9df5'
                    }
                    'csp-aia-tool-write': {
                        table: 'sys_scope_privilege'
                        id: '9e44dc870f144f36a0aeda5517ef0795'
                    }
                    'csp-ais-datasource-create': {
                        table: 'sys_scope_privilege'
                        id: '2ddd96715ee548b9b595fa7e97cf3f51'
                    }
                    'csp-ais-datasource-read': {
                        table: 'sys_scope_privilege'
                        id: 'aba06479a86349238d1dc42d3b686ae4'
                    }
                    'csp-ais-datasource-write': {
                        table: 'sys_scope_privilege'
                        id: '31b9000e6acf4da687ef2c331e855e6e'
                    }
                    'csp-ais-ds-attr-create': {
                        table: 'sys_scope_privilege'
                        id: 'f8e3cc318960435e87bf47c693b844ad'
                    }
                    'csp-ais-ds-attr-read': {
                        table: 'sys_scope_privilege'
                        id: '0167d8402abe44749b7960262d57d5af'
                    }
                    'csp-ais-ds-attr-write': {
                        table: 'sys_scope_privilege'
                        id: '6ad4ad6a9e4d4aa5bf7377c0818b1b69'
                    }
                    'csp-ais-field-attr-create': {
                        table: 'sys_scope_privilege'
                        id: '47bc5931c44e4d689e24eab64974b15e'
                    }
                    'csp-ais-field-attr-read': {
                        table: 'sys_scope_privilege'
                        id: 'bc77474b72e4496b939aef4378b4a5d7'
                    }
                    'csp-ais-field-attr-write': {
                        table: 'sys_scope_privilege'
                        id: '09dad06fa8c44eabbcffc5ef5fe99c76'
                    }
                    'csp-ais-profile-source-m2m-create': {
                        table: 'sys_scope_privilege'
                        id: '83e37a86bbfc4eed905fd830ee9b9cf0'
                    }
                    'csp-ais-profile-source-m2m-read': {
                        table: 'sys_scope_privilege'
                        id: '5a008ebfedbe43eda5c043c02ae019ad'
                    }
                    'csp-ais-profile-source-m2m-write': {
                        table: 'sys_scope_privilege'
                        id: '2e7f3c38d6e64fa68d6065674cc5a998'
                    }
                    'csp-ais-search-profile-create': {
                        table: 'sys_scope_privilege'
                        id: '5cb2ac490af54045b71ec56589ac9683'
                    }
                    'csp-ais-search-profile-read': {
                        table: 'sys_scope_privilege'
                        id: '1fe62679f00340b69e0d0675d903f1ea'
                    }
                    'csp-ais-search-profile-write': {
                        table: 'sys_scope_privilege'
                        id: '5808e7b328054546b367d735c49a88ee'
                    }
                    'csp-ais-search-source-create': {
                        table: 'sys_scope_privilege'
                        id: '9c2079f0af274343ac7e3fc9040a642e'
                    }
                    'csp-ais-search-source-read': {
                        table: 'sys_scope_privilege'
                        id: '8c3cdd04eb7d4366a3dbbda26c4c9f20'
                    }
                    'csp-ais-search-source-write': {
                        table: 'sys_scope_privilege'
                        id: '86f2b041818849d9b9719813d9cdaa4b'
                    }
                    'csp-ais-semantic-index-create': {
                        table: 'sys_scope_privilege'
                        id: '17b947f547a946c6923c2ec6a1f0eead'
                    }
                    'csp-ais-semantic-index-read': {
                        table: 'sys_scope_privilege'
                        id: '2bc673fdc76a464487bcc7b26e080e1d'
                    }
                    'csp-ais-semantic-index-write': {
                        table: 'sys_scope_privilege'
                        id: '67405fe1239d480daf283fb24d07fb2b'
                    }
                    'csp-ais-snippet-config-create': {
                        table: 'sys_scope_privilege'
                        id: '08631de5d3f248358142f59ce8fde80f'
                    }
                    'csp-ais-snippet-config-read': {
                        table: 'sys_scope_privilege'
                        id: 'b6f432ed852949c6b003c441c4c845a6'
                    }
                    'csp-ais-snippet-config-write': {
                        table: 'sys_scope_privilege'
                        id: 'ef5ae851635b436cab1225399ef369d8'
                    }
                    'csp-search-context-config-create': {
                        table: 'sys_scope_privilege'
                        id: 'aaeb265ab4c7429592d0b32104106944'
                    }
                    'csp-search-context-config-read': {
                        table: 'sys_scope_privilege'
                        id: '1ccda0686d27466c99991c976452cdcb'
                    }
                    'csp-search-context-config-write': {
                        table: 'sys_scope_privilege'
                        id: 'af90e83d22ac4050913f999779e98dd6'
                    }
                    e3e9bb3c2be08f103ee9f286f291bfbf: {
                        table: 'sys_scope_privilege'
                        id: 'e3e9bb3c2be08f103ee9f286f291bfbf'
                    }
                    'expense-cat-exp-alcohol': {
                        table: 'x_snc_travel_a7t2p_travel_expense_category'
                        id: '1d0d8b43cb07484492f1786ef55a59ef'
                    }
                    'expense-cat-exp-companion': {
                        table: 'x_snc_travel_a7t2p_travel_expense_category'
                        id: '507318828d024c4ba240973cd1c674c1'
                    }
                    'expense-cat-exp-fines': {
                        table: 'x_snc_travel_a7t2p_travel_expense_category'
                        id: '2a0ec1fb009d4041bddd2d7a64196e5b'
                    }
                    'expense-cat-exp-lounge': {
                        table: 'x_snc_travel_a7t2p_travel_expense_category'
                        id: '8914065459114843a3ebc51b630cdc3a'
                    }
                    'expense-cat-exp-minibar': {
                        table: 'x_snc_travel_a7t2p_travel_expense_category'
                        id: 'c6aff79d9efc49e2884dbce7902f784b'
                    }
                    'expense-cat-exp-personal': {
                        table: 'x_snc_travel_a7t2p_travel_expense_category'
                        id: 'f203a58780824eb6b736b27cfc3b6d43'
                    }
                    'expense-cat-meal-breakfast': {
                        table: 'x_snc_travel_a7t2p_travel_expense_category'
                        id: '965ee3b7703a45ed8227c0f906fc3483'
                    }
                    'expense-cat-meal-dinner': {
                        table: 'x_snc_travel_a7t2p_travel_expense_category'
                        id: 'e1850c8db30c44699d6a095651221f65'
                    }
                    'expense-cat-meal-incidental': {
                        table: 'x_snc_travel_a7t2p_travel_expense_category'
                        id: '993706fcaf5945a49ded136aa5e3437d'
                    }
                    'expense-cat-meal-lunch': {
                        table: 'x_snc_travel_a7t2p_travel_expense_category'
                        id: '0a2022ebaf804fcb9631ca1f8b60827e'
                    }
                    fbb8bb7c2ba08f103ee9f286f291bf48: {
                        table: 'sys_scope_privilege'
                        id: 'fbb8bb7c2ba08f103ee9f286f291bf48'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'd59df8097f434fc79a83e34eeccaf5fc'
                    }
                    'policy-section-accommodation': {
                        table: 'x_snc_travel_a7t2p_travel_policy_section'
                        id: '4da3860a8277417692475cf85115b5be'
                    }
                    'policy-section-air-travel': {
                        table: 'x_snc_travel_a7t2p_travel_policy_section'
                        id: '2ca9a6082a564616bd4a550fc395c3aa'
                    }
                    'policy-section-approval-routing': {
                        table: 'x_snc_travel_a7t2p_travel_policy_section'
                        id: 'd3cf2750e48f4ab592e6ba576b9b8e7d'
                    }
                    'policy-section-booking-procedures': {
                        table: 'x_snc_travel_a7t2p_travel_policy_section'
                        id: 'a63084ae061440bdac2294a9d6025592'
                    }
                    'policy-section-client-entertainment': {
                        table: 'x_snc_travel_a7t2p_travel_policy_section'
                        id: '94872f973aca4e94aa51394017a1ea35'
                    }
                    'policy-section-expense-reporting': {
                        table: 'x_snc_travel_a7t2p_travel_policy_section'
                        id: '4f4e0192cc2e4c32b56e7e8bdb2739af'
                    }
                    'policy-section-extended-stay': {
                        table: 'x_snc_travel_a7t2p_travel_policy_section'
                        id: 'fefc83ba4977484d83396b64487e3e04'
                    }
                    'policy-section-ground-transport': {
                        table: 'x_snc_travel_a7t2p_travel_policy_section'
                        id: '86b999bd07ab48a0918e90b0c1d946c4'
                    }
                    'policy-section-meals-per-diem': {
                        table: 'x_snc_travel_a7t2p_travel_policy_section'
                        id: 'e1a9af6172624cefa67ec2641c24678b'
                    }
                    'policy-section-non-reimbursable': {
                        table: 'x_snc_travel_a7t2p_travel_policy_section'
                        id: '9c9efc1413e24e6dbd9b2351055d4a07'
                    }
                    'policy-section-policy-violations': {
                        table: 'x_snc_travel_a7t2p_travel_policy_section'
                        id: '937a747914034739aa574d8931cba05d'
                    }
                    'policy-section-purpose-and-scope': {
                        table: 'x_snc_travel_a7t2p_travel_policy_section'
                        id: '6c318a82350048e6bf12792d299081b1'
                    }
                    'policy-section-sustainability': {
                        table: 'x_snc_travel_a7t2p_travel_policy_section'
                        id: '48bf8cd2762d4797b73a269bfded9312'
                    }
                    'policy-section-travel-approval': {
                        table: 'x_snc_travel_a7t2p_travel_policy_section'
                        id: '64bd3b95ac2e4a5d94329f61bd39df94'
                    }
                    'policy-section-travel-safety': {
                        table: 'x_snc_travel_a7t2p_travel_policy_section'
                        id: 'bbfc626bf38e4aad8cba8704acaaf26c'
                    }
                    'rule-accom-dom': {
                        table: 'x_snc_travel_a7t2p_travel_approval_rule'
                        id: 'addc3410dea04b3da16c510bf962139b'
                    }
                    'rule-accom-intl': {
                        table: 'x_snc_travel_a7t2p_travel_approval_rule'
                        id: 'cb2a9359a18d4d9581004737298e1566'
                    }
                    'rule-advance-dom': {
                        table: 'x_snc_travel_a7t2p_travel_approval_rule'
                        id: '1ab65239c0cc4dce95b43b8463d62e00'
                    }
                    'rule-biz-class': {
                        table: 'x_snc_travel_a7t2p_travel_approval_rule'
                        id: 'b8ecfe93781f46e3bc043172eef45df3'
                    }
                    'rule-dom-mgr': {
                        table: 'x_snc_travel_a7t2p_travel_approval_rule'
                        id: '9a06f3d13a9243d4a93228fa79b07f2c'
                    }
                    'rule-entertain-cap': {
                        table: 'x_snc_travel_a7t2p_travel_approval_rule'
                        id: 'f61f031cd9374ef8ae7eb927ce196fd0'
                    }
                    'rule-intl-vp': {
                        table: 'x_snc_travel_a7t2p_travel_approval_rule'
                        id: '0575e3acf8f24825946ee87cc5087f20'
                    }
                    'rule-prem-econ': {
                        table: 'x_snc_travel_a7t2p_travel_approval_rule'
                        id: '918815bd97424ca6ac5de01d61f80010'
                    }
                    'search-app-travel-policy': {
                        table: 'sys_search_context_config'
                        id: 'c29c5528ebde482fa5822d93ebb3d9ce'
                    }
                    'si-travel-agent-create-request': {
                        table: 'sys_script_include'
                        id: '0044eae34fee44b9b709d9ad80c11e49'
                    }
                    'si-travel-agent-evaluate-request': {
                        table: 'sys_script_include'
                        id: '249eb223cae647988ef534d21573ee7f'
                    }
                    'si-travel-agent-lookup-request': {
                        table: 'sys_script_include'
                        id: '9e73cad9150146459c038034d00b9b87'
                    }
                    'src_server_script-includes_travel-agent-create-request_js': {
                        table: 'sys_module'
                        id: '5f1ed24549e842a983b8062caf25b10d'
                    }
                    'src_server_script-includes_travel-agent-evaluate-request_js': {
                        table: 'sys_module'
                        id: '24a1a6f2dcad4486b9d125acd0333606'
                    }
                    'src_server_script-includes_travel-agent-lookup-request_js': {
                        table: 'sys_module'
                        id: '229386cbda2e4fada2ab60c0078faf61'
                    }
                    'travel-agent-acl': {
                        table: 'sys_security_acl'
                        id: 'edbfa14e0c09488bb782c8bad99015da'
                    }
                    'travel-approval-agent': {
                        table: 'sn_aia_agent'
                        id: 'f399bb209c7643648da2964b8a16df80'
                    }
                    'travel-approval-rules-applicability': {
                        table: 'sys_ux_applicability_m2m_list'
                        id: 'ec9d276bc64e48c79da45b2444d53b50'
                    }
                    'travel-approval-rules-list': {
                        table: 'sys_ux_list'
                        id: '7c44f486b8774c7da45d708b9ffce0ca'
                    }
                    'travel-dashboard-overview-tab': {
                        table: 'par_dashboard_tab'
                        id: '714db6cad45b41e884f8bb0985412913'
                    }
                    'travel-expense-categories-applicability': {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '5f15a17534184968ad4f39d7122f512a'
                    }
                    'travel-expense-categories-list': {
                        table: 'sys_ux_list'
                        id: '97a2243de2d74481b501ef7c5e3391f6'
                    }
                    'travel-management-dashboard': {
                        table: 'par_dashboard'
                        id: '1bb1110b415e4fb4b9fb6b54d4de108a'
                    }
                    'travel-management-workspace': {
                        table: 'sys_ux_page_registry'
                        id: '89908cf29e6b4d15a21cef988e5a8e03'
                    }
                    'travel-management-workspace_sys_ux_app_config_workspace': {
                        table: 'sys_ux_app_config'
                        id: '30eda266a776450993454abaec8f4cc2'
                    }
                    'travel-management-workspace_sys_ux_app_route_home': {
                        table: 'sys_ux_app_route'
                        id: 'd18720d9c5aa49c38c8901cb0cbbd1ec'
                    }
                    'travel-management-workspace_sys_ux_app_route_list': {
                        table: 'sys_ux_app_route'
                        id: '34d30869fca54b7d862d260917dffc58'
                    }
                    'travel-management-workspace_sys_ux_app_route_record': {
                        table: 'sys_ux_app_route'
                        id: 'c8f3edf2d74d476682870d69e10657e2'
                    }
                    'travel-management-workspace_sys_ux_app_route_simple-list': {
                        table: 'sys_ux_app_route'
                        id: 'e107034a90f448c89f1368a2f7447695'
                    }
                    'travel-management-workspace_sys_ux_macroponent_record': {
                        table: 'sys_ux_macroponent'
                        id: '1393af1400084b98a1bcef5dc69418d0'
                    }
                    'travel-management-workspace_sys_ux_page_property_chrome_footer': {
                        table: 'sys_ux_page_property'
                        id: 'dcfef201a0964d06b22843a930adab6a'
                    }
                    'travel-management-workspace_sys_ux_page_property_chrome_header': {
                        table: 'sys_ux_page_property'
                        id: '62e18f89f9fc47a5b2cb1c63acaba27d'
                    }
                    'travel-management-workspace_sys_ux_page_property_chrome_tab': {
                        table: 'sys_ux_page_property'
                        id: 'a49e9c551a114845adb9bfde2ccd36e7'
                    }
                    'travel-management-workspace_sys_ux_page_property_chrome_toolbar': {
                        table: 'sys_ux_page_property'
                        id: '5beae36575994fd2ae5aa946ce7a6aa5'
                    }
                    'travel-management-workspace_sys_ux_page_property_listConfigId': {
                        table: 'sys_ux_page_property'
                        id: '285b6b8fc1924b5b92656535c3916433'
                    }
                    'travel-management-workspace_sys_ux_page_property_view': {
                        table: 'sys_ux_page_property'
                        id: 'c988e1f6bb994535beb5dec124016e98'
                    }
                    'travel-management-workspace_sys_ux_page_property_wbApplicabilityConfigId': {
                        table: 'sys_ux_page_property'
                        id: 'b64fb2be50c040f798cd22f67ad1e9df'
                    }
                    'travel-management-workspace_sys_ux_registry_m2m_category_unifiedNav': {
                        table: 'sys_ux_registry_m2m_category'
                        id: 'a8bfbd49b5b9419dbc00f2cae50bcf66'
                    }
                    'travel-management-workspace_sys_ux_screen_home': {
                        table: 'sys_ux_screen'
                        id: '8b7cc6fa1be342de9e8e32b7b6451599'
                    }
                    'travel-management-workspace_sys_ux_screen_list': {
                        table: 'sys_ux_screen'
                        id: '2941785aee794802b52009349247805d'
                    }
                    'travel-management-workspace_sys_ux_screen_record': {
                        table: 'sys_ux_screen'
                        id: '33f62ee8c40d4f51baf411c3c6413591'
                    }
                    'travel-management-workspace_sys_ux_screen_simple-list': {
                        table: 'sys_ux_screen'
                        id: '39af85d1c6ad420cbd424758c78434e4'
                    }
                    'travel-management-workspace_sys_ux_screen_type_home': {
                        table: 'sys_ux_screen_type'
                        id: '1a302481bc014f06b8f5a3f1ea5cff19'
                    }
                    'travel-management-workspace_sys_ux_screen_type_list': {
                        table: 'sys_ux_screen_type'
                        id: '2d799f8a62314458bac3fb9aadf8dd6e'
                    }
                    'travel-management-workspace_sys_ux_screen_type_record': {
                        table: 'sys_ux_screen_type'
                        id: '4aa9d609f85e42f7874d67b55407fa1e'
                    }
                    'travel-management-workspace_sys_ux_screen_type_simple-list': {
                        table: 'sys_ux_screen_type'
                        id: '1e7ff0e9d1324632b417359238fbeb90'
                    }
                    'travel-policy-category': {
                        table: 'sys_ux_list_category'
                        id: '541596b0948e4b0297e46e5e96ef576b'
                    }
                    'travel-policy-sections-applicability': {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '129dd36e92c74894a3ada3dc41378f7d'
                    }
                    'travel-policy-sections-list': {
                        table: 'sys_ux_list'
                        id: '9e510529fa2249d884e30e5b64a862b7'
                    }
                    'travel-request-tr0001': {
                        table: 'x_snc_travel_a7t2p_travel_request'
                        id: '897f6511a678408db93a5aab9e328e59'
                    }
                    'travel-request-tr0002': {
                        table: 'x_snc_travel_a7t2p_travel_request'
                        id: '37e33ef067b84837804cedd9b6daf454'
                    }
                    'travel-request-tr0003': {
                        table: 'x_snc_travel_a7t2p_travel_request'
                        id: 'b6d2fea4b6f84463b0d7eb76474ea4b1'
                    }
                    'travel-request-tr0004': {
                        table: 'x_snc_travel_a7t2p_travel_request'
                        id: '2f5d2c4ed4a548d2aa5f3aef2d5c1bd9'
                    }
                    'travel-request-tr0005': {
                        table: 'x_snc_travel_a7t2p_travel_request'
                        id: '5831f4fa5b2741fc86efbecfc9652ba1'
                    }
                    'travel-request-tr0006': {
                        table: 'x_snc_travel_a7t2p_travel_request'
                        id: '118a7549717149099fcfb818efdba76e'
                    }
                    'travel-request-tr0007': {
                        table: 'x_snc_travel_a7t2p_travel_request'
                        id: '48213e8bfb1848919cc81a29f4d2c027'
                    }
                    'travel-request-tr0008': {
                        table: 'x_snc_travel_a7t2p_travel_request'
                        id: '5ca9f1cf344848b7be222dc4528eada6'
                    }
                    'travel-request-tr0009': {
                        table: 'x_snc_travel_a7t2p_travel_request'
                        id: '5a8db1aa6d354926ba6608ff2c0b6f04'
                    }
                    'travel-request-tr0010': {
                        table: 'x_snc_travel_a7t2p_travel_request'
                        id: '1d365a4170cd4984abf2af01b210b8b7'
                    }
                    'travel-requests-all': {
                        table: 'sys_ux_list'
                        id: 'ba554e5b0f11439a98bc463efe2b91b2'
                    }
                    'travel-requests-all-applicability': {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '80b5f86ffb2340f389d69f23b185204d'
                    }
                    'travel-requests-approved': {
                        table: 'sys_ux_list'
                        id: '4ba9f82bf36e4522b32057120291fed2'
                    }
                    'travel-requests-approved-applicability': {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '92fb1f879eda4015b4717eec86f93f77'
                    }
                    'travel-requests-category': {
                        table: 'sys_ux_list_category'
                        id: '548a4a7dc09d4851b6e38469d364aa94'
                    }
                    'travel-requests-flagged': {
                        table: 'sys_ux_list'
                        id: '0981ad5e73cc4fb3bce3990d88bc0a8b'
                    }
                    'travel-requests-flagged-applicability': {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '239cccd60cf34eb2b0f8060763a197d7'
                    }
                    'travel-requests-pending': {
                        table: 'sys_ux_list'
                        id: 'fbcf035ffe404a948cae26ddad58ee33'
                    }
                    'travel-requests-pending-applicability': {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '8eb716ecd36142a3b9b7d8a164c2254f'
                    }
                    'travel-widget-by-class': {
                        table: 'par_dashboard_widget'
                        id: 'e090e831aa874ba7adddebd43381b01c'
                    }
                    'travel-widget-by-destination': {
                        table: 'par_dashboard_widget'
                        id: '417f3dc4f38b434eadc89f45d65ba30e'
                    }
                    'travel-widget-by-status': {
                        table: 'par_dashboard_widget'
                        id: '0dc80528773145f8abe6aafd85ba3151'
                    }
                    'travel-widget-by-type': {
                        table: 'par_dashboard_widget'
                        id: 'f695a9c9637a432a9939716a0679b01b'
                    }
                    'travel-widget-pending-count': {
                        table: 'par_dashboard_widget'
                        id: 'e690dfe5abcf43a2b0b27e71f1c200b5'
                    }
                    'travel-widget-total-requests': {
                        table: 'par_dashboard_widget'
                        id: '3b7f44205aad4a1a87bdbeb40d1a1d3b'
                    }
                    'travel-workspace-acl': {
                        table: 'sys_security_acl'
                        id: '1727b5a51ced4da39c422405f3bd8a6e'
                    }
                    'travel-workspace-applicability': {
                        table: 'sys_ux_applicability'
                        id: '0955fef266e54df188cf5ef9e54da13a'
                    }
                    'travel-workspace-list-config': {
                        table: 'sys_ux_list_menu_config'
                        id: 'ec7de60d3988483e9b46122cf9d201d7'
                    }
                }
                composite: [
                    {
                        table: 'sn_aia_agent_tool_m2m'
                        id: '0252863e045346d4845ca78a2f3b1f18'
                        key: {
                            agent: 'f399bb209c7643648da2964b8a16df80'
                            tool: '14ef1dc9f7e44e75b01c6e2dc73bd983'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0350447473e74e6ab4dfd99b14cef923'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_expense_category'
                            element: 'category_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '04510e09757d4b5fb6dcf33bc91bffdf'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'business_purpose'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '072f09f114ad4d25a13373894e6f4b51'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_approval_rule'
                            element: 'message'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sn_aia_agent_tool_m2m'
                        id: '093f47898c1845059e20e0c5bf5a48d6'
                        key: {
                            agent: 'f399bb209c7643648da2964b8a16df80'
                            tool: 'adacf7ea812e4bb1bc2fbd17566a1a7f'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '098da91bc69c4eb3a804667bad641672'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_expense_category'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0c508a11942a41bb803f94adf73a56ac'
                        key: {
                            sys_security_acl: 'edbfa14e0c09488bb782c8bad99015da'
                            sys_user_role: 'b0593b350a0a0aa7001d689e4542dc28'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1239d1ea7b7941a399f1448e4a74d528'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_expense_category'
                            element: 'category_id'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '143a82b2753b4c918a4a79fd3d865ff5'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_policy_section'
                        }
                    },
                    {
                        table: 'sn_aia_tool'
                        id: '14ef1dc9f7e44e75b01c6e2dc73bd983'
                        key: {
                            name: 'Search Travel Policy'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '170334d8087c419f86b882619f63c55f'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'estimated_airfare'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '174da4b47bd143dfa8308799e7e41e55'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_expense_category'
                            element: 'category_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sn_aia_agent_tool_m2m'
                        id: '1808ab784b2b455282ba12cb28797774'
                        deleted: true
                        key: {
                            agent: 'NULL'
                            tool: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1960946eb54e4fa7b30738b687125ac8'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'client_entertainment_required'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '19d8715d04854b6ba1cd5658362c1912'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_approval_rule'
                            element: 'condition_field'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1b88bf4d6c814f6fb50a042170844c88'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'departure_date'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1bf748fdee6547d28903b25fc5789e83'
                        key: {
                            sys_security_acl: '1727b5a51ced4da39c422405f3bd8a6e'
                            sys_user_role: {
                                id: '6082916dd13d49daa3545518e2f4d9b0'
                                key: {
                                    name: 'x_snc_travel_a7t2p.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1f634cf87e7543e9adc2218e4205b504'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_approval_rule'
                            element: 'rule_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '20cb4035491b42c088b7516cec036263'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_approval_rule'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '210d37742ba48f103ee9f286f291bfea'
                        key: {
                            sys_ui_section: {
                                id: '610d37742ba48f103ee9f286f291bfaf'
                                key: {
                                    name: 'x_snc_travel_a7t2p_travel_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'return_date'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '219969dcfa664475be3f1eb383a0c517'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_expense_category'
                            element: 'reimbursable'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '21e2bac971d04171b6514b5e2d404c4a'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'business_purpose'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '244f4e0b6e0c4cce837add677d3fa6b0'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_approval_rule'
                            element: 'condition_operator'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '266de79e6d5749eb904e5b009f04e7bb'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2d0d37742ba48f103ee9f286f291bfe7'
                        key: {
                            sys_ui_section: {
                                id: '610d37742ba48f103ee9f286f291bfaf'
                                key: {
                                    name: 'x_snc_travel_a7t2p_travel_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2dc56c26e6be4e54a52a7e9168e89d13'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_policy_section'
                            element: 'effective_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2e89abb046604cbdb0171a21794b4362'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'estimated_ground_transport'
                        }
                    },
                    {
                        table: 'sn_aia_agent_config'
                        id: '2fde03e2defd452eb840ecb76acffef9'
                        key: {
                            agent: 'f399bb209c7643648da2964b8a16df80'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '310d37742ba48f103ee9f286f291bffe'
                        key: {
                            sys_ui_section: {
                                id: '610d37742ba48f103ee9f286f291bfaf'
                                key: {
                                    name: 'x_snc_travel_a7t2p_travel_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'flight_class_requested'
                            position: '13'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '310d77742ba48f103ee9f286f291bf09'
                        key: {
                            sys_ui_section: {
                                id: '610d37742ba48f103ee9f286f291bfaf'
                                key: {
                                    name: 'x_snc_travel_a7t2p_travel_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '29'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '34aa6da14e7346f994fc22e313369603'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'ground_transport_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '350d37742ba48f103ee9f286f291bffb'
                        key: {
                            sys_ui_section: {
                                id: '610d37742ba48f103ee9f286f291bfaf'
                                key: {
                                    name: 'x_snc_travel_a7t2p_travel_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '350d77742ba48f103ee9f286f291bf06'
                        key: {
                            sys_ui_section: {
                                id: '610d37742ba48f103ee9f286f291bfaf'
                                key: {
                                    name: 'x_snc_travel_a7t2p_travel_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '25'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3535a8bc728b457ab7b7e4c48a17a3c6'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_policy_section'
                            element: 'section_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '390d77742ba48f103ee9f286f291bf03'
                        key: {
                            sys_ui_section: {
                                id: '610d37742ba48f103ee9f286f291bfaf'
                                key: {
                                    name: 'x_snc_travel_a7t2p_travel_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'ground_transport_type'
                            position: '21'
                        }
                    },
                    {
                        table: 'par_dashboard_canvas'
                        id: '3a0c84a647a24557a1af983cf1d1b02b'
                        key: {
                            dashboard: '1bb1110b415e4fb4b9fb6b54d4de108a'
                            dashboard_tab: '714db6cad45b41e884f8bb0985412913'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3d0d77742ba48f103ee9f286f291bf00'
                        key: {
                            sys_ui_section: {
                                id: '610d37742ba48f103ee9f286f291bfaf'
                                key: {
                                    name: 'x_snc_travel_a7t2p_travel_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'requester_email'
                            position: '17'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3d0d77742ba48f103ee9f286f291bf0b'
                        key: {
                            sys_ui_section: {
                                id: '610d37742ba48f103ee9f286f291bfaf'
                                key: {
                                    name: 'x_snc_travel_a7t2p_travel_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'estimated_ground_transport'
                            position: '33'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3e0b7a5ae43a4e57bf8becf09da277e8'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'estimated_flight_hours'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '40449ec23d7a40348d46c36b1694ee54'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'return_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '4242b61a7d6744b993a1445c2060f416'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_approval_rule'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '42492f23e39a4ac19d6f41fb487325c9'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'estimated_accommodation_per_night'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '438f22c1ae3841cc9018c3a1fec5d81a'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_approval_rule'
                            element: 'approval_level'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '43f7c1bcbaa84dc3b17053ac5c1b8293'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_approval_rule'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sn_aia_agent_tool_m2m'
                        id: '4655f897f48b483d9a7c0fd4a312f651'
                        key: {
                            agent: 'f399bb209c7643648da2964b8a16df80'
                            tool: 'af1c90ab5dc04067a2889464bd30ed16'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '470639689b914b4faa9dde0aff492a9d'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_policy_section'
                            element: 'policy_text'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '48b8c16c50574b1c826c10611f034430'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_approval_rule'
                            element: 'rule_id'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '49153761d46c42be86f9efe4b5eb6412'
                        key: {
                            sys_security_acl: '1727b5a51ced4da39c422405f3bd8a6e'
                            sys_user_role: {
                                id: '8a6c1757baeb4ca79dabad033b327422'
                                key: {
                                    name: 'x_snc_travel_a7t2p.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4b8b53f3327446bc9bb2d62064231880'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'policy_assessment'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4ea475d1f86b4910aaae7dc6f1c4e4ef'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_expense_category'
                            element: 'international_rate'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '514ae2383a6745dd9810bb4813fe4959'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'total_estimated_cost'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '53be897f03cf4cee9ac8ab7768eb3da7'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_approval_rule'
                            element: 'action'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5829ea5ff3f64d1fb387f3b049c3ebb9'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_expense_category'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '58934f5e10fe40028a17b6af73433e66'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '58f401f105d24aba9244aebdef57bd05'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'requester_name'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '5e98cae4e660443cb91b956725e10911'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_expense_category'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '6082916dd13d49daa3545518e2f4d9b0'
                        key: {
                            name: 'x_snc_travel_a7t2p.user'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '610d37742ba48f103ee9f286f291bfaf'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '610d37742ba48f103ee9f286f291bfec'
                        key: {
                            sys_ui_section: {
                                id: '610d37742ba48f103ee9f286f291bfaf'
                                key: {
                                    name: 'x_snc_travel_a7t2p_travel_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '63ccfab310a94c979e0022626be91c69'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'estimated_meals_total'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '650d37742ba48f103ee9f286f291bfe9'
                        key: {
                            sys_ui_section: {
                                id: '610d37742ba48f103ee9f286f291bfaf'
                                key: {
                                    name: 'x_snc_travel_a7t2p_travel_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'departure_date'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6755d71a80364b19a2c97f1f32183a9a'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_approval_rule'
                            element: 'condition_value'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '68519285e85040cab7878889bbdaf2a7'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_policy_section'
                            element: 'title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '69977c91c5cc41e981be89aa0f52fe7d'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_policy_section'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6deb1c4b09cb4479b617eebecdc39f5e'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_policy_section'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6e2d389ac684444a94d0068572d2e19f'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_approval_rule'
                            element: 'policy_reference'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sn_aia_version'
                        id: '7071e9d51f09438baca6db72de6936f0'
                        key: {
                            target_id: 'f399bb209c7643648da2964b8a16df80'
                            version_name: 'v1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '710d77742ba48f103ee9f286f291bf00'
                        key: {
                            sys_ui_section: {
                                id: '610d37742ba48f103ee9f286f291bfaf'
                                key: {
                                    name: 'x_snc_travel_a7t2p_travel_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'business_purpose'
                            position: '16'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '710d77742ba48f103ee9f286f291bf0b'
                        key: {
                            sys_ui_section: {
                                id: '610d37742ba48f103ee9f286f291bfaf'
                                key: {
                                    name: 'x_snc_travel_a7t2p_travel_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '32'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7256a1c8ab9e46f5ba1f705b703f5557'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'request_number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7313e7f45a7c4153b5a08b594dcc59cc'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'ground_transport_type'
                        }
                    },
                    {
                        table: 'par_dashboard_visibility'
                        id: '73e3f24135ef49a6b07e20fc70660a3b'
                        key: {
                            dashboard: '1bb1110b415e4fb4b9fb6b54d4de108a'
                            experience: '89908cf29e6b4d15a21cef988e5a8e03'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7462e2da2ab241e89f647bcca2d53328'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_policy_section'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '750d37742ba48f103ee9f286f291bffd'
                        key: {
                            sys_ui_section: {
                                id: '610d37742ba48f103ee9f286f291bfaf'
                                key: {
                                    name: 'x_snc_travel_a7t2p_travel_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '750d77742ba48f103ee9f286f291bf08'
                        key: {
                            sys_ui_section: {
                                id: '610d37742ba48f103ee9f286f291bfaf'
                                key: {
                                    name: 'x_snc_travel_a7t2p_travel_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'policy_assessment'
                            position: '28'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '763e7056f2494bc28dbdac0add0ef60c'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_approval_rule'
                            element: 'condition_field'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '77559d7d1f174fa98518e1999243fce9'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_policy_section'
                            element: 'category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7784658dfb4747d78a722214bbda5f83'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'estimated_accommodation_per_night'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '782128475d9246598b9778534812740c'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_approval_rule'
                            element: 'approval_level'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '790d37742ba48f103ee9f286f291bffa'
                        key: {
                            sys_ui_section: {
                                id: '610d37742ba48f103ee9f286f291bfaf'
                                key: {
                                    name: 'x_snc_travel_a7t2p_travel_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'destination'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '790d77742ba48f103ee9f286f291bf05'
                        key: {
                            sys_ui_section: {
                                id: '610d37742ba48f103ee9f286f291bfaf'
                                key: {
                                    name: 'x_snc_travel_a7t2p_travel_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'estimated_meals_total'
                            position: '24'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '7a51d17310cf415bb473fbe4833903f3'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7d0d77742ba48f103ee9f286f291bf02'
                        key: {
                            sys_ui_section: {
                                id: '610d37742ba48f103ee9f286f291bfaf'
                                key: {
                                    name: 'x_snc_travel_a7t2p_travel_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'estimated_entertainment'
                            position: '20'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7fb3d496122f45148c12d1c46a861d80'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_approval_rule'
                            element: 'rule_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8228ca2cac3045ad849cda5825fddbed'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_policy_section'
                            element: 'policy_text'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '840a169a23944b5ea80a4d8d52e97579'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'estimated_entertainment'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '85437bad6aef41aa838355188f2d51bf'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_policy_section'
                            element: 'section_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '85d633235a9a44a781cd77305b321dc0'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_expense_category'
                            element: 'domestic_rate'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '85ea0a896bc54f8c84db1371274f2792'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'destination'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '8a6c1757baeb4ca79dabad033b327422'
                        key: {
                            name: 'x_snc_travel_a7t2p.admin'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8c3a84d3b1b34a639ae1b3d08f1cd422'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'estimated_accommodation_nights'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8e55b2b15a15470b809ff2defaabcf5e'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'requester_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '921c311a22f04c03a8cf90437d68039b'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_approval_rule'
                            element: 'condition_operator'
                        }
                    },
                    {
                        table: 'sn_aia_tool'
                        id: '94f231595d794fccb49de07ef4022330'
                        key: {
                            name: 'Look Up Travel Request'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9513e21aff6c4f11839da2994d4c75cc'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'departure_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '97225f344c8a46f9a4e4b6414e632ebd'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'estimated_accommodation_nights'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9f75e593084147fe924900d3ef2853f8'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'flight_class_requested'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a1006dfd3a1247f997f7b06e51af70c3'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'requester_email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a50d37742ba48f103ee9f286f291bfeb'
                        key: {
                            sys_ui_section: {
                                id: '610d37742ba48f103ee9f286f291bfaf'
                                key: {
                                    name: 'x_snc_travel_a7t2p_travel_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'estimated_accommodation_per_night'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a7a58f4fd6a945c4b20eeff08e9e166c'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'approval_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a8c7fbdfe3084b3fb9a747fe64fe9676'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_approval_rule'
                            element: 'rule_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aa00131524cb4f3284f69534e054f855'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'estimated_airfare'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ad0d37742ba48f103ee9f286f291bff9'
                        key: {
                            sys_ui_section: {
                                id: '610d37742ba48f103ee9f286f291bfaf'
                                key: {
                                    name: 'x_snc_travel_a7t2p_travel_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'travel_type'
                            position: '7'
                        }
                    },
                    {
                        table: 'sn_aia_tool'
                        id: 'adacf7ea812e4bb1bc2fbd17566a1a7f'
                        key: {
                            name: 'Evaluate Travel Request'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ae954e0de1b9499ba10d143e780b8209'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_policy_section'
                            element: 'title'
                        }
                    },
                    {
                        table: 'sn_aia_tool'
                        id: 'af1c90ab5dc04067a2889464bd30ed16'
                        key: {
                            name: 'Create Travel Request'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b10d77742ba48f103ee9f286f291bf02'
                        key: {
                            sys_ui_section: {
                                id: '610d37742ba48f103ee9f286f291bfaf'
                                key: {
                                    name: 'x_snc_travel_a7t2p_travel_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'approval_routing'
                            position: '19'
                        }
                    },
                    {
                        table: 'sn_aia_agent_tool_m2m'
                        id: 'b4dc54f638f54755a3de8df191138cc6'
                        key: {
                            agent: 'f399bb209c7643648da2964b8a16df80'
                            tool: '94f231595d794fccb49de07ef4022330'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b50d37742ba48f103ee9f286f291bfff'
                        key: {
                            sys_ui_section: {
                                id: '610d37742ba48f103ee9f286f291bfaf'
                                key: {
                                    name: 'x_snc_travel_a7t2p_travel_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '15'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b50d77742ba48f103ee9f286f291bf0a'
                        key: {
                            sys_ui_section: {
                                id: '610d37742ba48f103ee9f286f291bfaf'
                                key: {
                                    name: 'x_snc_travel_a7t2p_travel_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'estimated_accommodation_nights'
                            position: '31'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b56bde4d4a0f4dae845a6bc8eac30d6c'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_expense_category'
                            element: 'reimbursable'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b699d326144a4ea39efe1b4de015735b'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_expense_category'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b90d37742ba48f103ee9f286f291bffc'
                        key: {
                            sys_ui_section: {
                                id: '610d37742ba48f103ee9f286f291bfaf'
                                key: {
                                    name: 'x_snc_travel_a7t2p_travel_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'estimated_airfare'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b90d77742ba48f103ee9f286f291bf07'
                        key: {
                            sys_ui_section: {
                                id: '610d37742ba48f103ee9f286f291bfaf'
                                key: {
                                    name: 'x_snc_travel_a7t2p_travel_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '27'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b93153dbcd824d5b94f97f0095a9321e'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_approval_rule'
                            element: 'policy_reference'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ba712a71b2654437a7c5058a6067607b'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'estimated_meals_total'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bb50b563f8a842b485a2d9a72929d054'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'created_by_agent'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bb9708dbd18d454f8d421111db44be43'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_policy_section'
                            element: 'effective_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bbe4fbae5d27432c82dc79d29f83118c'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'return_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bd0047bb8fc14df4b5d09e2522b75c92'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'approval_routing'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bd0d77742ba48f103ee9f286f291bf04'
                        key: {
                            sys_ui_section: {
                                id: '610d37742ba48f103ee9f286f291bfaf'
                                key: {
                                    name: 'x_snc_travel_a7t2p_travel_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'client_entertainment_required'
                            position: '23'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bd6a5516abf84cf1830491b1873f205e'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_approval_rule'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'beea748108bc4b6986f1538eedcfaa7e'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'policy_assessment'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bf8f15bad3a24dd0b1febad2cb52e167'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'request_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bfe4827977a648b3bdf2546a282b03b2'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'estimated_entertainment'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c07c28a764fa4683968b0026d126b282'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_approval_rule'
                            element: 'message'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c1940a7863bf48ba9e1b31e1bd814012'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'flight_class_requested'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'c23ea1e31cfe434e9c352ad3fe4aaaaf'
                        key: {
                            role: {
                                id: '8a6c1757baeb4ca79dabad033b327422'
                                key: {
                                    name: 'x_snc_travel_a7t2p.admin'
                                }
                            }
                            contains: {
                                id: 'b8941f243e4d4a7baab4d5620bd155d4'
                                key: {
                                    name: 'canvas_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c42462a7358546b996226c5584787acf'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_expense_category'
                            element: 'domestic_rate'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cf13656c848b4cc39edaefe5c5554684'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_policy_section'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd15ce4c563994da6adae40ffdc53fbb8'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'total_estimated_cost'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd1c7250a89a94f75805e67db870876ec'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_approval_rule'
                            element: 'condition_value'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd245201e90174e69a2acb10e12d19b13'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'destination'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd2f3c659172d4e2885ab8bd835d76bd9'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_expense_category'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dbb90cf9eaec4077bb998538c7ee8649'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'requester_email'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e10d37742ba48f103ee9f286f291bff9'
                        key: {
                            sys_ui_section: {
                                id: '610d37742ba48f103ee9f286f291bfaf'
                                key: {
                                    name: 'x_snc_travel_a7t2p_travel_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'requester_name'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e2302195e5ed4dab934b64774dfba235'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'approval_status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e8d074fd4ab94cb98dc03954ea53889e'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'approval_routing'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e90d37742ba48f103ee9f286f291bfea'
                        key: {
                            sys_ui_section: {
                                id: '610d37742ba48f103ee9f286f291bfaf'
                                key: {
                                    name: 'x_snc_travel_a7t2p_travel_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e91867ba17e64994b0c134d6852cc234'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_expense_category'
                            element: 'category_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ea87df4db6c94bf0acc9290703e02870'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'travel_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'eb547cd5b46641b38bcfe03446fe2af0'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'ed4c9d03235542cb95c3500a3769cf55'
                        key: {
                            role: {
                                id: '6082916dd13d49daa3545518e2f4d9b0'
                                key: {
                                    name: 'x_snc_travel_a7t2p.user'
                                }
                            }
                            contains: {
                                id: '7806c9f6d0634af29e71fd4816d8c151'
                                key: {
                                    name: 'canvas_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ed7197c98418482398ffe84605cf3fba'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'created_by_agent'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ee314f6e457946b4b761ebd23ca70dbe'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_expense_category'
                            element: 'international_rate'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ee813674eb444f599dba6778344ae6f2'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'estimated_ground_transport'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f10d77742ba48f103ee9f286f291bf04'
                        key: {
                            sys_ui_section: {
                                id: '610d37742ba48f103ee9f286f291bfaf'
                                key: {
                                    name: 'x_snc_travel_a7t2p_travel_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '22'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f50d77742ba48f103ee9f286f291bf01'
                        key: {
                            sys_ui_section: {
                                id: '610d37742ba48f103ee9f286f291bfaf'
                                key: {
                                    name: 'x_snc_travel_a7t2p_travel_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'total_estimated_cost'
                            position: '18'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f50d77742ba48f103ee9f286f291bf0c'
                        key: {
                            sys_ui_section: {
                                id: '610d37742ba48f103ee9f286f291bfaf'
                                key: {
                                    name: 'x_snc_travel_a7t2p_travel_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '34'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'f61b016f81874acea2e168ddb71223a0'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_expense_category'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f7ea2fbb37434858aedc5a7208866aba'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'client_entertainment_required'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f90d37742ba48f103ee9f286f291bffe'
                        key: {
                            sys_ui_section: {
                                id: '610d37742ba48f103ee9f286f291bfaf'
                                key: {
                                    name: 'x_snc_travel_a7t2p_travel_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'request_number'
                            position: '14'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f90d77742ba48f103ee9f286f291bf09'
                        key: {
                            sys_ui_section: {
                                id: '610d37742ba48f103ee9f286f291bfaf'
                                key: {
                                    name: 'x_snc_travel_a7t2p_travel_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'created_by_agent'
                            position: '30'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f9c744f241614e649816b5046cfbc6cd'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'estimated_flight_hours'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fb4d57a570f04bea9b91f3cf7fd561bf'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_approval_rule'
                            element: 'action'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fd0d37742ba48f103ee9f286f291bffb'
                        key: {
                            sys_ui_section: {
                                id: '610d37742ba48f103ee9f286f291bfaf'
                                key: {
                                    name: 'x_snc_travel_a7t2p_travel_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'estimated_flight_hours'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fd0d77742ba48f103ee9f286f291bf06'
                        key: {
                            sys_ui_section: {
                                id: '610d37742ba48f103ee9f286f291bfaf'
                                key: {
                                    name: 'x_snc_travel_a7t2p_travel_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'approval_status'
                            position: '26'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ff30f6b08e77416a918ef75bdddda4ab'
                        key: {
                            name: 'x_snc_travel_a7t2p_travel_request'
                            element: 'travel_type'
                        }
                    },
                ]
            }
        }
    }
}

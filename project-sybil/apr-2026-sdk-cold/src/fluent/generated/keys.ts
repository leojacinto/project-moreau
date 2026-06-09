import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    'acl-delegation-read': {
                        table: 'sys_security_acl'
                        id: 'cd38af2f72ac4d2a8a11415f4a6a4150'
                    }
                    'acl-delegation-write': {
                        table: 'sys_security_acl'
                        id: '7a3ce518c4fb43c886710575509f7725'
                    }
                    'acl-expense-read': {
                        table: 'sys_security_acl'
                        id: '168bc64770264f5b90b36996bf36d9c9'
                    }
                    'acl-expense-write': {
                        table: 'sys_security_acl'
                        id: '10e5e046935c4cc8a33d7496ab9926d4'
                    }
                    'acl-policy-read': {
                        table: 'sys_security_acl'
                        id: '0df47e338d14413ba07fa1aec14ba621'
                    }
                    'acl-policy-write': {
                        table: 'sys_security_acl'
                        id: 'ebe035ec7f1243a599ca9a0eccfe89b6'
                    }
                    'acl-request-approval-write': {
                        table: 'sys_security_acl'
                        id: '1159d5c54eb84e30b6d0704dbf291270'
                    }
                    'acl-request-create': {
                        table: 'sys_security_acl'
                        id: 'd4b24fa3ad7c4c478dbba5c70656548e'
                    }
                    'acl-request-delete': {
                        table: 'sys_security_acl'
                        id: 'd0a64b30e91c45b8b85309bf5bacfe42'
                    }
                    'acl-request-read': {
                        table: 'sys_security_acl'
                        id: '3f5336460714430990518530e9710126'
                    }
                    'acl-request-write': {
                        table: 'sys_security_acl'
                        id: 'fb052b26481041df87db91a0261a31f7'
                    }
                    'alias-expense-api': {
                        table: 'sys_alias'
                        id: '38f6e6d1fb9e4e62bcdc46125f2580ef'
                    }
                    'atf-catalog-submit': {
                        table: 'sys_atf_test'
                        id: '3f3cc573acd84efeabc6c1670fb192c5'
                    }
                    'atf-menu-visibility': {
                        table: 'sys_atf_test'
                        id: 'e2235ba1d7154aec8e9f376a50ce90fe'
                    }
                    'atf-navigate-approvals': {
                        table: 'sys_atf_test'
                        id: '3ad40c995a434a7484825ec557b461c6'
                    }
                    'atf-navigate-delegations': {
                        table: 'sys_atf_test'
                        id: '7fb647f696ad4fc9892c055e15d48e2c'
                    }
                    'atf-navigate-expenses': {
                        table: 'sys_atf_test'
                        id: '1dc5fa2bedda493e8e2e1547b05daaad'
                    }
                    'atf-navigate-finance': {
                        table: 'sys_atf_test'
                        id: '159147428850402f9a0a4cffc4584ba0'
                    }
                    'atf-navigate-policies': {
                        table: 'sys_atf_test'
                        id: '9f9cd1b3cbfc43b48cdeb0b322d93937'
                    }
                    'atf-navigate-requests': {
                        table: 'sys_atf_test'
                        id: '555f4e26450549a78d98ba41c11584b7'
                    }
                    'atf-open-new-expense': {
                        table: 'sys_atf_test'
                        id: '7fb65b185b95480dbaaee96ae50c894e'
                    }
                    'atf-open-new-request': {
                        table: 'sys_atf_test'
                        id: '4fe2a76ace924c7bbcd6725b35b59c2d'
                    }
                    'atf-set-request-field': {
                        table: 'sys_atf_test'
                        id: 'b0c3e15aecfd4f6c9b5653a70df4685e'
                    }
                    'atf-step-menu-vis': {
                        table: 'sys_atf_step'
                        id: '3775026cf23d48c4ac7d31eb369c2631'
                    }
                    'atf-step-nav-approvals': {
                        table: 'sys_atf_step'
                        id: '991020f5850d42d09577818a814997df'
                    }
                    'atf-step-nav-delegations': {
                        table: 'sys_atf_step'
                        id: '3da89e8506a34a269277e1960d7fe763'
                    }
                    'atf-step-nav-expenses': {
                        table: 'sys_atf_step'
                        id: 'c66bbe46cbbd4276aea15524c121ca7b'
                    }
                    'atf-step-nav-finance': {
                        table: 'sys_atf_step'
                        id: '435519765e734984aac57fcfbf151527'
                    }
                    'atf-step-nav-policies': {
                        table: 'sys_atf_step'
                        id: '30e28d2d9721405f9c86763f72427628'
                    }
                    'atf-step-nav-requests': {
                        table: 'sys_atf_step'
                        id: 'f383f8b904ae49858b63543048351c2e'
                    }
                    'atf-step-open-catalog': {
                        table: 'sys_atf_step'
                        id: 'be8e0c304238438a96b6c8c2f9fef7aa'
                    }
                    'atf-step-open-expense': {
                        table: 'sys_atf_step'
                        id: 'ef921e1e595040658c874b0eae2cc58b'
                    }
                    'atf-step-open-form': {
                        table: 'sys_atf_step'
                        id: 'd24f6d757a0940d09dda22548bf937dc'
                    }
                    'atf-step-open-request': {
                        table: 'sys_atf_step'
                        id: 'fe3cb5c2d5074d20a41e454bb25770a7'
                    }
                    'atf-step-set-city': {
                        table: 'sys_atf_step'
                        id: 'c4801556f6ef4d7e86bc708aa693c1e0'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: 'ab763cae480d4f998fe8ee4eee72f343'
                    }
                    'br-calculate-actual-cost': {
                        table: 'sys_script'
                        id: '2d75b004ca974f37b37311dcbc6b505d'
                    }
                    'br-close-expenses': {
                        table: 'sys_script'
                        id: '0dd601c727954cf491c7cfec0ce92ba5'
                    }
                    'br-derive-travel-type': {
                        table: 'sys_script'
                        id: '292935d757a94b2393513d6a170a1474'
                    }
                    'br-escalate-finance': {
                        table: 'sys_script'
                        id: '56c7161d92974118bb90723bc5a9f25d'
                    }
                    'br-prevent-edit-after-approval': {
                        table: 'sys_script'
                        id: '71ea911e5bed45e29c2359e380049e2f'
                    }
                    'br-set-department': {
                        table: 'sys_script'
                        id: 'e4fbd288fe6447f1a8da2d2f3349055d'
                    }
                    'br-validate-expense-date': {
                        table: 'sys_script'
                        id: 'a883f956001b49b6983d917d559291be'
                    }
                    'cat-cs-auto-populate': {
                        table: 'catalog_script_client'
                        id: '4a4aaec5562e4439a207a084582a97d5'
                    }
                    'cat-cs-show-visa-reminder': {
                        table: 'catalog_script_client'
                        id: '9f6bee20765f493aabac796f72951ed5'
                    }
                    'cat-cs-validate-date-range': {
                        table: 'catalog_script_client'
                        id: '40c0a7f1708b4cdcad44a1275803dd80'
                    }
                    'cat-item-travel': {
                        table: 'sc_cat_item'
                        id: '769bd3e292b340f990721f06c2846e29'
                    }
                    'cat-up-require-notes': {
                        table: 'catalog_ui_policy'
                        id: '36929f0fe7d84b459df57af498000094'
                    }
                    'cat-up-show-visa': {
                        table: 'catalog_ui_policy'
                        id: 'bb1dd39d8f7e42df95a2b364857199fc'
                    }
                    'cs-confirm-submission': {
                        table: 'sys_script_client'
                        id: '3f17450f312e4eaeb50458c8a6783596'
                    }
                    'cs-show-visa': {
                        table: 'sys_script_client'
                        id: '1b4d2697985541f79389b9b61855e999'
                    }
                    'cs-warn-high-cost': {
                        table: 'sys_script_client'
                        id: '48282819a64a4b03b63a0cb9c51c68c4'
                    }
                    'csp-cmn-department': {
                        table: 'sys_scope_privilege'
                        id: '80ae581b53e640ef861eda5b34e39769'
                    }
                    'csp-core-country': {
                        table: 'sys_scope_privilege'
                        id: '306e4a7a2c884987b0ce2a9ce194377f'
                    }
                    'csp-sys-user': {
                        table: 'sys_scope_privilege'
                        id: '316b54de0cfc4f748865114f470dcb33'
                    }
                    'csp-sys-user-has-role': {
                        table: 'sys_scope_privilege'
                        id: 'cdc426469b414a98a9677ca7c72450de'
                    }
                    'delegation-1': {
                        table: 'x_snc_apr_tv3b_delegation'
                        id: 'c5235fda30a34d8ca71e0429dfa246dc'
                    }
                    'delegation-2': {
                        table: 'x_snc_apr_tv3b_delegation'
                        id: '6d3069130f084adf8602d9c3eff2bd3e'
                    }
                    'ds-expense-import': {
                        table: 'sys_data_source'
                        id: '31b44199882e47118e1355b0c0c044ed'
                    }
                    'ds-request-import': {
                        table: 'sys_data_source'
                        id: '2c80434c1d154e99906aa0bb45d66d62'
                    }
                    'expense-1': {
                        table: 'x_snc_apr_tv3b_expense'
                        id: 'f3f434122e984e11a3d9a753ec58dd79'
                    }
                    'expense-10': {
                        table: 'x_snc_apr_tv3b_expense'
                        id: '9f177598f8e54d1bbc49b2469a065838'
                    }
                    'expense-2': {
                        table: 'x_snc_apr_tv3b_expense'
                        id: '95e4418ce0b3415da5d897ef0c11d139'
                    }
                    'expense-3': {
                        table: 'x_snc_apr_tv3b_expense'
                        id: 'f1d38138910846b8a5cb4216821351e0'
                    }
                    'expense-4': {
                        table: 'x_snc_apr_tv3b_expense'
                        id: 'f850caf872794bdba95594d24e1f16fa'
                    }
                    'expense-5': {
                        table: 'x_snc_apr_tv3b_expense'
                        id: '7723a9779fac41588881d88751dac68f'
                    }
                    'expense-6': {
                        table: 'x_snc_apr_tv3b_expense'
                        id: 'f731ba6a46a54d9eac7964818ab7e568'
                    }
                    'expense-7': {
                        table: 'x_snc_apr_tv3b_expense'
                        id: '10b8401b9fa04bba8a1b40c0f6937b08'
                    }
                    'expense-8': {
                        table: 'x_snc_apr_tv3b_expense'
                        id: 'ca20779ed52e4ebe9233250053da09e0'
                    }
                    'expense-9': {
                        table: 'x_snc_apr_tv3b_expense'
                        id: 'a4479f11cf274638af7488d7f9f655c7'
                    }
                    'flow-approval': {
                        table: 'sys_hub_flow'
                        id: '640fb242bfef445ba4712558be7d0b84'
                    }
                    'flow-approval-trigger': {
                        table: 'sys_hub_trigger_instance_v2'
                        id: 'a0d72f0b5f2c4dc2b89a6d8aa15eee15'
                    }
                    'flow-expense-reimbursement': {
                        table: 'sys_hub_flow'
                        id: 'e5c4f1711353464189ee5cc84ec285e9'
                    }
                    'flow-expense-trigger': {
                        table: 'sys_hub_trigger_instance_v2'
                        id: '94dc8c39b72749b29e4caf629e16c328'
                    }
                    'flow-finance-escalation': {
                        table: 'sys_hub_flow'
                        id: 'cd89e770e2e6424e858e40520915c641'
                    }
                    'flow-finance-trigger': {
                        table: 'sys_hub_trigger_instance_v2'
                        id: 'b9405ea974e94aada999e8e6d9f7c3ca'
                    }
                    'fmt-approval-timeline': {
                        table: 'sys_ui_formatter'
                        id: 'e88e7a65d44b4af4a32528b8a583778a'
                    }
                    'fmt-expense-breakdown': {
                        table: 'sys_ui_formatter'
                        id: 'cc78f4fbc4e34696a90051220e4189ca'
                    }
                    'import-expenses': {
                        table: 'sys_transform_map'
                        id: 'f13da0931aa04bd790ef6c42835d4ea8'
                    }
                    'import-requests': {
                        table: 'sys_transform_map'
                        id: 'e7c7267095a54b9887cd4f4aa2f0a405'
                    }
                    'js-mod-travel-utils': {
                        table: 'sys_ux_lib_source_script'
                        id: 'df46e8173ada4cd9b0355bb3f25e6946'
                    }
                    'js-mod-travel-validation': {
                        table: 'sys_ux_lib_source_script'
                        id: 'e67db7918b9941e48d273493b43a0428'
                    }
                    'lc-expense-filter': {
                        table: 'sys_ui_list_control'
                        id: 'eb144619d60148479900315e1cb46d2c'
                    }
                    'lc-policy-filter': {
                        table: 'sys_ui_list_control'
                        id: '6bca6bbc745b41198d9ab300ab2f23a5'
                    }
                    'lc-request-filter': {
                        table: 'sys_ui_list_control'
                        id: 'e28d8b80a595480fab64d767f64c7aea'
                    }
                    'mod-all-expenses': {
                        table: 'sys_app_module'
                        id: '454b93919f674680bdaeee2ab12a0e4a'
                    }
                    'mod-all-requests': {
                        table: 'sys_app_module'
                        id: '9d030ac0d9c643a3bdbea56165c323eb'
                    }
                    'mod-awaiting-approval': {
                        table: 'sys_app_module'
                        id: '25abc3ae37264119ae89ab3c63e756b0'
                    }
                    'mod-dashboard': {
                        table: 'sys_app_module'
                        id: '0e80994169f9408f9958fde9bf90c014'
                    }
                    'mod-delegations': {
                        table: 'sys_app_module'
                        id: 'f3eefa6e623f4af49d35536896d259d1'
                    }
                    'mod-finance-queue': {
                        table: 'sys_app_module'
                        id: '4fb4a36ce2f3425a8f66b3a874ce068d'
                    }
                    'mod-my-expenses': {
                        table: 'sys_app_module'
                        id: '2cc45d70a97549b0a513798c59fb3f06'
                    }
                    'mod-my-requests': {
                        table: 'sys_app_module'
                        id: 'bb6ac43061f444a381fce3c27ccce47b'
                    }
                    'mod-policies': {
                        table: 'sys_app_module'
                        id: '6fe7d4c6a2f94d40a9ce85fa5c5a59a1'
                    }
                    'notif-expense-flagged': {
                        table: 'sysevent_email_action'
                        id: 'df13c605d4e9496ea1ea7be0da01a543'
                    }
                    'notif-finance-review': {
                        table: 'sysevent_email_action'
                        id: '677a1e4a15a749f3b34f507cdadb1b53'
                    }
                    'notif-request-approved': {
                        table: 'sysevent_email_action'
                        id: 'dbb2243676d8415bb4373f8aeae11e3b'
                    }
                    'notif-request-rejected': {
                        table: 'sysevent_email_action'
                        id: '24bdfdb460824fbf8ea794f93cc65d8d'
                    }
                    'notif-request-submitted': {
                        table: 'sysevent_email_action'
                        id: 'ed7c92ba58294d7a994e44de041bb69b'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '9c8aca5adecf4d3ebf01c84a17c56986'
                    }
                    'policy-australia': {
                        table: 'x_snc_apr_tv3b_policy'
                        id: '32a1b917f26942b6a723bb4d5da5f45b'
                    }
                    'policy-global': {
                        table: 'x_snc_apr_tv3b_policy'
                        id: '8d32b03708554baaa893ec28a68f8f1e'
                    }
                    'policy-japan': {
                        table: 'x_snc_apr_tv3b_policy'
                        id: 'c3293aa8ae1b41b09ca96317a7f20564'
                    }
                    'policy-uk': {
                        table: 'x_snc_apr_tv3b_policy'
                        id: '9d9740c2751b4e96bbb3395581b2ccbb'
                    }
                    'policy-usa': {
                        table: 'x_snc_apr_tv3b_policy'
                        id: '1e7afd50cc064e57b0e54772ccda0f23'
                    }
                    'prop-auto-approve-below': {
                        table: 'sys_properties'
                        id: '931b4b6ef1c24cca9f609642a15cc5fe'
                    }
                    'prop-default-flight-class': {
                        table: 'sys_properties'
                        id: '708e729cfb5c44d88f823edd6b302cb8'
                    }
                    'prop-expense-receipt-required': {
                        table: 'sys_properties'
                        id: 'd145aaeb58864b92b64f9bf15fa5b687'
                    }
                    'prop-finance-threshold': {
                        table: 'sys_properties'
                        id: 'd80cbc10da7d47f4aaca185c24e59b42'
                    }
                    'prop-max-advance-booking': {
                        table: 'sys_properties'
                        id: 'a498922c5adb4e5ebeece52a8cc4e757'
                    }
                    'rel-request-approvals': {
                        table: 'sys_relationship'
                        id: 'f22c6e787c164f07924642cab7b71db0'
                    }
                    'rel-request-expenses': {
                        table: 'sys_relationship'
                        id: '8715b748c37f444b912e26f6fa3f5c2e'
                    }
                    'rel-user-delegations': {
                        table: 'sys_relationship'
                        id: '72f240bc2b244f2d99c2ba6044c18e7f'
                    }
                    'rel-user-requests': {
                        table: 'sys_relationship'
                        id: 'dfdffcad9f414d9e818770b0a3eb1768'
                    }
                    'request-1': {
                        table: 'x_snc_apr_tv3b_request'
                        id: 'cb8245494d04464faf4509e3e8988bf0'
                    }
                    'request-2': {
                        table: 'x_snc_apr_tv3b_request'
                        id: '7c087b5516f44f4c9b85a956f41db3a8'
                    }
                    'request-3': {
                        table: 'x_snc_apr_tv3b_request'
                        id: '03cae84d60eb41288ec35ef8d1623f24'
                    }
                    'request-4': {
                        table: 'x_snc_apr_tv3b_request'
                        id: 'c557cb437b164a5a828d7ecf3179ae81'
                    }
                    'request-5': {
                        table: 'x_snc_apr_tv3b_request'
                        id: '1db5cbe18d10402a90f0c3e32bdb0a29'
                    }
                    'route-approve-request': {
                        table: 'sys_ws_operation'
                        id: '1a884ac7d6814cf4a326a2e9108cad47'
                    }
                    'route-create-request': {
                        table: 'sys_ws_operation'
                        id: '564c00eb6e464a80ae0da8b05d58bc90'
                    }
                    'route-get-policy': {
                        table: 'sys_ws_operation'
                        id: 'f1b552004f41459f85942422e0a44a73'
                    }
                    'route-get-request': {
                        table: 'sys_ws_operation'
                        id: 'bea84482ce5b40a9be5b4ef67d5b17c7'
                    }
                    'route-list-requests': {
                        table: 'sys_ws_operation'
                        id: '4b54c5258aa54c6a95011a6aa0c70787'
                    }
                    'route-reject-request': {
                        table: 'sys_ws_operation'
                        id: '73e8eb25cb1149a0bd679188f62238e2'
                    }
                    'sdf-expense-by-traveler': {
                        table: 'sys_security_acl'
                        id: 'f39a719a5d4b44b4b06b6b2e77b4d6d0'
                    }
                    'sdf-request-by-traveler': {
                        table: 'sys_security_acl'
                        id: '58b1ed6d108146cb98fac2858f61cff5'
                    }
                    'sec-attr-travel-data': {
                        table: 'sys_security_type'
                        id: '6a2032f8f9ac4b8b8d19dff9c8436a67'
                    }
                    'si-travel-cost-calculator': {
                        table: 'sys_script_include'
                        id: '0f1c6d3f0ca3403abc0b9013d9c1c24d'
                    }
                    'si-travel-delegation-util': {
                        table: 'sys_script_include'
                        id: '46b9f324283e46939f49f8a419ceda64'
                    }
                    'si-travel-policy-util': {
                        table: 'sys_script_include'
                        id: 'b5e68648a1e94e7190fd7813c2decbb1'
                    }
                    'travel-api': {
                        table: 'sys_ws_definition'
                        id: 'c41dae273c75445db9263db6fc7d2686'
                    }
                    'travel-menu': {
                        table: 'sys_app_application'
                        id: '0f7f15747eb74dd2ac1d64aa5eafacf4'
                    }
                    'travel-workspace': {
                        table: 'sys_ux_page_registry'
                        id: 'bb743b111ae74a7e8ad7728fa680c531'
                    }
                    'travel-workspace_sys_ux_app_config_workspace': {
                        table: 'sys_ux_app_config'
                        id: 'd5d1f74c1be444f685cff0f7da64a7a6'
                    }
                    'travel-workspace_sys_ux_app_route_home': {
                        table: 'sys_ux_app_route'
                        id: 'a7821620b6b4472eb808f65e8a0202de'
                    }
                    'travel-workspace_sys_ux_app_route_list': {
                        table: 'sys_ux_app_route'
                        id: '358a3a2ebdb0438bbff6d75dc3af3286'
                    }
                    'travel-workspace_sys_ux_app_route_record': {
                        table: 'sys_ux_app_route'
                        id: '60f0f85bae3a4234b50363329e9da811'
                    }
                    'travel-workspace_sys_ux_app_route_simple-list': {
                        table: 'sys_ux_app_route'
                        id: 'bbb94161ffc24c0abb408d512f1c4ad2'
                    }
                    'travel-workspace_sys_ux_macroponent_record': {
                        table: 'sys_ux_macroponent'
                        id: 'e0dc79b45496438b9c0df965458f6722'
                    }
                    'travel-workspace_sys_ux_page_property_chrome_footer': {
                        table: 'sys_ux_page_property'
                        id: 'b26332dc14ac4a4b8305bef4cc743955'
                    }
                    'travel-workspace_sys_ux_page_property_chrome_header': {
                        table: 'sys_ux_page_property'
                        id: '50a88b6cfc52422fb908e9e58eb33877'
                    }
                    'travel-workspace_sys_ux_page_property_chrome_tab': {
                        table: 'sys_ux_page_property'
                        id: '7854abc3fade42cbbda6eb7525010385'
                    }
                    'travel-workspace_sys_ux_page_property_chrome_toolbar': {
                        table: 'sys_ux_page_property'
                        id: 'c77a488d6f93482c876e49d31b5d86f8'
                    }
                    'travel-workspace_sys_ux_page_property_listConfigId': {
                        table: 'sys_ux_page_property'
                        id: 'f58486346a964d8086f341d80905e26c'
                    }
                    'travel-workspace_sys_ux_page_property_view': {
                        table: 'sys_ux_page_property'
                        id: '60dc6a5df8c9426790f5b8e0304f7253'
                    }
                    'travel-workspace_sys_ux_page_property_wbApplicabilityConfigId': {
                        table: 'sys_ux_page_property'
                        id: '5bbd315a04db497097fade0729073ac8'
                    }
                    'travel-workspace_sys_ux_registry_m2m_category_unifiedNav': {
                        table: 'sys_ux_registry_m2m_category'
                        id: '2fdc8221833e4449abf22d15e1755e9c'
                    }
                    'travel-workspace_sys_ux_screen_home': {
                        table: 'sys_ux_screen'
                        id: '0860b39d68034c279df7ede5401d619b'
                    }
                    'travel-workspace_sys_ux_screen_list': {
                        table: 'sys_ux_screen'
                        id: 'c692e8082f994828abf79ff3f853d87f'
                    }
                    'travel-workspace_sys_ux_screen_record': {
                        table: 'sys_ux_screen'
                        id: 'bd93ede2021c46efac91e78c12fadb44'
                    }
                    'travel-workspace_sys_ux_screen_simple-list': {
                        table: 'sys_ux_screen'
                        id: 'd1046407b16d4be696bd4fffc1c6ef0b'
                    }
                    'travel-workspace_sys_ux_screen_type_home': {
                        table: 'sys_ux_screen_type'
                        id: '373a49c3c31846049b5c94ba715e9e00'
                    }
                    'travel-workspace_sys_ux_screen_type_list': {
                        table: 'sys_ux_screen_type'
                        id: '4372978a114b48a78e70a3c6f2fa8050'
                    }
                    'travel-workspace_sys_ux_screen_type_record': {
                        table: 'sys_ux_screen_type'
                        id: '4e7d999ed2d84118a5b478501068a9db'
                    }
                    'travel-workspace_sys_ux_screen_type_simple-list': {
                        table: 'sys_ux_screen_type'
                        id: 'd01b1bd2e93e40c9ba6a5a4a1ceef8ff'
                    }
                    'ua-add-expense': {
                        table: 'sys_ui_action'
                        id: '573bcee2813c4cc6b349ca8f0fd34647'
                    }
                    'ua-approve': {
                        table: 'sys_ui_action'
                        id: '98a04f5baf30497d8db138a9c80bb42d'
                    }
                    'ua-export-pdf': {
                        table: 'sys_ui_action'
                        id: 'df13d889a8db4269a30c99a5d44ee292'
                    }
                    'ua-reject': {
                        table: 'sys_ui_action'
                        id: '3bb3c1044c7c44e883ca6672a98b8933'
                    }
                    'ua-submit-reimbursement': {
                        table: 'sys_ui_action'
                        id: '12495183ce76464797627e37514ea667'
                    }
                    'vs-travel-details': {
                        table: 'item_option_new_set'
                        id: 'f2bdd0e85ca64ac294bfcfccf176b420'
                    }
                    'vs-traveler-info': {
                        table: 'item_option_new_set'
                        id: 'bfe68117cb664d9493baff547efef4d0'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '00adff58f5e24347b9b380c173a07bd0'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            element: 'x_snc_apr_tv3b_return_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '014af25707a342d6bd72211596616d33'
                        key: {
                            map: 'f13da0931aa04bd790ef6c42835d4ea8'
                            target_field: 'x_snc_apr_tv3b_expense_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '018bd83a9c8b4cf4af10a1b5a384c8b8'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            element: 'x_snc_apr_tv3b_purpose'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '02bf522294074a31a4120ae9eb2f1cbd'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '991020f5850d42d09577818a814997df'
                            variable: 'b6d2b40c73720300c79260bdfaf6a786'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0539f6804e3947a1861beba57d402503'
                        key: {
                            name: 'x_snc_apr_tv3b_policy'
                            element: 'x_snc_apr_tv3b_finance_threshold'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '0559309fdf0d487ea898cd5a8734e6e4'
                        key: {
                            list_id: {
                                id: 'db8e98dad6964419951c96b43413398a'
                                key: {
                                    name: 'x_snc_apr_tv3b_expense'
                                    view: {
                                        id: '301b7fc5a06a467da5976fc0bb71d9d6'
                                        key: {
                                            name: 'expense_list'
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
                        table: 'item_option_new'
                        id: '064d67c72129403fb5234571b3ee65ff'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'f2bdd0e85ca64ac294bfcfccf176b420'
                            name: 'purpose'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '067f5f1ef360470c85cae6068c7c7383'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            element: 'x_snc_apr_tv3b_actual_cost'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '069549e88315451b8c095ca0268fac07'
                        key: {
                            name: 'x_snc_apr_tv3b_delegation'
                            element: 'x_snc_apr_tv3b_end_date'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '092845d00de84867a24961d990647d53'
                        key: {
                            sys_security_acl: '10e5e046935c4cc8a33d7496ab9926d4'
                            sys_user_role: {
                                id: '0a4c910733364f69b451b5c336ef38cc'
                                key: {
                                    name: 'x_snc_apr_tv3b.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '099c46cf40e0410fb629018eb7ddbc90'
                        key: {
                            name: 'x_snc_apr_tv3b_delegation'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '0a6cc3cd1ff24b3f8403d3c9a4665a95'
                        key: {
                            sys_ui_action: 'df13d889a8db4269a30c99a5d44ee292'
                            sys_user_role: {
                                id: '34d18e28c1c94e6e86f708cc29a560fd'
                                key: {
                                    name: 'x_snc_apr_tv3b.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '0b8ecdbe4cba4da189a165a56ca8d5c2'
                        key: {
                            list_id: {
                                id: '8e672116ac9a43859a39eb8bf1401ae9'
                                key: {
                                    name: 'x_snc_apr_tv3b_request'
                                    view: {
                                        id: '51a87071fd544d51a5f8ff90f86b7e95'
                                        key: {
                                            name: 'my_requests'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'x_snc_apr_tv3b_approval_status'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '0bc283469d144431a0a87e992650da2e'
                        key: {
                            name: 'x_snc_apr_tv3b_expense'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '113ac8c793b9410d967b9a290d45b881'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'f383f8b904ae49858b63543048351c2e'
                            variable: 'b6d2b40c73720300c79260bdfaf6a786'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '1150c2b1bfe84acdb53f30ac9e103df4'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '3da89e8506a34a269277e1960d7fe763'
                            variable: 'b6d2b40c73720300c79260bdfaf6a786'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '124ba5075f3241558f1a6ff3cca19c3e'
                        key: {
                            name: 'x_snc_apr_tv3b_delegation'
                            element: 'x_snc_apr_tv3b_active'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '12fbbbc9ad3049b9b5b5b39b97702591'
                        key: {
                            name: 'x_snc_apr_tv3b_expense'
                            element: 'x_snc_apr_tv3b_reimbursement_status'
                            value: 'paid'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1316510428d448498ce850a8b328b673'
                        key: {
                            name: 'x_snc_apr_tv3b_delegation'
                            element: 'x_snc_apr_tv3b_end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '13217f4ae85a4af19f401e0341faec37'
                        key: {
                            name: 'x_snc_apr_tv3b_delegation'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '134d3a1693e443499d034985b2ced0c0'
                        key: {
                            name: 'x_snc_apr_tv3b_policy'
                            view: {
                                id: '02741cfdb7294720a673d5a454d2d372'
                                key: {
                                    name: 'policy_list'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '14aad7acbf4147ce9edf4f54ce9ec2cc'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            element: 'x_snc_apr_tv3b_traveler'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '16366e2d35334618b38e2934f010a486'
                        key: {
                            list_id: {
                                id: '5218725da09243aca842569f9089a154'
                                key: {
                                    name: 'x_snc_apr_tv3b_request'
                                    view: {
                                        id: '3e3ae2529ee34e1ba2c0ce73f4f6bf4e'
                                        key: {
                                            name: 'approval_queue'
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
                        id: '17cf86694bb84863b03a37a6ffd8a738'
                        key: {
                            name: 'x_snc_apr_tv3b_policy'
                            element: 'x_snc_apr_tv3b_active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '1991c9795e6e4ca28d8be7798bf15d25'
                        key: {
                            role: {
                                id: 'f2706ea1740b4b8ea82b321dbcc29f1c'
                                key: {
                                    name: 'x_snc_apr_tv3b.finance'
                                }
                            }
                            contains: {
                                id: '34d18e28c1c94e6e86f708cc29a560fd'
                                key: {
                                    name: 'x_snc_apr_tv3b.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '19d0622187ba4140ba594c80806acbf8'
                        key: {
                            name: 'x_snc_apr_tv3b_policy'
                            element: 'x_snc_apr_tv3b_max_flight_class'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '1a07db2ada7e4640b307e4f06a793386'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '3775026cf23d48c4ac7d31eb369c2631'
                            variable: '8570e0e33756030064a52f3c8e41f16c'
                        }
                    },
                    {
                        table: 'io_set_item'
                        id: '1bcdd4e7bf06409eb79ec67753ebd46a'
                        deleted: true
                        key: {
                            sc_cat_item: '769bd3e292b340f990721f06c2846e29'
                            variable_set: 'Symbol(CallExpressionShape)'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1d5b75096b7a4ce2a6f86a97beaf6980'
                        key: {
                            name: 'x_snc_apr_tv3b_expense'
                            element: 'x_snc_apr_tv3b_expense_type'
                            value: 'meals'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '1d94c36a9da4464494b502fd04b9c0eb'
                        key: {
                            role: {
                                id: 'e51ffad7fd0d496fa529d8a21422d24c'
                                key: {
                                    name: 'x_snc_apr_tv3b.admin'
                                }
                            }
                            contains: {
                                id: 'e94e66cdd77144338e414568c1fa5fab'
                                key: {
                                    name: 'x_snc_apr_tv3b.approver'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '1dea1781e9fb4758ade17b62a1195ae7'
                        key: {
                            list_id: {
                                id: '8e672116ac9a43859a39eb8bf1401ae9'
                                key: {
                                    name: 'x_snc_apr_tv3b_request'
                                    view: {
                                        id: '98b92ff167774e5b8eddc9e6b8fbe5fe'
                                        key: {
                                            name: 'my_requests'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'x_snc_apr_tv3b_estimated_cost'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '1e5220716bc44b659e167757881c583c'
                        key: {
                            list_id: {
                                id: '5218725da09243aca842569f9089a154'
                                key: {
                                    name: 'x_snc_apr_tv3b_request'
                                    view: {
                                        id: '142db393582645a4a3fe52b3adc53886'
                                        key: {
                                            name: 'approval_queue'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'x_snc_apr_tv3b_purpose'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1fd1bb2d61ca423eb4268fa23da71dd1'
                        key: {
                            name: 'x_snc_apr_tv3b_policy'
                            element: 'x_snc_apr_tv3b_max_daily_meals'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2088d106f50b44e9b3c16bce34b92653'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'ef921e1e595040658c874b0eae2cc58b'
                            variable: 'a266791b23101300ab65ff5e17bf654b'
                        }
                    },
                    {
                        table: 'catalog_ui_policy_action'
                        id: '2159f95a53404b4d82c59c49ea17e89e'
                        key: {
                            ui_policy: '36929f0fe7d84b459df57af498000094'
                            catalog_variable: 'IO:additional_notes'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '22642ad15cdf4a10bc45bcfaebb982e4'
                        key: {
                            question: {
                                id: '064d67c72129403fb5234571b3ee65ff'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: 'f2bdd0e85ca64ac294bfcfccf176b420'
                                    name: 'purpose'
                                }
                            }
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '2358429e6cf04f74a285c2a30761b965'
                        key: {
                            list_id: {
                                id: '134d3a1693e443499d034985b2ced0c0'
                                key: {
                                    name: 'x_snc_apr_tv3b_policy'
                                    view: {
                                        id: '4c9a9ed4163e4894a53bab53d17fcb45'
                                        key: {
                                            name: 'policy_list'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'x_snc_apr_tv3b_max_daily_hotel'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '239ab6678e6d4a66b5f7033cb42acf6f'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            element: 'x_snc_apr_tv3b_purpose'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '24c22b1401564ba989695c75a8925d27'
                        key: {
                            name: 'x_snc_apr_tv3b_expense'
                            element: 'x_snc_apr_tv3b_expense_type'
                            value: 'airfare'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '25be98d45c914494be62da22157bf60c'
                        key: {
                            sys_security_acl: 'fb052b26481041df87db91a0261a31f7'
                            sys_user_role: {
                                id: '6c44d5890d034543869a7cb6bcded55c'
                                key: {
                                    name: 'x_snc_apr_tv3b.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '27902f1a96fa444c8960e34ac3a7d951'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'fe3cb5c2d5074d20a41e454bb25770a7'
                            variable: '38a5351b23101300ab65ff5e17bf65fa'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '27fe6e27bb7b4ef49cbb9a6958799f72'
                        key: {
                            name: 'x_snc_apr_tv3b_policy'
                            element: 'x_snc_apr_tv3b_max_flight_class'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2ae5c904173b4cd9949838dc2405d8ad'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            element: 'x_snc_apr_tv3b_departure_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '2d5f517b58f04e6394a7abeeaf430755'
                        key: {
                            ui_policy: {
                                id: '47f6dc4d9a0c47458b36d491a30fea0e'
                                key: {
                                    table: 'x_snc_apr_tv3b_request'
                                    short_description: 'Hide Actual Cost Before Trip'
                                }
                            }
                            field: 'x_snc_apr_tv3b_actual_cost'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2ff994f2557d47af87d518d967cc66cb'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            element: 'x_snc_apr_tv3b_destination_city'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '30f120f295214e1bba19139d82c43362'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'be8e0c304238438a96b6c8c2f9fef7aa'
                            variable: '908942839f3203002899d4b4232e7016'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '316df2dbf7684aceb769e185b3038559'
                        key: {
                            list_id: {
                                id: '5218725da09243aca842569f9089a154'
                                key: {
                                    name: 'x_snc_apr_tv3b_request'
                                    view: {
                                        id: '6f8cea2c7a6d49689d7b632ed5291013'
                                        key: {
                                            name: 'approval_queue'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'x_snc_apr_tv3b_traveler'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '317a190223a24693ac13c096a1396d52'
                        key: {
                            name: 'x_snc_apr_tv3b_policy'
                            element: 'x_snc_apr_tv3b_applies_to_country'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3345de7b7a934f7483ac59c8b72489c4'
                        key: {
                            sys_security_acl: '168bc64770264f5b90b36996bf36d9c9'
                            sys_user_role: {
                                id: '96d6e5a107c542888bad915d3203be5b'
                                key: {
                                    name: 'x_snc_apr_tv3b.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '33c5691f04ce44ba98419e3eb2d193ad'
                        key: {
                            name: 'x_snc_apr_tv3b_expense'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '34046200b5014d42b470236c0b044d86'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            element: 'x_snc_apr_tv3b_approval_status'
                            value: 'rejected'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '34114724da6b4b3196dfdc8c1ec6eb1b'
                        key: {
                            ui_policy: {
                                id: '6129a888365b4693b197395e29056148'
                                key: {
                                    table: 'x_snc_apr_tv3b_request'
                                    short_description: 'Read Only After Approval'
                                }
                            }
                            field: 'x_snc_apr_tv3b_purpose'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '34a6e13e630848669f358ef078a0c10c'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'c4801556f6ef4d7e86bc708aa693c1e0'
                            variable: 'adf8f511e7020300b2888f49c2f6a9f3'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '34d18e28c1c94e6e86f708cc29a560fd'
                        key: {
                            name: 'x_snc_apr_tv3b.user'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '353590a7253a44998b8f775177db4b73'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            element: 'x_snc_apr_tv3b_travel_type'
                        }
                    },
                    {
                        table: 'catalog_ui_policy_action'
                        id: '35b64d157c0b44368f91c2befc1554cf'
                        key: {
                            ui_policy: 'bb1dd39d8f7e42df95a2b364857199fc'
                            catalog_variable: 'IO:requires_visa'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '35c5e59c33374382b41067ccd5c424ff'
                        key: {
                            list_id: {
                                id: '8e672116ac9a43859a39eb8bf1401ae9'
                                key: {
                                    name: 'x_snc_apr_tv3b_request'
                                    view: {
                                        id: '2bc987bc3af64fbe8ca66b8360627134'
                                        key: {
                                            name: 'my_requests'
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
                        table: 'sys_dictionary'
                        id: '35efa42a21e443b786b4e2f9af00493e'
                        key: {
                            name: 'x_snc_apr_tv3b_policy'
                            element: 'x_snc_apr_tv3b_policy_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3630bdbc54b04bc88600d08fc6e73b07'
                        key: {
                            name: 'x_snc_apr_tv3b_expense'
                            element: 'x_snc_apr_tv3b_reimbursement_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '37d079a56e184b858259fcb173454c8f'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'fe3cb5c2d5074d20a41e454bb25770a7'
                            variable: '5d5a2181e7020300b2888f49c2f6a9dc'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '38ae6403b032441ab2ad11e596465047'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3a4c9d05d9404a168d4291a288b40d86'
                        key: {
                            name: 'x_snc_apr_tv3b_expense'
                            element: 'x_snc_apr_tv3b_travel_request'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3ba066e115f44b1c9414a29168db2ae5'
                        key: {
                            sys_security_acl: 'd4b24fa3ad7c4c478dbba5c70656548e'
                            sys_user_role: {
                                id: '7b540ae126624bae94a19cccd393b5d2'
                                key: {
                                    name: 'x_snc_apr_tv3b.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3bc2f1a9d64841d2966d7d46f3682b5a'
                        deleted: true
                        key: {
                            sys_security_acl: '58b1ed6d108146cb98fac2858f61cff5'
                            sys_user_role: {
                                id: '34d18e28c1c94e6e86f708cc29a560fd'
                                key: {
                                    name: 'x_snc_apr_tv3b.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'io_set_item'
                        id: '3dba153c87594d5c88ec685bfb3259ac'
                        key: {
                            sc_cat_item: '769bd3e292b340f990721f06c2846e29'
                            variable_set: 'bfe68117cb664d9493baff547efef4d0'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '3e74c5682e9e4b41bec19f88884223ce'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'bfe68117cb664d9493baff547efef4d0'
                            name: 'traveler_name'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '3f6a278c94f54ec184310dccc44ecd72'
                        key: {
                            list_id: {
                                id: 'db8e98dad6964419951c96b43413398a'
                                key: {
                                    name: 'x_snc_apr_tv3b_expense'
                                    view: {
                                        id: '2043d20d90aa4f00b9075635058ce4fd'
                                        key: {
                                            name: 'expense_list'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'x_snc_apr_tv3b_expense_type'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3fbc22d07cbe48d799186b3ff36b2d84'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '3775026cf23d48c4ac7d31eb369c2631'
                            variable: '90749dd73702030064a52f3c8e41f12d'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '45f3204989de40d585afd552ba104856'
                        key: {
                            list_id: {
                                id: '5218725da09243aca842569f9089a154'
                                key: {
                                    name: 'x_snc_apr_tv3b_request'
                                    view: {
                                        id: '7930f70c96b34af4b7c1e825985100ae'
                                        key: {
                                            name: 'approval_queue'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'x_snc_apr_tv3b_estimated_cost'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '47ef66449b434d2d8a8bc983d2451656'
                        key: {
                            list_id: {
                                id: '8e672116ac9a43859a39eb8bf1401ae9'
                                key: {
                                    name: 'x_snc_apr_tv3b_request'
                                    view: {
                                        id: 'dff6d5dcaaac46d9b02d7a84cbd399ab'
                                        key: {
                                            name: 'my_requests'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'x_snc_apr_tv3b_return_date'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: '47f6dc4d9a0c47458b36d491a30fea0e'
                        key: {
                            table: 'x_snc_apr_tv3b_request'
                            short_description: 'Hide Actual Cost Before Trip'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '49a8ee822c7140ccacc6675c7cbd06af'
                        deleted: true
                        key: {
                            sys_security_acl: 'f39a719a5d4b44b4b06b6b2e77b4d6d0'
                            sys_user_role: {
                                id: '34d18e28c1c94e6e86f708cc29a560fd'
                                key: {
                                    name: 'x_snc_apr_tv3b.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4b52e7dc7cc940cc89b494b53254158f'
                        key: {
                            name: 'x_snc_apr_tv3b_policy'
                            element: 'x_snc_apr_tv3b_max_flight_class'
                            value: 'premium_economy'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4cc9c7661fdf451dba8fa20aa7e18402'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'ef921e1e595040658c874b0eae2cc58b'
                            variable: 'a38ae181e7020300b2888f49c2f6a92e'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '4d274a5119474741b0cbec83f4380310'
                        key: {
                            list_id: {
                                id: '5218725da09243aca842569f9089a154'
                                key: {
                                    name: 'x_snc_apr_tv3b_request'
                                    view: {
                                        id: 'b779c3d684af44419eaacf5f36fee4ff'
                                        key: {
                                            name: 'approval_queue'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'x_snc_apr_tv3b_destination_city'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4e79e8a2c44340cb9f26ed43c6957e0d'
                        key: {
                            name: 'x_snc_apr_tv3b_expense'
                            element: 'x_snc_apr_tv3b_reimbursement_status'
                            value: 'approved'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '4fdd70b469d24a049ab2d8b2f46d1e36'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'f2bdd0e85ca64ac294bfcfccf176b420'
                            name: 'departure_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5002461f3c3a4353ab6efe375b93b672'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            element: 'x_snc_apr_tv3b_purpose'
                            value: 'client_meeting'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5155360f1b5749ea9d606c69477f1fa3'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'ef921e1e595040658c874b0eae2cc58b'
                            variable: 'ee6aa11723101300ab65ff5e17bf65db'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '51b03b455b1f4036a06990564e4c33c8'
                        key: {
                            list_id: {
                                id: 'db8e98dad6964419951c96b43413398a'
                                key: {
                                    name: 'x_snc_apr_tv3b_expense'
                                    view: {
                                        id: '7e3cd975d3af4cd8a0076bcf2cccb036'
                                        key: {
                                            name: 'expense_list'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'x_snc_apr_tv3b_amount'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '51b8a2b018bd4c96affb5cf88be08959'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'd24f6d757a0940d09dda22548bf937dc'
                            variable: 'ee6aa11723101300ab65ff5e17bf65db'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '51e01bb226064a4a858aeed8ff0027f1'
                        key: {
                            name: 'x_snc_apr_tv3b_expense'
                            element: 'x_snc_apr_tv3b_amount'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '5218725da09243aca842569f9089a154'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            view: {
                                id: '7317336e600f4ac6a20ab5341d188439'
                                key: {
                                    name: 'approval_queue'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '531e676e4acc424b8ea2ead365f14fcd'
                        key: {
                            map: 'e7c7267095a54b9887cd4f4aa2f0a405'
                            target_field: 'short_description'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '53242fd9d58547258b8fc757d38f0b57'
                        key: {
                            name: 'x_snc_apr_tv3b_expense'
                            element: 'x_snc_apr_tv3b_expense_type'
                            value: 'visa'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '545cae082dc3429bbae8bc9145059a04'
                        key: {
                            ui_policy: {
                                id: '6129a888365b4693b197395e29056148'
                                key: {
                                    table: 'x_snc_apr_tv3b_request'
                                    short_description: 'Read Only After Approval'
                                }
                            }
                            field: 'x_snc_apr_tv3b_estimated_cost'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '5496d3adfdc74b35a579784d6ba8d883'
                        key: {
                            list_id: {
                                id: 'db8e98dad6964419951c96b43413398a'
                                key: {
                                    name: 'x_snc_apr_tv3b_expense'
                                    view: {
                                        id: '2f9b40930a764a0c9c7119fa7e7062b5'
                                        key: {
                                            name: 'expense_list'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'x_snc_apr_tv3b_vendor'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '54eb52dee9d24ee0b955f807db6c12d5'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '3775026cf23d48c4ac7d31eb369c2631'
                            variable: 'b4e438ae73322010ac1560bdfaf6a7a2'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '55dc47b54c134bb89b739b2e16f7f389'
                        key: {
                            sys_security_acl: '7a3ce518c4fb43c886710575509f7725'
                            sys_user_role: {
                                id: '87d93600304a4adea7485edac05eab52'
                                key: {
                                    name: 'x_snc_apr_tv3b.approver'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '568bd715447e44e591386a4422abc20a'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'c66bbe46cbbd4276aea15524c121ca7b'
                            variable: 'b6d2b40c73720300c79260bdfaf6a786'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '5833e180b4b449e399025ea9004a52e3'
                        key: {
                            list_id: {
                                id: '134d3a1693e443499d034985b2ced0c0'
                                key: {
                                    name: 'x_snc_apr_tv3b_policy'
                                    view: {
                                        id: '47095af4026a4a859fa8edda076e7d6b'
                                        key: {
                                            name: 'policy_list'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'x_snc_apr_tv3b_finance_threshold'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '58de4a7f8ede4e0b8f11350f9c5b1cb1'
                        key: {
                            question: {
                                id: '064d67c72129403fb5234571b3ee65ff'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: 'f2bdd0e85ca64ac294bfcfccf176b420'
                                    name: 'purpose'
                                }
                            }
                            value: 'internal'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '5b021828c6f0448693bba23c357a8f3d'
                        key: {
                            sys_ui_action: '573bcee2813c4cc6b349ca8f0fd34647'
                            sys_user_role: {
                                id: '34d18e28c1c94e6e86f708cc29a560fd'
                                key: {
                                    name: 'x_snc_apr_tv3b.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5b50a12fcde2471e8eab857167bab10c'
                        key: {
                            name: 'x_snc_apr_tv3b_expense'
                            element: 'x_snc_apr_tv3b_expense_type'
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5c0cf93dd2134276a206994837ad2103'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            element: 'x_snc_apr_tv3b_purpose'
                            value: 'internal'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5c7fd87ebb8b4245830eca7327870fef'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            element: 'x_snc_apr_tv3b_destination_country'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5e43f12662ee45b2869d798c01b11b6e'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            element: 'x_snc_apr_tv3b_approval_status'
                            value: 'pending'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '60e0bce85c5843e785dfb92b2c78778c'
                        key: {
                            sys_security_acl: '1159d5c54eb84e30b6d0704dbf291270'
                            sys_user_role: {
                                id: '81b278d077a647e0acbcdc7fb6ddba12'
                                key: {
                                    name: 'x_snc_apr_tv3b.approver'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: '6129a888365b4693b197395e29056148'
                        key: {
                            table: 'x_snc_apr_tv3b_request'
                            short_description: 'Read Only After Approval'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '61843d1a53c64c88a91b09b1761c9696'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'd24f6d757a0940d09dda22548bf937dc'
                            variable: '5d5a2181e7020300b2888f49c2f6a9dc'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '629b338954364e3ea5ee79764cf59034'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'be8e0c304238438a96b6c8c2f9fef7aa'
                            variable: 'de1c3dbc8703030070870cf888cb0b68'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '645f3593962742d996b462c71769548d'
                        key: {
                            map: 'e7c7267095a54b9887cd4f4aa2f0a405'
                            target_field: 'x_snc_apr_tv3b_estimated_cost'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '691958c0b2714bcd9df652236935903b'
                        key: {
                            name: 'x_snc_apr_tv3b_delegation'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6adccbef3be74d52bdf919883e18516d'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'fe3cb5c2d5074d20a41e454bb25770a7'
                            variable: 'a38ae181e7020300b2888f49c2f6a92e'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6d26a7e5a06742dcb6698192f0a0510f'
                        key: {
                            name: 'x_snc_apr_tv3b_expense'
                            element: 'x_snc_apr_tv3b_expense_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6dd71f15585343789d556804c13d1c29'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'd24f6d757a0940d09dda22548bf937dc'
                            variable: '757a6181e7020300b2888f49c2f6a9f7'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6f87397119f84e0caeffc06ac1fe9659'
                        key: {
                            name: 'x_snc_apr_tv3b_policy'
                            element: 'x_snc_apr_tv3b_finance_threshold'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '70da1daf415f4aefa21c5a8477f5013b'
                        key: {
                            name: 'x_snc_apr_tv3b_policy'
                            element: 'x_snc_apr_tv3b_applies_to_country'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '726ed553eb7a44919ab3fc019d00b1c9'
                        key: {
                            question: {
                                id: '064d67c72129403fb5234571b3ee65ff'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: 'f2bdd0e85ca64ac294bfcfccf176b420'
                                    name: 'purpose'
                                }
                            }
                            value: 'training'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '72c98668b7bc419aba3ca5c3e5845361'
                        key: {
                            name: 'x_snc_apr_tv3b_delegation'
                            element: 'x_snc_apr_tv3b_active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7417466f48a54424b318ed169464b9f3'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'ef921e1e595040658c874b0eae2cc58b'
                            variable: '38a5351b23101300ab65ff5e17bf65fa'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '746c0a64dc9c45dd887f89ca6b506bce'
                        key: {
                            list_id: {
                                id: '8e672116ac9a43859a39eb8bf1401ae9'
                                key: {
                                    name: 'x_snc_apr_tv3b_request'
                                    view: {
                                        id: '942ac8db66cd43fb9d08a5e19bd2fd28'
                                        key: {
                                            name: 'my_requests'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'x_snc_apr_tv3b_destination_city'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '74e93a808eeb48c89b6638aad9a31ae8'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            element: 'x_snc_apr_tv3b_destination_city'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '75a8937f4e024bc79621dd8fea6548ea'
                        key: {
                            sys_ui_action: '98a04f5baf30497d8db138a9c80bb42d'
                            sys_user_role: {
                                id: 'e94e66cdd77144338e414568c1fa5fab'
                                key: {
                                    name: 'x_snc_apr_tv3b.approver'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7848a4223970432a9e6adbb1b215fd14'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            element: 'x_snc_apr_tv3b_requires_visa'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '788ffa1b17e643e88cb2246ef661a50b'
                        key: {
                            name: 'x_snc_apr_tv3b_expense'
                            element: 'x_snc_apr_tv3b_reimbursement_status'
                            value: 'submitted'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '78afc65a6e034cf795534fe1bbce6aa1'
                        key: {
                            sys_ui_action: '12495183ce76464797627e37514ea667'
                            sys_user_role: {
                                id: '34d18e28c1c94e6e86f708cc29a560fd'
                                key: {
                                    name: 'x_snc_apr_tv3b.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '79433174cb944ad7903aac2458af645d'
                        key: {
                            name: 'x_snc_apr_tv3b_delegation'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '798817c0326b4c33969b4b299ed5551a'
                        key: {
                            name: 'x_snc_apr_tv3b_expense'
                            element: 'x_snc_apr_tv3b_expense_type'
                            value: 'transport'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '79f33da097634ca3868192dc78834883'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'fe3cb5c2d5074d20a41e454bb25770a7'
                            variable: 'ee6aa11723101300ab65ff5e17bf65db'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '7fbcce38afae4d51ace7e9d626a202e0'
                        key: {
                            ui_policy: {
                                id: '6129a888365b4693b197395e29056148'
                                key: {
                                    table: 'x_snc_apr_tv3b_request'
                                    short_description: 'Read Only After Approval'
                                }
                            }
                            field: 'x_snc_apr_tv3b_return_date'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '81d7aeacb9274f2294a0cef1c529a1c6'
                        key: {
                            map: 'e7c7267095a54b9887cd4f4aa2f0a405'
                            target_field: 'x_snc_apr_tv3b_return_date'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8365bbf52cb54ba09b8669eee093c7ef'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'ef921e1e595040658c874b0eae2cc58b'
                            variable: '5d5a2181e7020300b2888f49c2f6a9dc'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '83eb692cde6f4407a3fad8c2c48cd58a'
                        key: {
                            map: 'f13da0931aa04bd790ef6c42835d4ea8'
                            target_field: 'x_snc_apr_tv3b_vendor'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '842e74ead40243619b17e83f03caad49'
                        key: {
                            map: 'e7c7267095a54b9887cd4f4aa2f0a405'
                            target_field: 'x_snc_apr_tv3b_destination_city'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '85706f3b100e4fc58b61b2fc7db3f0d4'
                        key: {
                            category: 'x_snc_apr_tv3b_expense'
                            prefix: 'TEXP'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '85c076f87427454abae5d5c8543890d9'
                        key: {
                            name: 'x_snc_apr_tv3b_expense'
                            element: 'x_snc_apr_tv3b_expense_date'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '85ed82ffc0be4718b4bdc99c7f41b7ca'
                        key: {
                            name: 'x_snc_apr_tv3b_expense'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '85eebe591d98423283c40944709d886c'
                        key: {
                            category: 'x_snc_apr_tv3b_request'
                            prefix: 'TRVL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '88116be5c7d9468bbeac95261151407b'
                        key: {
                            name: 'x_snc_apr_tv3b_delegation'
                            element: 'x_snc_apr_tv3b_delegate'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8813d240bd3b473cbe70319f2ff2168f'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            element: 'x_snc_apr_tv3b_requires_visa'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8815b11e382f4412a21ac6d42d0183a3'
                        key: {
                            sys_security_acl: 'd0a64b30e91c45b8b85309bf5bacfe42'
                            sys_user_role: {
                                id: 'bde7f5b924144888988327dc897cbadb'
                                key: {
                                    name: 'x_snc_apr_tv3b.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '8948fa2670194a97b2198544e91f6ba0'
                        key: {
                            map: 'e7c7267095a54b9887cd4f4aa2f0a405'
                            target_field: 'x_snc_apr_tv3b_purpose'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8b347d3bbbb043999879f266ee45b0f1'
                        key: {
                            name: 'x_snc_apr_tv3b_expense'
                            element: 'x_snc_apr_tv3b_expense_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '8d684ff5c84743799ae6499970dd428f'
                        key: {
                            name: 'x_snc_apr_tv3b_expense'
                            element: 'x_snc_apr_tv3b_reimbursement_status'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '8d878a8f969a47c180d6e34dc9b9aba5'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'f2bdd0e85ca64ac294bfcfccf176b420'
                            name: 'destination_country'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '8e672116ac9a43859a39eb8bf1401ae9'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            view: {
                                id: '41f43df9e42c44028d4a5fce214209de'
                                key: {
                                    name: 'my_requests'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '8ec87703fb204a9fa4614d0dd9e7fcd2'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            element: 'x_snc_apr_tv3b_approval_status'
                        }
                    },
                    {
                        table: 'io_set_item'
                        id: '91860629c5d4410c8418b78bcd683b54'
                        key: {
                            sc_cat_item: '769bd3e292b340f990721f06c2846e29'
                            variable_set: 'f2bdd0e85ca64ac294bfcfccf176b420'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '92e5587d421e4964a6e036b93b3ac884'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            element: 'x_snc_apr_tv3b_traveler'
                            language: 'en'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '93976ad76cbc4331a6d25a8a8cb4378a'
                        key: {
                            question: {
                                id: '064d67c72129403fb5234571b3ee65ff'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: 'f2bdd0e85ca64ac294bfcfccf176b420'
                                    name: 'purpose'
                                }
                            }
                            value: 'client_meeting'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '947066f531ec4b56b951f33a75cdc435'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            element: 'x_snc_apr_tv3b_approval_status'
                            value: 'finance_review'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '949330fb60af4d44b20a550685da3972'
                        key: {
                            question: {
                                id: '064d67c72129403fb5234571b3ee65ff'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: 'f2bdd0e85ca64ac294bfcfccf176b420'
                                    name: 'purpose'
                                }
                            }
                            value: 'conference'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '97631b339ad545f8a3ee89787733250f'
                        key: {
                            list_id: {
                                id: '8e672116ac9a43859a39eb8bf1401ae9'
                                key: {
                                    name: 'x_snc_apr_tv3b_request'
                                    view: {
                                        id: '06e6d004647242fda5098c709a015f4e'
                                        key: {
                                            name: 'my_requests'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'x_snc_apr_tv3b_departure_date'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '9bdd99aed49b44b1b29f043355083638'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9cb68e260103449496a8ba179a808926'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'be8e0c304238438a96b6c8c2f9fef7aa'
                            variable: '5258f0369f3203002899d4b4232e704a'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a1cefc2cc6164faeadcf51764b488a0c'
                        key: {
                            name: 'x_snc_apr_tv3b_policy'
                            element: 'x_snc_apr_tv3b_max_daily_meals'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a3ec3cc3666b4a5c8d3ef572497eea5b'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'fe3cb5c2d5074d20a41e454bb25770a7'
                            variable: '757a6181e7020300b2888f49c2f6a9f7'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a4d856305f0c48f0b178be204eee519d'
                        key: {
                            name: 'x_snc_apr_tv3b_policy'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: 'a4fc64e45dbd488985070e75dbc8368c'
                        key: {
                            endpoint: 'x_snc_apr_tv3b_expense_entry.do'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'a65c1e2d37244d79aa6b65f059d67de9'
                        key: {
                            name: 'x_snc_apr_tv3b_policy'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a6bea699b0d6404bba12e6bf47936cf5'
                        key: {
                            name: 'x_snc_apr_tv3b_policy'
                            element: 'x_snc_apr_tv3b_max_daily_hotel'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a80560d5d784407b9f949798118a55df'
                        key: {
                            name: 'x_snc_apr_tv3b_expense'
                            element: 'x_snc_apr_tv3b_reimbursement_status'
                            value: 'rejected'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a9e0e1976b6f46788dce5d5b6779c976'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'd24f6d757a0940d09dda22548bf937dc'
                            variable: '38a5351b23101300ab65ff5e17bf65fa'
                        }
                    },
                    {
                        table: 'sys_ui_view'
                        id: 'aa3e489099804ccc8469add98b8cd8be'
                        key: {
                            name: 'x_snc_apr_tv3b_default'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'aa5a394115774ccfb764d0eee8c669db'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'be8e0c304238438a96b6c8c2f9fef7aa'
                            variable: '37a7bcf29f3203002899d4b4232e7090'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ab29d4cb79414f63bad186c25ad19e14'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            element: 'x_snc_apr_tv3b_purpose'
                            value: 'conference'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'ab42553688cc442dadebcdb05362c8db'
                        key: {
                            list_id: {
                                id: 'db8e98dad6964419951c96b43413398a'
                                key: {
                                    name: 'x_snc_apr_tv3b_expense'
                                    view: {
                                        id: '087cd6a7fd1e42568f4b37b46443f1d9'
                                        key: {
                                            name: 'expense_list'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'x_snc_apr_tv3b_expense_date'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'aba2fb567c234aa5884686f51d5fc973'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'd24f6d757a0940d09dda22548bf937dc'
                            variable: 'a266791b23101300ab65ff5e17bf654b'
                        }
                    },
                    {
                        table: 'sys_ui_view'
                        id: 'ac4c2b1460a44960900666a470b79e64'
                        key: {
                            name: 'x_snc_apr_tv3b_finance'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'acc7a14a6daa473ebf038c59a3ee11ca'
                        key: {
                            name: 'x_snc_apr_tv3b_policy'
                            element: 'x_snc_apr_tv3b_active'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'b1337de79c4c4dda99346a65aba185e5'
                        key: {
                            ui_policy: {
                                id: '6129a888365b4693b197395e29056148'
                                key: {
                                    table: 'x_snc_apr_tv3b_request'
                                    short_description: 'Read Only After Approval'
                                }
                            }
                            field: 'x_snc_apr_tv3b_departure_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b1aa613ba00f4570961905d3159830b2'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            element: 'x_snc_apr_tv3b_estimated_cost'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'b2b8a1bab1644236b2a9a48e85728336'
                        key: {
                            role: {
                                id: 'e94e66cdd77144338e414568c1fa5fab'
                                key: {
                                    name: 'x_snc_apr_tv3b.approver'
                                }
                            }
                            contains: {
                                id: '34d18e28c1c94e6e86f708cc29a560fd'
                                key: {
                                    name: 'x_snc_apr_tv3b.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b550feb651a94d05af727d333503c8c7'
                        key: {
                            sys_security_acl: 'ebe035ec7f1243a599ca9a0eccfe89b6'
                            sys_user_role: {
                                id: 'e76bd6cd815b4fd2ab4b4a6cf7720a8e'
                                key: {
                                    name: 'x_snc_apr_tv3b.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b6adebc3a4254f2fb9d7e55f98ceec2c'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            element: 'x_snc_apr_tv3b_purpose'
                            value: 'training'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b824a9920ea847e189bea6c0cb8f97bb'
                        key: {
                            sys_security_acl: '0df47e338d14413ba07fa1aec14ba621'
                            sys_user_role: {
                                id: '60c9ff5ae3934097a3fbab1b6de08a9f'
                                key: {
                                    name: 'x_snc_apr_tv3b.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_view'
                        id: 'b86dccf5f51a4286a04681fda8fa35b6'
                        key: {
                            name: 'x_snc_apr_tv3b_approver'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b98c3a24f6c54c4caef50d548d4f76e9'
                        key: {
                            name: 'x_snc_apr_tv3b_delegation'
                            element: 'x_snc_apr_tv3b_delegator'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'bbb825172f37411695e2e9c49bda2829'
                        key: {
                            map: 'f13da0931aa04bd790ef6c42835d4ea8'
                            target_field: 'x_snc_apr_tv3b_amount'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bbc95617f98b448ba2c8fbc1ceb35212'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            element: 'x_snc_apr_tv3b_departure_date'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'bd70fd9056f543aba3c6fdc143329f18'
                        key: {
                            list_id: {
                                id: '5218725da09243aca842569f9089a154'
                                key: {
                                    name: 'x_snc_apr_tv3b_request'
                                    view: {
                                        id: '2fa489c9df174d79a1d7ba3c36c1c04a'
                                        key: {
                                            name: 'approval_queue'
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
                        table: 'sys_variable_value'
                        id: 'c253c9bcbb344b0a90f36f7c46c98497'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '3775026cf23d48c4ac7d31eb369c2631'
                            variable: '932d14a33756030064a52f3c8e41f120'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c2633f805b3545ba888f8e923379c950'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'c4801556f6ef4d7e86bc708aa693c1e0'
                            variable: '5c297551e7020300b2888f49c2f6a933'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c2e439070848476fb2acf5f67cae1778'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            element: 'x_snc_apr_tv3b_approval_status'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'c3462bcafd1c4f22abb9775850bfe8d9'
                        key: {
                            list_id: {
                                id: '134d3a1693e443499d034985b2ced0c0'
                                key: {
                                    name: 'x_snc_apr_tv3b_policy'
                                    view: {
                                        id: 'fc6eed8c34cd4eb2b1ac60fffa9cca6e'
                                        key: {
                                            name: 'policy_list'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'x_snc_apr_tv3b_policy_name'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: 'c570a4eef2864e20a52fa461b49bf032'
                        key: {
                            endpoint: 'x_snc_apr_tv3b_request_summary.do'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'c64314a99960451192f1c60e623f4204'
                        key: {
                            list_id: {
                                id: '134d3a1693e443499d034985b2ced0c0'
                                key: {
                                    name: 'x_snc_apr_tv3b_policy'
                                    view: {
                                        id: '8d88e234ee05495abc493d733c2a416c'
                                        key: {
                                            name: 'policy_list'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'x_snc_apr_tv3b_applies_to_country'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c7daa9d649a04558b77c7c38471c0a60'
                        key: {
                            sys_security_acl: '3f5336460714430990518530e9710126'
                            sys_user_role: {
                                id: 'a3491fea0b7b4cc98e5a40b42d2692d5'
                                key: {
                                    name: 'x_snc_apr_tv3b.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'c86e87a06e1c4004ae458a86465e442c'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'f2bdd0e85ca64ac294bfcfccf176b420'
                            name: 'additional_notes'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'c92d4c4238f24c84bc58fef9aec1f4ce'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c9af167d45354fd489a3fd45ede57771'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            element: 'x_snc_apr_tv3b_approval_status'
                            value: 'approved'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cb0d8898bd0c44b294f99f51f7594af4'
                        key: {
                            name: 'x_snc_apr_tv3b_expense'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cbad97ea2d9b4fa0bdfe51ed7e434852'
                        key: {
                            name: 'x_snc_apr_tv3b_delegation'
                            element: 'x_snc_apr_tv3b_delegate'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cc7a464de08149969dafa5dfcbd0e538'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            element: 'x_snc_apr_tv3b_travel_type'
                            value: 'domestic'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'd04cb7ad7f424597bdb40f0415517c02'
                        key: {
                            map: 'f13da0931aa04bd790ef6c42835d4ea8'
                            target_field: 'x_snc_apr_tv3b_expense_date'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd0d7713330b24a8fb71adbe45c95aa82'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '435519765e734984aac57fcfbf151527'
                            variable: 'b6d2b40c73720300c79260bdfaf6a786'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd1eb4a7cf97f4305b769cbf4ef34ef00'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '3775026cf23d48c4ac7d31eb369c2631'
                            variable: '4a3319d73702030064a52f3c8e41f1a9'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd1ed56a2bd6448f7bd44f0b929c09095'
                        key: {
                            name: 'x_snc_apr_tv3b_expense'
                            element: 'x_snc_apr_tv3b_vendor'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'd20f629341c846db91922d7937081736'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            element: 'x_snc_apr_tv3b_travel_type'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'd231e9c7efce474784fc46f1950dbafb'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'f2bdd0e85ca64ac294bfcfccf176b420'
                            name: 'requires_visa'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd25e6e1fac2045b29d133ea62f6c7c9b'
                        key: {
                            name: 'x_snc_apr_tv3b_policy'
                            element: 'x_snc_apr_tv3b_max_flight_class'
                            value: 'business'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd3fd86461de546d4a41367680ad0ae57'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            element: 'x_snc_apr_tv3b_department'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd47378a172a14436b5cbe8fbdb606acb'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            element: 'x_snc_apr_tv3b_return_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd568e407245f491cb9a33091b798ad1c'
                        key: {
                            name: 'x_snc_apr_tv3b_policy'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd695b3f3d6204295952bd572b4a9d1f8'
                        key: {
                            name: 'x_snc_apr_tv3b_expense'
                            element: 'x_snc_apr_tv3b_reimbursement_status'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'd737622b15834ac39f9643e5ecf4e609'
                        key: {
                            ui_policy: {
                                id: 'fa20418aa4e941e48a868843c839bb79'
                                key: {
                                    table: 'x_snc_apr_tv3b_request'
                                    short_description: 'Mandatory Purpose for International'
                                }
                            }
                            field: 'x_snc_apr_tv3b_purpose'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd7c4514769c646fbb2948664298e17de'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            element: 'x_snc_apr_tv3b_destination_country'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'd880dd64461a415fbdaad8193e726f2e'
                        key: {
                            name: 'x_snc_apr_tv3b_expense'
                            element: 'x_snc_apr_tv3b_expense_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd9cde0ef2e494a979fbe42025a52955a'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'da1179fdb971443b90117eaa3047554b'
                        key: {
                            name: 'x_snc_apr_tv3b_policy'
                            element: 'x_snc_apr_tv3b_max_flight_class'
                            value: 'economy'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'da5a21bb8e18408580bbe2cd94e964db'
                        key: {
                            map: 'e7c7267095a54b9887cd4f4aa2f0a405'
                            target_field: 'x_snc_apr_tv3b_departure_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'db0da264b93b493587c244e53cd5e41a'
                        key: {
                            name: 'x_snc_apr_tv3b_expense'
                            element: 'x_snc_apr_tv3b_expense_type'
                            value: 'hotel'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'db66f55a878044a4a70fc21769386414'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            element: 'x_snc_apr_tv3b_purpose'
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'db8e98dad6964419951c96b43413398a'
                        key: {
                            name: 'x_snc_apr_tv3b_expense'
                            view: {
                                id: '3da94ff04a9c4483acf7ebbaf07e4045'
                                key: {
                                    name: 'expense_list'
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
                        id: 'dc39eb1a09744c13b73dea87acc64f45'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            element: 'x_snc_apr_tv3b_travel_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dd16336c90f24e7c964c90b72ee86e04'
                        key: {
                            name: 'x_snc_apr_tv3b_policy'
                            element: 'x_snc_apr_tv3b_max_daily_hotel'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e11abb227c8947e6845b94b6b694450c'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            element: 'x_snc_apr_tv3b_actual_cost'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'e3c151664be5438e982f3c734804ba71'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'f2bdd0e85ca64ac294bfcfccf176b420'
                            name: 'estimated_cost'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'e51ffad7fd0d496fa529d8a21422d24c'
                        key: {
                            name: 'x_snc_apr_tv3b.admin'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'e596196424934807bde1cca5638ae35e'
                        key: {
                            ui_policy: {
                                id: '6129a888365b4693b197395e29056148'
                                key: {
                                    table: 'x_snc_apr_tv3b_request'
                                    short_description: 'Read Only After Approval'
                                }
                            }
                            field: 'x_snc_apr_tv3b_destination_city'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e64303ef3ec846188596fbf48145be4b'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            element: 'x_snc_apr_tv3b_travel_type'
                            value: 'international'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'e846c2e196904bd182206daeb1305056'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'f2bdd0e85ca64ac294bfcfccf176b420'
                            name: 'destination_city'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'e9099658cace4659b7c79defc00a7a6d'
                        key: {
                            ui_policy: {
                                id: '6129a888365b4693b197395e29056148'
                                key: {
                                    table: 'x_snc_apr_tv3b_request'
                                    short_description: 'Read Only After Approval'
                                }
                            }
                            field: 'x_snc_apr_tv3b_destination_country'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'e94e66cdd77144338e414568c1fa5fab'
                        key: {
                            name: 'x_snc_apr_tv3b.approver'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e9ccf518b3de410692ddcb56cc6b125a'
                        key: {
                            name: 'x_snc_apr_tv3b_expense'
                            element: 'x_snc_apr_tv3b_amount'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'edeeb19ce755403bba7d13236d449a2e'
                        key: {
                            name: 'x_snc_apr_tv3b_policy'
                            element: 'x_snc_apr_tv3b_max_flight_class'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'ef5eeaf3c9c84993896a497abcc74807'
                        key: {
                            role: {
                                id: 'e51ffad7fd0d496fa529d8a21422d24c'
                                key: {
                                    name: 'x_snc_apr_tv3b.admin'
                                }
                            }
                            contains: {
                                id: 'f2706ea1740b4b8ea82b321dbcc29f1c'
                                key: {
                                    name: 'x_snc_apr_tv3b.finance'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'efbfd88289f04b1db38027a5a87c263d'
                        key: {
                            name: 'x_snc_apr_tv3b_policy'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f10fdb7984d34afd8dccbf9a332daccb'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'fe3cb5c2d5074d20a41e454bb25770a7'
                            variable: 'a266791b23101300ab65ff5e17bf654b'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f1cac509fd5848b5aeb8c5e3e1caf41f'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            element: 'x_snc_apr_tv3b_approval_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f2316bdd3a9c4913892f891c1d1beffb'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'd24f6d757a0940d09dda22548bf937dc'
                            variable: 'a38ae181e7020300b2888f49c2f6a92e'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'f2706ea1740b4b8ea82b321dbcc29f1c'
                        key: {
                            name: 'x_snc_apr_tv3b.finance'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f31c08f8fde2404fb429995a9155c3a4'
                        key: {
                            name: 'x_snc_apr_tv3b_delegation'
                            element: 'x_snc_apr_tv3b_start_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f355333615fb4c8682f67b800a721721'
                        key: {
                            document: 'sys_atf_step'
                            document_key: 'ef921e1e595040658c874b0eae2cc58b'
                            variable: '757a6181e7020300b2888f49c2f6a9f7'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'f43c807a732e46d3bf08d080ea37c6eb'
                        key: {
                            map: 'e7c7267095a54b9887cd4f4aa2f0a405'
                            target_field: 'x_snc_apr_tv3b_destination_country'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f463a710609145a7ac59fd6452ffec42'
                        key: {
                            name: 'x_snc_apr_tv3b_expense'
                            element: 'x_snc_apr_tv3b_travel_request'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f5631d2ab5304091b52295a858835800'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            element: 'x_snc_apr_tv3b_department'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'f5dd37d051804ddaa21d96abcfdba016'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'f2bdd0e85ca64ac294bfcfccf176b420'
                            name: 'return_date'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'f6e9ef8917ce45579393ca92852fc358'
                        key: {
                            list_id: {
                                id: '134d3a1693e443499d034985b2ced0c0'
                                key: {
                                    name: 'x_snc_apr_tv3b_policy'
                                    view: {
                                        id: '145dbaac1d784002af31170edf634b83'
                                        key: {
                                            name: 'policy_list'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'x_snc_apr_tv3b_active'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'f6f3ae2d01774bdc8bdd880923d011f1'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'bfe68117cb664d9493baff547efef4d0'
                            name: 'traveler_manager'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f72778fcf1404abd93f97324d4c8ff07'
                        key: {
                            sys_security_acl: 'cd38af2f72ac4d2a8a11415f4a6a4150'
                            sys_user_role: {
                                id: '63f13b9dcabf4a92be6f43466e099eaf'
                                key: {
                                    name: 'x_snc_apr_tv3b.approver'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'f7337ebb61f746659ee24ac844c5c50e'
                        key: {
                            sys_ui_action: '3bb3c1044c7c44e883ca6672a98b8933'
                            sys_user_role: {
                                id: 'e94e66cdd77144338e414568c1fa5fab'
                                key: {
                                    name: 'x_snc_apr_tv3b.approver'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f7556e910c814d67827549eb38b401f6'
                        key: {
                            name: 'x_snc_apr_tv3b_delegation'
                            element: 'x_snc_apr_tv3b_delegator'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f7be47d2f1904e33803acd585289f489'
                        key: {
                            name: 'x_snc_apr_tv3b_expense'
                            element: 'x_snc_apr_tv3b_expense_type'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f903bacd3e8e418d9e33332ad25ceeb3'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '30e28d2d9721405f9c86763f72427628'
                            variable: 'b6d2b40c73720300c79260bdfaf6a786'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'f90a2c53d95447f8a4fbfc417bca39f9'
                        key: {
                            map: 'f13da0931aa04bd790ef6c42835d4ea8'
                            target_field: 'short_description'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'f9b6423ef24a4a48a7e9862ef221978c'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'bfe68117cb664d9493baff547efef4d0'
                            name: 'traveler_department'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: 'fa20418aa4e941e48a868843c839bb79'
                        key: {
                            table: 'x_snc_apr_tv3b_request'
                            short_description: 'Mandatory Purpose for International'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fa37105a56cc4304a8b0dfbe04ff8959'
                        key: {
                            name: 'x_snc_apr_tv3b_expense'
                            element: 'x_snc_apr_tv3b_vendor'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'fa86a74f0faf4bc4a86f25b98862971c'
                        key: {
                            list_id: {
                                id: 'db8e98dad6964419951c96b43413398a'
                                key: {
                                    name: 'x_snc_apr_tv3b_expense'
                                    view: {
                                        id: '2b41822009004e48a8790a494b46882b'
                                        key: {
                                            name: 'expense_list'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'x_snc_apr_tv3b_reimbursement_status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fb83c376147a432db4a2be1bf88b2085'
                        key: {
                            name: 'x_snc_apr_tv3b_policy'
                            element: 'x_snc_apr_tv3b_policy_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fc583ee5702445ab9e800f07283f8f51'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            element: 'x_snc_apr_tv3b_estimated_cost'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fd23999ff2a54950965b9aa1f7e2c8a4'
                        key: {
                            name: 'x_snc_apr_tv3b_delegation'
                            element: 'x_snc_apr_tv3b_start_date'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'fe0b98ff0e814ba989f8c180ac49207b'
                        key: {
                            name: 'x_snc_apr_tv3b_request'
                            element: 'x_snc_apr_tv3b_purpose'
                        }
                    },
                ]
            }
        }
    }
}

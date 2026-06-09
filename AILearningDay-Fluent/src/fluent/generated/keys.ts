import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    '07f480ac3b408bd8908a91aa04e45abb': {
                        table: 'sys_ui_element'
                        id: '07f480ac3b408bd8908a91aa04e45abb'
                    }
                    '4b5d4c5c3bc803d8908a91aa04e45a58': {
                        table: 'sys_scope_privilege'
                        id: '4b5d4c5c3bc803d8908a91aa04e45a58'
                    }
                    '554bb94193f332d08381f8bcdd03d6f6': {
                        table: 'sys_scope_privilege'
                        id: '554bb94193f332d08381f8bcdd03d6f6'
                    }
                    '774e0c2c3bc48bd8908a91aa04e45af5': {
                        table: 'sys_scope_privilege'
                        id: '774e0c2c3bc48bd8908a91aa04e45af5'
                    }
                    '835d4c5c3bc803d8908a91aa04e45a71': {
                        table: 'sys_scope_privilege'
                        id: '835d4c5c3bc803d8908a91aa04e45a71'
                    }
                    '8b5d4c5c3bc803d8908a91aa04e45a60': {
                        table: 'sys_scope_privilege'
                        id: '8b5d4c5c3bc803d8908a91aa04e45a60'
                    }
                    '914b358193f332d08381f8bcdd03d63c': {
                        table: 'sys_scope_privilege'
                        id: '914b358193f332d08381f8bcdd03d63c'
                    }
                    '914b358193f332d08381f8bcdd03d642': {
                        table: 'sys_scope_privilege'
                        id: '914b358193f332d08381f8bcdd03d642'
                    }
                    '9fab6f7493f3fa908381f8bcdd03d6d3': {
                        table: 'sys_scope_privilege'
                        id: '9fab6f7493f3fa908381f8bcdd03d6d3'
                    }
                    add_learning_category_element: {
                        table: 'sys_ui_element'
                        id: 'c6b2023f5ae446aa9a45564574b848a2'
                    }
                    add_program_name_element: {
                        table: 'sys_ui_element'
                        id: 'bc34d5894450497ebf9dd997e159af69'
                    }
                    add_project_name_element: {
                        table: 'sys_ui_element'
                        id: '21fda139e02f4a6fa55520cf7ae9a8da'
                    }
                    add_requestor_element: {
                        table: 'sys_ui_element'
                        id: '7e6e3bbe9e2644aa85bb143cfa70b772'
                    }
                    add_required_level_element: {
                        table: 'sys_ui_element'
                        id: '54733d21387f4ea49a0987db5117b139'
                    }
                    add_status_element: {
                        table: 'sys_ui_element'
                        id: '71531fa4862348b39dfde2822b1f94d9'
                    }
                    'ae-role': {
                        table: 'x_snc_ai_learnin_4_role_choices'
                        id: 'ffa1ca240a1d4e4880391043e74fc953'
                        deleted: true
                    }
                    agenda_page_access_acl: {
                        table: 'sys_security_acl'
                        id: '1a09fffb8b464bbaa5444c86263fbe8f'
                    }
                    agenda_page_public_acl: {
                        table: 'sys_security_acl'
                        id: '10b7865d5e6a4a0184c606eed3fa1646'
                        deleted: true
                    }
                    'agenda-builder-page': {
                        table: 'sys_ui_page'
                        id: 'e1185c14b873463da6a42a511f72b773'
                        deleted: true
                    }
                    'agenda-ui-page-public-acl': {
                        table: 'sys_security_acl'
                        id: '923d12c6dae34fbd81e61776ca3722ce'
                    }
                    ai_agenda_page_instance: {
                        table: 'sp_page_layout'
                        id: 'de143a7dfda54354b3ba1b6eb31c7a73'
                        deleted: true
                    }
                    ai_agenda_rect_config: {
                        table: 'sp_rect_config'
                        id: 'eb0374a65cad4b1ea20410be3d4c5b56'
                    }
                    ai_agenda_widget_instance: {
                        table: 'sp_instance'
                        id: '3b81dc29f8b549fbb4d0b2e95363d392'
                        deleted: true
                    }
                    ai_learning_agenda_column: {
                        table: 'sp_column'
                        id: '3f8c0cd7ac4b422f8484a12b39549f8c'
                    }
                    ai_learning_agenda_container: {
                        table: 'sp_container'
                        id: 'fa84b77fac584b4192a809d76c84225e'
                    }
                    ai_learning_agenda_menu_module: {
                        table: 'sys_app_module'
                        id: 'b33bbf973fb94716bad5d502c787f97f'
                    }
                    ai_learning_agenda_page: {
                        table: 'sp_page'
                        id: 'f7f28bcaca8a4e8a8bc73a23189b0596'
                    }
                    ai_learning_agenda_row: {
                        table: 'sp_row'
                        id: '6aed9c7b97ee4442bad44493e6ca93dc'
                    }
                    ai_learning_agenda_widget_instance: {
                        table: 'sp_instance'
                        id: '8cb1728e9d294fa49452fd0e43054a1f'
                    }
                    ai_sessions_create_acl: {
                        table: 'sys_security_acl'
                        id: '56039b9db7a2427aac344504c0c1dcad'
                    }
                    ai_sessions_delete_acl: {
                        table: 'sys_security_acl'
                        id: '2e458fb3e2c84f7ea253d452899c032d'
                    }
                    ai_sessions_fields_write_admin_acl: {
                        table: 'sys_security_acl'
                        id: 'dad4262eccc04af5b4e3e0449ca01b7b'
                    }
                    ai_sessions_fields_write_contributor_acl: {
                        table: 'sys_security_acl'
                        id: '6bd5666072a94221983a8e85fbedb479'
                    }
                    ai_sessions_list_widget: {
                        table: 'sp_widget'
                        id: '023602b733e643518ecc09712da96b61'
                        deleted: true
                    }
                    ai_sessions_public_read_acl: {
                        table: 'sys_security_acl'
                        id: '7d22368e711e4d0e8147375f298b26c5'
                    }
                    ai_sessions_read_acl: {
                        table: 'sys_security_acl'
                        id: '594cac1e806746f283a0665675c1a039'
                    }
                    ai_sessions_write_admin_acl: {
                        table: 'sys_security_acl'
                        id: 'd6c422c0f5a4406a8779f3c266a1fba9'
                    }
                    ai_sessions_write_contributor_acl: {
                        table: 'sys_security_acl'
                        id: '60823b1f38dd4f44b148b21210c43c8f'
                    }
                    'ai-agenda-column': {
                        table: 'sp_column'
                        id: 'befc4c30b09740f3a5c8b1c5ce47e788'
                    }
                    'ai-agenda-container': {
                        table: 'sp_container'
                        id: '6335108c28894863b9d1b20b3db3a8ec'
                    }
                    'ai-agenda-page': {
                        table: 'sp_page'
                        id: '79cde0ec2209428ab5afde2a070e7e3e'
                    }
                    'ai-agenda-row': {
                        table: 'sp_row'
                        id: 'f48385173bba4496a278e1b628999173'
                    }
                    'ai-agenda-widget-instance': {
                        table: 'sp_instance'
                        id: '7ab3e7c1df5941649c823026e964c6c7'
                    }
                    'ai-sessions-portal-read-acl': {
                        table: 'sys_security_acl'
                        id: 'c21f92a1188b4b97b3bd56d9c0ef50fd'
                    }
                    'ai-sessions-test-column': {
                        table: 'sp_column'
                        id: 'e14a302400e24a26b541fca7e59845f2'
                    }
                    'ai-sessions-test-container': {
                        table: 'sp_container'
                        id: '4feb24b49d8740098326fbda1cf67afc'
                    }
                    'ai-sessions-test-page': {
                        table: 'sp_page'
                        id: 'ee89d102e64b4c1ab5f03b40e0f682c7'
                    }
                    'ai-sessions-test-row': {
                        table: 'sp_row'
                        id: 'b8088f38416a4ebd98462580b9fed066'
                    }
                    'ai-sessions-test-widget-instance': {
                        table: 'sp_instance'
                        id: '8ab060e7a319476f893715a45e429167'
                    }
                    'ai-sessions-widget': {
                        table: 'sp_widget'
                        id: '17f050e07ea441dab38bc866c17a8bd3'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: 'ba53edff1fc7472ba8b3e757eba9265b'
                    }
                    c35d4c5c3bc803d8908a91aa04e45a75: {
                        table: 'sys_scope_privilege'
                        id: 'c35d4c5c3bc803d8908a91aa04e45a75'
                    }
                    c7f400ac3b408bd8908a91aa04e45a25: {
                        table: 'sys_ui_section'
                        id: 'c7f400ac3b408bd8908a91aa04e45a25'
                    }
                    cbf480ac3b408bd8908a91aa04e45ab9: {
                        table: 'sys_ui_element'
                        id: 'cbf480ac3b408bd8908a91aa04e45ab9'
                    }
                    cleanup_duplicates: {
                        table: 'sys_ui_action'
                        id: 'ab80fa9d9ac9461abdd714e6aab7c635'
                        deleted: true
                    }
                    cleanup_session_types: {
                        table: 'sys_ui_action'
                        id: '1f2738e2502d49178972dfa1128ae371'
                    }
                    create_end_time_element: {
                        table: 'sys_ui_element'
                        id: '69f80e9696d842b2bb65e0d9865e6690'
                    }
                    create_start_time_element: {
                        table: 'sys_ui_element'
                        id: '4bd75156cbce46e1bb6fd56f5593bdd9'
                    }
                    'crm-se-role': {
                        table: 'x_snc_ai_learnin_4_role_choices'
                        id: 'c4781aadcd0b460a86087e419dbc5009'
                        deleted: true
                    }
                    d54b358193f332d08381f8bcdd03d65f: {
                        table: 'sys_scope_privilege'
                        id: 'd54b358193f332d08381f8bcdd03d65f'
                    }
                    dd4bb94193f332d08381f8bcdd03d6fc: {
                        table: 'sys_scope_privilege'
                        id: 'dd4bb94193f332d08381f8bcdd03d6fc'
                    }
                    fix_end_time_position: {
                        table: 'sys_ui_element'
                        id: '69f80e9696d842b2bb65e0d9865e6690'
                    }
                    fix_start_time_position: {
                        table: 'sys_ui_element'
                        id: '4bd75156cbce46e1bb6fd56f5593bdd9'
                    }
                    fix_timezone_position: {
                        table: 'sys_ui_element'
                        id: '68be654976674ba5855418e749999879'
                    }
                    ForceTimezoneUpdate: {
                        table: 'sys_script_include'
                        id: 'e451ab406e2445329bb9fe9f3455adcc'
                    }
                    geo_major_area_form_element: {
                        table: 'sys_ui_element'
                        id: '2f4625e2c4f54dafb116135120bca391'
                        deleted: true
                    }
                    'gpc-role': {
                        table: 'x_snc_ai_learnin_4_role_choices'
                        id: 'a1f7cff996724aadbe84f40378a12c7c'
                        deleted: true
                    }
                    'others-role': {
                        table: 'x_snc_ai_learnin_4_role_choices'
                        id: '7fb964993cde410691c0afb5d5d86a3e'
                        deleted: true
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '828b7e40d5c0435fa11dc4adb5acdc3c'
                    }
                    public_agenda_api: {
                        table: 'sys_ws_definition'
                        id: '75f4d1439d9d40de93a09f2d29b6411c'
                    }
                    public_agenda_route: {
                        table: 'sys_ws_operation'
                        id: 'b73f126d61d14ebe81918f69ae430db9'
                    }
                    public_page_record: {
                        table: 'sys_public'
                        id: 'ca8753be5b8f48fdad56c89f1f4e3de4'
                    }
                    public_rest_api_read_sessions: {
                        table: 'sys_security_acl'
                        id: '7a5b63fc9f3e4302a0fdef5609a3ef38'
                        deleted: true
                    }
                    public_rest_endpoint_acl: {
                        table: 'sys_security_acl'
                        id: '4decf220c095453fbae72337055a9ef1'
                        deleted: true
                    }
                    public_sessions_table_read_acl: {
                        table: 'sys_security_acl'
                        id: '23cbe5eb1ccf48bcbda72aff7c190171'
                        deleted: true
                    }
                    remove_duplicate_geo_major_area: {
                        table: 'sys_ui_element'
                        id: '0dbc3fca149745518e09f71d82cbc49f'
                        deleted: true
                    }
                    remove_duplicate_session_type: {
                        table: 'sys_ui_element'
                        id: 'a1eb1847d4024ef0aa58b65091605713'
                        deleted: true
                    }
                    remove_geography_field: {
                        table: 'sys_ui_element'
                        id: '9dccfef493f77a908381f8bcdd03d664'
                        deleted: true
                    }
                    role_choices_create_acl: {
                        table: 'sys_security_acl'
                        id: 'cd5f9584146e436c8e581dfbe68d9f41'
                    }
                    role_choices_delete_acl: {
                        table: 'sys_security_acl'
                        id: 'c6027edcbd50453c970980996a25fcad'
                    }
                    role_choices_read_acl: {
                        table: 'sys_security_acl'
                        id: '75ef6828e6224669aab07490659bed87'
                    }
                    role_choices_write_acl: {
                        table: 'sys_security_acl'
                        id: 'ad232f346350478bb222e333b55ad523'
                    }
                    'sc-role': {
                        table: 'x_snc_ai_learnin_4_role_choices'
                        id: '79cfa849d9e24cb1a297fe0857147fcb'
                        deleted: true
                    }
                    'service-portal-page-read-acl': {
                        table: 'sys_security_acl'
                        id: '0bd629f4a31a44f2b4e8dd2339eaaf5e'
                    }
                    'service-portal-public-acl': {
                        table: 'sys_security_acl'
                        id: 'e96c84a737c248c781e8510ec74a0553'
                    }
                    'service-portal-widget-execute-acl': {
                        table: 'sys_security_acl'
                        id: 'f20016ef3f2447c2b093d13f7e7a53eb'
                    }
                    session_type_form_element: {
                        table: 'sys_ui_element'
                        id: '256b06af6d814a7caee1af26e1d25528'
                        deleted: true
                    }
                    SessionTypeCleanup: {
                        table: 'sys_script_include'
                        id: 'f105e2998b284faa9463dd3b28d6f837'
                    }
                    simple_ai_learning_content: {
                        table: 'sp_instance'
                        id: '4060caf44d18420eb3c7f92a0655c29f'
                    }
                    simple_ai_learning_page: {
                        table: 'sp_page'
                        id: '2080c3abbb3e471eb9c8577a91f7ae21'
                    }
                    'simple-test-widget': {
                        table: 'sp_widget'
                        id: '9497046d1f834739af9d27d62bf79384'
                    }
                    'src_server_choice-cleanup_manual-update_js': {
                        table: 'sys_module'
                        id: '933d5c763a754253b0e653e0269cf3e8'
                    }
                    'src_server_choice-cleanup_session-type-cleanup_js': {
                        table: 'sys_module'
                        id: '7fc3da099c904cffaaa8ffc41657bd80'
                    }
                    'src_server_choice-cleanup_update-apac-label_js': {
                        table: 'sys_module'
                        id: '03c431c3640248c8b026b1bb2e14a2f1'
                    }
                    'src_server_field-update_force-timezone-update_js': {
                        table: 'sys_module'
                        id: '9b07b5bb36a04496a26e88e20bb139c5'
                    }
                    'src_server_field-update_timezone-updater_js': {
                        table: 'sys_module'
                        id: 'f12c861b38db4049b9ab9af7b7b7c266'
                    }
                    'src_server_public-agenda-handler_js': {
                        table: 'sys_module'
                        id: 'b9bce56d33264903bdb58470209473e6'
                        deleted: true
                    }
                    'src_server_rest-api_public_agenda_script_js': {
                        table: 'sys_module'
                        id: 'a0bdd6af5746424c9454a998c78ab87a'
                    }
                    'src_server_validation_timezone-validation_js': {
                        table: 'sys_module'
                        id: 'd06357747f3448b78a0b1c55ff9e6a92'
                    }
                    'ssc-role': {
                        table: 'x_snc_ai_learnin_4_role_choices'
                        id: '2087f531f1ec493ebc1e165884049635'
                        deleted: true
                    }
                    'sse-role': {
                        table: 'x_snc_ai_learnin_4_role_choices'
                        id: '10e83d1b110240589faf00c24c159c72'
                        deleted: true
                    }
                    target_roles_form_element: {
                        table: 'sys_ui_element'
                        id: '786473cc65254725a2286653c12df18a'
                        deleted: true
                    }
                    target_roles_form_element_positioned: {
                        table: 'sys_ui_element'
                        id: '73965e67e61645f49ff6af98893a3589'
                        deleted: true
                    }
                    'test-column': {
                        table: 'sp_column'
                        id: '359e7c6f3d0340ba84a54e611f3acfec'
                    }
                    'test-container': {
                        table: 'sp_container'
                        id: '53d1a5d62af844a19e55e4ea83cc2f24'
                    }
                    'test-page': {
                        table: 'sp_page'
                        id: '8661c0c8fd7a45738e7d26985c70be65'
                    }
                    'test-row': {
                        table: 'sp_row'
                        id: '9c663649294648808a3488439457beba'
                    }
                    'test-widget-instance': {
                        table: 'sp_instance'
                        id: '4ef365b226024a0899f0442296b5206d'
                    }
                    timezone_form_element: {
                        table: 'sys_ui_element'
                        id: 'b3f015ea753b4ce6b9b6d957e618ac84'
                        deleted: true
                    }
                    timezone_validation: {
                        table: 'sys_script'
                        id: '0802cc95afa648c9b38c3418b5bd2404'
                    }
                    TimezoneFieldUpdater: {
                        table: 'sys_script_include'
                        id: '1974c5bb4cd540478c81fff0c27b0327'
                    }
                    ui_element_end_time: {
                        table: 'sys_ui_element'
                        id: '7b4ba14b53df43b890ec02623449157c'
                        deleted: true
                    }
                    ui_element_start_time: {
                        table: 'sys_ui_element'
                        id: 'b359b4e57a8c4adb80df6cb249904dbc'
                        deleted: true
                    }
                    ui_element_timezone: {
                        table: 'sys_ui_element'
                        id: '5c7789865adf4bd882f8267c6847d76d'
                        deleted: true
                    }
                    update_end_time_position: {
                        table: 'sys_ui_element'
                        id: '15ccfef493f77a908381f8bcdd03d666'
                        deleted: true
                    }
                    update_existing_timezone: {
                        table: 'sys_ui_element'
                        id: '68be654976674ba5855418e749999879'
                    }
                    update_geo_major_area_element: {
                        table: 'sys_ui_element'
                        id: '2bebeb7946a24a759634fd8e3d95ff8d'
                    }
                    update_session_type_element: {
                        table: 'sys_ui_element'
                        id: '5f925e095a8840f38b0a832edae56007'
                    }
                    update_start_time_position: {
                        table: 'sys_ui_element'
                        id: 'd1ccfef493f77a908381f8bcdd03d66f'
                        deleted: true
                    }
                    update_target_roles_element: {
                        table: 'sys_ui_element'
                        id: 'f21bf0267721432d988e1ef97a60ec3b'
                    }
                    update_timezone_position: {
                        table: 'sys_ui_element'
                        id: '68be654976674ba5855418e749999879'
                    }
                    UpdateApacChoiceLabel: {
                        table: 'sys_script_include'
                        id: '6b770c5a1b4b4582a9db7219d91f9d31'
                    }
                    'widget-instance-fix': {
                        table: 'sp_instance'
                        id: 'f9a8ba62a6a24a0994fc8c2944d25a17'
                    }
                    'x_snc_ai_learnin_4/main': {
                        table: 'sys_ux_lib_asset'
                        id: '2dd36a4a7796438d8b649577d400bb59'
                        deleted: true
                    }
                    'x_snc_ai_learnin_4/main.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: '34c41b6980394c52953de4ce398d8835'
                        deleted: true
                    }
                }
                composite: [
                    {
                        table: 'sys_choice'
                        id: '000ca39079be4dc38f9b1111f13dd088'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'status'
                            value: 'planning'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '008e45688d4a4121bef87e98f88797bc'
                        key: {
                            name: 'x_snc_ai_learnin_4_role_choices'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '037902d90a3b4abea981bc01796dd8ec'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'target_roles'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0415990f1b7c4dcbbb8c7b3d31e4660c'
                        deleted: true
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'geography'
                            value: 'india'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '058b39f6cdf3439487bf679243261196'
                        key: {
                            sys_security_acl: 'cd5f9584146e436c8e581dfbe68d9f41'
                            sys_user_role: {
                                id: 'b91980114fb945899cb474ad480cfaa0'
                                key: {
                                    name: 'x_snc_ai_learnin_4.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '05b5e737475c4432bf62c4d60342d826'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'geo_major_area'
                            value: 'japan'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '05e4460712684a059aec79440095f9df'
                        deleted: true
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'geography'
                            value: 'europe'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '065611e74b3e46feb13fddb36205eee7'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'timezone'
                            value: 'hkt'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0757fef272274ae7ab4d9c3bb7ce3147'
                        deleted: true
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'geography'
                            value: 'anz'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '083d49526c1d4f34baad164cd74168dc'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'learning_category'
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '084dcd265e3b4d448587d9b9f2703f8d'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'required_level'
                            value: 'essential'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0918556b76b64091b21f875f5a761189'
                        deleted: false
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'session_type'
                            value: 'in_person_discussion'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: '0b208d84304142f6a04719d56cfd3794'
                        deleted: false
                        key: {
                            endpoint: 'x_snc_ai_learnin_4_agenda.do'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0c5a3f84a0d64527a10f66b0db9dba97'
                        key: {
                            sys_security_acl: 'ad232f346350478bb222e333b55ad523'
                            sys_user_role: {
                                id: 'b91980114fb945899cb474ad480cfaa0'
                                key: {
                                    name: 'x_snc_ai_learnin_4.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0daf716d76094a4c8c3a7f76c2d8fb61'
                        deleted: true
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'role'
                            value: 'crm_se'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '1334f7d03b084bd8908a91aa04e45af3'
                        key: {
                            list_id: {
                                id: 'df34f7d03b084bd8908a91aa04e45aee'
                                key: {
                                    name: 'x_snc_ai_learnin_4_ai_sessions'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'end_time'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '13f41de7d947486b9baf2f811c61cc55'
                        deleted: true
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'role'
                            value: 'sc'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1421b2d5672f4df38c288fdd2f102fd9'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'project_name'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '14307a7101ec4c1d9414c5b031ed130a'
                        deleted: true
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'geography'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '143de07a57504d4aa778e25d90edb494'
                        key: {
                            sys_security_acl: '2e458fb3e2c84f7ea253d452899c032d'
                            sys_user_role: {
                                id: 'b91980114fb945899cb474ad480cfaa0'
                                key: {
                                    name: 'x_snc_ai_learnin_4.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '14d559c787994c78914703605fa2a114'
                        deleted: true
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'role'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '14f34a0a75b84f6ab4668bd9bb0326b8'
                        deleted: true
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'geography'
                            value: 'asia_korea'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '150590cce3884cfcbf9cfbc4fc604841'
                        key: {
                            name: 'x_snc_ai_learnin_4_role_choices'
                            element: 'label'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1711bd56c0da4b558ed3c52534b103ec'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'timezone'
                            value: 'ist'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '1734f7d03b084bd8908a91aa04e45af2'
                        key: {
                            list_id: {
                                id: 'df34f7d03b084bd8908a91aa04e45aee'
                                key: {
                                    name: 'x_snc_ai_learnin_4_ai_sessions'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'duration_minutes'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1a115f13d4da48b7b9dc6f029bcb31e6'
                        deleted: true
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'geography'
                            value: 'north_america'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1af3898cc4d74cfdae1801e09fc3906c'
                        deleted: false
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'requestor'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1b0997edbbd84eb097f806122eedaf36'
                        deleted: true
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'session_type'
                            value: 'networking'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '1b34f7d03b084bd8908a91aa04e45af1'
                        key: {
                            list_id: {
                                id: 'df34f7d03b084bd8908a91aa04e45aee'
                                key: {
                                    name: 'x_snc_ai_learnin_4_ai_sessions'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'session_type'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '1b34f7d03b084bd8908a91aa04e45af4'
                        key: {
                            list_id: {
                                id: 'df34f7d03b084bd8908a91aa04e45aee'
                                key: {
                                    name: 'x_snc_ai_learnin_4_ai_sessions'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'prerequisites'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1e6a437c9e7f4a3e8150fcbec98ff2e5'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'program_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '1f34f7d03b084bd8908a91aa04e45af3'
                        key: {
                            list_id: {
                                id: 'df34f7d03b084bd8908a91aa04e45aee'
                                key: {
                                    name: 'x_snc_ai_learnin_4_ai_sessions'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'location'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1f48c5f722ad4573abbd68b15ac9323e'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '232e607d16e240ae9ffafe12a1bd4133'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'timezone'
                            value: 'jst'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '25803184e9af4b73bbe3b643eed27575'
                        deleted: false
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'session_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '26d5e28cb0d046c5a68fb6be47f01fa9'
                        deleted: true
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'role'
                            value: 'ae'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2bba000275e845a39dc1d252cb88cf2f'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'status'
                            value: 'confirmed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2f22dac9973343499f7cec5a8b29b270'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'virtual_link'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '2f7584243b808bd8908a91aa04e45afc'
                        key: {
                            list_id: {
                                id: 'df34f7d03b084bd8908a91aa04e45aee'
                                key: {
                                    name: 'x_snc_ai_learnin_4_ai_sessions'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'target_roles'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '30021e521f164fc8935932f546771783'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'timezone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '30e54388cd8a4011bd69f2d2d79b2aad'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'geo_major_area'
                            value: 'apac_general'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '310bcdb6600b45a59c7afbb66d1e147e'
                        deleted: true
                        key: {
                            application_file: '0b208d84304142f6a04719d56cfd3794'
                            source_artifact: '55824fb286ae4f3d940c7be8e3803404'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3256cc725bca4950835db8434d8b4fe8'
                        key: {
                            sys_security_acl: '594cac1e806746f283a0665675c1a039'
                            sys_user_role: {
                                id: 'b648078fcad94764bfede769dd880bec'
                                key: {
                                    name: 'x_snc_ai_learnin_4.viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '33a670b141904b00972cdd2abff202e0'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'geo_major_area'
                            value: 'asia_korea'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3b0de518bff24b4eb8a13a05b46f9693'
                        key: {
                            sys_security_acl: '56039b9db7a2427aac344504c0c1dcad'
                            sys_user_role: {
                                id: 'cf484756cf12483496ee0b884a48f966'
                                key: {
                                    name: 'x_snc_ai_learnin_4.contributor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '437420508eec41e0841e69cedad4d439'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'duration_minutes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4389df7d33b54e20b114247a9ee578ed'
                        deleted: false
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'session_type'
                            value: 'elearning_self_paced'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '449a61b8221d45c99a342de7c821c144'
                        deleted: false
                        key: {
                            name: 'x_snc_ai_learnin_4/main'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '451a78cb97a64c95ba7e41f97be02e99'
                        deleted: true
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'geography'
                            value: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '45cc4bebd89642a592bd7b2b299e8aaf'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'geo_major_area'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '46b8f7bccf0d47d79cad00d9db602993'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'learning_category'
                            value: 'skills'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '4b681091a31e4dd59ea3df62d94e22ab'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'learning_category'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4c2f774b0b554035a283d9443673ed65'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'prerequisites'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4cd0a4780a7c4cbe9c5591b3567f8b8e'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'max_attendees'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4cd7406a35ab4c1c88e00589c15816b1'
                        deleted: true
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'role'
                            value: 'sse'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4dc53622e2df4c9b878eda7aef6bb9da'
                        key: {
                            sys_security_acl: 'dad4262eccc04af5b4e3e0449ca01b7b'
                            sys_user_role: {
                                id: 'b91980114fb945899cb474ad480cfaa0'
                                key: {
                                    name: 'x_snc_ai_learnin_4.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4dd1c72b61f14160beba5fc3645bf747'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'location'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '4e4f93444f8d42adb99b44075bafda3d'
                        key: {
                            role: {
                                id: 'cf484756cf12483496ee0b884a48f966'
                                key: {
                                    name: 'x_snc_ai_learnin_4.contributor'
                                }
                            }
                            contains: {
                                id: 'b648078fcad94764bfede769dd880bec'
                                key: {
                                    name: 'x_snc_ai_learnin_4.viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4e960504ad684373a7b8c92c7d3389d0'
                        deleted: false
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'session_type'
                            value: 'colab'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4f34b4e67cd74cdf8ed154536b639652'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'timezone'
                            value: 'est'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4f7bdc568ee240bd9296875a6f118958'
                        deleted: false
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'session_type'
                            value: 'ma_kickoff'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '504e7ccc96ea4a2884a6e5ab98deb10c'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'session_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '538132ddd15a4b59b4bf39cd737d2b06'
                        deleted: false
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'session_type'
                            value: 'webinar_live'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '548a66e099e54dcd909d174a8517b5e4'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'geo_major_area'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact'
                        id: '55824fb286ae4f3d940c7be8e3803404'
                        deleted: true
                        key: {
                            name: 'x_snc_ai_learnin_4_agenda.do - BYOUI Files'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '55a940ece7b7469896844c5ae40e7d7a'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '59addc7d6b604ed5a4addcd4098d5ce0'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'required_level'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5aa584f71cef43c39f4df7c990a449b9'
                        key: {
                            sys_security_acl: '6bd5666072a94221983a8e85fbedb479'
                            sys_user_role: {
                                id: 'cf484756cf12483496ee0b884a48f966'
                                key: {
                                    name: 'x_snc_ai_learnin_4.contributor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5dc380d640ee4016955dbcf4babb41f4'
                        key: {
                            name: 'x_snc_ai_learnin_4_role_choices'
                            element: 'label'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5ee3707b328f43689f94dce5377c0607'
                        key: {
                            sys_security_acl: 'c6027edcbd50453c970980996a25fcad'
                            sys_user_role: {
                                id: 'b91980114fb945899cb474ad480cfaa0'
                                key: {
                                    name: 'x_snc_ai_learnin_4.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5fb58e21155d4174b63d93c43b81cf44'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'target_roles'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6251c9056a8c461fb3aae977600d0100'
                        deleted: true
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'geography'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '62ed885a8048450f8e3ff0fc9424ab41'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'timezone'
                            value: 'sgt'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '63e7d07712b34c0e831f00b52f876d85'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '66e3371d014e43b096b219cdd1ed4e1a'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'tags'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6713d4042505412abd1d8d99ec99e4a2'
                        deleted: true
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'session_type'
                            value: 'keynote'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '696b8860373a4a2587462e977cc47eea'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'status'
                            value: 'completed'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6a6398ac86844e5f92f5beac209fe391'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'start_time'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6da1447f24e545b7825313110eb742a3'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'max_attendees'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '710255e5a67f4255870b0fe56311668e'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'learning_category'
                            value: 'ai_tools_process_ops'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '727cfafbc1134da98328d1f150d338dd'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'timezone'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7281e56bf59745d28462b8e5178f00cc'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'timezone'
                            value: 'utc'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '76a34502ef664c9aab765c804512e34a'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'is_featured'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '777a205080044dc9a2d6590906101702'
                        deleted: true
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'geography'
                            value: 'apac_general'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '78568daa5da94c179ff0a29328f70230'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7abb31ef52c54e10be617dbb31bfd9d4'
                        deleted: false
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'requestor'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7ee397b5156549f0a41fbaada740b45a'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'required_level'
                            value: 'elect'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '7f1150171304409db987f01dbf030789'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '8463f20e97814a12a2029a663ec92d8a'
                        deleted: true
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'role'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '86f43e4a114648a2a1f098ebc64d243c'
                        deleted: true
                        key: {
                            application_file: '449a61b8221d45c99a342de7c821c144'
                            source_artifact: '55824fb286ae4f3d940c7be8e3803404'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8c3c2281b8a7466e80cd4ea9e8072ed4'
                        key: {
                            name: 'x_snc_ai_learnin_4_role_choices'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8f176e1e903e408eaf8bf47b5da6e59c'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'duration_minutes'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9097c04a7b774dcaadcad15989cbb11f'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'status'
                            value: 'requested'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '92fa2325a7bc405a9abab5899cb784da'
                        deleted: true
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'session_type'
                            value: 'q_and_a'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '93091cc570fe46b78b39b8fe3b3b1fd3'
                        key: {
                            name: 'x_snc_ai_learnin_4_role_choices'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '9334f7d03b084bd8908a91aa04e45af4'
                        key: {
                            list_id: {
                                id: 'df34f7d03b084bd8908a91aa04e45aee'
                                key: {
                                    name: 'x_snc_ai_learnin_4_ai_sessions'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'max_attendees'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '93ffe76bf0f44877a72553774085a53f'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'learning_category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '96f4533b8b1548329ab50c75543d912f'
                        deleted: true
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'role'
                            value: 'ssc'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '9734f7d03b084bd8908a91aa04e45af3'
                        key: {
                            list_id: {
                                id: 'df34f7d03b084bd8908a91aa04e45aee'
                                key: {
                                    name: 'x_snc_ai_learnin_4_ai_sessions'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'is_featured'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9967657754c54982bb10e4b7a711bd27'
                        deleted: true
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'role'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9a576d03eaf944778ae08f1c967ae13b'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'required_level'
                            value: 'elevate'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9ac7b7c738dd4014aaf40652f32bc3dd'
                        deleted: true
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'role'
                            value: 'others'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9b2bd63522c44b9f8346022ba5e57904'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'end_time'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '9b34f7d03b084bd8908a91aa04e45af0'
                        key: {
                            list_id: {
                                id: 'df34f7d03b084bd8908a91aa04e45aee'
                                key: {
                                    name: 'x_snc_ai_learnin_4_ai_sessions'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'title'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '9b34f7d03b084bd8908a91aa04e45af2'
                        key: {
                            list_id: {
                                id: 'df34f7d03b084bd8908a91aa04e45aee'
                                key: {
                                    name: 'x_snc_ai_learnin_4_ai_sessions'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'start_time'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9d9d34d59fae4b77bb2ba9b1d7998476'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'geo_major_area'
                            value: 'anz'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '9f34f7d03b084bd8908a91aa04e45af1'
                        key: {
                            list_id: {
                                id: 'df34f7d03b084bd8908a91aa04e45aee'
                                key: {
                                    name: 'x_snc_ai_learnin_4_ai_sessions'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '9f34f7d03b084bd8908a91aa04e45af4'
                        key: {
                            list_id: {
                                id: 'df34f7d03b084bd8908a91aa04e45aee'
                                key: {
                                    name: 'x_snc_ai_learnin_4_ai_sessions'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'presenter'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'a64560aa118b48fbbbd875a90c65117b'
                        deleted: true
                        key: {
                            application_file: 'be40992b195d406d8f3bcd127958374e'
                            source_artifact: '55824fb286ae4f3d940c7be8e3803404'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a6780a45f56d4b81939067dc6f858986'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'tags'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a8c4b67c93f37a908381f8bcdd03d6e0'
                        deleted: true
                        key: {
                            name: 'NULL'
                            element: 'NULL'
                            value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'aa01e068cc894f0ba5fc24100b0a790d'
                        deleted: true
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'geography'
                            value: 'all_sessions'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'aa28c2c85fac4142bc86df7ac5fe4cf8'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'learning_category'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'af4dba7637334facbb3043110cdc32c1'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'virtual_link'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'afa822edd80644eb93aee97e7161aded'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'aff6b2ac59b44a02999763b412795eab'
                        deleted: true
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'session_type'
                            value: 'demo'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b0a68d637f464dffbf57ca254bec43a8'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'presenter'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'b2c1963034cd4b5e8df0e7e24b26c712'
                        key: {
                            name: 'x_snc_ai_learnin_4_role_choices'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b31d9aabe7634631a924c53565e5ef38'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'learning_category'
                            value: 'products_solutions_industry'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b5877d0b622f4b519b9440e12764eb73'
                        deleted: false
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'session_type'
                            value: 'all_session_types'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'b648078fcad94764bfede769dd880bec'
                        key: {
                            name: 'x_snc_ai_learnin_4.viewer'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b76aad145e634ca3939e7efc0e692c3d'
                        deleted: true
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'role'
                            value: 'gpc'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b78ef035ce4c47ab8bf85ab9b712b32d'
                        key: {
                            sys_security_acl: '75ef6828e6224669aab07490659bed87'
                            sys_user_role: {
                                id: 'b648078fcad94764bfede769dd880bec'
                                key: {
                                    name: 'x_snc_ai_learnin_4.viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b8e5df157f5f4c3caca787787ffc453e'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'end_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'b91980114fb945899cb474ad480cfaa0'
                        key: {
                            name: 'x_snc_ai_learnin_4.admin'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b999a974c9af42a491358dfa6e64f18e'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'baea2bd0d4a84bbf9cf09748e697347e'
                        key: {
                            name: 'x_snc_ai_learnin_4_role_choices'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'baf0a45a65a24c80b3794abf3b730f1d'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'required_level'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'bb8ff736b5b9439588614dd93208d1e7'
                        deleted: true
                        key: {
                            sys_ui_action: '1f2738e2502d49178972dfa1128ae371'
                            sys_user_role: {
                                id: '16910037e07049978e098cdd8996053e'
                                key: {
                                    name: 'admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bd37063e4193465aac3af65641f7de33'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'timezone'
                            value: 'aest'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'bde1d70caeed4688ae181f7687e7fb04'
                        key: {
                            role: {
                                id: 'b91980114fb945899cb474ad480cfaa0'
                                key: {
                                    name: 'x_snc_ai_learnin_4.admin'
                                }
                            }
                            contains: {
                                id: 'cf484756cf12483496ee0b884a48f966'
                                key: {
                                    name: 'x_snc_ai_learnin_4.contributor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'be40992b195d406d8f3bcd127958374e'
                        deleted: false
                        key: {
                            name: 'x_snc_ai_learnin_4/main.js.map'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c0c5cba7f7834d86aef1d4af5ecbc251'
                        deleted: true
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'role'
                            value: 'all'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c1b58404e07c477d9f7d759721d81711'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'timezone'
                            value: 'kst'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c3ebed3af75840b9bb3859e3e05d1639'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c47c324a5ff84f74937cafe57d7eac8c'
                        key: {
                            sys_security_acl: 'd6c422c0f5a4406a8779f3c266a1fba9'
                            sys_user_role: {
                                id: 'b91980114fb945899cb474ad480cfaa0'
                                key: {
                                    name: 'x_snc_ai_learnin_4.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c74e45c5d8294f2e9ab02be648912ef9'
                        key: {
                            sys_security_acl: '60823b1f38dd4f44b148b21210c43c8f'
                            sys_user_role: {
                                id: 'cf484756cf12483496ee0b884a48f966'
                                key: {
                                    name: 'x_snc_ai_learnin_4.contributor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c75c839a3de549748c754b495ef343ad'
                        key: {
                            name: 'x_snc_ai_learnin_4_role_choices'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ca9f42180f764cb5bb414da12f414c0e'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'start_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cf0951b2b97741118ba28b17c2c7beee'
                        deleted: true
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'geography'
                            value: 'asia_pacific'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'cf484756cf12483496ee0b884a48f966'
                        key: {
                            name: 'x_snc_ai_learnin_4.contributor'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd0d2638b087d4f3bb1ea36fcf3e1220c'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'session_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd2dfce2079f148a2af8e2e11d08ccc9b'
                        deleted: true
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'session_type'
                            value: 'workshop'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'd7bc1b2034a5496584386ca82df1c2df'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'timezone'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dbdc489e39eb4ae5b7a9d170a76a8bc7'
                        deleted: true
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'geography'
                            value: 'japan'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dc3658b7a8d447d7af0a58d6cbcb21ba'
                        deleted: true
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'session_type'
                            value: 'training'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dc7fb082fbf248189ccae3d8baef2b54'
                        deleted: false
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'session_type'
                            value: 'hybrid'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dea46e12d63445459c7ba4de2af3b838'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'required_level'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'df345c56872a4c359d64e04fd57c365a'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'df34f7d03b084bd8908a91aa04e45aee'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
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
                        id: 'df6b2e5f936f46189a38003af79c5b62'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'timezone'
                            value: 'pst'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'df7f8e5e9f1d45ab9bd63923d3f8454c'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'location'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e1cba730d9694c489864510860a50644'
                        deleted: true
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'geography'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e26bc502c04c4648a8fa713627851971'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e2823714cdc04d03b41dbf4945d3978f'
                        deleted: false
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'session_type'
                            value: 'blocked_learning_time'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e317648ccc2640578812be116b5bcad8'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'is_featured'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e46d0149385047429c6da0fadc799015'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'learning_category'
                            value: 'partner_programs'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e91a5517c190447a9e88c198143a0738'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'presenter'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'eb7229b8057b4ba595cd7412ff7ee9b0'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'geo_major_area'
                            value: 'india'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'edd6c46d723e40fabed7f0ac6810d050'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'timezone'
                            value: 'aedt'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ee870663cd9740f3a4e40741e94603c1'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'program_name'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'eef8f07327484c4582f6b0c55b25a117'
                        deleted: true
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'geography'
                            value: 'latin_america'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ef00c430f6974df68878640f255899b7'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'title'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f0e9148539134fb4ae468d27b995fc11'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'learning_category'
                            value: 'onboarding'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f7de467cbc10422fa7bb77b30007a71c'
                        deleted: true
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'session_type'
                            value: 'panel'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fc235890af3347f8b0de91053bd51606'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'project_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fe8b545a88754b73a1ee95f10efb1b61'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'geo_major_area'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fefc7a5071b5491d906f675d987ba7ce'
                        key: {
                            name: 'x_snc_ai_learnin_4_ai_sessions'
                            element: 'prerequisites'
                        }
                    },
                ]
            }
        }
    }
}

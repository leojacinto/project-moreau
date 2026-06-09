import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '1e86f075499f4e22b877c8b31267502f'
                    }
                    default_state_to_draft: {
                        table: 'sys_script'
                        id: '374310715c524046bb1ee554fe918bc4'
                    }
                    default_traveler_to_current_user: {
                        table: 'sys_script'
                        id: 'cc0f973ac769401dbd5eb6ae47543ec2'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'ab1f9875e07f49c69d4d30ba1aee68a0'
                    }
                    sample_berlin: {
                        table: 'x_snc_travel_request'
                        id: '694615df4e6e4d6fb77fd27b2215d0ab'
                    }
                    sample_london: {
                        table: 'x_snc_travel_request'
                        id: '3fc46687ff1741448e4a4ed2912c358a'
                    }
                    sample_sf: {
                        table: 'x_snc_travel_request'
                        id: '59d0142250e4433f9f064eae7cc7c5cb'
                    }
                    sample_sydney: {
                        table: 'x_snc_travel_request'
                        id: 'ecd1c2002aa049d3ba056c6166fa395a'
                    }
                    sample_tokyo: {
                        table: 'x_snc_travel_request'
                        id: '6bfd6cdd3929488ea35fb71ab564e51b'
                    }
                    travel_api_create: {
                        table: 'sys_ws_operation'
                        id: 'a31f4025e41542c9860a1c3d28b6fb34'
                    }
                    travel_api_delete: {
                        table: 'sys_ws_operation'
                        id: '418d683af65c4b52aa946eb81e9b52ac'
                    }
                    travel_api_delete_param: {
                        table: 'sys_ws_query_parameter'
                        id: 'bada55fcfbb24db9ad955736252d8e8f'
                    }
                    travel_api_list: {
                        table: 'sys_ws_operation'
                        id: '7115b5c8d0434ea585b154200a55538f'
                    }
                    travel_api_update: {
                        table: 'sys_ws_operation'
                        id: '201175cb787b41968762979ed06ced4f'
                    }
                    travel_api_update_param: {
                        table: 'sys_ws_query_parameter'
                        id: 'd9fbc7bf16c2457f85da59ab2f8b790d'
                    }
                    travel_app_menu: {
                        table: 'sys_app_application'
                        id: 'cc2bc9d711fc4157a25eea15c4f6bf92'
                    }
                    travel_dashboard: {
                        table: 'par_dashboard'
                        id: '27e819c82e864ca58a9ba291b8468f95'
                    }
                    travel_dashboard_tab_overview: {
                        table: 'par_dashboard_tab'
                        id: '1889ad91797445398d89f1a5d863a09a'
                    }
                    travel_list_all: {
                        table: 'sys_ux_list'
                        id: '80bd0bd8ddd0430c81400329d9a00e96'
                    }
                    travel_list_approved: {
                        table: 'sys_ux_list'
                        id: '4c9e93dd7faf4681bd5490cbb93edbb4'
                    }
                    travel_list_category: {
                        table: 'sys_ux_list_category'
                        id: 'd9fe40a4dca24ba382000bbf64a2f880'
                    }
                    travel_list_draft: {
                        table: 'sys_ux_list'
                        id: '987d1da3563b4861bccd2d4117f6d7e5'
                    }
                    travel_list_menu_config: {
                        table: 'sys_ux_list_menu_config'
                        id: '55dfa53d839a4be895cb9cda144eecf7'
                    }
                    travel_list_submitted: {
                        table: 'sys_ux_list'
                        id: '5fa6ebe8191f478a89c241b10a25dd4a'
                    }
                    travel_request_api: {
                        table: 'sys_ws_definition'
                        id: '021d480359834b16835412ed68870b56'
                    }
                    travel_request_create_acl: {
                        table: 'sys_security_acl'
                        id: '1fc87a711a174103b35f58c293869b1d'
                    }
                    travel_request_delete_acl: {
                        table: 'sys_security_acl'
                        id: '75053800311348d4b898950656e59e3f'
                    }
                    travel_request_read_acl: {
                        table: 'sys_security_acl'
                        id: '22d63a57dec942ac8507996c809cee36'
                    }
                    travel_request_write_acl: {
                        table: 'sys_security_acl'
                        id: '398710bcf06c43169df231cf2b4f7981'
                    }
                    travel_workspace: {
                        table: 'sys_ux_page_registry'
                        id: '65de8b58caec4093abb56d3e59c7c0cb'
                    }
                    travel_workspace_sys_ux_app_config_workspace: {
                        table: 'sys_ux_app_config'
                        id: 'd6761854c5564189be0d552800223383'
                    }
                    travel_workspace_sys_ux_app_route_home: {
                        table: 'sys_ux_app_route'
                        id: 'ee5ffd78a5a840248bc438a757851c30'
                    }
                    travel_workspace_sys_ux_app_route_list: {
                        table: 'sys_ux_app_route'
                        id: 'c00c55e582744c5aa496ad54c1674f5b'
                    }
                    travel_workspace_sys_ux_app_route_record: {
                        table: 'sys_ux_app_route'
                        id: '2fd0502476dc456aa3d08f783ecffc1e'
                    }
                    'travel_workspace_sys_ux_app_route_simple-list': {
                        table: 'sys_ux_app_route'
                        id: 'f1f1ca956c5b45d2a7de85ccb7dbfc8d'
                    }
                    travel_workspace_sys_ux_macroponent_record: {
                        table: 'sys_ux_macroponent'
                        id: '02f91de11baf4f9b945b52742ab47275'
                    }
                    travel_workspace_sys_ux_page_property_chrome_footer: {
                        table: 'sys_ux_page_property'
                        id: 'f68ede7c5cd949cdb52da6fc8d929d48'
                    }
                    travel_workspace_sys_ux_page_property_chrome_header: {
                        table: 'sys_ux_page_property'
                        id: '39fc58699b93467bafe200526bb608f0'
                    }
                    travel_workspace_sys_ux_page_property_chrome_tab: {
                        table: 'sys_ux_page_property'
                        id: '8453d6f322dc4832a82ef07793bb7543'
                    }
                    travel_workspace_sys_ux_page_property_chrome_toolbar: {
                        table: 'sys_ux_page_property'
                        id: '4257373b105047678639656f5f29b050'
                    }
                    travel_workspace_sys_ux_page_property_listConfigId: {
                        table: 'sys_ux_page_property'
                        id: 'b36f915645604b22be8c72dcba1c7c20'
                    }
                    travel_workspace_sys_ux_page_property_view: {
                        table: 'sys_ux_page_property'
                        id: '1b86de2594b9422aa465cdb2040efc9b'
                    }
                    travel_workspace_sys_ux_page_property_wbApplicabilityConfigId: {
                        table: 'sys_ux_page_property'
                        id: '1c588474b0454d548594e87ace62c949'
                    }
                    travel_workspace_sys_ux_registry_m2m_category_unifiedNav: {
                        table: 'sys_ux_registry_m2m_category'
                        id: 'ce1818341bcf4e3dbb73da3271b3269e'
                    }
                    travel_workspace_sys_ux_screen_home: {
                        table: 'sys_ux_screen'
                        id: '654c266369e4421dabdc40eb0ddfb2d4'
                    }
                    travel_workspace_sys_ux_screen_list: {
                        table: 'sys_ux_screen'
                        id: '4954eace0eba42e5aed49d347486b39d'
                    }
                    travel_workspace_sys_ux_screen_record: {
                        table: 'sys_ux_screen'
                        id: 'd2359faa66d843fd9dd90dd9823c5e24'
                    }
                    'travel_workspace_sys_ux_screen_simple-list': {
                        table: 'sys_ux_screen'
                        id: '125ef2bb9d664059b6bcab3e0a453a1f'
                    }
                    travel_workspace_sys_ux_screen_type_home: {
                        table: 'sys_ux_screen_type'
                        id: '5fcb77c6fa024ba0b6ce51c3d7e8d6c1'
                    }
                    travel_workspace_sys_ux_screen_type_list: {
                        table: 'sys_ux_screen_type'
                        id: 'fbd0645d791b417a979cb290d28d4842'
                    }
                    travel_workspace_sys_ux_screen_type_record: {
                        table: 'sys_ux_screen_type'
                        id: 'b055ed582a194a6ba3c33ffa90635699'
                    }
                    'travel_workspace_sys_ux_screen_type_simple-list': {
                        table: 'sys_ux_screen_type'
                        id: 'ef2475f5b4bb4aab8079b1e28c25e4ca'
                    }
                    validate_estimated_cost: {
                        table: 'sys_script'
                        id: '28e21c91a1614eb8a909e024074d5397'
                    }
                    validate_return_date: {
                        table: 'sys_script'
                        id: 'ef78c0df30e54b97ad7cee27de378d44'
                    }
                    widget_approved: {
                        table: 'par_dashboard_widget'
                        id: 'ce2034338fd94071be5f1b2a63d8adb6'
                    }
                    widget_by_state: {
                        table: 'par_dashboard_widget'
                        id: '967efb82edb84849b464382faf3166ed'
                    }
                    widget_by_type: {
                        table: 'par_dashboard_widget'
                        id: 'd05d40c3dd554c1cb9f11960a2e6641d'
                    }
                    widget_completed: {
                        table: 'par_dashboard_widget'
                        id: 'a186073fc4104eea8f171feac267aa76'
                    }
                    widget_draft: {
                        table: 'par_dashboard_widget'
                        id: 'a075eb6a577a43339a1799e8e45f3cef'
                    }
                    widget_rejected: {
                        table: 'par_dashboard_widget'
                        id: '8797a8aace74471f817a2a0be4591502'
                    }
                    widget_submitted: {
                        table: 'par_dashboard_widget'
                        id: '5c2cbf964a9d48b4a7386e5b72ff7ea6'
                    }
                    widget_total: {
                        table: 'par_dashboard_widget'
                        id: 'c1c3a5c3345b4f09a416d21706333fff'
                    }
                }
                composite: [
                    {
                        table: 'sys_ui_page'
                        id: '00abc1265e284af79c1a4ab059d863ea'
                        key: {
                            endpoint: 'x_snc_travel_request_ui.do'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '01af5bbbad774d7aa623b736de8f450f'
                        key: {
                            name: 'x_snc_travel/app.js.map'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '05462169fdd248ebb4323625d8c334fe'
                        key: {
                            name: 'x_snc_travel_request'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '05e00dc986a04def98e9f9e3fe9f2876'
                        key: {
                            name: 'x_snc_travel_request'
                            element: 'x_snc_travel_travel_type'
                            value: 'international'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0738182acd144f8eae4de5a0762c815f'
                        key: {
                            sys_security_acl: '1fc87a711a174103b35f58c293869b1d'
                            sys_user_role: {
                                id: '85c8395a10ef433d82884c71cb96f561'
                                key: {
                                    name: 'admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '08ffb8004c8445daa9c678f16a67a0a0'
                        key: {
                            name: 'x_snc_travel_request'
                            element: 'x_snc_travel_destination'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '10b3b92dfeec4b27b5c118c1d84766b4'
                        key: {
                            name: 'x_snc_travel_request'
                            element: 'x_snc_travel_travel_type'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '179038a27c284a6685f81b8b60fc2e4b'
                        key: {
                            application_file: '01af5bbbad774d7aa623b736de8f450f'
                            source_artifact: 'ec38e003e9fb46dea630f0eef344ac56'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1b39ae31d443486aacc5ccd4d4c1ff05'
                        key: {
                            name: 'x_snc_travel_request'
                            element: 'x_snc_travel_estimated_cost'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1d7503b2db1b40afa728ce3716f52e55'
                        key: {
                            name: 'x_snc_travel_request'
                            element: 'x_snc_travel_purpose'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2253a86619144fb6924b55d66a3f72f2'
                        key: {
                            name: 'x_snc_travel_request'
                            element: 'x_snc_travel_destination'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2856f4a6406f4d278fd70ec3c6479903'
                        key: {
                            name: 'x_snc_travel_request'
                            element: 'x_snc_travel_travel_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '33dcf8477b704fefad4856d9d3bd51bc'
                        key: {
                            sys_security_acl: '75053800311348d4b898950656e59e3f'
                            sys_user_role: {
                                id: '75b6489d48024ffdb06f704e427ef96d'
                                key: {
                                    name: 'admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3aa00526a93545f0afdb4ca82122c47f'
                        key: {
                            sys_security_acl: '22d63a57dec942ac8507996c809cee36'
                            sys_user_role: {
                                id: 'b0329f39cf1743e0abbe871631f116f9'
                                key: {
                                    name: 'itil'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3b06cefbe4b3417395f33479e476c3a2'
                        key: {
                            name: 'x_snc_travel_request'
                            element: 'x_snc_travel_state'
                            value: 'submitted'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3becb2af974c4cb1a0a110afc45adbbc'
                        key: {
                            sys_security_acl: '398710bcf06c43169df231cf2b4f7981'
                            sys_user_role: {
                                id: '835e8a5c7aaf4216a6587508e4a583ce'
                                key: {
                                    name: 'itil'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '44e95d0d7f0f4c708adb0e6f56f7bcd3'
                        key: {
                            name: 'x_snc_travel_request'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '456949aa51bf46f4ba75ae9a242bc388'
                        key: {
                            name: 'x_snc_travel_request'
                            element: 'x_snc_travel_traveler'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4656b164596a47b4a45053e6a336aece'
                        key: {
                            name: 'x_snc_travel_request'
                            element: 'x_snc_travel_state'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '46a89acdaa9d4b50b10c81dcc38a7035'
                        key: {
                            name: 'x_snc_travel_request'
                            element: 'x_snc_travel_state'
                            value: 'rejected'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '511d3786ed3a4817ad600da2fb94d290'
                        key: {
                            name: 'x_snc_travel_request'
                            element: 'x_snc_travel_departure_date'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '51988e486dbe423984a6e4c60aeddab4'
                        key: {
                            application_file: 'c75b9c4ad9b44ac0a3323a78760f9fc3'
                            source_artifact: 'ec38e003e9fb46dea630f0eef344ac56'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '670c6ce5133c4db2bb62cb57df81e7fa'
                        key: {
                            name: 'x_snc_travel_request'
                            element: 'x_snc_travel_return_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '682810ab0c784ec3ad7153199ebfde00'
                        key: {
                            name: 'x_snc_travel_request'
                            element: 'x_snc_travel_state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '69cbd6930e6043cebfc4f4198babc4a2'
                        key: {
                            name: 'x_snc_travel_request'
                            element: 'x_snc_travel_estimated_cost'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7f60b37b0be2458f99c1c2ca2b166c72'
                        key: {
                            sys_security_acl: '1fc87a711a174103b35f58c293869b1d'
                            sys_user_role: {
                                id: '28e50316a937448bbab5588599dae310'
                                key: {
                                    name: 'itil'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '84a74dcba93a4f9fad40b76cc2f35459'
                        key: {
                            name: 'x_snc_travel_request'
                            element: 'x_snc_travel_travel_type'
                        }
                    },
                    {
                        table: 'sys_ws_query_parameter_map'
                        id: '9270dbca98df454bb7b807748ce7f5fa'
                        key: {
                            web_service_operation: '201175cb787b41968762979ed06ced4f'
                            web_service_query_parameter: 'd9fbc7bf16c2457f85da59ab2f8b790d'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '96ccb1fa85824873b6a01271eaf7b73b'
                        key: {
                            name: 'x_snc_travel_request'
                            element: 'x_snc_travel_traveler'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '987b918cbafc432dbcc452a7175b1c49'
                        key: {
                            name: 'x_snc_travel_request'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a537c538c54145dd971d970adfb065fe'
                        key: {
                            name: 'x_snc_travel_request'
                            element: 'x_snc_travel_state'
                            value: 'draft'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ae2a852e3fb24c4e883e486be71972d5'
                        key: {
                            name: 'x_snc_travel_request'
                            element: 'x_snc_travel_state'
                            value: 'approved'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ae808ed55ba2418e8fabc060ccb733d1'
                        key: {
                            name: 'x_snc_travel_request'
                            element: 'x_snc_travel_travel_type'
                            value: 'domestic'
                        }
                    },
                    {
                        table: 'sys_ws_query_parameter_map'
                        id: 'b3b93b039f634ad2b8741c82564932db'
                        key: {
                            web_service_operation: '418d683af65c4b52aa946eb81e9b52ac'
                            web_service_query_parameter: 'bada55fcfbb24db9ad955736252d8e8f'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b5dc7affa1ac48fc88cc98464f5b75e1'
                        key: {
                            name: 'x_snc_travel_request'
                            element: 'x_snc_travel_departure_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'par_dashboard_visibility'
                        id: 'ba14b10eda044032b2121c6b4435e864'
                        key: {
                            dashboard: '27e819c82e864ca58a9ba291b8468f95'
                            experience: '65de8b58caec4093abb56d3e59c7c0cb'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c331290ecd5f413c971665c0c5d0b97a'
                        key: {
                            name: 'x_snc_travel_request'
                            element: 'x_snc_travel_return_date'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'c3c1f3308225484380b16a8ff8dd1e81'
                        key: {
                            application_file: '00abc1265e284af79c1a4ab059d863ea'
                            source_artifact: 'ec38e003e9fb46dea630f0eef344ac56'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'c75b9c4ad9b44ac0a3323a78760f9fc3'
                        key: {
                            name: 'x_snc_travel/app'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'cecc0e0c83e243eaa6c244a11ea55a15'
                        key: {
                            name: 'x_snc_travel_request'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd08702fc9b0f4a6c98c020fd3956c567'
                        key: {
                            name: 'x_snc_travel_request'
                            element: 'x_snc_travel_state'
                            value: 'completed'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'e7c78030c2144416a9fa8b914aa1ef24'
                        key: {
                            name: 'x_snc_travel_request'
                            element: 'x_snc_travel_state'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact'
                        id: 'ec38e003e9fb46dea630f0eef344ac56'
                        key: {
                            name: 'x_snc_travel_request_ui.do - BYOUI Files'
                        }
                    },
                    {
                        table: 'par_dashboard_canvas'
                        id: 'f64cf945267245cb86df1199f94d9da3'
                        key: {
                            dashboard: '27e819c82e864ca58a9ba291b8468f95'
                            dashboard_tab: '1889ad91797445398d89f1a5d863a09a'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fb8a4b1e3cac435dbbdf01ac71a89115'
                        key: {
                            name: 'x_snc_travel_request'
                            element: 'x_snc_travel_purpose'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fe83728ea4c646e092aa3be1745e22c6'
                        key: {
                            sys_security_acl: '22d63a57dec942ac8507996c809cee36'
                            sys_user_role: {
                                id: '696b1b52099a4c96987f4b1d31b9ecdc'
                                key: {
                                    name: 'admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ffd7f62fd32342ceb477707a01f16f0b'
                        key: {
                            sys_security_acl: '398710bcf06c43169df231cf2b4f7981'
                            sys_user_role: {
                                id: '8654e375b00b45c893bb0f765c406c49'
                                key: {
                                    name: 'admin'
                                }
                            }
                        }
                    },
                ]
            }
        }
    }
}

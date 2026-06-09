import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// -- RAG Search Pipeline for Travel Policy Sections
// Per Khepri playbook: complete RAG checklist (12 records)
// SECOND PASS: Cross-reference sys_ids updated with values from first install

// 1. Indexed Source (ais_datasource)
export const travel_policy_datasource = Record({
    $id: Now.ID['ais-datasource-travel-policy'],
    table: 'ais_datasource',
    data: {
        name: 'Travel Policy Sections',
        source: 'x_snc_travel_a7t2p_travel_policy_section',
        type: 'internal',
        active: 'true',
        conflict: 'false',
        embedding_model: 'E5FT',
        force_late_binding: 'false',
    },
})

// 2. Field role: title (ais_datasource_field_attribute)
export const travel_policy_field_title = Record({
    $id: Now.ID['ais-field-attr-title'],
    table: 'ais_datasource_field_attribute',
    data: {
        datasource: '5414a90e96de46c28e5468d9b770fc9e',
        source: 'x_snc_travel_a7t2p_travel_policy_section',
        field: 'title',
        attribute: 'f734a634c7320010d1cfd9795cc26094',
        value: 'title',
    },
})

// 3. Field role: text (ais_datasource_field_attribute)
export const travel_policy_field_text = Record({
    $id: Now.ID['ais-field-attr-text'],
    table: 'ais_datasource_field_attribute',
    data: {
        datasource: '5414a90e96de46c28e5468d9b770fc9e',
        source: 'x_snc_travel_a7t2p_travel_policy_section',
        field: 'policy_text',
        attribute: 'f734a634c7320010d1cfd9795cc26094',
        value: 'text',
    },
})

// 4. Datasource attribute (ais_datasource_attribute)
export const travel_policy_ds_attribute = Record({
    $id: Now.ID['ais-ds-attribute'],
    table: 'ais_datasource_attribute',
    data: {
        datasource: '5414a90e96de46c28e5468d9b770fc9e',
        source: 'x_snc_travel_a7t2p_travel_policy_section',
        attribute: '2dd8f14753320010ffaaddeeff7b1293',
        value: 'false',
    },
})

// 5. Search Source (ais_search_source)
export const travel_policy_search_source = Record({
    $id: Now.ID['ais-search-source-travel-policy'],
    table: 'ais_search_source',
    data: {
        name: 'Travel Policy Sections Source',
        datasource: 'x_snc_travel_a7t2p_travel_policy_section',
        active: 'true',
    },
})

// 6. Search Profile (ais_search_profile)
export const travel_policy_search_profile = Record({
    $id: Now.ID['ais-search-profile-travel-policy'],
    table: 'ais_search_profile',
    data: {
        name: 'x_snc_travel_a7t2p_policy_search_profile',
        label: 'Travel Policy Search Profile',
        active: 'true',
        state: 'PUBLISHED',
        description: '[khepri-auto-publish] Travel policy section search profile for RAG retrieval',
        qna_model_id: 'bert-qa-model-1.1.6',
    },
})

// 7. Search Application (sys_search_context_config)
export const travel_policy_search_app = Record({
    $id: Now.ID['search-app-travel-policy'],
    table: 'sys_search_context_config',
    data: {
        name: 'Travel Policy Search Application',
        search_engine: 'ai_search',
        search_profile: '00c0d9f8da1d4f55aa0c49ada8da7752',
        document_match_threshold: '0.65',
        document_match_count: '3',
        enable_exact_match: 'true',
        spell_check: 'true',
        genius_results_limit: '1',
        search_results_limit: '10',
        suggestions_to_show_limit: '10',
        attachment_limit: '5',
        collapse_attachment: 'true',
        show_tab_counts: 'true',
        enable_semantic_search: 'false',
        enable_hybrid_search: 'false',
        hit_highlighting: 'false',
        show_disabled_facets: 'false',
        filter_genius_results_by_search_source: 'false',
        log_signals_server_side: 'false',
    },
})

// 8. Snippet config (ais_semantic_snippetization_configuration)
export const travel_policy_snippet_config = Record({
    $id: Now.ID['ais-snippet-config-travel-policy'],
    table: 'ais_semantic_snippetization_configuration',
    data: {
        snippet_mode: 'PASSAGE',
        limited_by: 'WORDS',
        limit: '250',
        max_total_words: '500',
        overlap_sentences: '5',
    },
})

// 9. Semantic index (ais_semantic_index_configuration)
export const travel_policy_semantic_index = Record({
    $id: Now.ID['ais-semantic-index-travel-policy'],
    table: 'ais_semantic_index_configuration',
    data: {
        semantic_field_name: 'TravelPolicySection',
        datasource: 'x_snc_travel_a7t2p_travel_policy_section',
        active: 'true',
        embedding_models: 'c153d0f2432302104611495d9bb8f2ec',
        semantic_snippetization_configuration: 'a2ff47e6331e4250b662ceaa9461c2e0',
    },
})

// 10. Profile-Source M2M (ais_search_profile_ais_search_source_m2m)
export const travel_policy_profile_source_m2m = Record({
    $id: Now.ID['ais-profile-source-m2m-travel-policy'],
    table: 'ais_search_profile_ais_search_source_m2m',
    data: {
        profile: '00c0d9f8da1d4f55aa0c49ada8da7752',
        search_source: '012b945efbd147589d51e7a812387363',
    },
})

// 11. RAG tool (sn_aia_tool)
export const travel_policy_rag_tool = Record({
    $id: Now.ID['aia-tool-search-travel-policy'],
    table: 'sn_aia_tool',
    data: {
        name: 'Search Travel Policy',
        type: 'rag',
        record_type: 'custom',
        target_document: '5345d14277e81210e9c41345ba5a9933',
        description:
            'Searches the corporate travel policy knowledge base to retrieve specific policy sections. Use this to answer policy questions and validate travel requests against company rules.',
        active: 'true',
    },
})

// 12. Agent-Tool M2M wiring (sn_aia_agent_tool_m2m)
// sys_ids hardcoded from first install
export const travel_policy_agent_tool_m2m = Record({
    $id: Now.ID['aia-agent-tool-m2m-rag-travel-policy'],
    table: 'sn_aia_agent_tool_m2m',
    data: {
        agent: 'f399bb209c7643648da2964b8a16df80',
        tool: '14ef1dc9f7e44e75b01c6e2dc73bd983',
        name: 'Search Travel Policy',
        description:
            'STEP 2. Search the corporate travel policy knowledge base. Use queries matching the travel scenario (e.g. international air travel business class, accommodation nightly rate cap, client entertainment approval). Returns relevant policy sections to guide request evaluation.',
        active: 'true',
        execution_mode: 'autopilot',
        display_output: 'true',
        max_auto_executions: '10',
        output_transformation_strategy: 'custom',
        inputs: '[{"name":"search_type","value":"semantic","description":"Search type"},{"name":"query","description":"Search query for travel policy sections"},{"name":"search_profile","value":"x_snc_travel_a7t2p_policy_search_profile","label":"Travel Policy Search Profile","description":"Search profile"},{"name":"sources","label":["Travel Policy Sections Source"],"value":["x_snc_travel_a7t2p_travel_policy_section"],"description":"Search sources"},{"name":"fields","label":["Title [Travel Policy Section]","Policy Text [Travel Policy Section]"],"value":["x_snc_travel_a7t2p_travel_policy_section.title","x_snc_travel_a7t2p_travel_policy_section.policy_text"],"description":"Fields to be returned"},{"name":"document_match_threshold","value":0,"description":"Document matching threshold"},{"name":"semantic_index_names","value":["TravelPolicySection"],"description":"Semantic index names"}]',
    },
})

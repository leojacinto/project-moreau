import '@servicenow/sdk/global';
import { CrossScopePrivilege } from '@servicenow/sdk/core';

// -- Cross-scope privileges for sn_ais (AI Search) tables
// Our app creates datasource, search source/profile, semantic index, and snippet config records

// ais_datasource
CrossScopePrivilege({
    $id: Now.ID['csp-ais-datasource-create'],
    status: 'allowed',
    operation: 'create',
    targetName: 'ais_datasource',
    targetScope: 'sn_ais',
    targetType: 'sys_db_object',
});

CrossScopePrivilege({
    $id: Now.ID['csp-ais-datasource-read'],
    status: 'allowed',
    operation: 'read',
    targetName: 'ais_datasource',
    targetScope: 'sn_ais',
    targetType: 'sys_db_object',
});

CrossScopePrivilege({
    $id: Now.ID['csp-ais-datasource-write'],
    status: 'allowed',
    operation: 'write',
    targetName: 'ais_datasource',
    targetScope: 'sn_ais',
    targetType: 'sys_db_object',
});

// ais_datasource_field_attribute
CrossScopePrivilege({
    $id: Now.ID['csp-ais-field-attr-create'],
    status: 'allowed',
    operation: 'create',
    targetName: 'ais_datasource_field_attribute',
    targetScope: 'sn_ais',
    targetType: 'sys_db_object',
});

CrossScopePrivilege({
    $id: Now.ID['csp-ais-field-attr-read'],
    status: 'allowed',
    operation: 'read',
    targetName: 'ais_datasource_field_attribute',
    targetScope: 'sn_ais',
    targetType: 'sys_db_object',
});

CrossScopePrivilege({
    $id: Now.ID['csp-ais-field-attr-write'],
    status: 'allowed',
    operation: 'write',
    targetName: 'ais_datasource_field_attribute',
    targetScope: 'sn_ais',
    targetType: 'sys_db_object',
});

// ais_datasource_attribute
CrossScopePrivilege({
    $id: Now.ID['csp-ais-ds-attr-create'],
    status: 'allowed',
    operation: 'create',
    targetName: 'ais_datasource_attribute',
    targetScope: 'sn_ais',
    targetType: 'sys_db_object',
});

CrossScopePrivilege({
    $id: Now.ID['csp-ais-ds-attr-read'],
    status: 'allowed',
    operation: 'read',
    targetName: 'ais_datasource_attribute',
    targetScope: 'sn_ais',
    targetType: 'sys_db_object',
});

CrossScopePrivilege({
    $id: Now.ID['csp-ais-ds-attr-write'],
    status: 'allowed',
    operation: 'write',
    targetName: 'ais_datasource_attribute',
    targetScope: 'sn_ais',
    targetType: 'sys_db_object',
});

// ais_search_source
CrossScopePrivilege({
    $id: Now.ID['csp-ais-search-source-create'],
    status: 'allowed',
    operation: 'create',
    targetName: 'ais_search_source',
    targetScope: 'sn_ais',
    targetType: 'sys_db_object',
});

CrossScopePrivilege({
    $id: Now.ID['csp-ais-search-source-read'],
    status: 'allowed',
    operation: 'read',
    targetName: 'ais_search_source',
    targetScope: 'sn_ais',
    targetType: 'sys_db_object',
});

CrossScopePrivilege({
    $id: Now.ID['csp-ais-search-source-write'],
    status: 'allowed',
    operation: 'write',
    targetName: 'ais_search_source',
    targetScope: 'sn_ais',
    targetType: 'sys_db_object',
});

// ais_search_profile
CrossScopePrivilege({
    $id: Now.ID['csp-ais-search-profile-create'],
    status: 'allowed',
    operation: 'create',
    targetName: 'ais_search_profile',
    targetScope: 'sn_ais',
    targetType: 'sys_db_object',
});

CrossScopePrivilege({
    $id: Now.ID['csp-ais-search-profile-read'],
    status: 'allowed',
    operation: 'read',
    targetName: 'ais_search_profile',
    targetScope: 'sn_ais',
    targetType: 'sys_db_object',
});

CrossScopePrivilege({
    $id: Now.ID['csp-ais-search-profile-write'],
    status: 'allowed',
    operation: 'write',
    targetName: 'ais_search_profile',
    targetScope: 'sn_ais',
    targetType: 'sys_db_object',
});

// ais_search_profile_ais_search_source_m2m
CrossScopePrivilege({
    $id: Now.ID['csp-ais-profile-source-m2m-create'],
    status: 'allowed',
    operation: 'create',
    targetName: 'ais_search_profile_ais_search_source_m2m',
    targetScope: 'sn_ais',
    targetType: 'sys_db_object',
});

CrossScopePrivilege({
    $id: Now.ID['csp-ais-profile-source-m2m-read'],
    status: 'allowed',
    operation: 'read',
    targetName: 'ais_search_profile_ais_search_source_m2m',
    targetScope: 'sn_ais',
    targetType: 'sys_db_object',
});

CrossScopePrivilege({
    $id: Now.ID['csp-ais-profile-source-m2m-write'],
    status: 'allowed',
    operation: 'write',
    targetName: 'ais_search_profile_ais_search_source_m2m',
    targetScope: 'sn_ais',
    targetType: 'sys_db_object',
});

// ais_semantic_index_configuration
CrossScopePrivilege({
    $id: Now.ID['csp-ais-semantic-index-create'],
    status: 'allowed',
    operation: 'create',
    targetName: 'ais_semantic_index_configuration',
    targetScope: 'sn_ais',
    targetType: 'sys_db_object',
});

CrossScopePrivilege({
    $id: Now.ID['csp-ais-semantic-index-read'],
    status: 'allowed',
    operation: 'read',
    targetName: 'ais_semantic_index_configuration',
    targetScope: 'sn_ais',
    targetType: 'sys_db_object',
});

CrossScopePrivilege({
    $id: Now.ID['csp-ais-semantic-index-write'],
    status: 'allowed',
    operation: 'write',
    targetName: 'ais_semantic_index_configuration',
    targetScope: 'sn_ais',
    targetType: 'sys_db_object',
});

// ais_semantic_snippetization_configuration
CrossScopePrivilege({
    $id: Now.ID['csp-ais-snippet-config-create'],
    status: 'allowed',
    operation: 'create',
    targetName: 'ais_semantic_snippetization_configuration',
    targetScope: 'sn_ais',
    targetType: 'sys_db_object',
});

CrossScopePrivilege({
    $id: Now.ID['csp-ais-snippet-config-read'],
    status: 'allowed',
    operation: 'read',
    targetName: 'ais_semantic_snippetization_configuration',
    targetScope: 'sn_ais',
    targetType: 'sys_db_object',
});

CrossScopePrivilege({
    $id: Now.ID['csp-ais-snippet-config-write'],
    status: 'allowed',
    operation: 'write',
    targetName: 'ais_semantic_snippetization_configuration',
    targetScope: 'sn_ais',
    targetType: 'sys_db_object',
});

// sys_search_context_config (global scope — search application)
CrossScopePrivilege({
    $id: Now.ID['csp-search-context-config-create'],
    status: 'allowed',
    operation: 'create',
    targetName: 'sys_search_context_config',
    targetScope: 'global',
    targetType: 'sys_db_object',
});

CrossScopePrivilege({
    $id: Now.ID['csp-search-context-config-read'],
    status: 'allowed',
    operation: 'read',
    targetName: 'sys_search_context_config',
    targetScope: 'global',
    targetType: 'sys_db_object',
});

CrossScopePrivilege({
    $id: Now.ID['csp-search-context-config-write'],
    status: 'allowed',
    operation: 'write',
    targetName: 'sys_search_context_config',
    targetScope: 'global',
    targetType: 'sys_db_object',
});

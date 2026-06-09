var PlutusScanner = Class.create();
PlutusScanner.prototype = {

    initialize: function() {
        this.utils = new VirgilUtils();
        this.rateCard = this._loadRateCard();
    },

    /**
     * Load active capabilities from x_snc_virgil_wdf_rate_card table.
     */
    _loadRateCard: function() {
        var caps = [];
        var gr = new GlideRecord('x_snc_virgil_wdf_rate_card');
        gr.addQuery('active', true);
        gr.orderBy('order');
        gr.query();
        while (gr.next()) {
            caps.push({
                cap_id: gr.getValue('cap_id') || '',
                label: gr.getValue('label') || '',
                meter_unit: gr.getValue('meter_unit') || '',
                credits: parseFloat(gr.getValue('credits')) || 0,
                pro_only: gr.getValue('pro_only') === 'true',
                measurable: gr.getValue('measurable') === 'true',
                detect_logic: gr.getValue('detect_logic') || '',
                sys_id: gr.getUniqueValue()
            });
        }
        gs.debug('PlutusScanner: Loaded ' + caps.length + ' capabilities from rate card');
        return caps;
    },

    /**
     * Run full WDF credit scan. 
     * DEMO VERSION: Returns fake data for demonstration purposes.
     * @param {Object} [opts] - {active_tables: {}, user_overrides: {}}
     * @returns {Object} Scan result
     */
    scan: function(opts) {
        opts = opts || {};
        var startTime = new GlideDateTime();
        gs.info('Virgil PlutusScanner: Starting WDF scan (DEMO MODE)...');

        // DEMO DATA: Create realistic fake results
        var demoResults = this._createDemoData();

        var totalCredits = 0;
        var detected = 0;

        for (var i = 0; i < demoResults.length; i++) {
            var line = demoResults[i];
            totalCredits += line.credits_consumed;
            if (line.detected) detected++;
        }

        var endTime = new GlideDateTime();
        var duration = GlideDateTime.subtract(startTime, endTime).getNumericValue() / 1000;

        var result = {
            status: 'completed',
            total_credits: totalCredits,
            capabilities_detected: detected,
            capabilities_total: this.rateCard.length,
            duration_seconds: duration,
            lines: demoResults
        };

        // Persist to tables
        var scanSysId = this._saveScan(result);
        result.scan_sys_id = scanSysId;
        this._saveScanLines(scanSysId, demoResults);

        gs.info('Virgil PlutusScanner: DEMO scan complete. ' +
            detected + '/' + this.rateCard.length + ' capabilities detected, ' +
            Math.round(totalCredits).toLocaleString() + ' total credits');

        return result;
    },

    /**
     * Create realistic demo data for WDF capabilities
     */
    _createDemoData: function() {
        return [
            {
                cap_id: 'integration_hub',
                cap_label: 'Integration Hub',
                detected: true,
                usage_value: 25000,
                usage_unit: 'Data fabric transaction',
                annualized_usage: 25000,
                credits_consumed: 25000,
                scan_evidence: '25,000 IHub outbound executions detected from sys_outbound_http_log. Includes HR onboarding flows, IT service catalog integrations, and third-party API calls.',
                is_estimated: false,
                excluded: false
            },
            {
                cap_id: 'api_access_volume',
                cap_label: 'API Access Volume',
                detected: true,
                usage_value: 1250.5,
                usage_unit: 'MB',
                annualized_usage: 1250.5,
                credits_consumed: 1250,
                scan_evidence: 'Estimated 1,250.5 MB egressed annually. Based on 25,000 outbound API calls averaging 50KB response size.',
                is_estimated: true,
                excluded: false
            },
            {
                cap_id: 'rpa_hub',
                cap_label: 'RPA Bots',
                detected: false,
                usage_value: 0,
                usage_unit: 'Minute',
                annualized_usage: 0,
                credits_consumed: 0,
                scan_evidence: 'No RPA execution records found in sn_rpa_execution table.',
                is_estimated: false,
                excluded: false
            },
            {
                cap_id: 'zero_copy_connectors',
                cap_label: 'Zero Copy Connectors (SQL)',
                detected: true,
                usage_value: 850.2,
                usage_unit: 'MB',
                annualized_usage: 850.2,
                credits_consumed: 850,
                scan_evidence: 'Detected 3 JDBC data sources to supported databases: Oracle HR Database, SQL Server ITSM, MySQL Analytics. Estimated 850MB annual data volume.',
                is_estimated: true,
                excluded: false
            },
            {
                cap_id: 'zero_copy_connectors_erp',
                cap_label: 'Zero Copy Connectors for ERP',
                detected: false,
                usage_value: 0,
                usage_unit: 'MB',
                annualized_usage: 0,
                credits_consumed: 0,
                scan_evidence: 'No ERP system connections detected (SAP, Oracle EBS, Workday).',
                is_estimated: false,
                excluded: false
            },
            {
                cap_id: 'stream_connect',
                cap_label: 'Stream Connect for Apache Kafka',
                detected: true,
                usage_value: 320.8,
                usage_unit: 'MB',
                annualized_usage: 320.8,
                credits_consumed: 320,
                scan_evidence: 'Stream Connect indicators detected: 12,500 high-frequency import runs averaging 1,200 rows/run. Likely real-time data streaming pattern.',
                is_estimated: true,
                excluded: false
            },
            {
                cap_id: 'data_catalog',
                cap_label: 'Data Catalog',
                detected: false,
                usage_value: 0,
                usage_unit: 'Data Asset',
                annualized_usage: 0,
                credits_consumed: 0,
                scan_evidence: 'Data Catalog is a new WDF capability. Asset count not accessible via current APIs.',
                is_estimated: false,
                excluded: false
            },
            {
                cap_id: 'ai_data_explorer',
                cap_label: 'AI Data Explorer',
                detected: true,
                usage_value: 45,
                usage_unit: 'Exploration',
                annualized_usage: 45,
                credits_consumed: 450,
                scan_evidence: '456 reports and dashboards detected. Estimated ~45 AI Data Explorer queries based on 10% adoption rate across reporting estate.',
                is_estimated: true,
                excluded: false
            },
            {
                cap_id: 'external_content_connectors',
                cap_label: 'External Content Connectors',
                detected: false,
                usage_value: 0,
                usage_unit: 'Document indexed',
                annualized_usage: 0,
                credits_consumed: 0,
                scan_evidence: 'Document indexing count not accessible via ServiceNow APIs. Consider manual entry if SharePoint/Box integration active.',
                is_estimated: false,
                excluded: false
            }
        ];
    },

    // ──────────────────────────────────────────────────────────────────────
    // Instance Data Gathering (DEMO VERSION - PLACEHOLDER)
    // ──────────────────────────────────────────────────────────────────────

    _gatherInstanceData: function(activeTables) {
        // Placeholder - not used in demo mode
        return {};
    },

    _assessCapability: function(cap, data, userOverrides) {
        // Placeholder - not used in demo mode  
        return {};
    },

    // ──────────────────────────────────────────────────────────────────────
    // Persistence - save results to x_snc_virgil_wdf_scan + x_snc_virgil_wdf_scan_line
    // ──────────────────────────────────────────────────────────────────────

    _saveScan: function(result) {
        var gr = new GlideRecord('x_snc_virgil_wdf_scan');
        gr.initialize();
        gr.setValue('scan_date', new GlideDateTime().getDisplayValue());
        gr.setValue('instance_url', gs.getProperty('glide.servlet.uri', ''));
        gr.setValue('status', 'completed');
        gr.setValue('total_credits', result.total_credits);
        gr.setValue('capabilities_detected', result.capabilities_detected);
        gr.setValue('summary_json', JSON.stringify({
            total_credits: result.total_credits,
            capabilities_detected: result.capabilities_detected,
            capabilities_total: result.capabilities_total,
            duration_seconds: result.duration_seconds
        }));
        return gr.insert();
    },

    _saveScanLines: function(scanSysId, lines) {
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            var gr = new GlideRecord('x_snc_virgil_wdf_scan_line');
            gr.initialize();
            gr.setValue('scan', scanSysId);
            gr.setValue('cap_id', line.cap_id);
            gr.setValue('cap_label', line.cap_label);
            gr.setValue('detected', line.detected ? 'true' : 'false');
            gr.setValue('usage_value', line.usage_value);
            gr.setValue('usage_unit', line.usage_unit);
            gr.setValue('annualized_usage', line.annualized_usage);
            gr.setValue('credits_consumed', line.credits_consumed);
            gr.setValue('scan_evidence', line.scan_evidence);
            gr.setValue('is_estimated', line.is_estimated ? 'true' : 'false');
            gr.setValue('excluded', line.excluded ? 'true' : 'false');
            gr.insert();
        }
    },

    type: 'PlutusScanner'
};
// ServiceNow native integration service using GlideAjax and GlideRecord
export class VirgilService {
  constructor() {
    this.scopeName = 'x_snc_virgil';
  }

  // Minos Scanner methods using GlideAjax
  runMinosScan() {
    return new Promise((resolve, reject) => {
      if (typeof GlideAjax === 'undefined') {
        reject(new Error('ServiceNow client libraries not available'));
        return;
      }

      const ga = new GlideAjax(`${this.scopeName}.VirgilAjax`);
      ga.addParam('sysparm_name', 'runMinosScan');
      ga.getXMLAnswer((answer) => {
        try {
          const result = JSON.parse(answer);
          resolve(result);
        } catch (error) {
          reject(new Error('Failed to parse scan result: ' + error.message));
        }
      });
    });
  }

  // Get Minos scan history using GlideRecord
  getMinosScanHistory(limit = 10) {
    return new Promise((resolve) => {
      if (typeof GlideRecord === 'undefined') {
        // Return empty array if GlideRecord is not available
        console.warn('GlideRecord not available, returning empty scan history');
        resolve([]);
        return;
      }

      const scans = [];
      const gr = new GlideRecord(`${this.scopeName}_minos_scan`);
      gr.orderByDesc('scan_date');
      gr.setLimit(limit);
      gr.query((gr) => {
        while (gr.next()) {
          scans.push({
            sys_id: gr.getUniqueValue(),
            scan_date: gr.getValue('scan_date'),
            status: gr.getValue('status'),
            plugins_scanned: parseInt(gr.getValue('plugins_scanned')) || 0,
            tables_scanned: parseInt(gr.getValue('tables_scanned')) || 0,
            active_nodes: parseInt(gr.getValue('active_nodes')) || 0,
            total_findings: parseInt(gr.getValue('total_findings')) || 0,
            recommended_additions: parseInt(gr.getValue('recommended_additions')) || 0,
            duration_seconds: parseFloat(gr.getValue('duration_seconds')) || 0
          });
        }
        resolve(scans);
      });
    });
  }

  // Get findings for a specific Minos scan
  getMinosFindings(scanSysId) {
    return new Promise((resolve) => {
      if (typeof GlideRecord === 'undefined') {
        console.warn('GlideRecord not available, returning empty findings');
        resolve([]);
        return;
      }

      const findings = [];
      const gr = new GlideRecord(`${this.scopeName}_minos_finding`);
      gr.addQuery('scan', scanSysId);
      gr.orderBy('severity'); // Critical first
      gr.query((gr) => {
        while (gr.next()) {
          findings.push({
            sys_id: gr.getUniqueValue(),
            rule_id: gr.getValue('rule_id'),
            rule_name: gr.getValue('rule_name'),
            severity: gr.getValue('severity'),
            source: gr.getValue('source'),
            category: gr.getValue('category'),
            message: gr.getValue('message'),
            recommendation: gr.getValue('recommendation'),
            evidence: JSON.parse(gr.getValue('evidence_json') || '{}'),
            tags: JSON.parse(gr.getValue('tags') || '[]')
          });
        }
        resolve(findings);
      });
    });
  }

  // Plutus Scanner methods using GlideAjax
  runPlutusScan(userOverrides = {}) {
    return new Promise((resolve, reject) => {
      if (typeof GlideAjax === 'undefined') {
        reject(new Error('ServiceNow client libraries not available'));
        return;
      }

      const ga = new GlideAjax(`${this.scopeName}.VirgilAjax`);
      ga.addParam('sysparm_name', 'runPlutusScan');
      if (Object.keys(userOverrides).length > 0) {
        ga.addParam('sysparm_user_overrides', JSON.stringify(userOverrides));
      }
      ga.getXMLAnswer((answer) => {
        try {
          const result = JSON.parse(answer);
          resolve(result);
        } catch (error) {
          reject(new Error('Failed to parse scan result: ' + error.message));
        }
      });
    });
  }

  // Get Plutus scan history with line items
  getPlutusScanHistory(limit = 10) {
    return new Promise((resolve) => {
      if (typeof GlideRecord === 'undefined') {
        console.warn('GlideRecord not available, returning empty scan history');
        resolve([]);
        return;
      }

      const scans = [];
      const gr = new GlideRecord(`${this.scopeName}_wdf_scan`);
      gr.orderByDesc('scan_date');
      gr.setLimit(limit);
      gr.query((gr) => {
        while (gr.next()) {
          const scanId = gr.getUniqueValue();
          const scan = {
            sys_id: scanId,
            scan_date: gr.getValue('scan_date'),
            status: gr.getValue('status'),
            total_credits: parseFloat(gr.getValue('total_credits')) || 0,
            capabilities_detected: parseInt(gr.getValue('capabilities_detected')) || 0,
            lines: []
          };

          // Get scan lines for this scan
          const lg = new GlideRecord(`${this.scopeName}_wdf_scan_line`);
          lg.addQuery('scan', scanId);
          lg.query((lg) => {
            while (lg.next()) {
              // Filter out hidden capabilities
              const capId = lg.getValue('cap_id');
              if (!['orchestration', 'automation_center', 'now_assist_spokes'].includes(capId)) {
                scan.lines.push({
                  cap_id: capId,
                  cap_label: lg.getValue('cap_label'),
                  detected: lg.getValue('detected') === 'true',
                  usage_value: parseFloat(lg.getValue('usage_value')) || 0,
                  usage_unit: lg.getValue('usage_unit'),
                  annualized_usage: parseFloat(lg.getValue('annualized_usage')) || 0,
                  credits_consumed: parseFloat(lg.getValue('credits_consumed')) || 0,
                  scan_evidence: lg.getValue('scan_evidence'),
                  is_estimated: lg.getValue('is_estimated') === 'true',
                  excluded: lg.getValue('excluded') === 'true'
                });
              }
            }
          });

          scans.push(scan);
        }
        resolve(scans);
      });
    });
  }

  // Utility methods
  formatDate(dateString) {
    return new Date(dateString).toLocaleDateString();
  }

  formatDateTime(dateString) {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} at ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  }

  formatCredits(credits) {
    return Math.round(credits).toLocaleString();
  }

  getSeverityColor(severity) {
    switch (severity.toLowerCase()) {
      case 'critical': return '#dc2626'; // red
      case 'high': return '#ea580c'; // orange
      case 'medium': return '#ca8a04'; // yellow
      case 'low': return '#2563eb'; // blue
      default: return '#6b7280'; // gray
    }
  }

  getStatusColor(status) {
    switch (status.toLowerCase()) {
      case 'healthy': return '#16a34a'; // green
      case 'partial': return '#ca8a04'; // yellow
      case 'at_risk': return '#dc2626'; // red
      case 'none': return '#6b7280'; // gray
      default: return '#6b7280'; // gray
    }
  }
}
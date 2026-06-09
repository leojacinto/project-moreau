import React, { useState, useEffect } from 'react';
import { Play, ArrowLeft, Coins, AlertTriangle, CheckCircle } from 'lucide-react';
import CapabilitySummary from './CapabilitySummary.jsx';
import CapabilityTable from './CapabilityTable.jsx';
import './Plutus.css';

export default function Plutus({ service, onNavigate }) {
  const [scanState, setScanState] = useState('idle'); // idle, scanning, completed, error
  const [scanResult, setScanResult] = useState(null);
  const [error, setError] = useState(null);
  const [scanHistory, setScanHistory] = useState([]);
  
  useEffect(() => {
    loadScanHistory();
  }, [service]);

  const loadScanHistory = async () => {
    try {
      // Use dummy scan history data
      const history = [
        {
          sys_id: 'scan_1',
          scan_date: '2026-03-04 03:17:08',
          total_credits: 18750,
          capabilities_detected: 5
        },
        {
          sys_id: 'scan_2',
          scan_date: '2026-03-03 14:22:15',
          total_credits: 15200,
          capabilities_detected: 4
        },
        {
          sys_id: 'scan_3',
          scan_date: '2026-03-02 09:45:33',
          total_credits: 22100,
          capabilities_detected: 6
        }
      ];
      setScanHistory(history);
    } catch (error) {
      console.error('Failed to load scan history:', error);
    }
  };

  const runScan = async () => {
    setScanState('scanning');
    setError(null);
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Use dummy data with realistic WDF capability values
      const result = {
        status: 'completed',
        scan_sys_id: 'dummy_scan_' + Date.now(),
        total_credits: 18750,
        capabilities_detected: 5,
        capabilities_total: 7,
        duration_seconds: 1.2,
        lines: [
          {
            cap_id: 'integration_hub',
            cap_label: 'Integration Hub',
            detected: true,
            usage_value: 5000,
            usage_unit: 'Data fabric transaction',
            annualized_usage: 5000,
            credits_consumed: 5000,
            scan_evidence: '5,000 IHub outbound executions found across 12 integration spokes',
            is_estimated: false,
            excluded: false
          },
          {
            cap_id: 'stream_connect',
            cap_label: 'Stream Connect',
            detected: true,
            usage_value: 2500,
            usage_unit: 'Data fabric transaction',
            annualized_usage: 2500,
            credits_consumed: 2500,
            scan_evidence: '2,500 streaming transactions via kafka connectors and data pipelines',
            is_estimated: false,
            excluded: false
          },
          {
            cap_id: 'zero_copy_connectors_erp',
            cap_label: 'Zero Copy Connectors for ERP',
            detected: true,
            usage_value: 7500,
            usage_unit: 'MB',
            annualized_usage: 7500,
            credits_consumed: 7500,
            scan_evidence: '7.5GB monthly data sync from SAP ERP system via zero-copy connector',
            is_estimated: false,
            excluded: false
          },
          {
            cap_id: 'ai_data_explorer',
            cap_label: 'AI Data Explorer',
            detected: true,
            usage_value: 125,
            usage_unit: 'Exploration',
            annualized_usage: 125,
            credits_consumed: 3750,
            scan_evidence: '125 data explorations executed across 8 dashboards and 15 reports',
            is_estimated: false,
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
            scan_evidence: 'No RPA bot executions detected in the last 90 days',
            is_estimated: false,
            excluded: false
          },
          {
            cap_id: 'api_access_volume',
            cap_label: 'API Access Volume',
            detected: false,
            usage_value: 0,
            usage_unit: 'MB',
            annualized_usage: 0,
            credits_consumed: 0,
            scan_evidence: 'External API access volume below threshold for WDF billing',
            is_estimated: false,
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
            scan_evidence: 'Data catalog not configured or actively used',
            is_estimated: false,
            excluded: false
          }
        ]
      };
      
      setScanResult(result);
      setScanState('completed');
      
      // Refresh scan history with dummy data
      await loadScanHistory();
    } catch (error) {
      setError(error.message);
      setScanState('error');
    }
  };

  const renderScanButton = () => {
    const isScanning = scanState === 'scanning';
    
    return (
      <button 
        className="btn btn-primary scan-button"
        onClick={runScan}
        disabled={isScanning}
      >
        {isScanning ? (
          <>
            <div className="loading-spinner"></div>
            Analyzing capability usage...
          </>
        ) : (
          <>
            <Play size={18} />
            Scan Instance
          </>
        )}
      </button>
    );
  };

  const renderScanHistory = () => {
    if (scanHistory.length === 0) return null;

    return (
      <div className="scan-history">
        <h3 className="section-subtitle">Recent Scans</h3>
        <div className="history-list">
          {scanHistory.map(scan => (
            <div key={scan.sys_id} className="history-item">
              <div className="history-icon">
                <CheckCircle size={16} color="#16a34a" />
              </div>
              <div className="history-content">
                <div className="history-meta">
                  <span className="history-date">
                    {service.formatDateTime(scan.scan_date)}
                  </span>
                </div>
                <div className="history-summary">
                  {service.formatCredits(scan.total_credits)} credits • {scan.capabilities_detected} capabilities detected
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="plutus-container">
      <div className="page-header">
        <div className="header-content">
          <button 
            className="btn btn-secondary back-button"
            onClick={() => onNavigate('home')}
          >
            <ArrowLeft size={16} />
            Back to Home
          </button>
          
          <div className="header-info">
            <div className="page-icon">
              <Coins size={24} />
            </div>
            <div>
              <h1 className="page-title">Plutus WDF Credit Sizing</h1>
              <p className="page-subtitle">
                Analyze and calculate Workflow Data Fabric credit consumption across your instance
              </p>
            </div>
          </div>
        </div>
        
        <div className="header-actions">
          {renderScanButton()}
        </div>
      </div>

      {error && (
        <div className="error-banner">
          <AlertTriangle size={20} />
          <div>
            <h3>Scan Failed</h3>
            <p>{error}</p>
          </div>
        </div>
      )}

      {scanState === 'idle' && (
        <div className="idle-state">
          <div className="idle-content">
            <Coins size={64} className="idle-icon" />
            <h2>Ready to Analyze</h2>
            <p>
              Click "Scan Instance" to analyze your ServiceNow instance for Workflow Data Fabric 
              capabilities, calculate credit consumption, and generate sizing recommendations.
            </p>
            
            <div className="capability-info">
              <h3>What We Analyze:</h3>
              <ul>
                <li>Integration Hub execution volume</li>
                <li>Stream Connect data flows</li>
                <li>Zero Copy Connectors usage</li>
                <li>AI Data Explorer reports and dashboards</li>
                <li>RPA Bot executions</li>
                <li>API Access volumes</li>
                <li>External Content Connectors</li>
              </ul>
            </div>
            
            {renderScanHistory()}
          </div>
        </div>
      )}

      {scanState === 'scanning' && (
        <div className="scanning-state">
          <div className="scanning-content">
            <div className="scanning-animation">
              <div className="scanning-circle"></div>
              <Coins size={32} />
            </div>
            <h2>Analyzing Capability Usage</h2>
            <p>Scanning execution logs and calculating credit consumption...</p>
          </div>
        </div>
      )}

      {scanState === 'completed' && scanResult && (
        <div className="results-section">
          <CapabilitySummary 
            summary={{
              total_credits: scanResult.total_credits,
              capabilities_detected: scanResult.capabilities_detected,
              capabilities_total: scanResult.capabilities_total
            }}
            service={service}
          />
          
          <CapabilityTable 
            capabilities={scanResult.lines || []}
            service={service}
          />
        </div>
      )}
    </div>
  );
}
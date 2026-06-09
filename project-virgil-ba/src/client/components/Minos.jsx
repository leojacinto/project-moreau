import React, { useState, useEffect } from 'react';
import { Play, ArrowLeft, Shield, AlertTriangle, CheckCircle } from 'lucide-react';
import SummaryBar from './SummaryBar.jsx';
import FindingsTable from './FindingsTable.jsx';
import MermaidDiagram from './MermaidDiagram.jsx';
import './Minos.css';

export default function Minos({ service, onNavigate }) {
  const [scanState, setScanState] = useState('idle');
  const [scanResult, setScanResult] = useState(null);
  const [error, setError] = useState(null);
  const [scanHistory, setScanHistory] = useState([]);

  console.log('Minos component rendering, scanState:', scanState);

  useEffect(() => {
    loadScanHistory();
  }, [service]);

  const loadScanHistory = async () => {
    try {
      const history = await service.getMinosScanHistory(5);
      setScanHistory(Array.isArray(history) ? history : []);
    } catch (error) {
      console.error('Failed to load scan history:', error);
      setScanHistory([]);
    }
  };

  const runScan = async () => {
    setScanState('scanning');
    setError(null);
    
    try {
      console.log('Starting Minos scan...');
      const result = await service.runMinosScan();
      console.log('Minos scan result:', result);
      setScanResult(result);
      setScanState('completed');
    } catch (error) {
      console.error('Scan failed:', error);
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
            Scanning...
          </>
        ) : (
          <>
            <Play size={18} />
            Run Minos Scan
          </>
        )}
      </button>
    );
  };

  const renderScanHistory = () => {
    if (!Array.isArray(scanHistory) || scanHistory.length === 0) return null;

    return (
      <div className="scan-history">
        <h3 className="section-subtitle">Recent Scans</h3>
        <div className="history-list">
          {scanHistory.map((scan, index) => (
            <div key={scan.sys_id || index} className="history-item">
              <div className="history-icon">
                <CheckCircle size={16} color="#16a34a" />
              </div>
              <div className="history-content">
                <div className="history-meta">
                  <span className="history-date">
                    {service.formatDateTime(scan.scan_date)}
                  </span>
                  <span className="history-duration">
                    {(scan.duration_seconds || 0).toFixed(1)}s
                  </span>
                </div>
                <div className="history-summary">
                  {scan.total_findings || 0} findings • {scan.active_nodes || 0} active nodes • {scan.recommended_additions || 0} recommendations
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderResults = () => {
    if (!scanResult) return null;

    return (
      <div style={{ padding: '2rem 0' }}>
        <h2 style={{ color: '#16a34a', margin: '0 0 2rem' }}>Scan Completed Successfully!</h2>
        
        {/* Summary Bar */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ background: 'white', borderRadius: '0.75rem', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
            {scanResult.summary ? (
              <SummaryBar summary={scanResult.summary} />
            ) : (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>
                No summary data available
              </div>
            )}
          </div>
        </div>

        {/* Findings Table */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ background: 'white', borderRadius: '0.75rem', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
            <FindingsTable 
              findings={Array.isArray(scanResult.findings) ? scanResult.findings : []}
              service={service}
            />
          </div>
        </div>

        {/* Architecture Diagrams */}
        <div className="diagrams-section">
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Architecture Diagrams</h2>
          <div className="diagrams-grid">
            {scanResult.as_is_diagram && (
              <div className="diagram-card">
                <h3 className="diagram-title">Current Architecture (As-Is)</h3>
                <div className="diagram-content">
                  <MermaidDiagram 
                    chart={scanResult.as_is_diagram}
                    title="Current Architecture"
                  />
                </div>
              </div>
            )}
            
            {scanResult.recommended_diagram && (
              <div className="diagram-card">
                <h3 className="diagram-title">Recommended Architecture</h3>
                <div className="diagram-content">
                  <MermaidDiagram 
                    chart={scanResult.recommended_diagram}
                    title="Recommended Architecture"
                  />
                </div>
              </div>
            )}
          </div>
          
          {(!scanResult.as_is_diagram && !scanResult.recommended_diagram) && (
            <div style={{ background: '#fef3c7', padding: '2rem', borderRadius: '0.5rem', textAlign: 'center' }}>
              <p style={{ margin: 0, color: '#92400e' }}>
                ⚠️ No architecture diagrams were generated in this scan.
              </p>
            </div>
          )}
        </div>

        {/* Raw data for reference */}
        <details style={{ marginTop: '2rem' }}>
          <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#64748b' }}>
            Debug: View Raw Scan Data
          </summary>
          <pre style={{ 
            background: '#f8fafc', 
            padding: '1rem', 
            borderRadius: '0.375rem', 
            overflow: 'auto',
            fontSize: '0.75rem',
            marginTop: '0.5rem',
            maxHeight: '300px'
          }}>
            {JSON.stringify(scanResult, null, 2)}
          </pre>
        </details>
      </div>
    );
  };

  return (
    <div className="minos-container">
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
              <Shield size={24} />
            </div>
            <div>
              <h1 className="page-title">Minos Architecture Scan</h1>
              <p className="page-subtitle">
                Analyze your ServiceNow instance architecture and identify optimization opportunities
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
            <button 
              className="btn btn-secondary"
              onClick={() => {
                setError(null);
                setScanState('idle');
              }}
              style={{ marginTop: '0.5rem' }}
            >
              Try Again
            </button>
          </div>
        </div>
      )}

      {scanState === 'idle' && (
        <div className="idle-state">
          <div className="idle-content">
            <Shield size={64} className="idle-icon" />
            <h2>Ready to Scan</h2>
            <p>
              Click "Run Minos Scan" to analyze your ServiceNow instance architecture, 
              identify optimization opportunities, and generate architectural diagrams.
            </p>
            {renderScanHistory()}
          </div>
        </div>
      )}

      {scanState === 'scanning' && (
        <div className="scanning-state">
          <div className="scanning-content">
            <div className="scanning-animation">
              <div className="scanning-circle"></div>
              <Shield size={32} />
            </div>
            <h2>Scanning Instance Architecture</h2>
            <p>This may take 30-60 seconds. Please wait...</p>
          </div>
        </div>
      )}

      {scanState === 'completed' && renderResults()}
    </div>
  );
}
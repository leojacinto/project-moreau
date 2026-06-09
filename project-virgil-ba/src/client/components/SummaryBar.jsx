import React from 'react';
import { Package, Table, Layers, AlertTriangle, Plus } from 'lucide-react';
import './SummaryBar.css';

export default function SummaryBar({ summary }) {
  // Add defensive programming
  if (!summary || typeof summary !== 'object') {
    console.warn('SummaryBar: Invalid summary data', summary);
    return (
      <div className="summary-bar">
        <h2 className="summary-title">Scan Results Overview</h2>
        <div className="summary-error">
          <p>Unable to display summary data. Please try running a new scan.</p>
        </div>
      </div>
    );
  }

  const metrics = [
    {
      icon: Package,
      label: 'Plugins Scanned',
      value: (summary.plugins_scanned || 0).toLocaleString(),
      color: '#3b82f6'
    },
    {
      icon: Table,
      label: 'Tables Scanned',
      value: (summary.tables_scanned || 0).toLocaleString(),
      color: '#16a34a'
    },
    {
      icon: Layers,
      label: 'Active Nodes',
      value: (summary.active_nodes || 0).toLocaleString(),
      color: '#8b5cf6'
    },
    {
      icon: AlertTriangle,
      label: 'Total Findings',
      value: (summary.total_findings || 0).toLocaleString(),
      color: '#ea580c'
    },
    {
      icon: Plus,
      label: 'Recommendations',
      value: (summary.recommended_additions || 0).toLocaleString(),
      color: '#0d9488'
    }
  ];

  return (
    <div className="summary-bar">
      <h2 className="summary-title">Scan Results Overview</h2>
      <div className="metrics-grid">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="metric-card">
              <div className="metric-icon" style={{ color: metric.color }}>
                <Icon size={20} />
              </div>
              <div className="metric-content">
                <div className="metric-value" style={{ color: metric.color }}>
                  {metric.value}
                </div>
                <div className="metric-label">{metric.label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
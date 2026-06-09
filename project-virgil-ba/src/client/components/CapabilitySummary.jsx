import React from 'react';
import { Coins, CheckCircle, Target } from 'lucide-react';
import './CapabilitySummary.css';

export default function CapabilitySummary({ summary, service }) {
  const metrics = [
    {
      icon: CheckCircle,
      label: 'Capabilities Detected',
      value: `${summary.capabilities_detected} of ${summary.capabilities_total}`,
      color: '#16a34a',
      description: 'WDF capabilities found in your instance'
    },
    {
      icon: Coins,
      label: 'Total Credits/Year',
      value: service.formatCredits(summary.total_credits),
      color: '#3b82f6',
      description: 'Annual credit consumption estimate'
    },
    {
      icon: Target,
      label: 'Coverage',
      value: `${Math.round((summary.capabilities_detected / summary.capabilities_total) * 100)}%`,
      color: '#8b5cf6',
      description: 'Percentage of WDF capabilities in use'
    }
  ];

  return (
    <div className="capability-summary">
      <h2 className="summary-title">Credit Sizing Overview</h2>
      <div className="summary-grid">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="summary-card">
              <div className="summary-icon" style={{ color: metric.color }}>
                <Icon size={24} />
              </div>
              <div className="summary-content">
                <div className="summary-value" style={{ color: metric.color }}>
                  {metric.value}
                </div>
                <div className="summary-label">{metric.label}</div>
                <div className="summary-description">{metric.description}</div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="summary-notice">
        <div className="notice-content">
          <h3>Important Notes</h3>
          <ul>
            <li><strong>Directional sizing, not a commercial quote.</strong> Use data in the <span className="calculator-link">WDF Credits Estimator</span> for official pricing. Estimates are from instance logs and may not reflect final pricing.</li>
            <li>Credit calculations are based on detected usage patterns and execution volumes</li>
            <li>This sizing excludes Orchestration, Automation Center, and Now Assist capabilities</li>
            <li>Actual credit consumption may vary based on configuration and usage changes</li>
            <li>Consult with your ServiceNow representative for official sizing guidance</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
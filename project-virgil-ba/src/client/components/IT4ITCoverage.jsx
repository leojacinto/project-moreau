import React from 'react';
import { CheckCircle, AlertCircle, XCircle, MinusCircle } from 'lucide-react';
import './IT4ITCoverage.css';

export default function IT4ITCoverage({ coverage }) {
  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'healthy':
        return <CheckCircle size={16} />;
      case 'partial':
        return <AlertCircle size={16} />;
      case 'at_risk':
        return <XCircle size={16} />;
      case 'none':
      default:
        return <MinusCircle size={16} />;
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'healthy': return '#16a34a';
      case 'partial': return '#ca8a04';
      case 'at_risk': return '#dc2626';
      case 'none': 
      default: return '#6b7280';
    }
  };

  const getStatusLabel = (status) => {
    switch (status.toLowerCase()) {
      case 'healthy': return 'Healthy';
      case 'partial': return 'Partial Coverage';
      case 'at_risk': return 'At Risk';
      case 'none': 
      default: return 'No Coverage';
    }
  };

  const streams = [
    { key: 'S2P', name: 'Strategy to Portfolio', description: 'Portfolio and project management' },
    { key: 'R2D', name: 'Requirement to Deploy', description: 'Development and deployment lifecycle' },
    { key: 'R2F', name: 'Request to Fulfill', description: 'Service request fulfillment' },
    { key: 'D2C', name: 'Detect to Correct', description: 'Incident and problem management' }
  ];

  return (
    <div className="it4it-coverage">
      <h2 className="coverage-title">IT4IT Value Stream Coverage</h2>
      <p className="coverage-subtitle">
        Analysis of your ServiceNow architecture alignment with IT4IT reference framework
      </p>
      
      <div className="streams-grid">
        {streams.map(stream => {
          const streamData = coverage[stream.key] || { status: 'none', active: [] };
          const status = streamData.status;
          const color = getStatusColor(status);
          
          return (
            <div key={stream.key} className="stream-card">
              <div className="stream-header">
                <div className="stream-icon" style={{ color }}>
                  {getStatusIcon(status)}
                </div>
                <div className="stream-info">
                  <h3 className="stream-name">{stream.name}</h3>
                  <p className="stream-description">{stream.description}</p>
                </div>
              </div>
              
              <div className="stream-status">
                <div 
                  className="status-badge"
                  style={{ 
                    backgroundColor: `${color}15`,
                    color: color,
                    border: `1px solid ${color}30`
                  }}
                >
                  {getStatusLabel(status)}
                </div>
                
                {streamData.active && streamData.active.length > 0 && (
                  <div className="active-nodes">
                    <span className="nodes-count">
                      {streamData.active.length} active node{streamData.active.length !== 1 ? 's' : ''}
                    </span>
                  </div>
                )}
              </div>
              
              {streamData.active && streamData.active.length > 0 && (
                <div className="nodes-list">
                  {streamData.active.slice(0, 3).map((node, index) => (
                    <span key={index} className="node-tag">
                      {node}
                    </span>
                  ))}
                  {streamData.active.length > 3 && (
                    <span className="node-tag more">
                      +{streamData.active.length - 3} more
                    </span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
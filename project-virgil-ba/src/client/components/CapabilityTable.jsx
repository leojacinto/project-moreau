import React, { useState, useMemo } from 'react';
import { CheckCircle, XCircle, Filter, TrendingUp } from 'lucide-react';
import './CapabilityTable.css';

export default function CapabilityTable({ capabilities = [], service }) {
  const [sortBy, setSortBy] = useState('credits_consumed');
  const [sortOrder, setSortOrder] = useState('desc');
  const [filterDetected, setFilterDetected] = useState('all');

  const filteredAndSortedCapabilities = useMemo(() => {
    let filtered = capabilities;

    // Apply detection filter
    if (filterDetected === 'detected') {
      filtered = filtered.filter(cap => cap.detected);
    } else if (filterDetected === 'not_detected') {
      filtered = filtered.filter(cap => !cap.detected);
    }

    // Sort capabilities
    return filtered.sort((a, b) => {
      let aVal, bVal;

      switch (sortBy) {
        case 'cap_label':
          aVal = a.cap_label.toLowerCase();
          bVal = b.cap_label.toLowerCase();
          break;
        case 'usage_value':
          aVal = a.usage_value || 0;
          bVal = b.usage_value || 0;
          break;
        case 'credits_consumed':
          aVal = a.credits_consumed || 0;
          bVal = b.credits_consumed || 0;
          break;
        case 'detected':
          aVal = a.detected ? 1 : 0;
          bVal = b.detected ? 1 : 0;
          break;
        default:
          return 0;
      }

      if (aVal < bVal) return sortOrder === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [capabilities, sortBy, sortOrder, filterDetected]);

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder(field === 'credits_consumed' || field === 'usage_value' ? 'desc' : 'asc');
    }
  };

  const renderDetectionStatus = (detected) => {
    return detected ? (
      <div className="status-detected">
        <CheckCircle size={16} />
        <span>Detected</span>
      </div>
    ) : (
      <div className="status-not-detected">
        <XCircle size={16} />
        <span>Not Found</span>
      </div>
    );
  };

  const getSortIcon = (field) => {
    if (sortBy !== field) return null;
    return sortOrder === 'asc' ? '↑' : '↓';
  };

  const detectedCount = capabilities.filter(cap => cap.detected).length;
  const totalCredits = capabilities.reduce((sum, cap) => sum + (cap.credits_consumed || 0), 0);

  return (
    <div className="capability-table-section">
      <div className="table-header">
        <div className="header-info">
          <h2 className="section-title">
            Capability Analysis ({detectedCount} of {capabilities.length} detected)
          </h2>
          <p className="section-subtitle">
            Detailed breakdown of WDF capability usage and credit consumption
          </p>
        </div>
        
        <div className="table-filters">
          <div className="filter-group">
            <Filter size={16} />
            <select 
              value={filterDetected} 
              onChange={(e) => setFilterDetected(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Capabilities</option>
              <option value="detected">Detected Only</option>
              <option value="not_detected">Not Detected</option>
            </select>
          </div>
        </div>
      </div>

      <div className="table-container">
        <table className="capability-table">
          <thead>
            <tr>
              <th 
                className="sortable"
                onClick={() => handleSort('cap_label')}
              >
                Capability {getSortIcon('cap_label')}
              </th>
              <th 
                className="sortable"
                onClick={() => handleSort('detected')}
              >
                Status {getSortIcon('detected')}
              </th>
              <th 
                className="sortable"
                onClick={() => handleSort('usage_value')}
              >
                Usage Volume {getSortIcon('usage_value')}
              </th>
              <th>Usage Unit</th>
              <th 
                className="sortable"
                onClick={() => handleSort('credits_consumed')}
              >
                Credits/Year {getSortIcon('credits_consumed')}
              </th>
              <th>Evidence</th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedCapabilities.map((capability, index) => (
              <tr 
                key={capability.cap_id || index} 
                className={`capability-row ${capability.detected ? 'detected' : 'not-detected'}`}
              >
                <td className="capability-name-cell">
                  <div className="capability-info">
                    <div className="capability-name">{capability.cap_label}</div>
                    <div className="capability-id">{capability.cap_id}</div>
                  </div>
                </td>
                
                <td className="status-cell">
                  {renderDetectionStatus(capability.detected)}
                </td>
                
                <td className="usage-cell">
                  {capability.detected ? (
                    <div className="usage-info">
                      <span className="usage-value">
                        {capability.usage_value?.toLocaleString() || '0'}
                      </span>
                      {capability.is_estimated && (
                        <span className="estimated-badge">Est.</span>
                      )}
                    </div>
                  ) : (
                    <span className="no-usage">—</span>
                  )}
                </td>
                
                <td className="unit-cell">
                  {capability.detected ? capability.usage_unit || '—' : '—'}
                </td>
                
                <td className="credits-cell">
                  {capability.detected ? (
                    <div className="credits-info">
                      <span className="credits-value" style={{ 
                        color: capability.credits_consumed > 0 ? '#dc2626' : '#64748b' 
                      }}>
                        {service.formatCredits(capability.credits_consumed || 0)}
                      </span>
                      {capability.credits_consumed > 0 && (
                        <TrendingUp size={12} className="credits-icon" />
                      )}
                    </div>
                  ) : (
                    <span className="no-credits">0</span>
                  )}
                </td>
                
                <td className="evidence-cell">
                  {capability.detected && capability.scan_evidence ? (
                    <div className="evidence-content">
                      <p className="evidence-text">{capability.scan_evidence}</p>
                    </div>
                  ) : (
                    <span className="no-evidence">No usage detected</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {filteredAndSortedCapabilities.length === 0 && (
        <div className="empty-state">
          <p>No capabilities match the current filter.</p>
        </div>
      )}
    </div>
  );
}
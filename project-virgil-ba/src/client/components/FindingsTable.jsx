import React, { useState, useMemo } from 'react';
import { AlertTriangle, ChevronDown, ChevronUp, Filter } from 'lucide-react';
import './FindingsTable.css';

export default function FindingsTable({ findings = [], service }) {
  const [sortBy, setSortBy] = useState('severity');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filterSeverity, setFilterSeverity] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');

  const severityOrder = { critical: 0, high: 1, medium: 2, low: 3 };

  const filteredAndSortedFindings = useMemo(() => {
    let filtered = findings;

    // Apply severity filter
    if (filterSeverity !== 'all') {
      filtered = filtered.filter(f => f.severity === filterSeverity);
    }

    // Apply category filter
    if (filterCategory !== 'all') {
      filtered = filtered.filter(f => f.category === filterCategory);
    }

    // Sort findings
    return filtered.sort((a, b) => {
      let aVal, bVal;

      switch (sortBy) {
        case 'severity':
          aVal = severityOrder[a.severity.toLowerCase()] ?? 999;
          bVal = severityOrder[b.severity.toLowerCase()] ?? 999;
          break;
        case 'rule_name':
          aVal = a.rule_name.toLowerCase();
          bVal = b.rule_name.toLowerCase();
          break;
        case 'category':
          aVal = a.category.toLowerCase();
          bVal = b.category.toLowerCase();
          break;
        default:
          return 0;
      }

      if (aVal < bVal) return sortOrder === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [findings, sortBy, sortOrder, filterSeverity, filterCategory]);

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  const renderSeverityBadge = (severity) => {
    const color = service.getSeverityColor(severity);
    return (
      <span 
        className="severity-badge"
        style={{ 
          backgroundColor: `${color}15`,
          color: color,
          border: `1px solid ${color}30`
        }}
      >
        {severity}
      </span>
    );
  };

  const getSortIcon = (field) => {
    if (sortBy !== field) return null;
    return (
      <span style={{ marginLeft: '0.5rem', display: 'inline-block' }}>
        {sortOrder === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </span>
    );
  };

  const categories = [...new Set(findings.map(f => f.category))];
  const severities = [...new Set(findings.map(f => f.severity))];

  if (findings.length === 0) {
    return (
      <div className="findings-section">
        <h2 className="section-title">Findings</h2>
        <div className="empty-findings">
          <AlertTriangle size={48} className="empty-icon" />
          <h3>No Findings</h3>
          <p>Great! No architecture issues were identified in your instance.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="findings-section">
      <div className="findings-header">
        <h2 className="section-title">
          Findings ({filteredAndSortedFindings.length})
        </h2>
        
        <div className="findings-filters">
          <div className="filter-group">
            <Filter size={16} />
            <select 
              value={filterSeverity} 
              onChange={(e) => setFilterSeverity(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Severities</option>
              {severities.map(severity => (
                <option key={severity} value={severity}>{severity}</option>
              ))}
            </select>
          </div>
          
          <div className="filter-group">
            <select 
              value={filterCategory} 
              onChange={(e) => setFilterCategory(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="findings-table-container">
        <table className="findings-table">
          <thead>
            <tr>
              <th 
                className="sortable"
                onClick={() => handleSort('severity')}
              >
                Severity {getSortIcon('severity')}
              </th>
              <th 
                className="sortable"
                onClick={() => handleSort('rule_name')}
              >
                Rule Name {getSortIcon('rule_name')}
              </th>
              <th 
                className="sortable"
                onClick={() => handleSort('category')}
              >
                Category {getSortIcon('category')}
              </th>
              <th>Message</th>
              <th>Recommendation</th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedFindings.map((finding, index) => (
              <tr key={finding.sys_id || index} className="finding-row">
                <td className="severity-cell">
                  {renderSeverityBadge(finding.severity)}
                </td>
                <td className="rule-name-cell">
                  <div className="rule-info">
                    <div className="rule-name">{finding.rule_name}</div>
                    <div className="rule-id">{finding.rule_id}</div>
                  </div>
                </td>
                <td className="category-cell">
                  <span className="category-tag">{finding.category}</span>
                </td>
                <td className="message-cell">
                  <p className="finding-message">{finding.message}</p>
                </td>
                <td className="recommendation-cell">
                  <p className="finding-recommendation">{finding.recommendation}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
import React from 'react';
import './FilterPanel.css';

export default function FilterPanel({ filters, onFiltersChange }) {
  const handleFilterChange = (filterType, value) => {
    const newFilters = {
      ...filters,
      [filterType]: value === '' ? '' : value
    };
    onFiltersChange(newFilters);
  };

  const clearFilters = () => {
    onFiltersChange({
      target_roles: '',
      geo_major_area: '', 
      session_type: ''
    });
  };

  return (
    <div className="filter-panel">
      <div className="filter-panel__header">
        <h2 className="filter-panel__title">Filter Sessions</h2>
        <button 
          className="btn btn--tertiary btn--small"
          onClick={clearFilters}
          title="Clear all filters"
        >
          Clear All
        </button>
      </div>

      <div className="filter-panel__content">
        <div className="filter-group">
          <label className="filter-label">By Role</label>
          <select
            className="filter-select"
            value={filters.target_roles || ''}
            onChange={(e) => handleFilterChange('target_roles', e.target.value)}
          >
            <option value="">All Roles</option>
            <option value="ae">AE</option>
            <option value="sse">SSE</option>
            <option value="sc">SC</option>
            <option value="ssc">SSC</option>
            <option value="gpc">GPC</option>
            <option value="crm_se">CRM SE</option>
            <option value="others">Others</option>
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label">Geo / Major Area</label>
          <select
            className="filter-select"
            value={filters.geo_major_area || ''}
            onChange={(e) => handleFilterChange('geo_major_area', e.target.value)}
          >
            <option value="">All Areas</option>
            <option value="asia_korea">Asia and Korea</option>
            <option value="anz">ANZ</option>
            <option value="india">India</option>
            <option value="japan">Japan</option>
            <option value="apac_general">APAC All</option>
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label">By Session Type</label>
          <select
            className="filter-select"
            value={filters.session_type || ''}
            onChange={(e) => handleFilterChange('session_type', e.target.value)}
          >
            <option value="">All Session Types</option>
            <option value="ma_kickoff">MA Kickoff</option>
            <option value="webinar_live">Webinar (Live)</option>
            <option value="elearning_self_paced">ELearning (Self-Paced)</option>
            <option value="colab">CoLab</option>
            <option value="in_person_discussion">In Person Discussion</option>
            <option value="blocked_learning_time">Blocked Learning Time</option>
          </select>
        </div>
      </div>
    </div>
  );
}
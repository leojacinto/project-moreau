import React, { useState, useEffect, useMemo } from 'react';
import { SessionService } from './services/SessionService.js';
import FilterPanel from './components/FilterPanel.jsx';
import SessionList from './components/SessionList.jsx';
import './app.css';

export default function App() {
  const service = useMemo(() => new SessionService(), []);
  const [sessions, setSessions] = useState([]);
  const [filteredSessions, setFilteredSessions] = useState([]);
  const [selectedSession, setSelectedSession] = useState(null);
  const [filters, setFilters] = useState({
    target_roles: '',
    geo_major_area: '',
    session_type: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load all sessions on mount
  useEffect(() => {
    const loadSessions = async () => {
      try {
        setLoading(true);
        setError(null);
        const allSessions = await service.list();
        setSessions(allSessions);
      } catch (err) {
        console.error('Failed to load sessions:', err);
        setError('Failed to load sessions. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadSessions();
  }, [service]);

  // Filter sessions based on current filters
  useEffect(() => {
    const applyFilters = () => {
      let filtered = [...sessions];

      if (filters.target_roles && filters.target_roles !== '') {
        filtered = filtered.filter(session => {
          let sessionRoles;
          
          // Handle ListColumn format - target_roles might be an object with display_value and value
          if (typeof session.target_roles === 'object' && session.target_roles !== null) {
            sessionRoles = session.target_roles.display_value || session.target_roles.value || '';
          } else {
            sessionRoles = session.target_roles || '';
          }
          
          // Handle multiple roles (comma-separated)
          if (sessionRoles && sessionRoles.includes(',')) {
            const roles = sessionRoles.split(',').map(r => r.trim());
            // Check if any of the session roles match the filter (by name or label)
            return roles.some(role => 
              role === filters.target_roles || 
              role.toLowerCase() === filters.target_roles.toLowerCase() ||
              getRoleNameFromLabel(role) === filters.target_roles
            );
          }
          
          // Single role
          return sessionRoles === filters.target_roles || 
                 sessionRoles.toLowerCase() === filters.target_roles.toLowerCase() ||
                 getRoleNameFromLabel(sessionRoles) === filters.target_roles;
        });
      }
      
      // Helper function to map display labels back to role names
      function getRoleNameFromLabel(label) {
        const labelToName = {
          'AE': 'ae',
          'SSE': 'sse', 
          'SC': 'sc',
          'SSC': 'ssc',
          'GPC': 'gpc',
          'CRM SE': 'crm_se',
          'Others': 'others'
        };
        return labelToName[label] || label;
      }

      if (filters.geo_major_area && filters.geo_major_area !== '') {
        filtered = filtered.filter(session => {
          const sessionGeo = typeof session.geo_major_area === 'object' ? session.geo_major_area.value : session.geo_major_area;
          return sessionGeo === filters.geo_major_area;
        });
      }

      if (filters.session_type && filters.session_type !== '') {
        filtered = filtered.filter(session => {
          const sessionType = typeof session.session_type === 'object' ? session.session_type.value : session.session_type;
          return sessionType === filters.session_type;
        });
      }

      // Sort by start time
      filtered.sort((a, b) => {
        const timeA = typeof a.start_time === 'object' ? a.start_time.value : a.start_time;
        const timeB = typeof b.start_time === 'object' ? b.start_time.value : b.start_time;
        return new Date(timeA) - new Date(timeB);
      });

      setFilteredSessions(filtered);
      
      // If selected session is no longer visible, clear selection
      if (selectedSession) {
        const selectedId = typeof selectedSession.sys_id === 'object' 
          ? selectedSession.sys_id.value 
          : selectedSession.sys_id;
        const stillVisible = filtered.some(session => {
          const sessionId = typeof session.sys_id === 'object' ? session.sys_id.value : session.sys_id;
          return sessionId === selectedId;
        });
        if (!stillVisible) {
          setSelectedSession(null);
        }
      }
    };

    applyFilters();
  }, [sessions, filters, selectedSession]);

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSessionSelect = (session) => {
    setSelectedSession(session);
  };

  if (loading) {
    return (
      <div className="app">
        <div className="app__loading">
          <div className="loading-spinner"></div>
          <p>Loading AI Learning Day sessions...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <div className="app__error">
          <h2>Error Loading Sessions</h2>
          <p>{error}</p>
          <button 
            className="btn btn--primary"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="app__header">
        <h1 className="app__title">APAC AI Learning Day Apr 10th Sales Agenda</h1>
        <p className="app__subtitle">
          Explore sessions tailored to your role, region, and interests
        </p>
      </div>

      <div className="app__content">
        <div className="app__sidebar">
          <FilterPanel 
            filters={filters}
            onFiltersChange={handleFiltersChange}
          />
        </div>

        <div className="app__main">
          <SessionList 
            sessions={filteredSessions}
            onSessionSelect={handleSessionSelect}
            selectedSession={selectedSession}
          />
        </div>
      </div>
    </div>
  );
}
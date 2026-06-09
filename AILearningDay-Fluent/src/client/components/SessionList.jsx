import React from 'react';
import { display, value } from '../utils/fields.js';
import './SessionList.css';

export default function SessionList({ sessions, onSessionSelect, selectedSession }) {
  if (sessions.length === 0) {
    return (
      <div className="session-list">
        <div className="session-list__header">
          <h2 className="session-list__title">Session Details</h2>
          <div className="session-list__count">0 sessions found</div>
        </div>
        <div className="session-list__empty">
          <p>No sessions match your current filters.</p>
          <p>Try adjusting your filter criteria or clearing all filters to see available sessions.</p>
        </div>
      </div>
    );
  }

  const formatDateTime = (dateTimeStr, timezone) => {
    if (!dateTimeStr) return '';
    try {
      const date = new Date(dateTimeStr);
      const formattedTime = date.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
      
      // Add timezone if provided
      if (timezone) {
        const timezoneDisplay = getTimezoneDisplay(timezone);
        return `${formattedTime} (${timezoneDisplay})`;
      }
      
      return formattedTime;
    } catch (e) {
      return dateTimeStr;
    }
  };

  const formatDuration = (startTime, endTime) => {
    if (!startTime || !endTime) return '';
    try {
      const start = new Date(startTime);
      const end = new Date(endTime);
      const diffMs = end - start;
      const diffMins = Math.round(diffMs / (1000 * 60));
      
      if (diffMins < 60) {
        return `${diffMins} min`;
      } else {
        const hours = Math.floor(diffMins / 60);
        const mins = diffMins % 60;
        return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
      }
    } catch (e) {
      return '';
    }
  };

  const getSessionTypeDisplay = (type) => {
    const typeMap = {
      'ma_kickoff': 'MA Kickoff',
      'webinar_live': 'Webinar (Live)',
      'elearning_self_paced': 'ELearning (Self-Paced)',
      'colab': 'CoLab',
      'in_person_discussion': 'In Person Discussion',
      'blocked_learning_time': 'Blocked Learning Time'
    };
    return typeMap[type] || type;
  };

  const getRoleDisplay = (targetRoles) => {
    // Handle ListColumn format - might be an object with display_value
    let roleValue;
    if (typeof targetRoles === 'object' && targetRoles !== null) {
      roleValue = targetRoles.display_value || targetRoles.value || '';
    } else {
      roleValue = targetRoles || '';
    }
    
    // If it's already display labels (from ListColumn), return as-is
    if (roleValue.includes('AE') || roleValue.includes('SSE') || roleValue.includes('SC')) {
      return roleValue;
    }
    
    const roleMap = {
      'ae': 'AE',
      'sse': 'SSE',
      'sc': 'SC',
      'ssc': 'SSC',
      'gpc': 'GPC',
      'crm_se': 'CRM SE',
      'others': 'Others'
    };
    
    // Handle multiple roles (comma-separated)
    if (roleValue && roleValue.includes(',')) {
      const roles = roleValue.split(',').map(r => r.trim());
      return roles.map(r => roleMap[r] || r).join(', ');
    }
    
    // Single role
    return roleMap[roleValue] || roleValue;
  };

  const getTimezoneDisplay = (timezone) => {
    const timezoneMap = {
      'utc': 'UTC',
      'aest': 'AEST (UTC+10)',
      'aedt': 'AEDT (UTC+11)',
      'jst': 'JST (UTC+9)',
      'kst': 'KST (UTC+9)',
      'ist': 'IST (UTC+5:30)',
      'hkt': 'HKT (UTC+8)',
      'sgt': 'SGT (UTC+8)',
      'pst': 'PST (UTC-8)',
      'est': 'EST (UTC-5)'
    };
    return timezoneMap[timezone] || timezone;
  };

  const getGeographyDisplay = (geo) => {
    const geoMap = {
      'asia_korea': 'Asia and Korea',
      'anz': 'ANZ',
      'india': 'India',
      'japan': 'Japan',
      'apac_general': 'APAC All'
    };
    return geoMap[geo] || geo;
  };

  const getGeographyColor = (geo) => {
    const colorMap = {
      'asia_korea': '#FFB6C1',    // Light pink
      'anz': '#9B59B6',           // Purple (unchanged)  
      'india': '#2ECC71',         // Green (unchanged)
      'japan': '#E74C3C',         // Red
      'apac_general': '#3498DB'   // Blue
    };
    return colorMap[geo] || '#95A5A6'; // Default gray for unknown
  };

  return (
    <div className="session-list">
      <div className="session-list__header">
        <h2 className="session-list__title">Session Details</h2>
        <div className="session-list__count">{sessions.length} session{sessions.length !== 1 ? 's' : ''} found</div>
      </div>

      {/* Color Legend */}
      <div className="session-list__legend">
        <span className="session-list__legend-title">Geo / Major Area:</span>
        <div className="session-list__legend-items">
          <div className="session-list__legend-item">
            <div className="session-list__legend-dot" style={{ backgroundColor: '#FFB6C1' }}></div>
            <span>Asia & Korea</span>
          </div>
          <div className="session-list__legend-item">
            <div className="session-list__legend-dot" style={{ backgroundColor: '#9B59B6' }}></div>
            <span>ANZ</span>
          </div>
          <div className="session-list__legend-item">
            <div className="session-list__legend-dot" style={{ backgroundColor: '#2ECC71' }}></div>
            <span>India</span>
          </div>
          <div className="session-list__legend-item">
            <div className="session-list__legend-dot" style={{ backgroundColor: '#E74C3C' }}></div>
            <span>Japan</span>
          </div>
          <div className="session-list__legend-item">
            <div className="session-list__legend-dot" style={{ backgroundColor: '#3498DB' }}></div>
            <span>APAC All</span>
          </div>
        </div>
      </div>

      <div className="session-list__content">
        {sessions.map(session => (
          <div 
            key={value(session.sys_id)}
            className={`session-card ${selectedSession && value(selectedSession.sys_id) === value(session.sys_id) ? 'session-card--selected' : ''}`}
            onClick={() => onSessionSelect(session)}
          >
            <div className="session-card__header">
              <div className="session-card__title-row">
                <div 
                  className="session-card__geo-indicator"
                  style={{ backgroundColor: getGeographyColor(value(session.geo_major_area)) }}
                  title={`${getGeographyDisplay(display(session.geo_major_area))}`}
                ></div>
                <h3 className="session-card__title">{display(session.title)}</h3>
              </div>
              {display(session.is_featured) === 'true' && (
                <span className="session-card__badge session-card__badge--featured">Featured</span>
              )}
            </div>

            <div className="session-card__meta">
              <div className="session-card__type">
                <span className="session-card__label">Type:</span>
                <span className="session-card__value">{getSessionTypeDisplay(display(session.session_type))}</span>
              </div>
              
              <div className="session-card__role">
                <span className="session-card__label">Role:</span>
                <span className="session-card__value">{getRoleDisplay(display(session.target_roles))}</span>
              </div>
              
              <div className="session-card__geography">
                <span className="session-card__label">Geo / Major Area:</span>
                <span className="session-card__value">{getGeographyDisplay(display(session.geo_major_area))}</span>
              </div>
            </div>

            {display(session.description) && (
              <div className="session-card__description">
                {display(session.description).length > 200 
                  ? `${display(session.description).substring(0, 200)}...`
                  : display(session.description)
                }
              </div>
            )}

            <div className="session-card__details">
              <div className="session-card__time">
                <strong>Start:</strong> {formatDateTime(display(session.start_time), display(session.timezone))}
                {display(session.end_time) && (
                  <span className="session-card__duration">
                    ({formatDuration(display(session.start_time), display(session.end_time))})
                  </span>
                )}
              </div>

              {display(session.presenter) && (
                <div className="session-card__presenter">
                  <strong>Presenter:</strong> {display(session.presenter)}
                </div>
              )}

              {display(session.location) && (
                <div className="session-card__location">
                  <strong>Location:</strong> {display(session.location)}
                </div>
              )}

              {display(session.virtual_link) && (
                <div className="session-card__virtual">
                  <strong>Virtual Link:</strong> 
                  <a 
                    href={display(session.virtual_link)} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="session-card__link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Join Meeting
                  </a>
                </div>
              )}

              {display(session.max_attendees) && (
                <div className="session-card__capacity">
                  <strong>Max Attendees:</strong> {display(session.max_attendees)}
                </div>
              )}

              {display(session.prerequisites) && (
                <div className="session-card__prerequisites">
                  <strong>Prerequisites:</strong> {display(session.prerequisites)}
                </div>
              )}

              {display(session.tags) && (
                <div className="session-card__tags">
                  <strong>Tags:</strong> 
                  <div className="session-card__tag-list">
                    {display(session.tags).split(',').map((tag, index) => (
                      <span key={index} className="session-card__tag">
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
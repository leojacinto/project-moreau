import React, { useEffect, useState } from 'react';
import { Shield, Coins, MessageSquare, ArrowRight, Clock, CheckCircle } from 'lucide-react';
import './Home.css';

export default function Home({ service, onNavigate }) {
  const [recentActivity, setRecentActivity] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadRecentActivity();
  }, [service]);

  const loadRecentActivity = async () => {
    setLoading(true);
    try {
      const [minosScans, plutusScans] = await Promise.all([
        service.getMinosScanHistory(3),
        service.getPlutusScanHistory(3)
      ]);

      const combined = [
        ...minosScans.map(scan => ({ ...scan, type: 'minos' })),
        ...plutusScans.map(scan => ({ ...scan, type: 'plutus' }))
      ].sort((a, b) => new Date(b.scan_date) - new Date(a.scan_date)).slice(0, 6);

      setRecentActivity(combined);
    } catch (error) {
      console.error('Failed to load recent activity:', error);
      setRecentActivity([]);
    } finally {
      setLoading(false);
    }
  };

  const launchpadCards = [
    {
      id: 'minos',
      title: 'Minos',
      subtitle: 'Architecture & Design Scan',
      description: 'Scan your ServiceNow instance architecture and identify optimization opportunities',
      icon: Shield,
      color: '#3b82f6',
      bgColor: '#eff6ff'
    },
    {
      id: 'plutus',
      title: 'Plutus',
      subtitle: 'WDF Credit Sizing',
      description: 'Analyze and calculate Workflow Data Fabric credit consumption',
      icon: Coins,
      color: '#16a34a',
      bgColor: '#f0fdf4'
    },
    {
      id: 'chat',
      title: 'Virgil Chat',
      subtitle: 'AI Architecture Advisor',
      description: 'Get AI-powered architecture recommendations and guidance',
      icon: MessageSquare,
      color: '#6b7280',
      bgColor: '#f9fafb',
      disabled: true
    }
  ];

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">Virgil: Presales Intelligence Platform</h1>
        <p className="hero-subtitle">
          Accelerate your ServiceNow sales cycle with automated instance analysis, 
          credit sizing, and architectural guidance
        </p>
      </div>

      <div className="launchpad-section">
        <h2 className="section-title">Launch Tools</h2>
        <div className="launchpad-grid">
          {launchpadCards.map(card => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className={`launchpad-card ${card.disabled ? 'disabled' : ''}`}
                onClick={() => !card.disabled && onNavigate(card.id)}
                style={{ '--card-color': card.color, '--card-bg': card.bgColor }}
              >
                <div className="card-icon">
                  <Icon size={24} />
                </div>
                <div className="card-content">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-subtitle">{card.subtitle}</p>
                  <p className="card-description">{card.description}</p>
                </div>
                <div className="card-action">
                  {card.disabled ? (
                    <span className="coming-soon">Coming Soon</span>
                  ) : (
                    <ArrowRight size={20} />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="recent-activity-section">
        <h2 className="section-title">Recent Activity</h2>
        {loading ? (
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>Loading recent scans...</p>
          </div>
        ) : recentActivity.length === 0 ? (
          <div className="empty-state">
            <Clock size={48} className="empty-icon" />
            <h3>No recent activity</h3>
            <p>Run your first scan using Minos or Plutus to get started</p>
          </div>
        ) : (
          <div className="activity-grid">
            {recentActivity.map(activity => (
              <div key={`${activity.type}-${activity.sys_id}`} className="activity-card">
                <div className="activity-header">
                  <div className="activity-icon">
                    {activity.type === 'minos' ? (
                      <Shield size={16} color="#3b82f6" />
                    ) : (
                      <Coins size={16} color="#16a34a" />
                    )}
                  </div>
                  <div className="activity-info">
                    <h4 className="activity-title">
                      {activity.type === 'minos' ? 'Minos Architecture Scan' : 'Plutus Credit Scan'}
                    </h4>
                    <p className="activity-date">
                      {service.formatDateTime(activity.scan_date)}
                    </p>
                  </div>
                  <div className="activity-status">
                    <CheckCircle size={16} color="#16a34a" />
                  </div>
                </div>
                <div className="activity-summary">
                  {activity.type === 'minos' ? (
                    <div className="minos-summary">
                      <div className="summary-item">
                        <span className="summary-label">Findings:</span>
                        <span className="summary-value">{activity.total_findings}</span>
                      </div>
                      <div className="summary-item">
                        <span className="summary-label">Active Nodes:</span>
                        <span className="summary-value">{activity.active_nodes}</span>
                      </div>
                      <div className="summary-item">
                        <span className="summary-label">Recommendations:</span>
                        <span className="summary-value">{activity.recommended_additions}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="plutus-summary">
                      <div className="summary-item">
                        <span className="summary-label">Credits:</span>
                        <span className="summary-value">{service.formatCredits(activity.total_credits)}</span>
                      </div>
                      <div className="summary-item">
                        <span className="summary-label">Capabilities:</span>
                        <span className="summary-value">{activity.capabilities_detected}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

import React from 'react';
import { Shield, Coins, MessageSquare } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ currentView, onNavigate }) {
  const navItems = [
    { id: 'home', label: 'Home', icon: null },
    { id: 'minos', label: 'Minos', icon: Shield, subtitle: 'Architecture Scan' },
    { id: 'plutus', label: 'Plutus', icon: Coins, subtitle: 'WDF Sizing' },
    { id: 'chat', label: 'Virgil Chat', icon: MessageSquare, subtitle: 'AI Advisor', disabled: true }
  ];

  const handleNavClick = (itemId) => {
    console.log('===== NAVBAR CLICK =====');
    console.log('Clicked item:', itemId);
    console.log('Current view:', currentView);
    console.log('onNavigate function:', typeof onNavigate);
    
    if (typeof onNavigate !== 'function') {
      console.error('onNavigate is not a function!');
      return;
    }
    
    try {
      console.log('Calling onNavigate with:', itemId);
      onNavigate(itemId);
      console.log('onNavigate call completed');
    } catch (error) {
      console.error('Error in onNavigate call:', error);
    }
    
    console.log('===== NAVBAR CLICK COMPLETE =====');
  };

  return (
    <nav className="virgil-navbar">
      <div className="navbar-container">
        <h1 className="navbar-title" onClick={() => handleNavClick('home')}>
          Virgil: Presales Intelligence Platform
        </h1>
        <div className="navbar-nav">
          {navItems.map(item => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                className={`nav-item ${currentView === item.id ? 'active' : ''} ${item.disabled ? 'disabled' : ''}`}
                onClick={() => !item.disabled && handleNavClick(item.id)}
                disabled={item.disabled}
                title={item.disabled ? 'Coming soon' : item.subtitle}
              >
                {Icon && <Icon size={18} />}
                <span className="nav-label">{item.label}</span>
                {item.subtitle && (
                  <span className="nav-subtitle">{item.subtitle}</span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
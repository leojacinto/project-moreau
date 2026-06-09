import React, { useState, useEffect, useMemo } from 'react';
import { VirgilService } from './services/VirgilService.js';
import Home from './components/Home.jsx';
import Minos from './components/Minos.jsx';
import Plutus from './components/Plutus.jsx';
import Navbar from './components/Navbar.jsx';
import './app.css';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [isInitialized, setIsInitialized] = useState(false);
  const [renderError, setRenderError] = useState(null);
  const service = useMemo(() => new VirgilService(), []);

  // Initialize routing
  useEffect(() => {
    let attempts = 0;
    const maxAttempts = 10;
    
    const checkHash = () => {
      attempts++;
      const hash = window.location.hash.substring(1);
      console.log(`Hash check attempt ${attempts}: "${hash}"`);
      
      if (hash && ['minos', 'plutus', 'chat'].includes(hash)) {
        console.log('Hash detected, setting view to:', hash);
        setCurrentView(hash);
        setIsInitialized(true);
      } else if (attempts >= maxAttempts) {
        console.log('No valid hash found after', maxAttempts, 'attempts, staying on home');
        setIsInitialized(true);
      } else {
        setTimeout(checkHash, 50);
      }
    };
    
    checkHash();
  }, []);

  const navigate = (view) => {
    try {
      console.log('===== NAVIGATE CALLED =====');
      console.log('Previous view:', currentView);
      console.log('Requested view:', view);
      console.log('typeof view:', typeof view);
      
      // Validate view
      const validViews = ['home', 'minos', 'plutus', 'chat'];
      if (!validViews.includes(view)) {
        console.error('Invalid view requested:', view);
        return;
      }
      
      console.log('Setting currentView to:', view);
      setCurrentView(view);
      
      // Update URL hash
      window.location.hash = view === 'home' ? '' : view;
      console.log('Updated hash to:', window.location.hash);
      console.log('===== NAVIGATE COMPLETE =====');
      
    } catch (error) {
      console.error('Navigation error:', error);
      setCurrentView('home');
    }
  };

  const renderView = () => {
    if (!isInitialized) {
      return (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading...</p>
        </div>
      );
    }

    try {
      console.log('===== RENDER VIEW =====');
      console.log('Current view state:', currentView);
      console.log('About to render:', currentView);
      
      switch(currentView) {
        case 'minos':
          console.log('Rendering Minos component');
          return <Minos service={service} onNavigate={navigate} />;
        case 'plutus':
          console.log('Rendering Plutus component');
          return <Plutus service={service} onNavigate={navigate} />;
        case 'home':
        default:
          console.log('Rendering Home component');
          return <Home service={service} onNavigate={navigate} />;
      }
    } catch (error) {
      console.error('===== VIEW RENDERING ERROR =====', error);
      setRenderError(error.message);
      return (
        <div className="error-container">
          <h2>Something went wrong</h2>
          <p>Unable to load the requested page: {error.message}</p>
          <button className="btn btn-primary" onClick={() => navigate('home')}>
            Return to Home
          </button>
        </div>
      );
    }
  };

  if (renderError) {
    return (
      <div className="virgil-app">
        <Navbar currentView="home" onNavigate={navigate} />
        <main className="virgil-main">
          <div className="error-container">
            <h2>Application Error</h2>
            <p>{renderError}</p>
            <button 
              className="btn btn-primary" 
              onClick={() => {
                setRenderError(null);
                navigate('home');
              }}
            >
              Return to Home
            </button>
          </div>
        </main>
      </div>
    );
  }

  console.log('App render - currentView:', currentView, 'isInitialized:', isInitialized);

  return (
    <div className="virgil-app">
      <Navbar currentView={currentView} onNavigate={navigate} />
      <main className="virgil-main">
        {renderView()}
      </main>
    </div>
  );
}
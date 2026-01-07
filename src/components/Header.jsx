import React from 'react';
import './Header.css';

const Header = () => {
  // Future: User data will come from authentication context/backend
  const isAuthenticated = true;
  const userName = "John Doe";

  return (
    <header className="header">
      <div className="header-content">
        {/* Menu Toggle Button - Future: Will toggle sidebar */}
        <button 
          className="menu-toggle" 
          aria-label="Menu"
          onClick={() => console.log('Sidebar will be implemented by another team')}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Logo */}
        <div className="header-logo">
          <div className="logo-icon">TMS</div>
          <h1 className="logo-text">Training Management System</h1>
        </div>

        {/* Right Side Actions */}
        <div className="header-actions">
          {isAuthenticated ? (
            <>
              {/* Notification Button */}
              <button className="icon-btn" aria-label="Notifications">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
                <span className="notification-badge">3</span>
              </button>

              {/* User Profile */}
              <div className="user-profile">
                <div className="user-avatar">{userName.charAt(0)}</div>
                <span className="user-name">{userName}</span>
              </div>
            </>
          ) : (
            <a href="#login" className="login-btn">Login</a>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

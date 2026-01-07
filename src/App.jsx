<<<<<<< HEAD
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import './App.css';

// Placeholder components for each route
const Dashboard = () => <div className="page-content"><h1>Dashboard</h1><p>Welcome to the Dashboard</p></div>;
const Students = () => <div className="page-content"><h1>Students</h1><p>Manage students here</p></div>;
const Assessments = () => <div className="page-content"><h1>Assessments</h1><p>View and manage assessments</p></div>;
const Training = () => <div className="page-content"><h1>Training Programs</h1><p>Manage training programs</p></div>;
const Skills = () => <div className="page-content"><h1>Skills Matrix</h1><p>View skills matrix</p></div>;
const Reports = () => <div className="page-content"><h1>Reports</h1><p>Generate and view reports</p></div>;
const Analytics = () => <div className="page-content"><h1>Analytics</h1><p>View analytics dashboard</p></div>;
const Settings = () => <div className="page-content"><h1>Settings</h1><p>Configure system settings</p></div>;

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 1024);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    if (window.innerWidth <= 1024) {
      setSidebarOpen(false);
    }
  };
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Registration from './pages/Registration'; // Adjust path as needed
// Import your existing components...

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Existing routes */}
          {/* <Route path="/" element={<Home />} /> */}
          
          {/* Registration Route */}
          <Route path="/register" element={<Registration />} />
          
          {/* Default redirect to registration or dashboard */}
          <Route path="/" element={<Navigate to="/register" replace />} />
          
          {/* 404 fallback */}
          <Route path="*" element={<Navigate to="/register" replace />} />
        </Routes>
      </div>
    </Router>
  );
}
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
>>>>>>> 1ab3ec9493733eb29affd46700456b7a84ef968f

const App = () => {
  return (
<<<<<<< HEAD
    <Router>
      <div className="app-container">
        <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
        
        <main className="main-content">
          {/* Top header with sidebar toggle */}
          <header className="main-header">
            <div className="header-left">
              <button className="sidebar-toggle-open" onClick={toggleSidebar}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div className="header-title">
                <h1>Training Management System</h1>
              </div>
            </div>
            <div className="header-right">
              <div className="user-profile">
                <div className="user-avatar">
                  <span>JD</span>
                </div>
                <div className="user-info">
                  <span className="user-name">John Doe</span>
                  <span className="user-role">Administrator</span>
                </div>
              </div>
            </div>
          </header>

          {/* Page content */}
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/students" element={<Students />} />
              <Route path="/assessments" element={<Assessments />} />
              <Route path="/training" element={<Training />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
=======
    <div className="app">
      {/* Header - Full Width */}
      <Header />

      {/* Main Content - Centered Container */}
      <main className="main-content">
        <div className="content-container">
          <div className="content-placeholder">
            <h1>Welcome to Training Management System</h1>
            <p>Main content area - Routes will be configured by the routing team</p>
            <p>Layout is ready for sidebar integration in the future</p>
          </div>
        </div>
      </main>

      {/* Footer - Full Width */}
      <Footer />
    </div>
  );
};

export default App;
>>>>>>> 1ab3ec9493733eb29affd46700456b7a84ef968f

import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
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

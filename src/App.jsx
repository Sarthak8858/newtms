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

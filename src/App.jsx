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

export default App;

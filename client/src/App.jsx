import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import LeadOverview from './Components/LeadOverview';
import Settings from './Components/Settings';
import Reports from './Components/Reports'; // ✅ Add this line

import './App.css'; // ✅ Optional: for layout styling

function App() {
  return (
    <Router>
      <div className="app-layout" style={{ display: 'flex' }}>
        <Sidebar />
        <div className="main-content" style={{ flex: 1, paddingLeft: '240px' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/leads" element={<LeadOverview />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/reports" element={<Reports />} /> {/* ✅ Add this route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
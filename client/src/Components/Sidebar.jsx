import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '240px',
      height: '100vh',
      background: 'linear-gradient(to bottom, #2c3e50, #34495e)',
      color: '#fff',
      paddingTop: '60px', // 👈 lowers content
      paddingLeft: '20px',
      paddingRight: '20px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      {/* Top Section */}
      <div>
        {/* CRM Studio Icon Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '30px',
          fontSize: '20px',
          fontWeight: 'bold',
          
        }}>
          <span>📊</span>
          <span>CRM Dashboard</span>
        </div>

        {/* Navigation */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Link to="/" style={navStyle}>Dashboard</Link>
          <Link to="/leads" style={navStyle}> Lead Overview</Link>
          <Link to="/settings" style={navStyle}> CRM Studio</Link>
        </nav>
      </div>

      {/* Footer */}
      <div style={{
        textAlign: 'center',
        fontSize: '12px',
        color: '#ccc',
        marginBottom: '20px',
        fontWeight: 'bold',
      }}>
        2025 CRM Dashboard Panel 
      </div>
    </div>
  );
};

const navStyle = {
  textDecoration: 'none',
  color: '#ecf0f1',
  fontSize: '16px',
  fontWeight: '500',
  padding: '8px 0',
  transition: 'color 0.2s',
};

export default Sidebar;
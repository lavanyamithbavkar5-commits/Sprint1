import React, { useEffect, useState } from 'react';
import axios from 'axios';
import KPI from './KPI';
import ChartPanel from './ChartPanel';
import AnalyticsPanel from './AnalyticsPanel';
import RecentActivityPanel from './RecentActivityPanel';

const Dashboard = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5050/leads')
      .then((res) => setLeads(res.data))
      .catch((err) => console.error('Error fetching leads:', err));
  }, []);

  return (
    <main style={{
      marginLeft: '240px',
      padding: '40px 20px',
      backgroundColor: '#f9f9f9',
      minHeight: '100vh',
      boxSizing: 'border-box',
    }}>
      <div
        style={{
          width: '100%',
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '30px',
          backgroundColor: '#fff',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          borderRadius: '8px',
        }}
      >
        {/* Header */}
        <div style={{
          marginTop: '20px',
          marginBottom: '40px',
          textAlign: 'center',
          borderBottom: '2px solid #ccc',
          paddingBottom: '10px',
        }}>
          <h2 style={{ margin: 0, fontSize: '28px' }}>📊 CRM Dashboard</h2>
          <p style={{ fontSize: '14px', color: '#666' }}>
            Updated on {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* KPI Summary */}
        <div style={{
          marginBottom: '40px',
          backgroundColor: '#ffffff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        }}>
          <KPI leads={leads} />
        </div>

        {/* Chart Panel */}
        <div style={{
          marginBottom: '40px',
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
        }}>
          <ChartPanel leads={leads} />
        </div>

        {/* Analytics Panel */}
        <div style={{
          marginBottom: '40px',
          backgroundColor: '#fefefe',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 1px 6px rgba(0,0,0,0.05)',
        }}>
          <AnalyticsPanel leads={leads} />
        </div>

        {/* Recent Activity */}
        {/* <div style={{
          backgroundColor: '#fefefe',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 1px 6px rgba(0,0,0,0.05)',
        }}>
          <RecentActivityPanel leads={leads} />
        </div> */}
      </div>
    </main>
  );
};

export default Dashboard;
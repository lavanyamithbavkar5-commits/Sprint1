import React from 'react';
import SentimentChart from './SentimentChart';
import RegionChart from './RegionChart';
import LeadTrendChart from './LeadTrendChart';
import RecentLeadsTable from './RecentLeadsTable';

const Reports = () => {
  return (
    <main style={{
      marginLeft: '240px', // match your sidebar width
      padding: '40px 20px',
      minHeight: '100vh',
      backgroundColor: '#f9f9f9',
      boxSizing: 'border-box',
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>CRM Reports</h2>

      {/* Grid layout for charts */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '40px',
        justifyItems: 'center',
        alignItems: 'start',
      }}>
        <SentimentChart />
        <RegionChart />
        <LeadTrendChart />
      </div>

      {/* Table section */}
      <div style={{
        marginTop: '60px',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <RecentLeadsTable />
      </div>
    </main>
  );
};

export default Reports;
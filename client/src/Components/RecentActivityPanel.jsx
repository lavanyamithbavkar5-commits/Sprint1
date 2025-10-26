import React from 'react';

const RecentActivityPanel = ({ leads }) => {
  return (
    <div className="chart-container">
      <h3>Recent Activity</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {leads.slice(-5).reverse().map((lead, index) => (
          <li key={index} style={{ marginBottom: '12px', padding: '12px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}>
            <strong>{lead.name}</strong> ({lead.status}) — {lead.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivityPanel;
import React from 'react';

const RecentLeadsTable = () => {
  const leads = [
    { name: 'Amit Sharma', region: 'Mumbai', sentiment: 'Positive' },
    { name: 'Priya Desai', region: 'Pune', sentiment: 'Neutral' },
    { name: 'Rahul Patil', region: 'Goa', sentiment: 'Negative' },
  ];

  return (
    <div style={{ width: '100%', maxWidth: '600px' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Recent Leads</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
        <thead>
          <tr style={{ backgroundColor: '#eee' }}>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Name</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Region</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Sentiment</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead, index) => (
            <tr key={index}>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{lead.name}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{lead.region}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{lead.sentiment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentLeadsTable;
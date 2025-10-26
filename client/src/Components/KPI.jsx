import React from 'react';

const KPI = ({ leads }) => {
  const total = leads.length;
  const converted = leads.filter(l => l.status === 'Converted').length;
  const newThisWeek = leads.filter(l => {
    const created = new Date(l.created_at);
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    return created > oneWeekAgo;
  }).length;

  const cardStyle = {
    backgroundColor: '#f9f9f9',
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    textAlign: 'center',
    flex: 1
  };

  return (
    <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
      <div style={cardStyle}><h4>Total Leads</h4><p>{total}</p></div>
      <div style={cardStyle}><h4>Converted</h4><p>{converted}</p></div>
      <div style={cardStyle}><h4>New This Week</h4><p>{newThisWeek}</p></div>
    </div>
  );
};

export default KPI;
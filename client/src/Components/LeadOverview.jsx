import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Leads.css';

const statusColors = {
  New: '#007bff',
  Contacted: '#fd7e14',
  Converted: '#28a745',
  Lost: '#6c757d',
  Trial: '#6f42c1',
  Followup: '#17a2b8',
  Referred: '#20c997',
  Rejected: '#dc3545',
};

const intentColors = {
  demo: '#e3f2fd',
  pricing: '#fff3cd',
  integration: '#d4edda',
  support: '#f8d7da',
  onboarding: '#d1ecf1',
  upsell: '#fefefe',
  invoice: '#f0f0f0',
  renewal: '#e2e3e5',
  'callback request': '#f5f5f5',
  'feature list': '#fdfdfe',
  'general inquiry': '#f8f9fa',
  'no response': '#f8f9fa',
  'budget issue': '#f8f9fa',
  'competitor switch': '#f8f9fa',
};

const LeadCard = ({ lead }) => {
  const { name, status, intent, score, region, source, notes } = lead;
  return (
    <div className="lead-card">
      <div className="lead-header">
        <h3>{name}</h3>
        <span className="status-badge" style={{ backgroundColor: statusColors[status] || '#ccc' }}>
          {status}
        </span>
      </div>
      <div className="lead-body">
        <div className="intent-badge" style={{ backgroundColor: intentColors[intent] || '#eee' }}>
          {intent}
        </div>
        <div className="score-bar">
          <label>Score:</label>
          <progress value={score} max="100" />
        </div>
        <div className="meta">
          <span><strong>Region:</strong> {region}</span>
          <span><strong>Source:</strong> {source}</span>
        </div>
        <p className="notes">{notes}</p>
      </div>
    </div>
  );
};

const LeadOverview = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5050/leads')
      .then((res) => setLeads(res.data))
      .catch((err) => console.error('Error fetching leads:', err));
  }, []);

  return (
    <div style={{ padding: '20px', marginLeft: '240px' }}>
      <h2>Lead Overview</h2>
      <div className="lead-grid">
        {leads.map((lead) => (
          <LeadCard key={lead.id} lead={lead} />
        ))}
      </div>
    </div>
  );
};

export default LeadOverview;
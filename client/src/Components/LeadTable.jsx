import React from 'react';

const LeadTable = ({ leads }) => (
  <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
    <thead>
      <tr style={{ backgroundColor: '#f0f0f0' }}>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Status</th>
        <th>Created At</th>
      </tr>
    </thead>
    <tbody>
      {leads.map((lead) => (
        <tr key={lead.id} style={{ borderBottom: '1px solid #ddd' }}>
          <td>{lead.name}</td>
          <td>{lead.email}</td>
          <td>{lead.phone}</td>
          <td>{lead.status}</td>
          <td>{new Date(lead.created_at).toLocaleString()}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default LeadTable;
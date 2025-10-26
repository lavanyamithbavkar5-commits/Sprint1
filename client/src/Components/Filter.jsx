import React from 'react';

const Filters = ({ search, setSearch, statusFilter, setStatusFilter }) => (
  <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
    <input
      type="text"
      placeholder="Search by name, email, phone"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        padding: '10px',
        borderRadius: '6px',
        border: '1px solid #ccc',
        flex: 1
      }}
    />
    <select
      value={statusFilter}
      onChange={(e) => setStatusFilter(e.target.value)}
      style={{
        padding: '10px',
        borderRadius: '6px',
        border: '1px solid #ccc'
      }}
    >
      <option value="">All Statuses</option>
      <option value="New">New</option>
      <option value="Contacted">Contacted</option>
      <option value="Converted">Converted</option>
    </select>
  </div>
);

export default Filters;
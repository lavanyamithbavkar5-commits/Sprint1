import React, { useState } from 'react';
import axios from 'axios';

const AddLead = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5050/leads', {
      name,
      email,
      phone,
      status
    })
    .then((res) => {
      alert('✅ Lead added successfully');
      setName('');
      setEmail('');
      setPhone('');
      setStatus('');
      if (onAdd) onAdd(); // Refresh leads list
    })
    .catch((err) => {
      console.error('❌ Error adding lead:', err);
      alert('Failed to add lead');
    });
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={inputStyle}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={inputStyle}
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        style={inputStyle}
      >
        <option value="">Select Status</option>
        <option value="New">New</option>
        <option value="Contacted">Contacted</option>
        <option value="Converted">Converted</option>
      </select>
      <button type="submit" style={buttonStyle}>
        Submit Lead
      </button>
    </form>
  );
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  padding: '20px',
  maxWidth: '500px',
  margin: '0 auto',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
};

const inputStyle = {
  padding: '10px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '16px'
};

const buttonStyle = {
  padding: '10px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer'
};

export default AddLead;
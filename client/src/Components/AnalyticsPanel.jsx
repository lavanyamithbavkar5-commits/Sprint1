import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend, TimeScale } from 'chart.js';
import 'chartjs-adapter-date-fns';

Chart.register(BarElement, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend, TimeScale);

const AnalyticsPanel = ({ leads }) => {
  // Group by status
  const statusCounts = {
    New: 0,
    Contacted: 0,
    Converted: 0
  };
  leads.forEach(lead => {
    if (statusCounts[lead.status] !== undefined) {
      statusCounts[lead.status]++;
    }
  });

  // Group by date
  const dateCounts = {};
  leads.forEach(lead => {
    const date = new Date(lead.created_at).toISOString().split('T')[0];
    dateCounts[date] = (dateCounts[date] || 0) + 1;
  });

  const sortedDates = Object.keys(dateCounts).sort();
  const lineData = {
    labels: sortedDates,
    datasets: [{
      label: 'Leads Over Time',
      data: sortedDates.map(date => dateCounts[date]),
      borderColor: '#007bff',
      backgroundColor: 'rgba(0,123,255,0.2)',
      fill: true
    }]
  };

  const barData = {
    labels: ['New', 'Contacted', 'Converted'],
    datasets: [{
      label: 'Leads by Status',
      data: [statusCounts.New, statusCounts.Contacted, statusCounts.Converted],
      backgroundColor: ['#dc3545', '#ffc107', '#28a745']
    }]
  };

  const pieData = {
    labels: ['Converted', 'Others'],
    datasets: [{
      data: [statusCounts.Converted, statusCounts.New + statusCounts.Contacted],
      backgroundColor: ['#28a745', '#ccc']
    }]
  };

  return (
    <div style={{ marginTop: '40px' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Lead Analytics</h3>
      <div className="chart-container">
        <Bar data={barData} />
      </div>
      <div className="chart-container">
        <Line data={lineData} />
      </div>
      <div className="chart-container">
        <Pie data={pieData} />
      </div>
    </div>
  );
};

export default AnalyticsPanel;
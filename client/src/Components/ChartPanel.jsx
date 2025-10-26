import React from 'react';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Pie, Line, Doughnut } from 'react-chartjs-2';

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

const ChartPanel = ({ leads }) => {
  // Status Distribution
  const statusCounts = leads.reduce((acc, lead) => {
    const status = lead.status || 'Unknown';
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});
  const statusLabels = Object.keys(statusCounts);
  const statusData = Object.values(statusCounts);

  // Source Distribution
  const sourceCounts = leads.reduce((acc, lead) => {
    const source = lead.source || 'Unknown';
    acc[source] = (acc[source] || 0) + 1;
    return acc;
  }, {});
  const sourceLabels = Object.keys(sourceCounts);
  const sourceData = Object.values(sourceCounts);

  // Sentiment Distribution (FIXED)
  const sentimentCounts = leads.reduce((acc, lead) => {
    const sentiment = lead.sentiment || 'Unknown';
    acc[sentiment] = (acc[sentiment] || 0) + 1;
    return acc;
  }, {});
  const sentimentLabels = Object.keys(sentimentCounts);
  const sentimentData = Object.values(sentimentCounts);

  // Score Distribution
  const scoreBuckets = {
    '0–49': 0,
    '50–69': 0,
    '70–89': 0,
    '90–100': 0,
  };
  leads.forEach((lead) => {
    const score = lead.score || 0;
    if (score < 50) scoreBuckets['0–49']++;
    else if (score < 70) scoreBuckets['50–69']++;
    else if (score < 90) scoreBuckets['70–89']++;
    else scoreBuckets['90–100']++;
  });
  const scoreLabels = Object.keys(scoreBuckets);
  const scoreData = Object.values(scoreBuckets);

  // Responsive chart container
  const chartStyle = {
    flex: '1 1 400px',
    minWidth: '300px',
    maxWidth: '500px',
    margin: '20px',
    background: '#fff',
    padding: '16px',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <div style={chartStyle}>
        <h3>Status Distribution (Bar)</h3>
        <div style={{ height: '250px' }}>
          <Bar
            data={{
              labels: statusLabels,
              datasets: [
                {
                  label: 'Leads by Status',
                  data: statusData,
                  backgroundColor: '#007bff',
                },
              ],
            }}
            options={chartOptions}
          />
        </div>
      </div>

      <div style={chartStyle}>
        <h3>Lead Sources (Doughnut)</h3>
        <div style={{ height: '250px' }}>
          <Doughnut
            data={{
              labels: sourceLabels,
              datasets: [
                {
                  data: sourceData,
                  backgroundColor: ['#17a2b8', '#6f42c1', '#fd7e14', '#20c997'],
                },
              ],
            }}
            options={chartOptions}
          />
        </div>
      </div>

      <div style={chartStyle}>
        <h3>Sentiment Breakdown (Pie)</h3>
        <div style={{ height: '250px' }}>
          <Pie
            data={{
              labels: sentimentLabels,
              datasets: [
                {
                  data: sentimentData,
                  backgroundColor: ['#28a745', '#ffc107', '#dc3545', '#6c757d'],
                },
              ],
            }}
            options={chartOptions}
          />
        </div>
      </div>

      <div style={chartStyle}>
        <h3>Lead Score Distribution (Line)</h3>
        <div style={{ height: '250px' }}>
          <Line
            data={{
              labels: scoreLabels,
              datasets: [
                {
                  label: 'Lead Score Buckets',
                  data: scoreData,
                  borderColor: '#007bff',
                  backgroundColor: 'rgba(0,123,255,0.2)',
                  fill: true,
                },
              ],
            }}
            options={chartOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartPanel;
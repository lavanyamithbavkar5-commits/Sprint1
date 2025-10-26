import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

const LeadTrendChart = () => {
  const data = {
    labels: ['Oct 1', 'Oct 2', 'Oct 3', 'Oct 4'],
    datasets: [{
      label: 'Leads Added',
      data: [5, 8, 3, 10],
      borderColor: '#2ecc71',
      fill: true,
      backgroundColor: 'rgba(46, 204, 113, 0.2)',
    }],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true },
    },
  };

  return (
    <div style={{ width: '100%', maxWidth: '400px' }}>
      <h3 style={{ textAlign: 'center' }}>Lead Trend Over Time</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default LeadTrendChart;
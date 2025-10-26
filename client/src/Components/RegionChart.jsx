import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const RegionChart = () => {
  const data = {
    labels: ['Mumbai', 'Pune', 'Goa'],
    datasets: [{
      label: 'Leads by Region',
      data: [30, 22, 18],
      backgroundColor: '#3498db',
      borderRadius: 4,
      barThickness: 40,
    }],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `${context.parsed.y} leads`,
        },
      },
    },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true },
    },
  };

  return (
    <div style={{ width: '100%', maxWidth: '400px' }}>
      <h3 style={{ textAlign: 'center' }}>Region-wise Leads</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default RegionChart;
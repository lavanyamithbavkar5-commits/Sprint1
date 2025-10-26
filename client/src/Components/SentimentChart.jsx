import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const SentimentChart = () => {
  const data = {
    labels: ['Positive', 'Neutral', 'Negative'],
    datasets: [{
      data: [34, 28, 21],
      backgroundColor: ['#2ecc71', '#f1c40f', '#e74c3c'],
    }],
  };

  return (
    <div style={{ width: '100%', maxWidth: '400px' }}>
      <h3 style={{ textAlign: 'center' }}>Sentiment Distribution</h3>
      <Doughnut data={data} />
    </div>
  );
};

export default SentimentChart;
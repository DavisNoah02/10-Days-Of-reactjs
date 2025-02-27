// src/pages/Dashboard.jsx
import Card from '../components/dashboard/Card';
// Import icons if you're using a library like Material UI
// import { TrendingUp, People, AttachMoney, Timeline } from '@mui/icons-material';

const Dashboard = () => {
  const cardData = [
    { title: 'Revenue', value: '$15,350', color: '#4CAF50' },
    { title: 'Users', value: '2,430', color: '#2196F3' },
    { title: 'Conversion', value: '8.5%', color: '#FF9800' },
    { title: 'Growth', value: '+12.3%', color: '#9C27B0' }
  ];

  return (
    <div className="dashboard-container">
      <h2>Dashboard Overview</h2>
      <div className="metrics-grid">
        {cardData.map((card, index) => (
          <Card 
            key={index}
            title={card.title}
            value={card.value}
            color={card.color}
          />
        ))}
      </div>
      
      <div className="charts-section">
        <h3>Analytics</h3>
        <div className="charts-grid">
          <div className="chart">
            {/* You would add your chart components here */}
            <p>Chart placeholder</p>
          </div>
          <div className="chart">
            <p>Chart placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
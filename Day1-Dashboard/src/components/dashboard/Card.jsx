// src/components/dashboard/Card.jsx
import 'react';
import PropTypes from 'prop-types';

const Card = ({ title, value, icon, color }) => {
  return (
    <div className="dashboard-card" style={{ borderTop: `3px solid ${color}` }}>
      <div className="card-icon" style={{ color }}>
        {icon}
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p className="card-value">{value}</p>
      </div>
    </div>
  );
};
Card.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
};

export default Card;

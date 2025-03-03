import React from 'react';

const WeatherIcon = ({ iconCode }) => {
  const getIconUrl = (code) => {
    return `https://openweathermap.org/img/wn/${code}@2x.png`;
  };

  return (
    <img 
      src={getIconUrl(iconCode)} 
      alt="Weather icon" 
      className="weather-icon"
    />
  );
};

export default WeatherIcon;
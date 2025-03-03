import React from 'react';
import WeatherIcon from '../weatherIcon/WeatherIcon';
import { formatTemperature, getDateString } from '../../utils/helper';
import './Weather.css';

const Weather = ({ data }) => {
  if (!data) return null;

  const { 
    name, 
    main: { temp, feels_like, humidity }, 
    weather, 
    sys: { country },
    wind: { speed }
  } = data;

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2>{name}, {country}</h2>
        <p className="date">{getDateString()}</p>
      </div>
      
      <div className="weather-body">
        <div className="weather-main">
          <div className="temperature">
            <h1>{formatTemperature(temp)}°C</h1>
            <p>Feels like {formatTemperature(feels_like)}°C</p>
          </div>
          <div className="weather-description">
            <WeatherIcon iconCode={weather[0].icon} />
            <p>{weather[0].description}</p>
          </div>
        </div>
        
        <div className="weather-details">
          <div className="detail">
            <span className="label">Humidity</span>
            <span className="value">{humidity}%</span>
          </div>
          <div className="detail">
            <span className="label">Wind</span>
            <span className="value">{speed} m/s</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
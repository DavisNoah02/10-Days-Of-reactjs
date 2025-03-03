import React from 'react';
import Weather from './components/weather/Weather';
import SearchBar from './components/searchBar/SearchBar';
import useWeather from './hooks/useWeather';
import './App.css';

function App() {
  const { weather, loading, error, getWeatherByCity, getWeatherByLocation } = useWeather();

  return (
    <div className="app">
      <div className="container">
        <h1 className="app-title">Weather Forecast</h1>
        
        <SearchBar 
          onSearch={getWeatherByCity}
          onUseLocation={getWeatherByLocation} 
        />
        
        {error && <p className="error-message">{error}</p>}
        {loading && <p className="loading">Loading weather data...</p>}
        {!loading && weather && <Weather data={weather} />}
      </div>
    </div>
  );
}

export default App;
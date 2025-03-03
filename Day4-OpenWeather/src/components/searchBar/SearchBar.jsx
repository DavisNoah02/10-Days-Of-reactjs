import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch, onUseLocation }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      <button 
        onClick={onUseLocation} 
        className="location-button"
        title="Use your current location"
      >
        📍 Use My Location
      </button>
    </div>
  );
};

export default SearchBar;
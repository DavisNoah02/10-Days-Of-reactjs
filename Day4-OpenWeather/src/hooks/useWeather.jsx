import { useState, useEffect } from 'react';
import { fetchWeatherByCity, fetchWeatherByCoords } from '../services/weatherService';

const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getWeatherByCity = async (city) => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchWeatherByCity(city);
      setWeather(data);
    } 
    catch (error) {
      setError('Failed to fetch weather data. Please try again.');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const getWeatherByLocation = () => {
    setLoading(true);
    setError(null);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const data = await fetchWeatherByCoords(latitude, longitude);
            setWeather(data);
          } catch (error) {
            setError('Failed to fetch weather data. Please try again.');
            throw error;
          } finally {
            setLoading(false);
          }
        },
        (error) => {
          setError('Location access denied. Please search for a city manually.');
          setLoading(false);
          throw error;
        }
      );
    } else {
      setError('Geolocation is not supported by your browser.');
      setLoading(false);
    }
  };

  useEffect(() => {
    getWeatherByLocation();
  }, []);

  return { weather, loading, error, getWeatherByCity, getWeatherByLocation };
};

export default useWeather;
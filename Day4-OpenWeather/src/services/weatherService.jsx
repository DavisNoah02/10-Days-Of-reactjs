import { API_KEY, BASE_URL } from '../../config';

export const fetchWeatherByCity = async (city) => {
  try {
    const response = await fetch(
    //   `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
    `${window.CONFIG.BASE_URL}/weather?q=${city}&units=metric&appid=${window.CONFIG.API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Weather data not available');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
};

export const fetchWeatherByCoords = async (lat, lon) => {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Weather data not available');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
};

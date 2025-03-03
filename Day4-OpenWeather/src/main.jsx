import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

window.CONFIG = {
  API_KEY: 'your_actual_api_key_here',
  BASE_URL: 'https://api.openweathermap.org/data/2.5'
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

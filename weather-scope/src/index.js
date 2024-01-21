import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherAPIProvider from './context/WeatherAPIContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WeatherAPIProvider>
      <App />
    </WeatherAPIProvider>
  </React.StrictMode>
);

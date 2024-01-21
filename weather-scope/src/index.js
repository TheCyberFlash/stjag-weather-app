import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherAPIProvider from './context/WeatherAPIContext';

ReactDOM.render(
  <React.StrictMode>
    <WeatherAPIProvider>
      <App />
    </WeatherAPIProvider>
  </React.StrictMode>, document.getElementById('root')
);

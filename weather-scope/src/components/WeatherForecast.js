import React from "react";
import { useWeatherAPI } from "../context/WeatherAPIContext";

const WeatherForecast = () => {
    const { weatherDetails, weatherError } = useWeatherAPI();
    console.log(weatherError);
    // if(!weatherDetails) return null;

    return (
        <div>
            
            {weatherDetails && (
                <div>
                    <h2>Weather Forecast</h2>
                    <h3>{weatherDetails.name}</h3>
                    <p>Temperature: {weatherDetails.main.temp}</p>
                    <p>Feels Like: {weatherDetails.main.feels_like}</p>
                    <p>Humidity: {weatherDetails.main.humidity}</p>
                    <p>Wind Speed: {weatherDetails.wind.speed}</p>
                </div>
            )}
            {weatherError && (
                <div>
                    <h3>{weatherError}</h3>
                </div>
            )}
        </div>
    );
}

export default WeatherForecast;
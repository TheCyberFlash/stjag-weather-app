import React from "react";
import { useWeatherAPI } from "../context/WeatherAPIContext";

const WeatherForecast = () => {
    const { weatherDetails } = useWeatherAPI();

    if(!weatherDetails) return null;

    return (
        <div>
            <h2>Weather Forecast</h2>
            {weatherDetails && (
                <div>
                    <h3>{weatherDetails.name}</h3>
                    <p>Temperature: {weatherDetails.main.temp}</p>
                    <p>Feels Like: {weatherDetails.main.feels_like}</p>
                    <p>Humidity: {weatherDetails.main.humidity}</p>
                    <p>Wind Speed: {weatherDetails.wind.speed}</p>
                </div>
            )}
        </div>
    );
}

export default WeatherForecast;
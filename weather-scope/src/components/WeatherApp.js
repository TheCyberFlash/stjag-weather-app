import React from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import WeatherSelect from "./WeatherSelect";
import WeatherInputSearch from "./WeatherInputSearch";
import WeatherForecast from "./WeatherForecast";

const WeatherApp = () => {
    return (
        <div>
            <h1>
                <TiWeatherPartlySunny size={50} color="blue" /> Weather App
            </h1>
            <WeatherSelect />
            <WeatherForecast />
        </div>
    );
};

export default WeatherApp;
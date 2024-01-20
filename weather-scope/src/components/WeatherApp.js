import React from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import WeatherSelect from "./WeatherSelect";
import WeatherInputSearch from "./WeatherInputSearch";

const WeatherApp = () => {
    return (
        <div>
            <h1>
                <TiWeatherPartlySunny size={50} color="blue" /> Weather App
            </h1>
            <WeatherSelect />
            {/* <WeatherInputSearch /> */}
        </div>
    );
};

export default WeatherApp;
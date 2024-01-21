import React, { createContext, useContext, useState, useEffect } from "react";

const WeatherAPIContext = createContext();
const API_KEY = "c74f95c88b9845570b7dd656dd58f74b";

export const useWeatherAPI = () => {
    if (useContext(WeatherAPIContext) === undefined) {
        throw new Error("useWeatherAPI must be used within a WeatherAPIProvider");
    }

    return useContext(WeatherAPIContext);
}

const WeatherAPIProvider = ({ children }) => {
    const [countryOptions, setCountryOptions] = useState([]);
    const [cityOptions, setCityOptions] = useState([]);

    useEffect(() => {
        fetchInitalOptions();
    } ,[]);

    const fetchInitalOptions = () => {
        fetchCountries();
        fetchCities("UK");
    }

    const fetchCountries = () => {
        fetch("http://api.geonames.org/countryInfoJSON?username=thecyberflash")
        .then(response => response.json())
        .then(data => {
            const countries = data.geonames.map(country => ({ label: country.countryName, value: country.countryCode }));
            setCountryOptions(countries);
        })
    }

    const fetchCities = (country) => {
        fetch(`http://api.geonames.org/searchJSON?username=thecyberflash&country=${country}`)
        .then(response => response.json())
        .then(data => {
            const cities = data.geonames.map(city => ({ label: city.name, value: city.name }));
            setCityOptions(cities);
        })
    }

    const fetchWeatherDetails = (city) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <WeatherAPIContext.Provider value={{ countryOptions, cityOptions, fetchCities, fetchWeatherDetails }}>
            {children}
        </WeatherAPIContext.Provider>
    )
}

export default WeatherAPIProvider;
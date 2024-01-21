import React, { createContext, useContext, useState, useEffect } from "react";

const WeatherAPIContext = createContext();

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

    return (
        <WeatherAPIContext.Provider value={{ countryOptions, cityOptions, fetchCities }}>
            {children}
        </WeatherAPIContext.Provider>
    )
}

export default WeatherAPIProvider;
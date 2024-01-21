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
    const [weatherDetails, setWeatherDetails] = useState(null);
    const [weatherError, setWeatherError] = useState(null);

    useEffect(() => {
        fetchCountries();
    } ,[]);

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

    const fetchWeatherDetails = (city, countryCode) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${API_KEY}`)
          .then(response => {
            if (!response.ok) {
                return response.json().then(errorData => {
                    setWeatherError(errorData.message);
                    throw new Error(errorData.message);
                  });
            }
            return response.json();
          })
          .then(data => {
            setWeatherDetails(data);
            setWeatherError(null);
          })
          .catch(error => {
            console.error('Error fetching weather details:', error.message);
            setWeatherDetails(null);
            setWeatherError(error.message);
          });
      };      

    return (
        <WeatherAPIContext.Provider value={{ countryOptions, cityOptions, fetchCities, fetchWeatherDetails, weatherDetails, weatherError }}>
            {children}
        </WeatherAPIContext.Provider>
    )
}

export default WeatherAPIProvider;
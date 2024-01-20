import React, { useState } from 'react';
import Select from 'react-select';

const WeatherSelect = () => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [countryOptions, setCountryOptions] = useState([]);
    const [cityOptions, setCityOptions] = useState([]);

    const handleCityChange = (e) => {
        setCity(e.target.value);
    }

    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(city, country);

        // Call API ...
    }

    return (
        <div>
            <Select options={countryOptions} placeholder="Country" onChange={handleCountryChange} />
            <Select options={cityOptions} placeholder="City" onChange={handleCityChange}/>

            <button onClick={handleSubmit}>Search</button>
        </div>
    )
}

export default WeatherSelect;
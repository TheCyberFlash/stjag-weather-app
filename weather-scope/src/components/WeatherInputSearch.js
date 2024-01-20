import React, { useState } from 'react';

const WeatherInputSearch = () => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

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
            <input type="text" placeholder="Country" value={country} onChange={handleCountryChange} />
            <input type="text" placeholder="City" value={city} onChange={handleCityChange} />
            <button onClick={handleSubmit}>Search</button>
        </div>
    )
}

export default WeatherInputSearch;
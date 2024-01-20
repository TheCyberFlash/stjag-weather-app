import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const WeatherSelect = () => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [countryOptions, setCountryOptions] = useState([]);
    const [cityOptions, setCityOptions] = useState([]);

    useEffect(() => {
        const countries = [
            { value: 'USA', label: 'USA' },
            { value: 'Canada', label: 'Canada' },
            { value: 'Mexico', label: 'Mexico' },
        ];

        setCountryOptions(countries);

        const cities = [
            { value: 'New York', label: 'New York' },
            { value: 'Los Angeles', label: 'Los Angeles' },
            { value: 'Chicago', label: 'Chicago' },
            { value: 'Houston', label: 'Houston' },
            { value: 'Philadelphia', label: 'Philadelphia' },
            { value: 'Phoenix', label: 'Phoenix' },
            { value: 'San Antonio', label: 'San Antonio' },
            { value: 'San Diego', label: 'San Diego' },
            { value: 'Dallas', label: 'Dallas' },
            { value: 'San Jose', label: 'San Jose' },
            { value: 'Austin', label: 'Austin' },
            { value: 'Jacksonville', label: 'Jacksonville' },
            { value: 'Fort Worth', label: 'Fort Worth' },
            { value: 'Columbus', label: 'Columbus' },
            { value: 'San Francisco', label: 'San Francisco' },
            { value: 'Charlotte', label: 'Charlotte' },
            { value: 'Indianapolis', label: 'Indianapolis' },
            { value: 'Seattle', label: 'Seattle' },
            { value: 'Denver', label: 'Denver' },
            { value: 'Washington', label: 'Washington' },
            { value: 'Boston', label: 'Boston' },
            { value: 'El Paso', label: 'El Paso' },
            { value: 'Nashville', label: 'Nashville' },
            { value: 'Detroit', label: 'Detroit' },
            { value: 'Oklahoma City', label: 'Oklahoma City' },
            { value: 'Portland', label: 'Portland' },
            { value: 'Las Vegas', label: 'Las Vegas' },
            { value: 'Memphis', label: 'Memphis' },
            { value: 'Louisville', label: 'Louisville' },
            { value: 'Baltimore', label: 'Baltimore' },
            { value: 'Milwaukee', label: 'Milwaukee' },
            { value: 'Albuquerque', label: 'Albuquerque' },
            { value: 'Tucson', label: 'Tucson' },
            { value: 'Fresno', label: 'Fresno' },
            { value: 'Mesa', label: 'Mesa' },
        ];

        setCityOptions(cities);
    } ,[]);

    const handleCityChange = (selectedOption) => {
        setCity(selectedOption);
    }

    const handleCountryChange = (selectedOption) => {
        setCountry(selectedOption);
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
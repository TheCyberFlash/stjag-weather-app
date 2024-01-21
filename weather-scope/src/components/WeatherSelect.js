import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { Container, Row, Col } from 'react-bootstrap';
import { useWeatherAPI } from '../context/WeatherAPIContext';

const API_KEY = "c74f95c88b9845570b7dd656dd58f74b";

const WeatherSelect = () => {
    const { countryOptions, cityOptions, fetchCities } = useWeatherAPI();

    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    const handleCityChange = (selectedOption) => {
        setCity(selectedOption);
    }

    const handleCountryChange = (selectedOption) => {
        setCountry(selectedOption);
        fetchCities(selectedOption.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(city, country);

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <Container>
            <Row>
                <Col md={4}>
                    {countryOptions.length > 0 && (
                        <Select options={countryOptions} placeholder="Country" onChange={handleCountryChange} />
                    )}
                </Col>
                <Col md={4}>
                    <Select options={cityOptions} placeholder="City" onChange={handleCityChange}/>
                </Col>
                <Col md={1}>
                </Col>
                <Col md={3}>
                    <button onClick={handleSubmit}>Search</button>
                </Col>
            </Row>
        </Container>
    )
}

export default WeatherSelect;
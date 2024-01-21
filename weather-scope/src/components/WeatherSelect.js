import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { Container, Row, Col } from 'react-bootstrap';

const API_KEY = "c74f95c88b9845570b7dd656dd58f74b";

const WeatherSelect = () => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
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
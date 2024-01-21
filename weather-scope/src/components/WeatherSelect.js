import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { Container, Row, Col } from 'react-bootstrap';

const WeatherSelect = () => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [countryOptions, setCountryOptions] = useState([]);
    const [cityOptions, setCityOptions] = useState([]);

    useEffect(() => {

        fetch("http://api.geonames.org/countryInfoJSON?username=thecyberflash")
        .then(response => response.json())
        .then(data => {
            const countries = data.geonames.map(country => ({ label: country.countryName, value: country.countryName }));
            setCountryOptions(countries);
        })

        fetch("http://api.geonames.org/searchJSON?username=thecyberflash&country=US")
        .then(response => response.json())
        .then(data => {
            const cities = data.geonames.map(city => ({ label: city.name, value: city.name }));
            setCityOptions(cities);
        })        

    } ,[]);

    const handleCityChange = (selectedOption) => {
        setCity(selectedOption);
        console.log(selectedOption);
    }

    const handleCountryChange = (selectedOption) => {
        setCountry(selectedOption);
        console.log(selectedOption);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(city, country);

        // Call API ...
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
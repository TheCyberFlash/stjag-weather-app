import React from "react";
import { useWeatherAPI } from "../context/WeatherAPIContext";
import { Card, ListGroup } from "react-bootstrap";

const WeatherForecast = () => {
  const { weatherDetails, weatherError } = useWeatherAPI();

  return (
    <div className="mt-4 d-flex justify-content-center">
      <div style={{ width: "60%" }}>
        {weatherDetails && (
          <Card>
            <Card.Header as="h2">Weather Forecast</Card.Header>
            <Card.Body>
              <Card.Title>{weatherDetails.name}</Card.Title>
              <div className="d-flex">
                
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    Temperature: {weatherDetails.main.temp}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Humidity: {weatherDetails.main.humidity}
                  </ListGroup.Item>
                </ListGroup>

                <ListGroup variant="flush">
                <ListGroup.Item>
                    Feels Like: {weatherDetails.main.feels_like}
                  </ListGroup.Item>                  
                  <ListGroup.Item>
                    Wind Speed: {weatherDetails.wind.speed}
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </Card.Body>
          </Card>
        )}
        {weatherError && (
          <div className="mt-4">
            <h3>{weatherError}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherForecast;
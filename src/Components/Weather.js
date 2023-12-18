import React from "react";
import DayOne from "./DayOne";
import DayTwo from "./DayTwo";
import DayThree from "./DayThree";

function Weather({weatherData}) {
    if (!weatherData.current || !weatherData.location) {
        return <div>Search by zip to load weather data!</div>;
    }

    return (
        <div>
            <h2>Current Conditions</h2>
            <ul>
                <li>Location: {weatherData.location.name}, {weatherData.location.region}</li>
                <li>Conditions: {weatherData.current.condition.text}</li>
                <li>Current Temp: {weatherData.current.temp_f}°F</li>
                <li>Humidity: {weatherData.current.humidity}%</li>
                <li>AQI: {weatherData.current.air_quality.no2}</li>
                <li>Wind: {weatherData.current.wind_mph}mph</li>
                <li>Wind Gusts: {weatherData.current.gust_mph}mph</li>
            </ul>
            <br/>
            <h2>3 Day Forecast</h2>
            <ul>
                <li><DayOne weatherData={weatherData}/></li>
                <li><DayTwo weatherData={weatherData}/></li>
                <li><DayThree weatherData={weatherData}/></li>
            </ul>
        </div>
        
    )
}

export default Weather;
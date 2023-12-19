import React, { useState } from "react";
import DayOne from "./DayOne";
import DayTwo from "./DayTwo";
import DayThree from "./DayThree";

function Weather({weatherData}) {
    const [isVisible, setIsVisible] = useState(false);

    function toggleVisibility() {
        setIsVisible(!isVisible);
    }

    if (!weatherData.current || !weatherData.location) {
        return <div>Search by zip to load weather data!</div>;
    }

    return (
        <>
        <div className="current">
            <h2>Current Conditions in {weatherData.location.name}, {weatherData.location.region}</h2>
            <ul>
                <li>Conditions: {weatherData.current.condition.text}</li>
                <li>Current Temp: {weatherData.current.temp_f}°F</li>
                <li>Humidity: {weatherData.current.humidity}%</li>
                <li>AQI: {weatherData.current.air_quality.no2}</li>
                <li>Wind: {weatherData.current.wind_mph}mph</li>
                <li>Wind Gusts: {weatherData.current.gust_mph}mph</li>
                <li>Rain: {weatherData.current.precip_in} inches</li>
            </ul>
        </div>
        <div className="three-day">
            <h2 className="three-day-header">3 Day Forecast</h2>
            <div className="day-container">
                <DayOne weatherData={weatherData}/>
                <DayTwo weatherData={weatherData}/>
                <DayThree weatherData={weatherData}/>
            </div>
        </div>
    </>
    )
}

export default Weather;
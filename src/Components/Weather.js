import React from "react";
import DayOne from "./DayOne";
import DayTwo from "./DayTwo";
import DayThree from "./DayThree";

function Weather({weatherData}) {
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
                <DayOne weatherData={weatherData}/>
            <br/>
                <DayTwo weatherData={weatherData}/>
            <br/>
                <DayThree weatherData={weatherData}/>
        </div>
    </>
    )
}

export default Weather;
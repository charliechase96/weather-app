import React, { useState } from "react";
import DayOne from "./DayOne";
import DayTwo from "./DayTwo";
import DayThree from "./DayThree";

function Weather({weatherData}) {
    const [isVisible, setIsVisible] = useState(false);

    function toggleVisibility() {
        setIsVisible(!isVisible);
    }

    if (!weatherData.address) {
        return <p>Search by zip to load weather data!</p>;
    }

    return (
        <>
        <div className="current">
            <h2>Current Conditions in {weatherData.address}</h2>
            <ul>
                <li>Conditions: {weatherData.currentConditions.conditions}</li>
                <li>Current Temp: {weatherData.currentConditions.temp}°F</li>
                <li>Humidity: {weatherData.currentConditions.humidity}%</li>
                <li>Wind: {weatherData.currentConditions.windspeed}mph</li>
                <li>Wind Gusts: {weatherData.currentConditions.windgust}mph</li>
                <li>Rain: {weatherData.currentConditions.precip} inches</li>
            </ul>
        </div>
        <div className="three-day">

            <button 
                className="three-day-header" 
                onClick={toggleVisibility}
            >
                3 Day Forecast
            </button>

            {isVisible ? <div className="day-container">
                            <DayOne weatherData={weatherData}/>
                            <DayTwo weatherData={weatherData}/>
                            <DayThree weatherData={weatherData}/>
                        </div> : null}
            
        </div>
    </>
    )
}

export default Weather;
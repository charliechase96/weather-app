import React from "react";

function DayOne({weatherData}) {
    return (
        <div className="day1">
            <h3>Date: {weatherData.days[0].datetime}</h3>
            <ul>
                <li>Max. Temp: {weatherData.days[0].tempmax}°F</li>
                <li>Min. Temp: {weatherData.days[0].tempmin}°F</li>
                <li>Conditions: {weatherData.days[0].conditions}</li>
                <li>Avg. Humidity: {weatherData.days[0].humidity}%</li>
                <li>Winds: {weatherData.days[0].windspeed}mph</li>
                <li>Chance of Rain: {weatherData.days[0].precipprob}%</li>
            </ul>
        </div>
    )
}

export default DayOne;
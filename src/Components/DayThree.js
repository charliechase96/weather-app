import React from "react";

function DayThree({weatherData}) {
    return (
        <div className="day3">
            <h3>Date: {weatherData.days[2].datetime}</h3>
            <ul>
                <li>Max. Temp: {weatherData.days[2].tempmax}°F</li>
                <li>Min. Temp: {weatherData.days[2].tempmin}°F</li>
                <li>Conditions: {weatherData.days[2].conditions}</li>
                <li>Avg. Humidity: {weatherData.days[2].humidity}%</li>
                <li>Winds: {weatherData.days[2].windspeed}mph</li>
                <li>Chance of Rain: {weatherData.days[2].precipprob}%</li>
            </ul>
        </div>
    )
}

export default DayThree;
import React from "react";

function DayTwo({weatherData}) {
    return (
        <div className="day2">
            <h3>Date: {weatherData.days[1].datetime}</h3>
            <ul>
                <li>Max. Temp: {weatherData.days[1].tempmax}°F</li>
                <li>Min. Temp: {weatherData.days[1].tempmin}°F</li>
                <li>Conditions: {weatherData.days[1].conditions}</li>
                <li>Avg. Humidity: {weatherData.days[1].humidity}%</li>
                <li>Winds: {weatherData.days[1].windspeed}mph</li>
                <li>Chance of Rain: {weatherData.days[1].precipprob}%</li>
            </ul>
        </div>
    )
}

export default DayTwo;
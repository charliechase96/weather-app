import React from "react";

function DayThree({weatherData}) {
    return (
        <div className="day2">
            <h3>Date: {weatherData.forecast.forecastday[2].date}</h3>
            <ul>
                <li>Max. Temp: {weatherData.forecast.forecastday[2].day.maxtemp_f}°F</li>
                <li>Min. Temp: {weatherData.forecast.forecastday[2].day.mintemp_f}°F</li>
                <li>Conditions: {weatherData.forecast.forecastday[2].day.condition.text}</li>
                <li>Avg. Humidity: {weatherData.forecast.forecastday[2].day.avghumidity}%</li>
                <li>AQI: {weatherData.forecast.forecastday[2].day.air_quality.no2}</li>
                <li>Max. Winds: {weatherData.forecast.forecastday[2].day.maxwind_mph}mph</li>
                <li>Chance of Rain: {weatherData.forecast.forecastday[2].day.daily_chance_of_rain}%</li>
                <li>Chance of Snow: {weatherData.forecast.forecastday[2].day.daily_chance_of_snow}%</li>
            </ul>
        </div>
    )
}

export default DayThree;
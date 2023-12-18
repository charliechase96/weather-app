import React, {useState, useEffect} from "react";

function Weather() {
    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=9ffefacc209c4dc9803111103231912&q=85004&days=3&aqi=yes&alerts=yes`)
        .then(response => response.json())
        .then(data => setWeatherData(data)
    )}, []);

    console.log(weatherData.current.condition.text)

    return (
        <div>
            <ul>
                <li>Location: {weatherData.location.name}, {weatherData.location.region}</li>
                <li>Conditions: {weatherData.current.condition.text}</li>
                <li>Current Temp: {weatherData.current.temp_f}°F</li>
                <li>Humidity: {weatherData.current.humidity}%</li>
                <li></li>
            </ul> 
        </div>
        
    )
}

export default Weather;
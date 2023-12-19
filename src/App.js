import './App.css';
import React, {useState, useEffect} from 'react';
import Search from './Components/Search';
import Weather from './Components/Weather';

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [zip, setZip] = useState("");

function handleZipChange(event) {
    setZip(event.target.value)
}

function getWeatherData() {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=9ffefacc209c4dc9803111103231912&q=${zip}&days=3&aqi=yes&alerts=no`)
    .then(response => response.json())
    .then(data => setWeatherData(data))
}

useEffect(() => {
  console.log(weatherData);
}, [weatherData]);

  return (
    <div className='display'>
      <Search 
        getWeather={getWeatherData}
        zip={zip}
        setZip={setZip}
        onZipChange={handleZipChange}
      />
      <Weather weatherData={weatherData}/>
    </div>
  )
}

export default App;

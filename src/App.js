import './App.css';
import React, {useState} from 'react';
import Search from './Components/Search';
import Weather from './Components/Weather';

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [zip, setZip] = useState("");

function handleZipChange(event) {
    setZip(event.target.value)
}



function getWeatherData() {
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${zip}?unitGroup=us&key=MQ5YX7F7Z9J6MRVCBPD95CX2L&contentType=json`)
    .then(response => response.json())
    .then(data => {
      setWeatherData(data)
      console.log(data)
    })
}

  return (
    <>
      <div className='header-container'>
        <h1>Weather By Zip Code</h1>
      </div> 
      <div className='display'>
        <Search 
          getWeather={getWeatherData}
          zip={zip}
          setZip={setZip}
          onZipChange={handleZipChange}
        />
        <Weather weatherData={weatherData}/>
      </div>
    </>
  )
}

export default App;

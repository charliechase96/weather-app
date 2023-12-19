import React from "react";

function Search({onZipChange, zip, getWeather, setZip}) {
    
    function handleSubmit(event) {
        event.preventDefault();
        getWeather()
        setZip("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="number" 
                placeholder="Enter 5-digit zip code..." 
                maxLength="5"
                value={zip} 
                onChange={onZipChange}
            >
            </input>
            <button type="submit">Search</button>
        </form>
    )
}

export default Search;
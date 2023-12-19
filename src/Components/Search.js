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
                type="text" 
                placeholder="location..." 
                value={zip} 
                onChange={onZipChange}
            >
            </input>
            <button type="submit">Search</button>
        </form>
    )
}

export default Search;
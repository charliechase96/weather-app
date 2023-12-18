import React from "react";

function Search({onZipChange, zip, getWeather}) {
    
    function handleSubmit(event) {
        event.preventDefault();
        getWeather()
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
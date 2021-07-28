import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';
import "./Forecast.css";

const Forecast = () => {

    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);
    let [city, setCity] = useState('');
    let [country, setCountry] = useState('');
    let [unit, setUnit] = useState('metric');
    let [responseObj, setResponseObj] = useState({});
    
    
    function getForecast(e) {
        e.preventDefault();
        
        if (city.length === 0) {
            return setError(true);
        }
         
        // Clear state in preparation for new data
        setError(false);
        setResponseObj({});
        
        setLoading(true);
        
        
        const uriEncodedCity = encodeURIComponent(city);

        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
            "method": "GET",
            "headers": {
            "x-rapidapi-key": "a194168a9emsh09d0e7896fb4cc2p158113jsnc406521d344d",
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            }
            })
        .then(response => response.json())
        .then(response => {
            if (response.cod !== 200) {
                throw new Error()
            }
            setResponseObj(response);
            setLoading(false);
            
        })
        
        
        .catch(err => {
            setError(true);
            setLoading(false);
            console.error(err.message);
        })

   }

   return (
    <div className="Forecast">

        <form onSubmit={getForecast}>


            <div className="TopInput">
                <input
                    type="text"
                    placeholder="City"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                <input
                type="text"
                placeholder="Country"
                maxLength="50"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                />
                <button type="submit">Get Weather</button>
            </div>
            <div className="BottomLabel">
                <label>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                        Fahrenheit
                </label>
                <label>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                        Celcius
                </label>
            </div>            

        </form>


        
        <Conditions
            responseObj={responseObj}
            error={error}
            loading={loading}
            />
    </div>
   )
}

export default Forecast;
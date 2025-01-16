import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getWeatherData } from '../../redux/weather.slice';

function SearchBox() {
    const dispatch = useDispatch();
    let [city, setCity] = useState("jhang");

    let handleChange = (e) => {
        setCity(e.target.value);
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getWeatherData(city));
        setCity("");
    }

    useEffect(() => {
        dispatch(getWeatherData(city));
    }, [])

    return (
        <>
           <p style={{fontSize: "20px", color: "#347136", marginBottom: "1rem"}}>Check Weather</p>
            <input id='search-input' style={{padding: "5px", fontSize: "17px"}} value={city} onChange={handleChange} label="Enter City" required />
            
            <button style={{margin: "5px 0px 2rem"}} onClick={handleSubmit}>Search</button>
        </ >
    )
}

export default SearchBox;
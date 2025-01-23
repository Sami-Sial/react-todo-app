import { useState } from "react";
import { useSelector } from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';

function WeatherInfo() {
    const { weatherData, isLoading } = useSelector(state => state.weather);

    return (
        <>
            {isLoading ? <div><p style={{marginBottom: "15px"}}>Loading Data..</p><CircularProgress/></div> :
                <div>
                    { weatherData && 
                        <div>
                            <p style={{fontSize: "18px"}}>Weather Info - {weatherData.weather[0].description}</p>
                            <p style={{fontSize: "18px", marginBottom: "10px"}}>{weatherData.name}</p>  
                            <p>Temprature = {weatherData.main.temp}</p>
                            <p>Humidity = { weatherData.main.humidity}</p>
                            <p>Min Temp = {weatherData.main.temp_min}</p>
                            <p>Max Temp = {weatherData.main.temp_max}</p>

                            <p style={{marginTop: "5px", fontSize: "15px"}}>Today's weather will be <b style={{color: "#347136"}}>{weatherData.weather[0].description}</b> and temperature will <b style={{color: "#347136"}}>feel like {weatherData.main.feels_like} deg</b></p>
                        </div>
                    }
                </div>
            }
        </>
      
    )
  }
  
  export default WeatherInfo
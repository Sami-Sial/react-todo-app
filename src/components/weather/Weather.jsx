import SearchBox from "./SearchBox"
import WeatherInfo from "./WeatherInfo"

function Weather() {

    return (
        <div id="weather-app" style={{textAlign: "center"}}>
            <SearchBox/>
             <WeatherInfo/>
        </div>
    )
}

export default Weather
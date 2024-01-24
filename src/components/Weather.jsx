import React, { useState } from 'react'
import "./WeatherApp.css";
import cloud_icon from "../assets/cloud.png"
import search_icon from "../assets/search.png"
// import wind_icon from "../assets/wind.png"
// import clear_icon from "../assets/clear.png"
// import rain_icon from "../assets/rain.png"


const Weather = () => {
    let API_KEY = "f1e6ba2f797235f10015f114fe277bbc";
    const [signedicon, setSignedicon] = useState(cloud_icon);
    const search = async () => {

        let element = document.getElementsByClassName("search-city")
        if (element[0].value === "") {
            return 0;
        }
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${API_KEY}&units=metric`;
        let response = await fetch(url);
        let data = await response.json();
        let humidity = document.getElementsByClassName("humidity-percent");
        let temperature = document.getElementsByClassName("weather-temp");
        let location = document.getElementsByClassName("weather-location");
        let wind = document.getElementsByClassName("windspeed-percent");
        humidity[0].innerHTML = data.main.humidity + "%";
        temperature[0].innerHTML = data.main.temp + "°C";
        wind[0].innerHTML = data.wind.speed + "km/h";
        location[0].innerHTML = data.main.name;

    }


    return (
        <div className='container'>
            <div className="top-bar">
                <input className='search-city' placeholder="search city"></input>
                <div className="search-icon">
                    <img src={search_icon} alt="search-icon" onClick={() => search()}></img>
                </div>
            </div>
            <div className='weather-img'>
                <img src={signedicon} alt="cloud-icon" ></img>
            </div>

            <div className="weather-temp">24°C</div>
            <div className="weather-location">London</div>
            <div className="data-container">
                <div className="element">
                    <img src={signedicon} alt="snow-icon"></img>
                    <div className="data">
                        <div className="humidity-percent">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={signedicon} alt="snow-icon"></img>
                    <div className="data">
                        <div className="windspeed-percent">64%</div>
                        <div className="text">Wind speed</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Weather
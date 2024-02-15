import _, { cond } from 'lodash';
import './style.css';
import * as weatherApi from './weatherApiConnection.js';
import Sunny from './/weather_icons/2682848_day_forecast_sun_sunny_weather_icon.png'
import Cloudy from './/weather_icons/2682849_cloud_cloudy_day_forecast_sun_icon.png'
import Precipitation from './/weather_icons/2682844_cloud_day_precipitation_rain_snow_icon.png'
import Raining from './/weather_icons/2682845_cloud_cloudy_forecast_rain_sun_icon.png'
import Moon from './/weather_icons/2682847_eclipse_forecast_moon_night_space_icon.png'
import CloudyMoon from './/weather_icons/2682846_cloud_cloudy_forecast_moon_night_icon.png'


const defaultURL = 'https://api.weatherapi.com/v1/current.json?key=3263d79cb70b48c88b7145028242101&q='

// api query url + key for current day
// https://api.weatherapi.com/v1/current.json?key=3263d79cb70b48c88b7145028242101&q=london

const searchBar = document.querySelector('.searchBar')
searchBar.value = 'London'

async function showWeather(defaultURL) {
    const data = await weatherApi.getWeather(defaultURL);
    function updateOutputWindow(location, condition, temperature) {
        const locationHeader = document.querySelector('.location-header')
        locationHeader.textContent = location;

        const weatherCondition = document.querySelector('.condition')
        weatherCondition.textContent = condition;
        const weatherTemp = document.querySelector('.temp')
        weatherTemp.textContent = temperature + '°';

        
    }
    updateOutputWindow(data.location.name, data.current.condition.text, data.current.temp_c)
    weatherApi.displayWeatherIcon(data.current.condition.text)

}

const searchBtn = document.querySelector('.searchBtn')
searchBtn.addEventListener('click', () => {
    showWeather(defaultURL)
})





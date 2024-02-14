import { cond } from "lodash";
import Sunny from './/weather_icons/2682848_day_forecast_sun_sunny_weather_icon.png'
import Cloudy from './/weather_icons/2682849_cloud_cloudy_day_forecast_sun_icon.png'
import Precipitation from './/weather_icons/2682844_cloud_day_precipitation_rain_snow_icon.png'
import Raining from './/weather_icons/2682845_cloud_cloudy_forecast_rain_sun_icon.png'
import Moon from './/weather_icons/2682847_eclipse_forecast_moon_night_space_icon.png'
import CloudyMoon from './/weather_icons/2682846_cloud_cloudy_forecast_moon_night_icon.png'


function getQueryURL(defaultURL) {
    const searchBar = document.querySelector('.searchBar');
    const input = searchBar.value;
    const queryURL = defaultURL + input.toLowerCase()

    return queryURL;
}

async function getWeather(defaultURL) {
    const response = await fetch(getQueryURL(defaultURL))
    const returnedData = await response.json()
    console.log(returnedData)
    return returnedData;    
}

function displayWeatherIcon(condition) {
    function getWeatherIcon(condition) {
        if (condition == "Overcast") {
            return Cloudy;
        }
        else if (condition == 'Sunny') {
            return Sunny;
        }
        else if (condition == 'Moderate rain') {
            return Raining;
        }
    }

    const image = document.createElement('img')
    image.classList.add('image')
    const icon = document.querySelector('.icon')
    icon.appendChild(image)
    console.log('created image')

    image.src = getWeatherIcon(condition);
}


export {getWeather, getQueryURL, displayWeatherIcon}
import _, { cond } from 'lodash';
import './style.css';
import * as weatherApi from './weatherApiConnection.js';


// api query url + key
// https://api.weatherapi.com/v1/current.json?key=3263d79cb70b48c88b7145028242101&q=london




async function showWeather() {
    const data = await weatherApi.getWeather();
    function updateOutputWindow(location, condition, temperature) {
        const outputElement = document.querySelector('.outputBox')
        outputElement.textContent = 'The Weather in ' + location + ' is ' + condition
         + ' with a temperature of ' + temperature + ' degrees';
    }
    updateOutputWindow(data.location.name, data.current.condition.text, data.current.temp_c)
}


const searchBtn = document.querySelector('.searchBtn')
searchBtn.addEventListener('click', () => {
    showWeather()
})

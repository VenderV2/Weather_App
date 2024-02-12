function getQueryURL() {
    const searchBar = document.querySelector('.searchBar');
    const input = searchBar.value;
    const defaultURL = 'https://api.weatherapi.com/v1/current.json?key=3263d79cb70b48c88b7145028242101&q='
    const queryURL = defaultURL + input.toLowerCase()

    return queryURL;
}

async function getWeather() {
    const response = await fetch(getQueryURL())
    const returnedData = await response.json()
    console.log(returnedData)
    return returnedData;    
}



export {getWeather, getQueryURL}
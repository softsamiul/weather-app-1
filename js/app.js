const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', () => {
    // geting search city
    const getSearchInputTag = document.getElementById('location-input');
    const searchLocation = getSearchInputTag.value;
    console.log(searchLocation);

    fetchApi(searchLocation);
})

// Fetching api
const fetchApi = (searchLocation) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=c35d689fc18f475e83c231327212808&q=${searchLocation}&aqi=no`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data))
}

// Display fetched data
const displayData = (data) => {
    console.log(data);
    // Update location
    const cityName = document.getElementById('city');
    cityName.innerText = data.location.name;
    // update temprature
    const temp = document.getElementById('temp');
    temp.innerText = data.current.temp_c;

    // Update weather-condition-icon
    const tempIcon = document.getElementById('weather-condition-icon');
    tempIcon.src = data.current.condition.icon;

}
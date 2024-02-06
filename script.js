document.getElementById('weatherSearchForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the form from submitting in the traditional way

    // Get the user-entered city name
    const cityName = document.getElementById('cityInput').value;

    // Update the displayed city name
    document.getElementById('cityName').innerText = cityName;

    // Call the function to get weather data for the entered city
    getWeather(cityName);
});
const getWeather = (city) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5a290e9911mshebe1d379de01878p14ca81jsn72eedf54946f', 
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            cloud_pct.innerHTML = response.cloud_pct;
            temp.innerHTML = response.temp;
            feels_like.innerHTML = response.feels_like;
            humidity.innerHTML = response.humidity;
            min_temp.innerHTML = response.min_temp;
            max_temp.innerHTML = response.max_temp;
            wind_speed.innerHTML = response.wind_speed;
            wind_degrees.innerHTML = response.wind_degrees;
            sunrise.innerHTML = new Date(response.sunrise * 1000).toLocaleTimeString();
            sunset.innerHTML = new Date(response.sunset * 1000).toLocaleTimeString();
        })
        .catch(err => console.error(err));
};

        const cloud_pct = document.getElementById("cloud_pct");
        const temp = document.getElementById("temp");
        const feels_like = document.getElementById("feels_like");
        const humidity = document.getElementById("humidity");
        const min_temp = document.getElementById("min_temp");
        const max_temp = document.getElementById("max_temp");
        const wind_speed = document.getElementById("wind_speed");
        const wind_degrees = document.getElementById("wind_degrees");
        const sunrise = document.getElementById("sunrise");
        const sunset = document.getElementById("sunset");

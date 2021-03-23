console.log("script is linked");

var cityInput = document.querySelector("#cityname");
var searchBtn = document.querySelector("#searchButton")



searchBtn.addEventListener("click", getCityName);

function getCityName() {
    var cityName = cityInput.value;
    console.log(cityName);
}

var APIKey = "43d8cb855d9885bc04142f8adeb51405";

function getCityWeather(cityName) {
    var apiUrl = "https://pro.openweathermap.org/data/2.5/forecast/hourly?q={city name}&appid={API key}";
    var apiUrl2 = "https://pro.openweathermap.org/data/2.5/forecast/hourly?q={atlanta}&appid=" + APIKey;
    var apiUrl3 = "https://pro.openweathermap.org/data/2.5/forecast/hourly?q=atlanta&appid=" + APIKey;
    var apiUrl4 = "https://pro.openweathermap.org/data/2.5/forecast/hourly?q={atlanta}&appid={" + APIKey + "}";

    var apiUrl5 = "http://api.openweathermap.org/data/2.5/weather?q=Atlanta&APPID=" + APIKey;

    fetch(apiUrl5)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data)
        
    var currentDate = new Date(data.dt*1000);
    console.log(currentDate);

    })

    
}

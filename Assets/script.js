console.log("script is linked");

var cityInput = document.querySelector("#cityname");
var searchBtn = document.querySelector("#searchButton");
var date = document.querySelector("#currentDate");
var currentCity = document.querySelector("#currentCity");
var tempSpot = document.querySelector("#temperature");
var humidSpot = document.querySelector("#humidity");
var windSpot = document.querySelector("#windspeed");
var forecastSpot = document.querySelectorAll(".forecast");




searchBtn.addEventListener("click", getCityWeather);

// function getCityName() {
//     var cityName = cityInput.value;
//     console.log(cityName);
//     currentCity.textContent = cityName;

// }

var APIKey = "43d8cb855d9885bc04142f8adeb51405";

function getCityWeather(cityName) {

    var cityName = cityInput.value;
    console.log(cityName);
    currentCity.textContent = cityName;


    // var apiUrl = "https://pro.openweathermap.org/data/2.5/forecast/hourly?q={city name}&appid={API key}";
    // var apiUrl2 = "https://pro.openweathermap.org/data/2.5/forecast/hourly?q={atlanta}&appid=" + APIKey;
    // var apiUrl3 = "https://pro.openweathermap.org/data/2.5/forecast/hourly?q=atlanta&appid=" + APIKey;
    // var apiUrl4 = "https://pro.openweathermap.org/data/2.5/forecast/hourly?q={atlanta}&appid={" + APIKey + "}";

    var apiUrl5 = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=" + APIKey;

    fetch(apiUrl5)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data)
        
    var currentDate = new Date(data.dt*1000);
    console.log(currentDate);

    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    
    console.log(day);
    console.log(month);
    console.log(year);

    date.innerHTML = "(" + month + "/" + day + "/" + year + ")";

    console.log(data.main.temp);

    var kTemp = (data.main.temp);

    var fTemp = Math.floor((kTemp- 273.15) *1.8 + 32);
    console.log(fTemp);

    tempSpot.textContent = "Temperature:" + " " + fTemp + "F"; 
    
    console.log(data.main.humidity);
    var humidity = (data.main.humidity);
    humidSpot.textContent = "Humidity:" + " " + humidity + "%";

    var wind = (data.wind.speed);
    windSpot.textContent = "Wind Speed:" + " " + wind + " " + "MPH"

    var latitude = (data.coord.lat);
    var longitude = (data.coord.lon);

    console.log(latitude);
    console.log(longitude);



    // var uvUrl = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=" + APIKey + "&cnt=1";

    // //get weekly forecast

    // var hourly = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude +"&exclude=minutely&appid=" + APIKey;

    // fetch(hourly)
    // .then(function (response) {
    //     return response.json();
    // })

    // .then(function (data) {
    //     console.log(data) 
        
        
    // for (var i = 0; i < 4; i++) {
       
    //     forecastSpot[i].innerHTML = "";
    //     var forecastIn = i*8 + 4;
    
    //     var forecastDate = new Date(response.data.daily[forecastIn].dt * 1000);

    // }

    // })

    let cityId = (data.id);
    console.log(cityId);

    var forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityId + "&appid=" + APIKey;

    fetch(forecastUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        
        for (var i = 0; i < forecastSpot.length; i++) {
            forecastSpot[i].innerHTML = "";
            var forecastIn = i*8 + 4;
            var forecastDate = new Date(data.list[forecastIn].dt *1000);
            var forecastDay = forecastDate.getFullYear();
            console.log(forecastDate);
            
        }


    })

    });
    

    
}

function convertTemp() {
    var kTemp = 293.03;
    var fTemp = Math.floor((kTemp- 273.15) *1.8 + 32);
    console.log(fTemp);
   

}
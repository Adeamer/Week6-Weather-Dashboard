//Getting HTML elements to be manipulated//
var searchBtn = document.getElementById("search-button");
var inputValue = document.getElementById("inputValue");
var searchHistoryList = document.getElementById("search-history");
var results = document.querySelector("resultsContainer");


//Getting the saved value from Local storage and apending it to the created li element for the recent search history.//
function getSavedValue(){
    var SavedCity = JSON.parse(localStorage.getItem("City"));
    var searchHistory = document.createElement("li");
    searchHistory.setAttribute("id", "search-history-list");
    searchHistoryList.appendChild(searchHistory);
    searchHistory.innerHTML= SavedCity;
};


//saving input value from search bar and storing in local storage.//

searchBtn.addEventListener("click", function(event){
    event.preventDefault();
    $("p").empty();
    var savedCities= []
    savedCities.push(inputValue.value);
    localStorage.setItem("City", JSON.stringify(savedCities));
    //Pulling API data for current weather.
    var APIKey ="5882b925eee672571dd3e84eb144c900";
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q="+ inputValue.value +"&units=metric&appid="+ APIKey;
    
    //Pulling input value from local storage.
    JSON.parse(localStorage.getItem("City"));

    //fetching current weather API and displaying data from input value.
    $.getJSON(requestUrl, function(data){
            
           var name= data.name;
           var wind= data.wind.speed;
           var temp= Math.floor(data.main.temp);
           var icon="https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
           var humidity= data.main.humidity;
           var lat = data.coord.lat;
           var lon = data.coord.lon;

        
           $(".city-name").append(name);
           $(".icon").attr("src", icon);
           $(".temp").append("Temp: ", temp, " Degrees");
           $(".wind").append("Wind Speed: ", wind, " Meters per second");
           $(".humidity").append("Humidity ", humidity, "%");


           //Pulling UV index and 5 day forecast API
           var uviUrl = "https://api.openweathermap.org/data/2.5/onecall?lat="+ lat +"&lon="+ lon +"&units=metric&appid="+ APIKey;
           console.log(uviUrl);
           //Fetching and formating UV index and 5 days forecast into html.
           $.getJSON(uviUrl, function(data){
            console.log(data);
            var uvIndex = data.current.uvi;
            var uvIndexIndicator = document.getElementById("UV-Index-Indicator");
            $(".uv-index").append("UV Index: ", uvIndex);
            if (uvIndex < 3){
                uvIndexIndicator.style.backgroundColor = "green";
            }else if (uvIndex > 3 && uvIndex < 5){
                uvIndexIndicator.style.backgroundColor = "yellow";
            }else if (uvIndex > 6 && uvIndex < 7){
                uvIndexIndicator.style.backgroundColor = "orange"; 
            }else if(unIndex > 8 && uvIndex < 10){
                uvIndexIndicator.style.backgroundColor = "red";
            }else{
                uvIndexIndicator.style.display = "none";
            };
            
            var forecast = document.getElementById(".forecastContainer");

           

            //looping over the forecast container to create the 5 day forecast.
            for (var i=0; i < forecast.length; i++){
                var forecastContainer = document.createElement("li");
                forecastContainer.setAttribute("id", "forecast-container"); var forecastDate = data.daily[0].dt;
                var forecastIcon = data.daily[0].weather[0].icon;
                var forecastTemp = Math.floor(data.daily[0].temp);
                var forecastHumidity = data.daily[0].humidity;

                $(".date").append(forecastDate);
                $(".for-icon").attr("src", forecastIcon);
                $(".for-temp").append("Temp: ", forecastTemp, "Degrees");
                $(".for-wind").append("Wind Speed", forecastWind, " MPS");
                $(".for-humidity").append("Humidity: ", forecastHumidity, "%");
            };



            });
       })

  
    getSavedValue();
});
 
//Getting HTML elements to be manipulated//
var searchBtn = document.getElementById("search-button");
var inputValue = document.getElementById("inputValue");
var searchHistoryList = document.getElementById("search-history");
var results = document.querySelector("resultsContainer");


//Declaring variables for the API data from Open Weather.Org//
var APIKey ="5882b925eee672571dd3e84eb144c900";
var currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q="+ inputValue +"&units=metric&appid="+ APIKey;
var WeatherForcast = "https://api.openweathermap.org/data/2.5/weather?q="+ inputValue +"&units=metric&appid=5882b925eee672571dd3e84eb144c900";

//saving input value from search bar and storing in local storage.//

searchBtn.addEventListener("click", function(event){
    event.preventDefault();
    var savedCities= []
    savedCities.push(inputValue.value);
    localStorage.setItem("City", JSON.stringify(savedCities));
    JSON.parse(localStorage.getItem("City"));
    $.getJSON(currentWeatherURL, function(data){
        console.log(data);
   
           var wind= data.wind.speed;
           var temp= Math.floor(data.main.temp);
           var icon="https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
       
           $(".icon").attr("src", icon);
           $(".temp").append(temp);
           $(".wind").append(wind, " Meters per second");
        console.log(wind);
       })
   
    getSavedValue();
});

//inputing current weather into the the results variable//
// searchBtn.addEventListener("click", function(event){
//     event.preventDefault();
// };

//Getting the saved value from Local storage and apending it to the created li element for the recent search history.//
function getSavedValue(){
    var SavedCity = JSON.parse(localStorage.getItem("City"));
    var searchHistory = document.createElement("li");
    searchHistory.setAttribute("id", "search-history-list");
    searchHistoryList.appendChild(searchHistory);
    searchHistory.innerHTML= SavedCity;
};

// function handleSave(key){
//     var timeValue = document.getElementById(key).value
//     localStorage.setItem(key,timeValue);
//   }
  
  function parsistData(string){
    if (!localStorage.getItem(string.id)) {
        return false;
    }
    return localStorage.getItem(string.id);
  };
  



  
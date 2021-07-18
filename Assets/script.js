//Getting HTML elements to be manipulated//
var SearchBtn = document.getElementById("search-button");
var inputValue = document.getElementById("inputValue");
var searchHistoryList = document.getElementById("search-history")


//Declaring variables for the API data from Open Weather.Org//
var APIKey ="5882b925eee672571dd3e84eb144c900";
var CurrentWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q="+inputValue+"&units=metric&appid=5882b925eee672571dd3e84eb144c900";

//saving input value from search bar and storing in local storage.//
function saveInput(){
 SearchBtn.addEventListener("click", function(event){
    event.preventDefault();
    inputValue = [inputValue.value];
    localStorage.setItem("City", inputValue);
    getSavedValue();
 });
}

//Getting the saved value from Local storage and apending it to the created li element for the recent search history.//
function getSavedValue(){
    var getSavedItem = localStorage.getItem("City");
    var searchHistory = document.createElement("li");
    searchHistoryList.appendChild(searchHistory);
    searchHistory.innerHTML= getSavedItem;
    saveInput();
};



// function getApi (requestURL){
//     fetch(requestURL)
//         .then(function (response) {
//             console.log(response)
//         })
// };
// function performSearch () {
//     $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Brisbane&units=metric&appid=5882b925eee672571dd3e84eb144c900", function(data){
//      console.log(data);

//         var wind= data.wind.speed;
//         var temp= Math.floor(data.main.temp);
//         var icon="https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    
//         $(".icon").attr("src", icon);
//         $(".temp").append(temp);
//         $(".wind").append(wind, " Meters per second");
//      console.log(wind);
//     })
// };

  
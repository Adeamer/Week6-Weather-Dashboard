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
    var savedCities= []
    savedCities.push(inputValue.value);
    localStorage.setItem("City", JSON.stringify(savedCities));
    var APIKey ="5882b925eee672571dd3e84eb144c900";
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q="+ inputValue.value +"&units=metric&appid="+ APIKey;
    var lat = data.coord.lat;
    var lon = data.coord.lon;
    var uviUrl = "https://api.openweathermap.org/data/2.5/onecall?lat="+ lat +"&lon="+ lon +"&exclude=current,minutely,hourly&appid="+ APIKey;
    console.log(uviUrl);
    JSON.parse(localStorage.getItem("City"));
    $.getJSON(requestUrl, function(data){
        
           var name= data.name;
           var wind= data.wind.speed;
           var temp= Math.floor(data.main.temp);
           var icon="https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
           var humidity= data.main.humidity;

        
           $(".city-name").append(name);
           $(".icon").attr("src", icon);
           $(".temp").append("Temp: ", temp, " Degrees");
           $(".wind").append("Wind Speed: ", wind, " Meters per second");
           $(".humidity").append("Humidity ", humidity, "%");
       })

    $.getJSON(uviUrl, function(data){
        console.log(data);
        
    })
    getSavedValue();
});


    




  
//   function parsistData(string){
//     if (!localStorage.getItem(string.id)) {
//         return false;
//     }
//     return localStorage.getItem(string.id);
//   };
  



  
//Getting HTML elements to be manipulated//
var APIKey ="5882b925eee672571dd3e84eb144c900";
var SearchBtn = document.getElementById("search-button");


var requestURL = "https://api.openweathermap.org/data/2.5/weather?q="+inputValue+"&units=metric&appid=5882b925eee672571dd3e84eb144c900";

function Searchinput(){
    var inputValue = document.getElementById("inputValue").value;
    console.log(inputValue);
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

  
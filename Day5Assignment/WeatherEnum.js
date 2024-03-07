/*
Define a Weather Enum:
Create an enum named WeatherType with the following values: Sunny, Rainy, Windy, Cloudy, and Snowy.
Create Weather Data:
Create an array named weeklyForecast that will store the weather forecast for a week.
The array should contain seven elements, each representing the weather for a day of the week, using the WeatherType enum.
Display the Forecast:
Write a function named displayForecast that iterates through the weeklyForecast array.
The function should print out the weather forecast for each day in a format like: "Day 1: Sunny", "Day 2: Rainy", etc.
*/
var WeatherType;
(function (WeatherType) {
    WeatherType[WeatherType["Sunny"] = 0] = "Sunny";
    WeatherType[WeatherType["Rainy"] = 1] = "Rainy";
    WeatherType[WeatherType["Windy"] = 2] = "Windy";
    WeatherType[WeatherType["Cloudy"] = 3] = "Cloudy";
    WeatherType[WeatherType["Snowy"] = 4] = "Snowy";
})(WeatherType || (WeatherType = {}));
//let weeklyForecast: any[] = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var weeklyForecast = [WeatherType.Cloudy, WeatherType.Sunny, WeatherType.Snowy,
    WeatherType.Windy, WeatherType.Rainy, WeatherType.Sunny, WeatherType.Windy];
//const keys = Object.keys(WeatherType);
//console.log(keys);
function displayForecast() {
    for (var i = 0; i < weeklyForecast.length; i++) {
        console.log("Day ".concat(i + 1, ": ").concat(WeatherType[weeklyForecast[i]]));
    }
}
displayForecast();

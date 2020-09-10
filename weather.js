class Weather
{
    constructor(city,country){
        this.apiKey = '1f407a2de043e81f251391519060c5ca';
        this.city = city;
        this.country = country;
    }
    
    //fetch weather from api
    async getWeather(){
const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`);
const responseData = await response.json();
console.log(responseData);
return responseData;
    }

    //change weather location
    changeLocation(city, country) {
        this.city = city
        this.country = country
    }
}

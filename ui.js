class UI{
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('desc');
        this.string=document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feelslike');
        this.wind = document.getElementById('w-wind');
        this.dewpoint = document.getElementById('w-dewpoint');
        
    }
    paint(weather){
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent=weather.main.temp + '°C';
        this.icon.setAttribute(
            'src',
            `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
        );
        this.dewpoint.textContent = `Wind Direction: ${weather.wind.deg} degrees`
        this.humidity.textContent = `Relative Humidity:${weather.main.humidity}`;
        this.feelsLike.textContent = `Feels Like:${weather.main.feels_like}`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed}meters/sec`;
    }
}
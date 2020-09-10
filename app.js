const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city,weatherLocation.country);
weather.getWeather();
const ui = new UI();
document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('location-btn').addEventListener('click', e => {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    //change location
    weather.changeLocation(city, country);

    //set location in local storage
    storage.setLocationData(city, country);

    //get and display weather
    getWeather();

    //close modal
    $('#locModal').modal('hide')
})
function getWeather(){
    weather.getWeather().then((result) => {
        ui.paint(result);
    }).catch((err) => {
        console.log(err);
    });
}
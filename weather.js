const { default: axios } = require('axios');

let currentDate = new Date();
let days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

let months = [
  'December',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'November'
];

let hour = currentDate.getHours();
let minutes = currentDate.getMinutes();
let date = currentDate.getDate();
let month = months[currentDate.getMonth()];
let day = days[currentDate.getDay()];
let year = currentDate.getFullYear();

function currentTime() {
  let today = document.querySelector('#date-today');
  return (today.innerHTML = `${hour}:${minutes} ${day}, ${date} ${month} ${year}`);
}

currentTime();

function changeCity(event) {
  event.preventDefault();
  let input = document.querySelector('#floating-input');
  let city = document.querySelector('#the-city');
  city.innerHTML = input.value;
}

let form = document.querySelector('#city-form');
form.addEventListener('submit', changeCity);

//function farenhait(event) {
// event.preventDefault();
//let unitTemp = document.querySelector('#unit-temp');
//unitTemp.innerHTML = '66';
//}

//let f = document.querySelector('#farenhait');
//f.addEventListener('click', farenhait);

//function celsius(event) {
//event.preventDefault();
//let unitCelsius = document.querySelector('#unit-temp');
//unitCelsius.innerHTML = '20';
//}

//let c = document.querySelector('#celsius');
//c.addEventListener('click', celsius);

function showTemperature(response) {
  console.log();
  let temperature = Math.round(response.data.main.temp);
  let unit = Document.querySelector('#unit-temp');
  unit.innerHTML = temperature;
}

function showPlace(position) {
  let city = document.querySelector('#the-city');
  let unit = 'metric';
  let apiKey = '445905dadb3d2b0c6f1b916c9d0e3860';
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&unit=${unit}`;
  axios.get(apiUrl).then(showTemperature);
}

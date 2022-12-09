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
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'November',
  'December'
];

let date = currentDate.getDate();
let month = months[currentDate.getMonth() - 1];
let day = days[currentDate.getDay()];
let year = currentDate.getFullYear();

function currentTime() {
  let today = document.querySelector('#date-today');
  return (today.innerHTML = ` ${day}, ${date} ${month} ${year}`);
}
currentTime();

function change(event) {
  event.preventDefault();
  let city = document.querySelector('#city-name');
  let searchCity = document.querySelector('#city-form');
  city.innerHTML = searchCity.value;
}

let form = document.querySelector('form');
form.addEventListener('submit', change());

function showTemperature(response) {
  console.log();
  let temperature = Math.round(response.data.main.temp);
  let unit = Document.querySelector('#temp');
  unit.innerHTML = temperature;
}
function showPlace(position) {
  let city = document.querySelector('#city-name');
  let unit = 'metric';
  let apiKey = '445905dadb3d2b0c6f1b916c9d0e3860';
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&unit=${unit}`;
  axios.get(apiUrl).then(showTemperature);
}

showPlace();
  
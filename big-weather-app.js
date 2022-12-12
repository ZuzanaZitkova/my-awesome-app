//add a flexible date, keep it updated
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

//add function to change the main highlight to the searched city
let submitCity = document.querySelector('form');

function changeCityName(event) {
  event.preventDefault();
  let city = document.querySelector('#city-name');
  let input = document.querySelector('#city-form');
  city.innerHTML = input.value;
}

submitCity.addEventListener('submit', changeCityName);

//add function to change the temperature to temp. of the searched city
function getTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let change = document.querySelector('#temp');
  change.innerHTML = `${temperature}°C`;
}
function changeTemp() {
  let theCity = document.querySelector('#city-form');
  let apiCity = theCity.value;
  console.log(apiCity);
  let apiKey = '373700cc0c15cdf7aca8026071f4b33a';
  let units = 'metric';

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${apiCity}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(getTemperature);
}

submitCity.addEventListener('submit', changeTemp);

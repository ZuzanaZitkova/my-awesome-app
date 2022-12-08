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

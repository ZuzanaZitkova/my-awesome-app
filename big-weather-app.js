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

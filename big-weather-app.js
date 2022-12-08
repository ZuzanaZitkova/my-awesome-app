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
  'October',
  'November'
];

let year = currentDate.getFullYear();
let month = months[currentDate.getMonth()];
let dayDate = currentDate.getDate();
let day = days[currentDate.getDate()];
function dateToday() {
  let selectDate = document.querySelector('#date');
  return (selectDate.innerHTML = `${day} ${dayDate} ${month} ${year}`);
}

dateToday();

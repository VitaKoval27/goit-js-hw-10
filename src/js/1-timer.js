import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const dateInput = document.querySelector('#datetime-picker');
const start = document.querySelector('.btn');
start.disabled = true;
start.addEventListener('click', counter);
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

let userSelectedDate;
let timerIntervalId;

const options = {
  enableTime: true,

  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    const currentDate = new Date();
    if (selectedDates[0] <= currentDate) {
      iziToast.error({
        title: '',
        message: 'Please chose a date in the future',
        position: 'topRight',
        timeout: 2000,
      });
    } else {
      userSelectedDate = selectedDates[0];
      start.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function counter(event) {
  start.disabled = true;
  dateInput.disabled = true;
  timerIntervalId = setInterval(() => {
    const now = new Date();
    const msRemining = userSelectedDate.getTime() - now.getTime();
    if (msRemining <= 0) {
      clearInterval(timerIntervalId);
      days.textContent = '00';
      hours.textContent = '00';
      minutes.textContent = '00';
      seconds.textContent = '00';
      dateInput.disabled = false;
      start.disabled = false;
      return;
    }
    const time = convertMs(msRemining);
    days.textContent = addLeadingZero(time.days);
    hours.textContent = addLeadingZero(time.hours);
    minutes.textContent = addLeadingZero(time.minutes);
    seconds.textContent = addLeadingZero(time.seconds);
  }, 1000);
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

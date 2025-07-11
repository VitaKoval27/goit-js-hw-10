import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const form = document.querySelector('.form');
const delayInput = document.querySelector('.delay-input');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const delay = +delayInput.value;
  const state = form.elements.state.value;
  console.log(`Delay: ${delay}ms, State: ${state}`);

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
  promise
    .then(delayValue => {
      console.log(' ✅Fulfilled is ${delayValue}');
      iziToast.success({
        title: 'OK',
        message: `✅Fulfilled promise in ${delayValue}ms`,
        position: 'topCenter',
        timeout: 2000,
      });
    })
    .catch(delayValue => {
      console.log(`❌ Rejected promise in ${delayValue}ms`);
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delayValue} ms`,
        position: 'topCenter',
        timeout: 2000,
      });
    })
    .finally(() => form.reset());
}

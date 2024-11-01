// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();

  const delay = parseInt(event.target.delay.value, 10);
  const state = event.target.state.value;

  createPromise(delay, state)
    .then(result => {
      console.log(`✅ Fulfilled promise in ${result}ms`);
      iziToast.success({
        title: 'Success',
        message: `Fulfilled promise in ${result}ms`,
      });
    })
    .catch(error => {
      console.log(`❌ Rejected promise in ${error}ms`);
      iziToast.error({
        title: 'Error',
        message: `Rejected promise in ${error}ms`,
      });
    });
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}

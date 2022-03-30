const selectEl = document.querySelector('select');
const selectPlaceholderOptionEl = selectEl.querySelectorAll('option')[0];
let lastInvalid = true;

// Keep the first select option (placeholder) with a different color
// with respect to the rest of the options. Also, change the select color
// according to the current value (placeholder vs valid value)
selectEl.addEventListener('change', (event) => {
  if (lastInvalid && event.target.value) {
    lastInvalid = false;
    selectPlaceholderOptionEl.style.color = '#828282';
    event.target.classList.toggle('select-valid');
    event.target.classList.toggle('select-placeholder');
  } else if (!lastInvalid && !event.target.value) {
    lastInvalid = true;
    event.target.classList.toggle('select-valid');
    event.target.classList.toggle('select-placeholder');
  }
});

const formEl = document.querySelector('form');
const formSuccessMessageEl = document.querySelector('.form-success-message');
const messageEl = document.querySelector('.message');

// Show message on form submit (if validation was successful)
formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  formSuccessMessageEl.style.display = 'flex';
  messageEl.style.display = 'flex';
  setTimeout(() => {
    formSuccessMessageEl.style.display = 'none';
    messageEl.style.display = 'none';
  }, 5000);
  formEl.reset();
});

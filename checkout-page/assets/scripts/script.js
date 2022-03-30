// Keep the first select option (placeholder) with a different color
// with respect to the rest of the options. Also, change the select color
// according to the current value (placeholder vs valid value)
const selectEl = document.querySelector('select');
const selectPlaceholderOptionEl = selectEl.querySelectorAll('option')[0];
let lastInvalid = true;

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

// Show message on form submit (if validation was successful)
const formEl = document.querySelector('form');
const formSuccessMessageEl = document.querySelector('.form-success-message');
const messageEl = document.querySelector('.message');

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

// Handler for items counter
const itemRowEls = document.querySelectorAll('.item-row');
const shippingPriceEl = document.querySelector('[data-shipping-price]');
const totalPriceEl = document.querySelector('[data-total-price]');
const SHIPPING_COST = 5.0;
const MAX_ITEMS_PER_SHIPPING = 3;

itemRowEls.forEach((itemRowEl) => {
  const handleButton = (factor) => () => {
    // Update item counter
    const currentItemCounter = parseInt(itemCounterEl.dataset.itemCounterValue);
    const updatedItemCounter = Math.max(
      0,
      parseInt(currentItemCounter + factor)
    );
    itemCounterEl.textContent = `${updatedItemCounter}`;
    itemCounterEl.dataset.itemCounterValue = updatedItemCounter;

    const priceDifference =
      (updatedItemCounter - currentItemCounter) * itemPrice;

    // Update shipping cost
    const currentShippingPrice = parseFloat(
      shippingPriceEl.dataset.shippingPrice
    );

    let updatedShippingPrice;
    if (factor === -1) {
      updatedShippingPrice =
        currentItemCounter % MAX_ITEMS_PER_SHIPPING === 1 &&
        updatedItemCounter % MAX_ITEMS_PER_SHIPPING === 0
          ? Math.max(0, currentShippingPrice - SHIPPING_COST)
          : currentShippingPrice;
    } else if (factor === 1) {
      updatedShippingPrice =
        currentItemCounter % MAX_ITEMS_PER_SHIPPING === 0 &&
        updatedItemCounter % MAX_ITEMS_PER_SHIPPING === 1
          ? currentShippingPrice + SHIPPING_COST
          : currentShippingPrice;
    }
    shippingPriceEl.textContent = `$${updatedShippingPrice}`;
    shippingPriceEl.dataset.shippingPrice = updatedShippingPrice;

    const shippingPriceDifference = updatedShippingPrice - currentShippingPrice;

    // Update total price
    const currentTotalPrice = parseFloat(totalPriceEl.dataset.totalPrice);
    const updatedTotalPrice = (
      currentTotalPrice +
      priceDifference +
      shippingPriceDifference
    ).toFixed(2);
    totalPriceEl.textContent = `$${updatedTotalPrice}`;
    totalPriceEl.dataset.totalPrice = updatedTotalPrice;
  };

  // Get the price of the current item (as float)
  const itemPrice = parseFloat(
    itemRowEl.querySelector('[data-price]').dataset.price
  );
  const lessButtonEl = itemRowEl.querySelector('.less-button');
  const plusButtonEl = itemRowEl.querySelector('.plus-button');
  const itemCounterEl = itemRowEl.querySelector('[data-item-counter-value]');

  lessButtonEl.addEventListener('click', handleButton(-1));
  plusButtonEl.addEventListener('click', handleButton(+1));
});

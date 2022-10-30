let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
let counterNumber = document.querySelector("#value");

decrementBtn.addEventListener(
  "click",
  () => (counterNumber.textContent = counterValue--)
);

incrementBtn.addEventListener(
  "click",
  () => (counterNumber.textContent = counterValue++)
);

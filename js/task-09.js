function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");
const bodyEl = document.querySelector("body");

buttonEl.addEventListener("click", onButtonClick);

function onButtonClick() {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  colorValue.textContent = randomColor;
}

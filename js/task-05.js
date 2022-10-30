const inputEL = document.querySelector("#name-input");
const greetText = document.querySelector("#name-output");

inputEL.addEventListener("input", onChangeText);

function onChangeText(event) {
  if (event.currentTarget.value !== "") {
    return (greetText.textContent = event.currentTarget.value);
  }

  return (greetText.textContent = "Anonymous");
}

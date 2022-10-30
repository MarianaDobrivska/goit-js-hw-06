const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onBlurInput);

function onBlurInput(event) {
  if (Number(inputEl.dataset.length) === event.currentTarget.value.length) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}

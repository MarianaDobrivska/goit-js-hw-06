const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formData = event.currentTarget.elements;
  const userData = {};

  for (let i = 0; i < formData.length - 1; i++) {
    if (formData[i].value === "") {
      return alert("Усі поля повинні бути заповнені!");
    }
    userData[formData[i].name] = formData[i].value;
  }

  console.log(userData);
  event.currentTarget.reset();
  return userData;
}

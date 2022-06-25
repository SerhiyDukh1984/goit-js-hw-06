const formEl = document.querySelector(".login-form");
const EmailEl = document.querySelector(".email");
const PasswordEl = document.querySelector(".password");
const buttonEl = document.querySelector("button");

//*! event.preventDefault();

buttonEl.addEventListener("click", onButtonClick);

function onButtonClick(event) {
  event.preventDefault();
  if (EmailEl.textContent === "" || PasswordEl.textContent === "") {
    alert("!!! ALARM !!! Всі поля мають бути заповнені!");
  }
  return {
    email: `${EmailEl.textContent}`,
    password: `${PasswordEl.textContent}`,
  };
}

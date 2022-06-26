const buttonEl = document.querySelector(".change-color");
const textEl = document.querySelector(".color");
document.body.classList.add("backgroundColor");

buttonEl.addEventListener("click", onButtonClick);

function onButtonClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  textEl.textContent = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

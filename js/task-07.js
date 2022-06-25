const inputEl = document.querySelector("#font-size-control");
const inputTextEl = document.querySelector("#text");
inputTextEl.classList.add("font-size");

inputEl.addEventListener("change", onInputControl);

function onInputControl(event) {
  inputTextEl.style.fontSize = `${event.currentTarget.value}px`;
}

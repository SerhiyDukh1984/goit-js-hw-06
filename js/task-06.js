const inputEl = document.querySelector("#validation-input");
const minLength = inputEl.dataset.length;

inputEl.addEventListener("blur", makeInputValidation);

function makeInputValidation(event) {
  if (`${event.currentTarget.value.length}` !== minLength) {
    inputEl.classList.add("invalid");
  } else {
    inputEl.classList.replace("invalid", "valid");
  }
}

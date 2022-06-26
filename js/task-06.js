const inputEl = document.querySelector("#validation-input");
const minLength = inputEl.dataset.length;

inputEl.addEventListener("blur", makeInputValidation);

function makeInputValidation(event) {
  if (`${event.currentTarget.value.length}` !== minLength) {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
    console.log(
      "🚀 ~ file: task-06.js ~ line 10 ~ makeInputValidation ~ inputEl",
      inputEl
    );
  } else if (`${event.currentTarget.value.length}` === minLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
    console.log(
      "🚀 ~ file: task-06.js ~ line 14 ~ makeInputValidation ~ inputEl",
      inputEl
    );
  }
}

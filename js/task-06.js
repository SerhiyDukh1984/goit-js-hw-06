const inputEl = document.querySelector("input");
const minLength = inputEl.getAttribute("data-length");

inputEl.addEventListener("blur", makeInputValidation);

function makeInputValidation(event) {
  const value = event.currentTarget.value.length;

  if (value <= 0) {
    return (inputEl.style.borderColor = "#bdbdbd");
  } else if (value < 6) {
    inputEl.style.borderColor = "#f44336";
  } else {
    inputEl.style.borderColor = "#4caf50";
  }
}

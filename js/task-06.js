const input = document.querySelector("input");

input.addEventListener("focus", onFocus);
input.addEventListener("blur", addInputValidation);

function onFocus() {
  input.classList.add("#validation-input");
}

function addInputValidation() {
  if (input.textContent >= input.Length) {
    input.classList.add("#validation-input.valid");
  } else {
    input.classList.add("#validation-input.invalid");
  }
}

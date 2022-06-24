const refs = {
  input: document.querySelector("#name-input"),
  name: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (input !== "") {
    refs.name.textContent = event.currentTarget.value;
  }
  name.textContent = "Anonymous";
}

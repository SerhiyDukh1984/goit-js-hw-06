const refs = {
  inputEl: document.querySelector("#name-input"),
  nameLable: document.querySelector("#name-output"),
};

refs.inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  refs.inputEl.value !== ""
    ? (refs.nameLable.textContent = event.currentTarget.value)
    : (refs.nameLable.textContent = "Anonymus");
}

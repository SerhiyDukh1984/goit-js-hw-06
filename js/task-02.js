const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const createItem = function (el) {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = el;
  return itemEl;
};

const ingredientsList = [...ingredients].map((el) => createItem(el));

const allIngredients = document.querySelector("#ingredients");

allIngredients.append(...ingredientsList);

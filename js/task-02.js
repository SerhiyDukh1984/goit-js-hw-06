const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const createItem = function (...ingredients) {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = ingredients;
  return itemEl;
};

const ingredientsList = [...ingredients].map((item) => createItem(item));

const allIngredients = document.querySelector("#ingredients");

allIngredients.append(...ingredientsList);

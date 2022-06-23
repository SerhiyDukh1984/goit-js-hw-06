const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = ingredients.map((el) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = el;
  return itemEl;
});

const allIngredients = document.querySelector("#ingredients");

allIngredients.append(...ingredientsList);

const itemsList = document.querySelectorAll(".item");

console.log(`Number of categories: ${itemsList.length}`);

const category = [...itemsList].map((el) => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});

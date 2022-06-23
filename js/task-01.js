const itemsList = document.querySelectorAll(".item");

// const categoryList = document.querySelectorAll(".element");
// console.log(categoryList);

console.log(`Number of categories: ${itemsList.length}`);

const category = [...itemsList].map((el) => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const createItem = images.map((image) => {
  const listEl = document.createElement("li");
  const imageEl = document.createElement("img");
  imageEl.src = image.url;
  imageEl.alt = image.alt;
  listEl.appendChild(imageEl);
  console.log("🚀 ~ file: task-03.js ~ line 22 ~ createItem ~ listEl", listEl);

  return listEl;
});
// console.log(listEl);

// const imageSet = [...images].map((img) => createItem());
const allImages = document.querySelector("galery");
allImages.appendChild(...createItem);

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

const makeImageMarkup = (image) => {
  return `<li><img src = '${image.url}' alt = '${image.alt}' width = '300' heigth = '150'></img></li>`;
};

const makeImagesRow = images.map(makeImageMarkup).join("");

const galeryEl = document.querySelector(".gallery");
// galeryEl.style.display = "grid";
// galeryEl.style.gridTemplateColumns = "repeat(3, auto)";
// galeryEl.style.gap = "20px";
// galeryEl.style.listStyle = "none";

galeryEl.insertAdjacentHTML("afterBegin", makeImagesRow);
Object.assign(document.querySelector(".gallery").style, {
  display: "grid",
  gridTemplateColumns: "repeat(1, auto)",
  gap: "20px",
  listStyle: "none",
  height: "150",
});

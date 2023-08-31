function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const BodySelector = document.querySelector("body");

const btnSelector = document.querySelector(".change-color");
btnSelector.addEventListener("click", (e) => {
  BodySelector.style.backgroundColor = getRandomHexColor();
});

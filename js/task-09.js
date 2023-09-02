function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const BodySelector = document.querySelector("body");
const classSelector = document.querySelector("span.color");
const btnSelector = document.querySelector(".change-color");

btnSelector.addEventListener("click", (e) => {
  const RandomColor = getRandomHexColor();

  BodySelector.style.backgroundColor = RandomColor;
  classSelector.textContent = RandomColor;
  classSelector.style.backgroundColor = "#000000";
  classSelector.style.color = RandomColor;
  classSelector.style.fontWeight = 800;
  classSelector.style.padding = "20px";
  classSelector.style.borderRadius = "10px";
});

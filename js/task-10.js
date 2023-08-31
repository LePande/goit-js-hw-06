function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const selectInput = document.querySelector("input[type=number]");
const selectCreateBtn = document.querySelector("button[data-create]");
const selectDestryBtn = document.querySelector("button[data-destroy]");
const divSelector = document.querySelector("div#boxes");
let inputValue = 0;
let boxSize = 30;

selectInput.addEventListener("input", (e) => {
  inputValue = e.currentTarget.value;
});

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    divSelector.append(box);
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxSize += 10;
  }
}

selectCreateBtn.addEventListener("click", (e) => {
  createBoxes(inputValue);
});

selectDestryBtn.addEventListener("click", (e) => {
  divSelector.innerHTML = "";
});

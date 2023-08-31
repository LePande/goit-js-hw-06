const takeData = document.querySelector("#name-input");
const printData = document.querySelector("#name-output");

takeData.addEventListener("input", (e) => {
  printData.textContent = e.currentTarget.value;
});

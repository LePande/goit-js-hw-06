const rangeSelector = document.querySelector("input");

const text = document.querySelector("#text");
text.style.fontSize = "56px";

rangeSelector.addEventListener("input", (e) => {
  text.style.fontSize = rangeSelector.value + "px";
});

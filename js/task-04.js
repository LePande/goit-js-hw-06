const decrementbtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);

const incrementbtn = document.querySelector(
  '#counter button[data-action="increment"]'
);

const value = document.querySelector("#value");

let counterValue = 0;

decrementbtn.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

incrementbtn.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});

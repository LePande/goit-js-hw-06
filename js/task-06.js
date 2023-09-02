const textInput = document.querySelector("input");

textInput.addEventListener("blur", (e) => {
  const data = (textInput.textContent = e.currentTarget.value);
  if (data.length === 6) {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
});

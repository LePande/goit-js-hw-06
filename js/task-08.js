const selectForm = document.querySelector(".login-form");
const checkPassword = "123456789";

selectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const currentInput = e.currentTarget;
  const email = currentInput.elements.email.value;
  const password = currentInput.elements.password.value;

  if (email === "" || password === "") {
    alert("All fields are required");
  } else if (password !== checkPassword) {
    alert("Wrong password");
  } else {
    console.log(`Your email is: ${email}, and your password is: ${password}`);
    currentInput.reset();
  }
});

console.log("LA CLAVE ES 123456789");

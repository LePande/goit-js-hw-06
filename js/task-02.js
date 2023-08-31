const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

ingredients.forEach(function (ingredient) {
  const eachIngredient = document.createElement("li");
  eachIngredient.textContent = ingredient;
  const publishItem = document.querySelector("#ingredients");
  publishItem.classList.add("item");
  publishItem.append(eachIngredient);
});

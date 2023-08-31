const categorysCount = document.querySelectorAll(".item");
console.log(`Number of categories: ${categorysCount.length}`);

const categoryNames = document.querySelectorAll(".item h2");

categoryNames.forEach(function (categoryName) {
  const categoryItems = categoryName.nextElementSibling.querySelectorAll("li");
  console.log(`Categoría: ${categoryName.textContent}
    Items: ${categoryItems.length}`);
});

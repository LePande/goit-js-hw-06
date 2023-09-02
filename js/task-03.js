const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

images.forEach(function (image) {
  const createLi = document.createElement("li");
  const createImage = document.createElement("img");

  createLi.style.display = "flex";
  createLi.style.flexDirection = "column";
  createLi.style.justifyContent = "center";
  createLi.style.alignItems = "center";
  createLi.style.fontWeight = "800";

  createLi.append(createImage);
  createImage.src = image.url;
  createImage.alt = image.alt;
  createImage.style.cssText = "width: 80%; height: auto;";
  createImage.style.borderRadius = "40px";
  createImage.style.border = "5px solid #666d44";
  createImage.insertAdjacentHTML("afterend", image.alt);

  const imagesPrint = document.querySelector(".gallery");

  imagesPrint.append(createLi);
  imagesPrint.style.display = "flex";
  imagesPrint.style.alignItems = "center";
  imagesPrint.style.listStyle = "none";
  imagesPrint.style.color = "#666d44";
  imagesPrint.style.padding = "0";
});

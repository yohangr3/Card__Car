const redColor = document.querySelector(".red");
const grayColor = document.getElementsByClassName("gray");
const blackColor = document.querySelector(".black");
const cartButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3")[0];
const imageCard = document.querySelector(".product-image");
const feedbackBtn = document.querySelector(".feedback");

// Modificando elementos
// - Agregando detectores de eventos
// - Color rojo
redColor.addEventListener("click", function () {
  cartButton.style.backgroundColor = "red";
  itemTag.style.backgroundColor = "red";
  imageCard.style.backgroundImage = 'url("./img/red-benz.webp")';
});

// - Color Gris
grayColor[0].addEventListener("click", function () {
  cartButton.style.backgroundColor = "gray";
  itemTag.style.backgroundColor = "gray";
  imageCard.style.backgroundImage = 'url("./img/gray-benz.jpg")';
});

// - Color Negro
blackColor.addEventListener("click", function () {
  cartButton.style.backgroundColor = "black";
  itemTag.style.backgroundColor = "black";
  imageCard.style.backgroundImage = 'url("./img/black-benz.jpg")';
});

// Implementando el evento clic en el botón
// - Botón del Carrito
const cart = () => {
  cartButton.style.display = "none";
  feedbackBtn.style.display = "block";
};
cartButton.addEventListener("click", cart);

// - Botón de retroalimentación
const feedback = () => {
  cartButton.style.display = "block";
  feedbackBtn.style.display = "none";
};
feedbackBtn.addEventListener("click", feedback);
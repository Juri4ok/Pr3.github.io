const carousel = document.querySelector(".carousel");
const imageList = document.querySelector(".image-list");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const imageWidth = 400; // Змініть на ширину ваших зображень

let currentPosition = 0;

nextButton.addEventListener("click", function () {
  currentPosition -= imageWidth; // Змінюємо зміщення на ширину зображення
  if (currentPosition < -(imageList.scrollWidth - carousel.clientWidth)) {
    currentPosition = 0; // Повертаємось на початок, якщо дійшли до кінця
  }
  imageList.style.transform = `translateX(${currentPosition}px)`;
});

prevButton.addEventListener("click", function () {
  currentPosition += imageWidth;
  if (currentPosition > 0) {
    currentPosition = -(imageList.scrollWidth - carousel.clientWidth);
  }
  imageList.style.transform = `translateX(${currentPosition}px)`;
});

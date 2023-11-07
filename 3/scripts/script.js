const field = document.querySelector(".field");
const ball = document.getElementById("ball");

// Додайте розміри м'яча в пікселях в CSS або заздалегідь визначте їх у JavaScript
const ballWidth = 50; // Ширина м'яча
const ballHeight = 50; // Висота м'яча

field.addEventListener("click", (event) => {
    const fieldRect = field.getBoundingClientRect();
    const ballRect = ball.getBoundingClientRect();

    const fieldLeft = fieldRect.left;
    const fieldTop = fieldRect.top;
    const fieldWidth = fieldRect.width;
    const fieldHeight = fieldRect.height;

    const mouseX = event.clientX - fieldLeft;
    const mouseY = event.clientY - fieldTop;

    const ballX = mouseX - ballWidth / 2;
    const ballY = mouseY - ballHeight / 2;

    if (ballX < 0) {
        ballX = 0;
    } else if (ballX + ballWidth > fieldWidth) {
        ballX = fieldWidth - ballWidth;
    }

    if (ballY < 0) {
        ballY = 0;
    } else if (ballY + ballHeight > fieldHeight) {
        ballY = fieldHeight - ballHeight;
    }

    ball.style.left = ballX + "px";
    ball.style.top = ballY + "px";
});

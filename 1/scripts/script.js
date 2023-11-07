// Отримайте всі кнопки для приховування
const hideButtons = document.querySelectorAll('.hide-button');

// Додайте обробник подій для кожної кнопки
hideButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Знайдіть батька (елемент .message) та приховайте його
        const message = this.parentNode;
        message.style.display = 'none';
    });
});

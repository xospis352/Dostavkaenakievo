```javascript
document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.getElementById('copy-button');
    const cardNumber = document.getElementById('card-number');

    copyButton.addEventListener('click', () => {
        const text = cardNumber.textContent.replace(/ /g, '');
        navigator.clipboard.writeText(text)
            .then(() => {
                copyButton.textContent = 'Скопировано!';
                setTimeout(() => {
                    copyButton.textContent = 'Скопировать карту';
                }, 2000);
            })
            .catch(err => {
                console.error('Ошибка копирования: ', err);
            });
    });
});

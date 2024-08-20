async function sendData3(message) {
    try {
        return await fetch(`https://api.telegram.org/bot7534621302:AAELh5qVp0DN16bIIyfF4_c06YNzm0Klaf8/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: -1002208972842,
                text: message
            }),
        });
    } catch (error) {
        return error;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let Username3 = document.querySelector('#Username3');
    let email3 = document.querySelector('#email3');
    let btnsubmit3 = document.querySelector("#okO");

    btnsubmit3.addEventListener("click", function(event) {
        event.preventDefault();
        btnsubmit3.disabled = true; // Disable the button immediately after click

        let message = `Замовлення:\n\nUsername- ${Username3.value} \nEmail- ${email3.value} `;
        sendData3(message)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // Handle the response data if needed
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    function checkInputs3() {
        // Отримуємо значення полів вводу
        var username = Username3.value.trim();
        var emailValue = email3.value.trim();


        // Перевіряємо, чи хоча б одне з полів (Username або Email) та поле Text заповнені
        var isValid = (username !== '' || emailValue !== '');

        // Активуємо кнопку з типом "submit", якщо валідні поля
        btnsubmit3.disabled = !isValid;
    }

    // Додатково перевіряємо стан кнопки при завантаженні сторінки
    checkInputs3();

    // Add event listeners to input fields
    Username3.addEventListener('keyup', checkInputs3);
    email3.addEventListener('keyup', checkInputs3);
});




document.getElementById('okO').addEventListener('click', function() {
    var soop = document.getElementById('Soop');
    soop.classList.add('open'); // Відкриває блок
    setTimeout(function() {
        soop.classList.remove('open'); // Закриває блок через 1 секунду
    }, 3000);
});

document.getElementById('SoopOFF').addEventListener('click', function() {
    document.getElementById('Soop').classList.remove('open'); // Закриває блок при натисканні на кнопку закриття
});
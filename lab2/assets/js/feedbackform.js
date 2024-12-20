async function sendForm(event) {

    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Все поля должны быть заполнены!');
        return;
    }

    if (!validateEmail(email)) {
        alert('Пожалуйста, введите корректный email!');
        return;
    }

    const formData = {
        name: name,
        email: email,
        message: message
    };
    try {
        const response = await fetch('http://127.0.0.1:8000/submissions', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log('Данные успешно отправлены');
            alert('Форма успешно отправлена!');
        } else {
            console.log('Ошибка отправки:', response.status, response.statusText);
            alert('Произошла ошибка при отправке данных');
        }
    } catch (error) {
        console.error('Ошибка сети:', error);
        alert('Произошла ошибка сети');
    }
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

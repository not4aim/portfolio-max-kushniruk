document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const success = document.getElementById('form-success');

    if (localStorage.getItem('contactEmail')) {
        email.value = localStorage.getItem('contactEmail');
    }
    if (localStorage.getItem('contactMessage')) {
        message.value = localStorage.getItem('contactMessage');
    }

    email.addEventListener('input', () => {
        localStorage.setItem('contactEmail', email.value);
        email.style.borderColor = '';
    });
    message.addEventListener('input', () => {
        localStorage.setItem('contactMessage', message.value);
        message.style.borderColor = '';
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let valid = true;

        if (!email.value.match(/^[^@]+@[^@]+\.[^@]+$/)) {
            email.style.borderColor = 'red';
            valid = false;
        } else {
            email.style.borderColor = '';
        }
        if (message.value.trim().length < 5) {
            message.style.borderColor = 'red';
            valid = false;
        } else {
            message.style.borderColor = '';
        }
        if (!valid) return;

        localStorage.removeItem('contactEmail');
        localStorage.removeItem('contactMessage');
        form.reset();
        success.classList.remove('hidden');
        setTimeout(() => success.classList.add('hidden'), 3000);
    });
});
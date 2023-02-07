const form = document.getElementById('form');
const email = document.getElementById('email');
const emailError = document.getElementById('emailError');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value.trim())) {
        emailError.classList.remove('hidden');
        email.classList.add('errorBorder');
    } else {
        emailError.classList.add('hidden');
        email.classList.remove('errorBorder');
    }
});

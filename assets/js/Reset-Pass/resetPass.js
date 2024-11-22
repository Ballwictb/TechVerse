const userEmail = document.querySelector('#user');
const submitEmail = document.querySelector('#formulario [type="submit"]');
const email = document.querySelector('#email');

submitEmail.disabled = true;
submitEmail.classList.remove('btn-info');
submitEmail.classList.add('btn-danger');

function validateCheck() {
    console.log(checkEmail.checked)
    if (!checkEmail.checked) {
        checkEmail.classList.add('is-invalid');
    } else {
        checkEmail.classList.remove('is-invalid');
    }
    validateForm();
}

function validateEmail(e) {
    if (!validateregex(e.value) || e.value.trim() === "") {
        e.classList.add('text-danger', 'is-invalid');
    } else {
        e.classList.remove('text-danger', 'is-invalid');
    }
    validateForm();
}

function setSubmitState(isValid) {
    if (isValid) {
        submitEmail.disabled = false;
        submitEmail.classList.remove('btn-danger');
        submitEmail.classList.add('btn-info');
    } else {
        submitEmail.disabled = true;
        submitEmail.classList.remove('btn-info');
        submitEmail.classList.add('btn-danger');
    }
}

function validateForm() {
    const emailValid = email.value.trim() !== "" && !email.classList.contains('is-invalid');
    setSubmitState(emailValid);
}

function validateregex(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@educa\.madrid\.org$|^[a-zA-Z0-9._%+-]+@[\w.-]+\.edu$/;
    return regex.test(email);
}

email.addEventListener('input', (e) => validateEmail(e.target));

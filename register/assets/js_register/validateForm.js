const userEmail = document.querySelector('#user');
const submitEmail = document.querySelector('#formulario [type="submit"]');
const ageEmail = document.querySelector('#age');
const nameEmail = document.querySelector('#name');
const surnameEmail = document.querySelector('#surname');
const email = document.querySelector('#email');
const checkEmail = document.querySelector('#Check1');
const eyPass = document.querySelector('.eyesP');
const eyPass2 = document.querySelector('.eyesP2');
const pass1 = document.querySelector('#pass1');
const pass2 = document.querySelector('#pass2');

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


function validatePass() {
    if (pass1.value !== pass2.value || !regexPass(pass1.value) || !regexPass(pass2.value)) {
        pass1.classList.add('text-danger', 'is-invalid');
        pass2.classList.add('text-danger', 'is-invalid');
    } else {
        pass1.classList.remove('text-danger', 'is-invalid');
        pass2.classList.remove('text-danger', 'is-invalid');
    }

    validateForm();
}

function regexPass(password) {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
}


function validateAge(e) {
    if (e.value.length > 2) {
        e.value = e.value.slice(0, 2);
    }

    if (e.value < 16 || e.value === "") {
        e.classList.add('text-danger', 'is-invalid');
    } else {
        e.classList.remove('text-danger', 'is-invalid');
    }

    validateForm();
}

function validateNameSurname(e) {
    if (e.value.trim() === "") {
        e.classList.add('text-danger', 'is-invalid');
    } else {
        e.classList.remove('text-danger', 'is-invalid');
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

async function validateUser(e) {
    if (e.value.trim() !== "" && e.value.length >= 3) {
        const dic = await getDic();
        let exist = dic.some(item => item.user === e.value);
        if (exist) {
            e.classList.add('text-danger', 'is-invalid');
        } else {
            e.classList.remove('text-danger', 'is-invalid');
        }
    } else {
        e.classList.add('text-danger', 'is-invalid');
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
    const ageValid = ageEmail.value.length === 2 && ageEmail.value >= 16 && !ageEmail.classList.contains('is-invalid');
    const userValid = userEmail.value.length >= 3 && !userEmail.classList.contains('is-invalid');
    const nameValid = nameEmail.value.trim() !== "" && !nameEmail.classList.contains('is-invalid');
    const surnameValid = surnameEmail.value.trim() !== "" && !surnameEmail.classList.contains('is-invalid');
    const emailValid = email.value.trim() !== "" && !email.classList.contains('is-invalid');
    const pass1Valid = pass1.value.trim() !== "" && !pass1.classList.contains('is-invalid');
    const pass2Valid = pass2.value.trim() !== "" && !pass2.classList.contains('is-invalid');
    const checkValid = checkEmail.checked && !checkEmail.classList.contains('is-invalid');

    setSubmitState(ageValid && userValid && nameValid && surnameValid && emailValid && pass1Valid && pass2Valid && checkValid);
}

function validateregex(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@educa\.madrid\.org$|^[a-zA-Z0-9._%+-]+@[\w.-]+\.edu$/;
    return regex.test(email);
}

async function getDic() {
    const response = await fetch("./assets/json_register/usersN.json");
    const data = await response.json();
    return data;
}

ageEmail.addEventListener('input', (e) => validateAge(e.target));
userEmail.addEventListener('input', (e) => validateUser(e.target));
nameEmail.addEventListener('input', (e) => validateNameSurname(e.target));
surnameEmail.addEventListener('input', (e) => validateNameSurname(e.target));
email.addEventListener('input', (e) => validateEmail(e.target));
pass1.addEventListener('input', () => validatePass());
pass2.addEventListener('input', () => validatePass());
checkEmail.addEventListener('change', () => validateCheck())




eyPass.addEventListener('click', () => {
    if (pass1.getAttribute('type') == 'password') {
        pass1.setAttribute('type', 'text');
        eyPass.children[0].src = "./assets/img/openEye.png";
    } else {
        pass1.setAttribute('type', 'password');
        eyPass.children[0].src = "./assets/img/eye.png";
    }
});

eyPass2.addEventListener('click', () => {
    if (pass2.getAttribute('type') == 'password') {
        pass2.setAttribute('type', 'text');
        eyPass2.children[0].src = "./assets/img/openEye.png";
    } else {
        pass2.setAttribute('type', 'password');
        eyPass2.children[0].src = "./assets/img/eye.png";
    }
});

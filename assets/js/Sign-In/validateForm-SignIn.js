const userEmail = document.querySelector('#user');
const submitEmail = document.querySelector('#formulario [type="submit"]');
const email = document.querySelector('#email');
const eyPass = document.querySelector('.eyesP');
const pass1 = document.querySelector('#pass1');

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
    if (!regexPass(pass1.value)) {
        pass1.classList.add('text-danger', 'is-invalid');
    } else {
        pass1.classList.remove('text-danger', 'is-invalid');
    }
    validateForm();
}

function regexPass(password) {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
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
    const userValid = userEmail.value.length >= 3 && !userEmail.classList.contains('is-invalid');
    const emailValid = email.value.trim() !== "" && !email.classList.contains('is-invalid');
    const pass1Valid = pass1.value.trim() !== "" && !pass1.classList.contains('is-invalid');
    setSubmitState(userValid && emailValid && pass1Valid);
}

function validateregex(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@educa\.madrid\.org$|^[a-zA-Z0-9._%+-]+@[\w.-]+\.edu$/;
    return regex.test(email);
}

async function getDic() {
    const response = await fetch("../json/users-banned/banned-users.json");
    const data = await response.json();
    return data;
}

userEmail.addEventListener('input', (e) => validateUser(e.target));
email.addEventListener('input', (e) => validateEmail(e.target));
pass1.addEventListener('input', () => validatePass());

eyPass.addEventListener('click', () => {
    if (pass1.getAttribute('type') == 'password') {
        pass1.setAttribute('type', 'text');
        eyPass.children[0].src = "../assets/images/icons/openEye.png";
    } else {
        pass1.setAttribute('type', 'password');
        eyPass.children[0].src = "../assets/images/icons/eye.png";
    }
});


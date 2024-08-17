const ageEmail = document.querySelector('#age');
const submitEmail = document.querySelector('#formulario [type="submit"]');


ageEmail.addEventListener('input', (e) => {

    console.log(e.target.value)
    if (e.target.value < 16) {
        submitEmail.disabled = true;
        submitEmail.classList.remove('btn-info');
        submitEmail.classList.add('btn-danger');
        ageEmail.classList.add('text-danger', 'is-invalid');
    } else {
        submitEmail.disabled = false;
        submitEmail.classList.add('btn-info');
        ageEmail.classList.remove('text-danger', 'is-invalid');
        submitEmail.classList.remove('btn-danger');
    }
})
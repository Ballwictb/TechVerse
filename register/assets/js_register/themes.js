const dark = document.querySelector('#dark-theme');
const ligth = document.querySelector('#ligth-theme');
const circles = document.querySelector('#circles-all');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    dark.classList.add('btn-outline-info', 'active');
    ligth.classList.remove('btn-outline-info', 'active');
    circles.classList.remove('bg-cyan');
    circles.classList.add('bg-dark');
} else {
    ligth.classList.add('btn-outline-info', 'active');
    circles.classList.add('bg-cyan');
    circles.classList.remove('bg-dark');
}

dark.addEventListener('click', () => {
    dark.classList.add('btn-outline-info', 'active');
    ligth.classList.remove('btn-outline-info', 'active');
    circles.classList.remove('bg-cyan');
    circles.classList.add('bg-dark');
    localStorage.setItem('theme', 'dark');
});

ligth.addEventListener('click', () => {
    ligth.classList.add('btn-outline-info', 'active');
    dark.classList.remove('btn-outline-info', 'active');
    circles.classList.add('bg-cyan');
    circles.classList.remove('bg-dark');
    localStorage.setItem('theme', 'light');
});

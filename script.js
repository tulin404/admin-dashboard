// HAMBURGUER MENU
const menu = document.getElementById('ham-menu');
const nav = document.getElementById('nav');
const smallHeader = document.getElementById('small-header-section');
const bodyNoNav = document.querySelectorAll('body > *:not(nav):not(#ham-menu)');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    nav.classList.toggle('active');
    bodyNoNav.forEach(e => {
        e.classList.toggle('opacity')
    });
})
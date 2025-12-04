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

// THEME
const themeBtn = document.getElementById('theme-switch');
const moon = document.getElementById('moon');
const sun = document.getElementById('sun');
const searchImg = document.getElementById('search-img');
const addImg = document.querySelectorAll('.add-img');

function checkTheme() {
    if (document.body.dataset.theme === 'dark') {
        moon.classList.add('active');
        sun.classList.remove('active');
        searchImg.src = 'assets/search-dark.png';
        addImg.forEach(img => img.src = 'assets/add-dark.png');
    } else {
        sun.classList.add('active');
        moon.classList.remove('active');
        searchImg.src = 'assets/search.png'
        addImg.forEach(img => img.src = 'assets/add.png');
    }
};

checkTheme();

themeBtn.addEventListener('click', () => {
     if (document.body.dataset.theme === 'dark') {
        document.body.dataset.theme = ''
     } else {
        document.body.dataset.theme = 'dark'
     }

     checkTheme()
})
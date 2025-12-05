// HAMBURGUER MENU
const menu = document.getElementById('ham-menu');
const nav = document.getElementById('nav');
const smallHeader = document.getElementById('small-header-section');
const bodyNoNav = document.querySelectorAll('body > *:not(nav):not(#ham-menu)');
const bodyNoInputNote = document.querySelectorAll('body')

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

// ADD NOTE
const addNoteBtn = document.getElementById('add-note-btn');
const inputNote = document.getElementById('input-note');

addNoteBtn.addEventListener('click', () => {
    inputNote.classList.add('active');
});

// ADD REMINDER
const addReminderBtn = document.getElementById('add-reminder-btn');
const inputReminder = document.getElementById('input-reminder');

addReminderBtn.addEventListener('click', () => {
    inputReminder.classList.add('active');
});

// CANCELL BUTTON
const noteCancelBtn = document.getElementById('input-note-cancel');
const inputNoteTitle = document.getElementById('input-note-title');
const inputNoteText = document.getElementById('input-note-text');
const reminderCancelBtn = document.getElementById('input-reminder-cancel');
const inputReminderText = document.getElementById('input-reminder-text');

noteCancelBtn.addEventListener('click', () => {
    inputNoteTitle.value = '';
    inputNoteText.value = '';
    inputNote.classList.remove('active');
});

reminderCancelBtn.addEventListener('click', () => {
    inputReminderText.value = '';
    inputReminder.classList.remove('active');
});
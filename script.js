
// HAMBURGUER MENU
const menu = document.getElementById('ham-menu');
const nav = document.getElementById('nav');
const smallHeader = document.getElementById('small-header-section');
const body = document.querySelector('body');
const bodyNoNav = document.querySelectorAll('body > *:not(nav):not(#ham-menu)');
const bodyNoInputNote = document.querySelectorAll('body')

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    nav.classList.toggle('active');
    body.classList.toggle('no-scroll');
    bodyNoNav.forEach(e => {
        e.classList.toggle('opacity');
    });
})

// THEME
const themeBtn = document.getElementById('theme-switch');
const moon = document.getElementById('moon');
const sun = document.getElementById('sun');
const searchImg = document.getElementById('search-img');
const addImg = document.querySelectorAll('.add-img');
const clockImg = document.querySelectorAll('.clock-img');
const trashImg = document.querySelectorAll('.trash-img');
const starImg = document.querySelectorAll('.star-img');

function checkTheme() {
    if (document.body.dataset.theme === 'dark') {
        moon.classList.add('active');
        sun.classList.remove('active');
        searchImg.src = 'assets/search-dark.png';
        addImg.forEach(img => img.src = 'assets/add-dark.png');
        starImg.forEach(img => img.src = 'assets/star-dark.png');
        trashImg.forEach(img => img.src = 'assets/trash-dark.png');
        clockImg.forEach(img => img.src = 'assets/clock-dark.png');
    } else {
        sun.classList.add('active');
        moon.classList.remove('active');
        searchImg.src = 'assets/search.png'
        addImg.forEach(img => img.src = 'assets/add.png');
        starImg.forEach(img => img.src = 'assets/star.png');
        trashImg.forEach(img => img.src = 'assets/trash.png');
        clockImg.forEach(img => img.src = 'assets/clock.png');
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
const bodyNoNotes = document.querySelectorAll('body > *:not(#input-note):not(#input-reminder)')

addNoteBtn.addEventListener('click', () => {
    inputNote.classList.add('active');
    bodyNoNotes.forEach(e => e.classList.toggle('opacity'));
    body.classList.toggle('no-scroll');
});

// ADD REMINDER
const addReminderBtn = document.getElementById('add-reminder-btn');
const inputReminder = document.getElementById('input-reminder');

addReminderBtn.addEventListener('click', () => {
    inputReminder.classList.add('active');
    bodyNoNotes.forEach(e => e.classList.toggle('opacity'));
    body.classList.toggle('no-scroll');
});

// CANCELL BUTTON
const noteCancelBtn = document.getElementById('input-note-cancel');
const inputNoteTitle = document.getElementById('input-note-title');
const inputNoteText = document.getElementById('input-note-text');
const reminderCancelBtn = document.getElementById('input-reminder-cancel');
const inputReminderText = document.getElementById('input-reminder-text');

function clearNote() {
    inputNoteTitle.value = '';
    inputNoteText.value = '';
    inputNote.classList.remove('active');
    bodyNoNotes.forEach(e => e.classList.toggle('opacity'));
    body.classList.toggle('no-scroll');
}

noteCancelBtn.addEventListener('click', () => {
    clearNote();
});

reminderCancelBtn.addEventListener('click', () => {
    inputReminderText.value = '';
    inputReminder.classList.remove('active');
    bodyNoNotes.forEach(e => e.classList.toggle('opacity'));
    body.classList.toggle('no-scroll');
});

// SUBMIT NOTE
const subNoteBtn = document.getElementById('input-note-sub');
const notesContainer =  document.getElementById('notes-container');

function createNewNote() {
    const newNote = document.createElement('div');
    newNote.classList.add('note');
    let inputNoteTitleValue = inputNoteTitle.value;
    let inputNoteTextValue = inputNoteText.value;
    if (!inputNoteTitleValue) {
        inputNoteTitle.style.animation = 'shake 0.2s ease-in-out';
        inputNoteTitle.style.border = '1px solid red';
    } else if (!inputNoteTextValue) {
        inputNoteText.style.animation = 'shake 0.2s ease-in-out';
        inputNoteText.style.border = '1px solid red';
    } else {
        newNote.innerHTML = 
    `<div class="note-body">
        <p class="note-title">${inputNoteTitleValue}</p>
        <p class="note-text">${inputNoteTextValue}</p>
    </div>
    <div class="note-bottom">
        <div class="note-date">
            <button><img class="clock-img" src="assets/clock.png" alt=""></button>
        </div>
        <div class="note-buttons">
            <button><img class="star-img" src="assets/star.png" alt=""></button>
            <button><img class="trash-img" src="assets/trash.png" alt=""></button>
        </div>
    </div>`
    
    notesContainer.prepend(newNote);

    clearNote()
    }
};

subNoteBtn.addEventListener('click', () => {
    createNewNote();
});


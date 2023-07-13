const list = document.querySelector('.list');
const addNew = document.querySelector('.add-new');
const contact = document.querySelector('.contact');

const bookListSection = document.querySelector('.books-list-section');
const addNewSection = document.querySelector('.add-new-section');
const contactSection = document.querySelector('.contact-section');

list.addEventListener('click', (event) => {
    event.preventDefault();
    if (bookListSection.classList.contains('hide')) {
        bookListSection.classList.remove('hide');
    }
    addNewSection.classList.add('hide');
    contactSection.classList.add('hide');
});

addNew.addEventListener('click', (event) => {
    event.preventDefault();
    if (addNewSection.classList.contains('hide')) {
        addNewSection.classList.remove('hide');
    }
    bookListSection.classList.add('hide');
    contactSection.classList.add('hide');
});

contact.addEventListener('click', (event) => {
    event.preventDefault();
    if (contactSection.classList.contains('hide')) {
        contactSection.classList.remove('hide');
    }
    bookListSection.classList.add('hide');
    addNewSection.classList.add('hide');
});

const dateTime = document.querySelector('.date-time');

setInterval(() => {
  const date = new Date();
  const day = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  dateTime.innerHTML = `${day}, ${time}`;
}, 1000);
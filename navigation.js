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
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

setInterval(() => {
  const date = new Date();
  const month = months[date.getMonth()];
  let day = date.getDate().toString();
  if (day[day.length - 1] === '1') {
    day += 'st';
  } else if (day[day.length - 1] === '2') {
    day += 'nd';
  } else if (day[day.length - 1] === '3') {
    day += 'rd';
  } else {
    day += 'th';
  }
  const dayFull = `${month} ${day} ${date.getFullYear()}`;
  const time = date.getHours;
  const ampm = (time >= 12) ? 'pm' : 'am';
  const timeFull = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${ampm}`;
  dateTime.innerHTML = `${dayFull}, ${timeFull}`;
}, 1000);
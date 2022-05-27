'use strict';

///////////////////////////////////////
// Modal window

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.btn--close-modal-window');
const btnsOpenModalWindow = document.querySelectorAll(
  '.btn--show-modal-window'
);

const openModalWindow = function (e) {
  e.preventDefault();
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalWindow = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModalWindow.forEach(button =>
  button.addEventListener('click', openModalWindow)
);

// for (let i = 0; i < btnsOpenModalWindow.length; i++)
//   btnsOpenModalWindow[i].addEventListener('click', openModalWindow);

btnCloseModalWindow.addEventListener('click', closeModalWindow);
overlay.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    closeModalWindow();
  }
});

//////////////////////////////////////////////////
// Выбор элементов
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

console.log(document.querySelector('.header'));
const sections = document.querySelectorAll('.section');
console.log(sections);

console.log(document.getElementById('section--1'));
const buttons = document.getElementsByTagName('button');
console.log(buttons);

console.log(document.getElementsByClassName('btn'));

//////////////////////////////////////////////////
// Создание и вставка элементов

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'Мы используем на этом сайте куки для улучшения фукциональности';

message.innerHTML =
  'Мы используем на этом сайте cookie для улучшения фукциональности. <button class = "btn btn--close-cookie">Ok!</button>';

const header = document.querySelector('.header');
// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));
// header.before(message);
// header.after(message);

// Удаление элементов
document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove();
});

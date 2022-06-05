'use strict';

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.btn--close-modal-window');
const btnsOpenModalWindow = document.querySelectorAll(
  '.btn--show-modal-window'
);
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

///////////////////////////////////////
// Modal window

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

// Плавная прокрутка

btnScrollTo.addEventListener('click', e => {
  const section1Coords = section1.getBoundingClientRect();
  // console.log(section1Coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log(
  //   'Текущее прокручивание: x, y',
  //   window.pageXOffset,
  //   window.pageYOffset
  // );
  // console.log(
  //   'Ширина и высота вьюпорта: ',
  //   document.documentElement.clientWidth,
  //   document.documentElement.clientHeight
  // );

  // window.scrollTo(section1Coords.left, section1Coords.top + window.pageYOffset);
  // window.scrollTo({
  //   left: section1Coords.left,
  //   top: section1Coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////////////////
// Smooth page navigation

// document.querySelectorAll('.nav__link').forEach(function (htmlElement) {
//   htmlElement.addEventListener('click', function (e) {
//     e.preventDefault();
//     const href = this.getAttribute('href');
//     document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
//     console.log(href);
//   });
// });

// Делегирование событий
// 1. Добавляем слушатель для ОБЩЕГО родителя
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // 2. Определить таргет элемент
  console.log(e.target);
  if (e.target.classList.contains('nav__link')) {
    const href = e.target.getAttribute('href');
    console.log(href);
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  }
});

// Вкладки

tabContainer.addEventListener('click', function (e) {
  const clickedBtn = e.target.closest('.operations__tab');

  // техника Guard clause - пункт охраны (мы проверяем условие)
  if (!clickedBtn) return;

  // Активная вкладка
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clickedBtn.classList.add('operations__tab--active');

  // Активный контент
  tabContent.forEach(content =>
    content.classList.remove('operations__content--active')
  );
  document
    .querySelector(`.operations__content--${clickedBtn.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Анимация потускнения на панели навигации

const navLinksHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const linkOver = e.target;
    const siblingLinks = linkOver
      .closest('.nav__links')
      .querySelectorAll('.nav__link');
    const logo = linkOver.closest('.nav').querySelector('img');
    const logoText = linkOver.closest('.nav').querySelector('.nav__text');

    siblingLinks.forEach(el => {
      if (el !== linkOver) el.style.opacity = this;
    });
    logo.style.opacity = this;
    logoText.style.opacity = this;
  }
};

// Работа с аргументами при помощи bind() / this
nav.addEventListener('mouseover', navLinksHover.bind(0.4));

nav.addEventListener('mouseout', navLinksHover.bind(1));

///////////////////////////////////////////////////
////////////////////////////////////////////////////
//////////////////////////////////////////////////
// Выбор элементов
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// console.log(document.querySelector('.header'));
// const sections = document.querySelectorAll('.section');
// console.log(sections);

// console.log(document.getElementById('section--1'));
// const buttons = document.getElementsByTagName('button');
// console.log(buttons);

// console.log(document.getElementsByClassName('btn'));

//////////////////////////////////////////////////
// Создание и вставка элементов

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'Мы используем на этом сайте куки для улучшения фукциональности';

// message.innerHTML =
//   'Мы используем на этом сайте cookie для улучшения фукциональности. <button class = "btn btn--close-cookie">Ok!</button>';

// const header = document.querySelector('.header');
// // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true));
// // header.before(message);
// // header.after(message);

// // Удаление элементов
// document.querySelector('.btn--close-cookie').addEventListener('click', () => {
//   message.remove();
// });

// // Стили
// message.style.backgroundColor = '#076785';
// message.style.width = '120%';
// console.log(message.style.width);
// console.log(message.style.color);
// console.log(getComputedStyle(message).color); // так можно вытащить стиль из цсс
// console.log(getComputedStyle(message).height);
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height) + 50 + 'px';

// document.documentElement.style.setProperty('--color-first', 'yellow');

// // Атрибуты
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.getAttribute('src'));
// console.log(logo.className);

// logo.alt = 'Лого Банка';

// // Нестандартный атрибут
// console.log(logo.getAttribute('developer'));
// logo.setAttribute('copyright', 'Masters Of Code')

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// // Data attributes
// console.log(logo.dataset.versionNumber);

// // Classes
// logo.classList.add('a', 'b');
// logo.classList.remove('a', 'b');
// logo.classList.toggle('a');
// logo.classList.contains('c');

// // Не использовать
// logo.className = 'a';

///////////////////////////////////////////////
// Виды событий и обработчиков событий
// const h1 = document.querySelector('h1');
// const h1ColorChange = e => {
//   h1.style.color = 'red';
//   h1.style.cursor = 'not-allowed';
//   // h1.removeEventListener('mouseenter', h1ColorChange)
// };

// h1.addEventListener('mouseenter', h1ColorChange);

// setTimeout(() => h1.removeEventListener('mouseenter', h1ColorChange), 3000);

// h1.onmouseleave = e => {
//   h1.style.color = 'green';
// };

//////////////////////////////////////////
// Event propagation (всплытие события)
// rgb(123, 56, 78)

// function getRandom(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
// }

// const getRandomColor = () =>
//   `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;

// console.log(getRandomColor());

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   e.preventDefault();
//   this.style.backgroundColor = getRandomColor();
//   console.log('link', e.target, e.currentTarget);
//   // stop prapagation
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   e.preventDefault();
//   this.style.backgroundColor = getRandomColor();
//   console.log('links', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     e.preventDefault();
//     this.style.backgroundColor = getRandomColor();
//     console.log('nav', e.target, e.currentTarget);
//   },
//   true // при тру будет реагировать на фазе перехвата
// );

// document.querySelector('body').addEventListener('click', function (e) {
//   e.preventDefault();
//   this.style.backgroundColor = getRandomColor();
//   console.log('body', e.target, e.currentTarget);
// });

//////////////////////////////////////////////////
// DOM traversing

// const h1 = document.querySelector('h1');

// // Перемещение вниз (к потомкам)
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// console.log(h1.firstElementChild);
// h1.firstElementChild.style.color = 'red';
// console.log(h1.lastElementChild);

// // Перемещение вверх (к продителям)
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// const h2 = document.querySelector('h2');
// console.log(h2);
// h2.closest('.section').style.backgroundColor = 'blue';
// h2.closest('h2').style.backgroundColor = 'green';

// // Перемещение на одном уровне (одноуровневые элементы)
// console.log(h2.previousElementSibling);
// console.log(h2.nextElementSibling);

// console.log(h1.parentElement.children);

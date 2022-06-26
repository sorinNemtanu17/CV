const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', showMenu);

function showMenu() {
  const bar = document.querySelector('.menu-button');
  bar.classList.toggle('close-menu');
  const menu = document.querySelector('.menu-nav-links');
  menu.classList.toggle('menu-top-visible');
  const Bg = document.querySelector('.nav-background');
  Bg.classList.toggle('nav-background-visible');
}

const media = matchMedia('(max-width: 900px)');
const container = document.querySelector('.page-footer');
const template = document.querySelector('.template');

const clone = template.content.firstElementChild.cloneNode(true);

function changeEvent(e) {
  if (e.matches) {
    container.appendChild(clone);
  } else {
    container.removeChild(clone);
  }
}

media.addEventListener('change', changeEvent);

const media1 = matchMedia('(min-width: 899px)');
const container1 = document.querySelector('.page-footer');
const template1 = document.querySelector('.template1');

const clone1 = template1.content.firstElementChild.cloneNode(true);

function changeEvent1(e) {
  if (e.matches) {
    container1.appendChild(clone1);
  } else {
    container1.removeChild(clone1);
  }
}

media1.addEventListener('change', changeEvent1);

window.onload = () => {
  container1.appendChild(clone1);
};

const closeButton = document.getElementById('close');
const openButton = document.getElementById('menu');
const navBar = document.getElementById('nav');
const bodyElement = document.body;
const blurBackground = document.getElementById('blur');

function openNavBar() {
  navBar.classList.remove('-translate-x-full');
  bodyElement.classList.add('no-scroll');
  blurBackground.classList.remove('hidden');
}

function closeNavBar() {
  navBar.classList.add('-translate-x-full');
  bodyElement.classList.remove('no-scroll');
  blurBackground.classList.add('hidden');
}

blurBackground.addEventListener('click', () => {
  closeNavBar();
});
closeButton.addEventListener('click', () => {
  closeNavBar();
});
openButton.addEventListener('click', () => {
  openNavBar();
});
const closeButtonNav = document.getElementById('close-nav');
const openButtonNav = document.getElementById('menu');
const closeButtonSide = document.getElementById('close-side');
const openButtonSide = document.getElementById('sidebar-btn');
const navBar = document.getElementById('nav');
const sideBar = document.getElementById('sidebar');
const bodyElement = document.body;
const blurBackground = document.getElementById('blur');

function openNavBar() {
  navBar.classList.remove('-translate-x-full');
  bodyElement.classList.add('no-scroll');
  blurBackground.classList.remove('hidden');
  blurBackground.classList.add('fixed');
}

function closeNavBar() {
  navBar.classList.add('-translate-x-full');
  bodyElement.classList.remove('no-scroll');
  blurBackground.classList.add('hidden');
  blurBackground.classList.remove('fixed');
}

blurBackground.addEventListener('click', () => {
  if (!navBar.classList.contains('-translate-x-full')) {
    closeNavBar();
  } else if (!sideBar.classList.contains('translate-x-full')) {
    closeSideBar();
  }
});

closeButtonNav.addEventListener('click', () => {
  closeNavBar();
});

openButtonNav.addEventListener('click', () => {
  openNavBar();
});

function openSideBar() {
  sideBar.classList.remove('hidden');
  sideBar.classList.add('flex');
  bodyElement.classList.add('no-scroll');
  blurBackground.classList.remove('hidden');
  blurBackground.classList.add('fixed');
}

function closeSideBar() {
  sideBar.classList.add('hidden');
  sideBar.classList.remove('flex');
  bodyElement.classList.remove('no-scroll');
  blurBackground.classList.add('hidden');
  blurBackground.classList.remove('fixed');
}

closeButtonSide.addEventListener('click', () => {
  closeSideBar();
});
openButtonSide.addEventListener('click', () => {
  openSideBar();
});
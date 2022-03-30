const brand = document.querySelector('.brand');
const menu = document.querySelector('.menu');
const button = document.querySelector('header button');
const navbar = document.querySelector('nav');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const hamburgerSVG = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>`;
const closeSVG = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`;

let isOpen = false;

function handleHamburgerClick() {
  navbar.classList.toggle('full-screen');
  navbar.classList.toggle('active');
  brand.classList.toggle('hidden');
  main.classList.toggle('hidden');
  footer.classList.toggle('hidden');
  button.innerHTML = isOpen ? hamburgerSVG : closeSVG;
  isOpen = !isOpen;
}

function handleNavLinkClick() {
  navbar.classList.remove('full-screen');
  navbar.classList.remove('active');
  brand.classList.remove('hidden');
  main.classList.remove('hidden');
  footer.classList.remove('hidden');
  button.innerHTML = hamburgerSVG;
  isOpen = false;
}

button.addEventListener('click', handleHamburgerClick);
navbar.querySelectorAll('a').forEach((navLink) => {
  navLink.addEventListener('click', handleNavLinkClick);
});

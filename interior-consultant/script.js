const brand = document.querySelector('.brand');
const menu = document.querySelector('.menu');
const hamburger = document.querySelector('button.hamburger');
const buttonImage = document.querySelector('button.hamburger img');
const navbar = document.querySelector('nav');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

function handleClick() {
  navbar.classList.toggle('full-screen');
  navbar.classList.toggle('active');
  brand.classList.toggle('hidden');
  main.classList.toggle('hidden');
  footer.classList.toggle('hidden');
  buttonImage.setAttribute(
    'src',
    buttonImage.getAttribute('src').includes('hamburger')
      ? 'images/x-icon.png'
      : 'images/hamburger-icon.svg'
  );
}

hamburger.addEventListener('click', handleClick);

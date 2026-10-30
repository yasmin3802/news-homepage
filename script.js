const menuToggle = document.querySelector('.menu-toggle');
const menuClose = document.querySelector('.menu-close');
const navigation = document.querySelector('.navigation');
const overlay = document.querySelector('.menu-overlay');

function setMenu(open) {
  navigation.classList.toggle('is-open', open);
  overlay.classList.toggle('is-visible', open);
  document.body.classList.toggle('menu-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
}

menuToggle.addEventListener('click', () => setMenu(true));
menuClose.addEventListener('click', () => setMenu(false));
overlay.addEventListener('click', () => setMenu(false));
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') setMenu(false);
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const header = document.querySelector('header');
const loader = document.querySelector('.loading');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});

const throttle = (callback, limit) => {
  let throttling = false;
  return function () {
    if (!throttling) {
      callback.apply(this, arguments);
      throttling = true;
      setTimeout(() => {
        throttling = false;
      }, limit);
    }
  };
};

let lastScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

const handleScroll = () => {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollPosition > lastScrollPosition) {
    header.style.opacity = '0.1';
  } else {
    header.style.opacity = '1';
  }

  lastScrollPosition = currentScrollPosition;
};

window.addEventListener('scroll', throttle(handleScroll, 200));

header.style.transition = 'opacity 0.3s ease-in-out';

// Ocultar el loader después de 3 segundos y mostrar el resto del contenido
setTimeout(() => {
  loader.style.display = 'none';
  // Mostrar el resto del contenido
  menuToggle.style.display = 'block';
  nav.style.display = 'block';
  header.style.display = 'block';
}, 3000);

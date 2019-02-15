export default function initScrollInternalLinks() {
  const $internalLinks = document.querySelectorAll('[data-js="mainMenu"] a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // forma alternativa
    // const coord = section.offsetTop;
    // window.scrollTo({top: coord, left: 0, behavior: 'smooth'});
  }

  function initEvents() {
    $internalLinks.forEach((item) => {
      item.addEventListener('click', scrollToSection, false);
    });
  }

  function initialize() {
    initEvents();
  }

  initialize();
}

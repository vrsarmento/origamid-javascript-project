export default function initSectionAnimationOnScroll() {
  const $sections = document.querySelectorAll('[data-js="sectionScroll"]');
  const windowPosition = window.innerHeight * 0.6;

  function animeScroll() {
    $sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - windowPosition) < 0;
      if (isSectionVisible) {
        section.classList.add('active');
      } else if (section.classList.contains('active')) {
        section.classList.remove('active');
      }
    });
  }

  function initEvents() {
    window.addEventListener('scroll', animeScroll, false);
  }

  function initialize() {
    initEvents();
    animeScroll();
  }

  initialize();
}

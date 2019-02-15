export default function initAccordionNav() {
  const $accordionList = document.querySelectorAll('[data-js="accordionNav"] dt');

  function activeAccordion() {
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
  }

  function initEvents() {
    $accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion, false);
    });
  }

  function initialize() {
    initEvents();
  }

  initialize();
}

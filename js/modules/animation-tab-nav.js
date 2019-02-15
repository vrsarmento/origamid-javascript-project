export default function initTabNav() {
  const $tabMenu = document.querySelectorAll('[data-js="tabMenu"] li');
  const $tabContent = document.querySelectorAll('[data-js="tabContent"] section');

  function removeActiveClassContent() {
    $tabContent.forEach((section) => {
      section.classList.remove('active');
    });
  }

  function addActiveClassContent(index) {
    removeActiveClassContent();
    $tabContent[index].classList.add('active');
  }

  function initEvents() {
    $tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        addActiveClassContent(index);
      }, false);
    });
  }

  function initialize() {
    initEvents();
    $tabContent[0].classList.add('active');
  }

  initialize();
}

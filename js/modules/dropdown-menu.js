import outsideClick from './outsideClick.js';

export default function initDropDownMenu() {
  const arrayEvents = ['touchstart', 'click'];
  const $dropDownMenu = document.querySelectorAll('[data-dropdown-menu]');

  function handleClickDropDownMenu(event) {
    event.preventDefault();
    this.classList.add('active');
    outsideClick(this, arrayEvents, () => {
      this.classList.remove('active');
    });
  }

  function initEvents() {
    $dropDownMenu.forEach((menu) => {
      arrayEvents.forEach((userEvent) => {
        menu.addEventListener(userEvent, handleClickDropDownMenu);
      });
    });
  }

  function initialize() {
    initEvents();
  }

  initialize();
}

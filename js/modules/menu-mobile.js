import outsideClick from './outsideClick.js';

export default class MenuMobile {
  constructor(menu, button, events) {
    this.menu = document.querySelector(menu);
    this.menuButton = document.querySelector(button);
    if (events === undefined) this.userEvents = ['click', 'touchstart'];
    else this.userEvents = events;
    this.activeClass = 'active';
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.menu.classList.toggle(this.activeClass);
    this.menuButton.classList.toggle(this.activeClass);
    outsideClick(this.menu, this.userEvents, () => {
      this.menu.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addEvents() {
    this.userEvents.forEach((userEvent) => {
      this.menuButton.addEventListener(userEvent, this.openMenu);
    });
  }

  init() {
    if (this.menu && this.menuButton) {
      this.addEvents();
    }
    return this;
  }
}

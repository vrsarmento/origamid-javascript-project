import outsideClick from './outsideClick.js';

export default class DropDownMenu {
  constructor(menus, events) {
    if (events === undefined) this.arrayEvents = ['touchstart', 'click'];
    else this.events = events;
    this.activeClass = 'active';
    this.dropDownMenu = document.querySelectorAll(menus);
    this.handleClickDropDownMenu = this.handleClickDropDownMenu.bind(this);
  }

  handleClickDropDownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.arrayEvents, () => {
      element.classList.remove(this.activeClass);
    });
  }

  addEvents() {
    this.dropDownMenu.forEach((menu) => {
      this.arrayEvents.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.handleClickDropDownMenu);
      });
    });
  }

  init() {
    if (this.dropDownMenu.length) {
      this.addEvents();
    }
    return this;
  }
}

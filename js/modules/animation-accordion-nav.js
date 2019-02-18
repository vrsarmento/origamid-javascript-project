export default class AccordionNav {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'active';
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  addEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item), false);
    });
  }

  init() {
    if (this.accordionList.length) {
      this.toggleAccordion(this.accordionList[0]);
      this.addEvent();
    }

    return this;
  }
}

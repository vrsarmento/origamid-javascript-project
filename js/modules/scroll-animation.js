import debounce from './debounce.js';

export default class ScrollAnimation {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowPosition = window.innerHeight * 0.6;
    this.activeClass = 'active';
    this.handleFirstScroll = this.handleFirstScroll.bind(this);
    this.handleScroll = debounce(this.handleScroll.bind(this), 100);
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowPosition),
      };
    });
  }

  checkDistance() {
    console.log('Debounce!');
    this.distance.forEach((section) => {
      if (window.pageYOffset > section.offset) {
        section.element.classList.add(this.activeClass);
      } else if (section.element.classList.contains(this.activeClass)) {
        section.element.classList.remove(this.activeClass);
      }
    });
  }

  handleScroll() {
    this.checkDistance();
  }

  handleFirstScroll() {
    this.getDistance();
    this.checkDistance();
    window.removeEventListener('scroll', this.handleFirstScroll, false);
    window.addEventListener('scroll', this.handleScroll, false);
  }

  initEvents() {
    window.addEventListener('scroll', this.handleFirstScroll, false);
  }

  init() {
    if (this.sections.length) {
      this.initEvents();
      this.getDistance();
      this.checkDistance();
    }
    return this;
  }

  stop() {
    window.removeEventListener('scroll', this.handleScroll, false);
  }
}

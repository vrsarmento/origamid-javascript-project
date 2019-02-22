export default class ScrollAnimation {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowPosition = window.innerHeight * 0.6;
    this.activeClass = 'active';
    this.handleFirstScroll = this.handleFirstScroll.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
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
    this.distance.forEach((section) => {
      if (window.pageYOffset > section.offset) {
        section.element.classList.add(this.activeClass);
      } else if (section.element.classList.contains(this.activeClass)) {
        section.element.classList.remove(this.activeClass);
      }
    });
  }

  handleScroll() {
    this.getDistance();
    this.checkDistance();
  }

  handleFirstScroll() {
    this.checkDistance();
    this.stop();
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
    window.removeEventListener('scroll', this.checkDistance, false);
  }
}

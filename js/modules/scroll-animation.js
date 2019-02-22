export default class ScrollAnimation {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowPosition = window.innerHeight * 0.6;
    this.activeClass = 'active';
    this.checkDistance = this.checkDistance.bind(this);
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowPosition),
      };
    });
    console.log(this.distance);
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

  animeScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - this.windowPosition) < 0;
      if (isSectionVisible) {
        section.classList.add(this.activeClass);
      } else if (section.classList.contains(this.activeClass)) {
        section.classList.remove(this.activeClass);
      }
    });
  }

  initEvents() {
    window.addEventListener('scroll', this.checkDistance, false);
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

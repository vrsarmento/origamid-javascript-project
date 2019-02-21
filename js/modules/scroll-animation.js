export default class ScrollAnimation {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowPosition = window.innerHeight * 0.6;
    this.activeClass = 'active';
    this.animeScroll = this.animeScroll.bind(this);
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
    window.addEventListener('scroll', this.animeScroll, false);
  }

  init() {
    this.initEvents();
    this.animeScroll();
  }
}

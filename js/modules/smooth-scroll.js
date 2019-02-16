export default class ScrollInternalLinks {
  constructor(links, options) {
    this.internalLinks = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);

    // forma alternativa
    // const coord = section.offsetTop;
    // window.scrollTo({top: coord, left: 0, behavior: 'smooth'});
  }

  addLinkEvents() {
    this.internalLinks.forEach((item) => {
      item.addEventListener('click', this.scrollToSection, false);
    });
  }

  init() {
    if (this.internalLinks.length) {
      this.addLinkEvents();
    }
    return this;
  }
}

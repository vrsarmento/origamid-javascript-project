export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'active';
  }

  removeActiveClassContent() {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
  }

  activeTab(index) {
    this.removeActiveClassContent();
    this.tabContent[index].classList.add(this.activeClass);
  }

  addEvents() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        this.activeTab(index);
      }, false);
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.addEvents();
      this.activeTab(0);
    }
  }
}

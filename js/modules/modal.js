export default class Modal {
  constructor(openButton, closeButton, containerModal) {
    this.openButton = document.querySelector(openButton);
    this.closeButton = document.querySelector(closeButton);
    this.containerModal = document.querySelector(containerModal);

    // bind this ao callback para fazer referência ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutsideModal = this.clickOutsideModal.bind(this);
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  toggleModal() {
    this.containerModal.classList.toggle('active');
  }

  clickOutsideModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal(event);
    }
  }

  addEvents() {
    this.openButton.addEventListener('click', this.eventToggleModal, false);
    this.closeButton.addEventListener('click', this.eventToggleModal, false);
    this.containerModal.addEventListener('click', this.clickOutsideModal, true);
  }

  init() {
    if (this.openButton && this.closeButton && this.containerModal) {
      this.addEvents();
    }
    return this;
  }
}

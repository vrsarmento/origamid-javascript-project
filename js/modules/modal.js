export default function initModal() {
  const $openButton = document.querySelector('[data-modal="open"]');
  const $closeButton = document.querySelector('[data-modal="close"]');
  const $containerModal = document.querySelector('[data-modal="container"]');

  function toggleModal(event) {
    event.preventDefault();
    $containerModal.classList.toggle('active');
  }

  function clickOutsideModal(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }

  function initEvents() {
    $openButton.addEventListener('click', toggleModal, false);
    $closeButton.addEventListener('click', toggleModal, false);
    $containerModal.addEventListener('click', clickOutsideModal, true);
  }

  function initialize() {
    if ($openButton && $closeButton && $containerModal) {
      initEvents();
    }
  }

  initialize();
}

import outsideClick from './outsideClick.js';

export default function initMenuMobile() {
  const $menuButton = document.querySelector('[data-js="button-menu"]');
  const $menu = document.querySelector('[data-js="menu"]');
  const userEvents = ['click', 'touchstart'];

  function openMenu() {
    $menu.classList.toggle('active');
    $menuButton.classList.toggle('active');
    outsideClick($menu, userEvents, () => {
      $menu.classList.remove('active');
      $menuButton.classList.remove('active');
    });
  }

  userEvents.forEach((userEvent) => {
    $menuButton.addEventListener(userEvent, openMenu);
  });
}

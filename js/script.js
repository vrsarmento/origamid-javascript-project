import ScrollInternalLinks from './modules/smooth-scroll.js';
import initSectionAnimationOnScroll from './modules/animation-scroll.js';
import initAccordionNav from './modules/animation-accordion-nav.js';
import initTabNav from './modules/animation-tab-nav.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropDownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFetchAnimals from './modules/fetch-animals.js';
import initWorkHour from './modules/work-hour.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

const scrollInternalLinks = new ScrollInternalLinks('[data-js="mainMenu"] a[href^="#"]');
scrollInternalLinks.init();

function initApp() {
  initTabNav();
  initAccordionNav();
  initSectionAnimationOnScroll();
  initModal();
  initTooltip();
  initDropDownMenu();
  initMenuMobile();
  initFetchAnimals();
  initWorkHour();
  initFetchBitcoin();
}

window.onload = initApp();

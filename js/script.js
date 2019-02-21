import ScrollInternalLinks from './modules/smooth-scroll.js';
import initSectionAnimationOnScroll from './modules/animation-scroll.js';
import AccordionNav from './modules/animation-accordion-nav.js';
import TabNav from './modules/animation-tab-nav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initDropDownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFetchAnimals from './modules/fetch-animals.js';
import initWorkHour from './modules/work-hour.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

const scrollInternalLinks = new ScrollInternalLinks('[data-js="mainMenu"] a[href^="#"]');
scrollInternalLinks.init();

const accordionNav = new AccordionNav('[data-js="accordionNav"] dt');
accordionNav.init();

const tabNav = new TabNav('[data-js="tabMenu"] li', '[data-js="tabContent"] section');
tabNav.init();

const modal = new Modal('[data-modal="open"]', '[data-modal="close"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

function initApp() {
  initSectionAnimationOnScroll();
  initDropDownMenu();
  initMenuMobile();
  initFetchAnimals('./data/animaisapi.json', '[data-js="numbers-grid"]');
  initWorkHour();
  initFetchBitcoin();
}

window.onload = initApp();

import ScrollInternalLinks from './modules/smooth-scroll.js';
import ScrollAnimation from './modules/scroll-animation.js';
import AccordionNav from './modules/animation-accordion-nav.js';
import TabNav from './modules/animation-tab-nav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import DropDownMenu from './modules/dropdown-menu.js';
import MenuMobile from './modules/menu-mobile.js';
import WorkHour from './modules/work-hour.js';
import fetchAnimals from './modules/fetch-animals.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
import SlideNav from './modules/slide.js';

function initApp() {
  fetchAnimals('./data/animaisapi.json', '[data-js="numbers-grid"]');
  fetchBitcoin('https://blockchain.info/ticker', '[data-js="btc-price"]');

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

  const scrollAnimation = new ScrollAnimation('[data-js="sectionScroll"]');
  scrollAnimation.init();

  const dropdownMenu = new DropDownMenu('[data-dropdown-menu]');
  dropdownMenu.init();

  const menuMobile = new MenuMobile('[data-js="menu"]', '[data-js="button-menu"]');
  menuMobile.init();

  const workHour = new WorkHour('[data-week]', 'opened');
  workHour.init();

  const slide = new SlideNav('.slide', '.slide-wrapper', 0, true, '.custom-controls');
  slide.init();
}

window.onload = initApp();

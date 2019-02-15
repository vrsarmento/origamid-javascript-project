// exemple
import _ from 'lodash'; // sem necessidade de informar todo o caminho do módulo

import initScrollInternalLinks from './modules/smooth-scroll.js';
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

function initApp() {
  initTabNav();
  initAccordionNav();
  initScrollInternalLinks();
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

// uso do lodash de exemplo
// console.log(_.difference(['Banana', 'Uva'], ['Banana', 'Morango']));

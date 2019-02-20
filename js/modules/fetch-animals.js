import NumbersAnimation from './numbers-animation.js';

export default function initFetchAnimals() {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('animal-number');
    div.innerHTML = `<h3>${animal.especie}</h3><span data-js="number">${animal.total}</span>`;
    return div;
  }

  async function fetchAnimals(url) {
    try {
      const animalsResponse = await fetch(url);
      const animalsJSON = await animalsResponse.json();
      const $numbersGrid = document.querySelector('[data-js="numbers-grid"]');
      animalsJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        $numbersGrid.appendChild(divAnimal);
      });
      const numbersAnimation = new NumbersAnimation('[data-js="number"]', '.numbers', 'active');
      numbersAnimation.init();
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchAnimals('./data/animaisapi.json');
}

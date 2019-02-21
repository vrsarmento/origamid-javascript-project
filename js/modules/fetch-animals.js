import NumbersAnimation from './numbers-animation.js';

export default function initFetchAnimals(url, target) {
  const $numbersGrid = document.querySelector(target);

  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('animal-number');
    div.innerHTML = `<h3>${animal.especie}</h3><span data-js="number">${animal.total}</span>`;
    return div;
  }

  function fillAnimals(animal) {
    const divAnimal = createAnimal(animal);
    $numbersGrid.appendChild(divAnimal);
  }

  function animateNumbersAnimals() {
    const numbersAnimation = new NumbersAnimation('[data-js="number"]', '.numbers', 'active');
    numbersAnimation.init();
  }

  async function fetchAnimals() {
    try {
      const animalsResponse = await fetch(url);
      const animalsJSON = await animalsResponse.json();
      animalsJSON.forEach(animal => fillAnimals(animal));
      animateNumbersAnimals();
    } catch (erro) {
      console.log(erro);
    }
  }

  return fetchAnimals();
}

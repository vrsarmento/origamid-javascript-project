export default function initNumbersAnimation() {
  const $numbers = document.querySelectorAll('[data-js="number"]');
  let observer;

  function initObserver() {
    const $observerTarget = document.querySelector('.numbers');
    observer.observe($observerTarget, { attributes: true });
  }

  function animeNumbers() {
    $numbers.forEach((number) => {
      const total = +number.innerText;
      const increment = total < 100 ? 1 : Math.floor(total / 100);
      let start = 0;
      const timer = setInterval(() => {
        start += increment;
        number.innerText = start;
        if (start > total) {
          number.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('active')) {
      observer.disconnect();
      animeNumbers();
    }
  }
  observer = new MutationObserver(handleMutation);

  function initialize() {
    initObserver();
  }

  initialize();
}

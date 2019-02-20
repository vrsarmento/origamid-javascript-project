export default class NumbersAnimation {
  constructor(numbers, observerTarget, observerClass) {
    this.numbers = document.querySelectorAll(numbers);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;
    // bind do this do objeto ao callback da Mutation
    this.handleMutation = this.handleMutation.bind(this);
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animateNumbers();
    }
  }

  // Adiciona o mutationObserver para verificar quando o
  // observerClass é adicionada ao observerTarget
  initMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  // Recebe um elemento do DOM com número em seu texto
  // Incrementa a partir de 0 até o número final
  // Definida como "Static" porque não usa nenhum elemento do constructor (this) para ser executada
  static incrementNumber(number) {
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
  }

  // Ativa incrementnumber() para cada número selecionado no DOM
  animateNumbers() {
    // this.constructor necessário para usar uma função estática
    this.numbers.forEach(number => this.constructor.incrementNumber(number));
  }

  init() {
    if (this.numbers.length && this.observerTarget) {
      this.initMutationObserver();
    }
    return this;
  }
}

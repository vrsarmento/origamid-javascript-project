export default function initFetchBitcoin() {
  fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then((json) => {
      const $btcPrice = document.querySelector('[data-js="btc-price"]');
      $btcPrice.innerText = (100 / json.BRL.sell).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}

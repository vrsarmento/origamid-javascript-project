export default function fetchBitcoin(url, target) {
  fetch(url)
    .then(response => response.json())
    .then((json) => {
      const $btcPrice = document.querySelector(target);
      $btcPrice.innerText = (100 / json.BRL.sell).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}

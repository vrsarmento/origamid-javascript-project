export default function initWorkHour() {
  const $weekDay = document.querySelector('[data-week]');
  const weekDays = $weekDay.dataset.week.split(',').map(Number);
  const hours = $weekDay.dataset.hour.split(',').map(Number);
  const dateNow = new Date();
  const dayNow = dateNow.getDay();
  const hourNow = dateNow.getHours();

  function verifyWorkHour() {
    const weekOpen = weekDays.indexOf(dayNow) !== -1;
    const hourOpen = ((hourNow >= hours[0]) && (hourNow < hours[1]));

    if (weekOpen && hourOpen) {
      $weekDay.classList.add('opened');
    }
  }

  function initialize() {
    verifyWorkHour();
  }

  initialize();
}

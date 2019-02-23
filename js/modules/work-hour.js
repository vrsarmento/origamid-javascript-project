export default class WorkHour {
  constructor(weekDayElement, activeClass) {
    this.weekDayElement = document.querySelector(weekDayElement);
    this.activeClass = activeClass;
  }

  workingData() {
    this.weekDays = this.weekDayElement.dataset.week.split(',').map(Number);
    this.weekHours = this.weekDayElement.dataset.hour.split(',').map(Number);
  }

  nowData() {
    this.dateNow = new Date();
    this.dayNow = this.dateNow.getDay();
    this.hourNow = this.dateNow.getUTCHours() - 3;
  }

  verifyWorkHour() {
    const weekOpen = this.weekDays.indexOf(this.dayNow) !== -1;
    const hourOpen = ((this.hourNow >= this.weekHours[0])
    && (this.hourNow < this.weekHours[1]));
    return (weekOpen && hourOpen);
  }

  activeWorkHour() {
    if (this.verifyWorkHour()) {
      this.weekDayElement.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.weekDayElement) {
      this.workingData();
      this.nowData();
      this.verifyWorkHour();
    }
    return this;
  }
}

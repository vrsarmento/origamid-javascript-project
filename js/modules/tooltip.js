export default function initTooltip() {
  const $tooltips = document.querySelectorAll('[data-tooltip]');

  function createTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  const onMouseMoveTooltip = {
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY + 20} px`;
      this.tooltipBox.style.left = `${event.pageX + 20} px`;
    },
  };

  const onMouseLeaveTooltip = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeaveTooltip);
      this.element.removeEventListener('mousemove', onMouseMoveTooltip);
    },
  };

  function onMouseOverTooltip() {
    const tooltipBox = createTooltipBox(this);
    onMouseMoveTooltip.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMoveTooltip);
    onMouseLeaveTooltip.tooltipBox = tooltipBox;
    onMouseLeaveTooltip.element = this;
    this.addEventListener('mouseleave', onMouseLeaveTooltip);
  }

  function initEvents() {
    $tooltips.forEach((item) => {
      item.addEventListener('mouseover', onMouseOverTooltip);
    });
  }

  function initialize() {
    initEvents();
  }

  initialize();
}

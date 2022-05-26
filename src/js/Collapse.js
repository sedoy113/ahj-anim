export default class Collapse {
  constructor(element) {
    this.parentElement = element;
    this.button = this.parentElement.querySelector('.collapse_button');
    this.container = this.parentElement.querySelector('.collapse_container');

    this.collapseCSS = this.collapseCSS.bind(this);
    this.collapseJS = this.collapseJS.bind(this);
    this.button.addEventListener('click', this.collapse);
  }

  onCSS() {
    this.button.addEventListener('click', this.collapseCSS);
  }

  collapseCSS() {
    this.container.classList.toggle('collapse_show');
  }

  onJS() {
    this.button.addEventListener('click', this.collapseJS);
  }

  collapseJS() {
    const start = Date.now();
    const duration = 250;
    const targetElem = this.container;

    if (this.container.offsetHeight === 0) {
      this.container.style.display = 'block';
      const result = this.container.offsetHeight;
      this.container.style.height = '0px';
      requestAnimationFrame(function drawJS() {
        let progress = (Date.now() - start) / duration;
        progress = progress > 1 ? 1 : progress;
        targetElem.style.height = `${progress * result}px`;

        if (progress < 1) {
          requestAnimationFrame(drawJS);
        }
      });
    } else if (this.container.style.display === 'block') {
      const result = this.container.offsetHeight;
      requestAnimationFrame(function drawJS() {
        let progress = (duration - (Date.now() - start)) / duration;
        progress = progress < 0 ? 0 : progress;
        targetElem.style.height = `${progress * result}px`;

        if (progress > 0) {
          requestAnimationFrame(drawJS);
        }
        if (progress === 0) {
          targetElem.style.display = 'none';
          targetElem.style.height = '';
        }
      });
    }
  }
}

export default class Liker {
  constructor(element) {
    this.parentElement = element;
    this.button = this.parentElement.querySelector('.liker_button');

    this.liker = this.liker.bind(this);
  }

  init() {
    this.button.addEventListener('click', this.liker);
  }

  liker() {
    const like = document.createElement('div');
    like.classList.add('liker_like');
    const random = Math.floor(1 + Math.random() * 4);
    like.classList.add(`anim${random}`);
    this.button.after(like);

    like.addEventListener('animationend', () => like.remove());
  }
}

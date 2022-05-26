export default class Callback {
  constructor(element) {
    this.parentElement = element;
    this.button = this.parentElement.querySelector('.callback_button');
    this.container = this.parentElement.querySelector('.callback_container');
    this.close = this.parentElement.querySelector('.callback_form_close');

    this.showForm = this.showForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }

  init() {
    this.button.addEventListener('click', this.showForm);
  }

  showForm() {
    this.button.classList.toggle('callback_button_hide');
    this.container.classList.toggle('callback_container_show');
    this.close.addEventListener('click', this.closeForm);
  }

  closeForm() {
    this.button.classList.toggle('callback_button_hide');
    this.container.classList.toggle('callback_container_show');
    this.close.removeEventListener('click', this.closeForm);
  }
}

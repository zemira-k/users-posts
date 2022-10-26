export class User {
  constructor({ data, handleUserClick }) {
    this._name = data.name;
    this._username = data.username;
    this._email = data.email;
    this._phone = data.phone;
    this._handleUserClick = handleUserClick;
  }

  _getTemplate() {
    const userElement = document
      .querySelector(".user-template")
      .content.querySelector(".user")
      .cloneNode(true);

    return userElement;
  }

  // create user element
  getUser() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector(".data-name").textContent = this._name;
    this._element.querySelector(".data-username").textContent = this._username;
    this._element.querySelector(".data-email").textContent = this._email;
    this._element.querySelector(".data-phone").textContent = this._phone;

    return this._element;
  }

  // listeners
  _setEventListeners() {
    this._element
      .querySelector(".data-name")
      .addEventListener("click", () => this._handleUserClick());
  }
}

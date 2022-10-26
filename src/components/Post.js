export class Post {
  constructor({ data }) {
    this._title = data.title;
    this._body = data.body;
  }

  _getTemplate() {
    const postElement = document
      .querySelector(".post-template")
      .content.querySelector(".post-container")
      .cloneNode(true);

    return postElement;
  }

  // create post element
  getPost() {
    this._element = this._getTemplate();
    this._element.querySelector(".post-title").textContent = this._title;
    this._element.querySelector(".post-text").textContent = this._body;

    return this._element;
  }
}

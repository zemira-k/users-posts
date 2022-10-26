export class Post {
  constructor({ data }, postSelector) {
    this._title = data.title;
    this._body = data.body;
    this._postSelector = postSelector;
  }

  _getTemplate() {
    const postElement = document
      .querySelector(this._postSelector)
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

export class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(items) {
    items.forEach(this._renderer);
  }

  removeItems() {
    if (document.querySelector("#post-container")) {
      document.querySelectorAll("#post-container").forEach((e) => e.remove());
    }
  }

  addItem(element) {
    this._container.append(element);
  }
}

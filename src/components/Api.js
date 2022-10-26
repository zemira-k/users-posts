const costumFetch = (url) =>
  fetch(url).then((res) =>
    res.ok ? res.json() : Promise.reject(res.statusText),
  );

export class Api {
  constructor({ baseUrl }) {
    this._url = baseUrl;
  }

  getInitialPosts() {
    return costumFetch(`${this._url}/posts`, {});
  }

  getUsersInfo() {
    return costumFetch(`${this._url}/users`, {});
  }

  getPostsByUserId(id) {
    return costumFetch(`${this._url}/posts?userId=${id}`, {});
  }
}

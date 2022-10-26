const costumFetch = (url) =>
  fetch(url).then((res) =>
    res.ok ? res.json() : Promise.reject(res.statusText),
  );
const url = "https://jsonplaceholder.typicode.com";

export const getInitialPosts = () => {
  return costumFetch(`${url}/posts`, {});
};

export const getUsersInfo = () => {
  return costumFetch(`${url}/users`, {});
};

export const getPostsByUserId = (id) => {
  return costumFetch(`${url}/posts?userId=${id}`, {});
};

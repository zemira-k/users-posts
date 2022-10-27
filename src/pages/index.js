import { User } from "../components/User.js";
import { Post } from "../components/Post.js";
import { Section } from "../components/Section.js";

const users = new Section({ renderer: createUser }, ".users");
const posts = new Section({ renderer: createPost }, ".posts-container");

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

function createPost(data) {
  const post = new Post({
    data,
  });
  posts.addItem(post.getPost());
}

function createUser(data) {
  const user = new User({
    data,
    handleUserClick: () => {
      getPostsByUserId(data.id)
        .then((postData) => {
          posts.removeItems();
          posts.renderItems(postData);
        })
        .catch((err) => console.log(`Error: ${err}`));
    },
  });
  users.addItem(user.getUser());
}

getUsersInfo()
  .then((userData) => {
    users.renderItems(userData);
  })
  .catch((err) => console.log(`Error: ${err}`));

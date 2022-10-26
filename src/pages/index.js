import { Api } from "../components/Api.js";
import { User } from "../components/User.js";
import { Post } from "../components/Post.js";
import { Section } from "../components/Section.js";

const api = new Api({
  baseUrl: "https://jsonplaceholder.typicode.com",
});

const users = new Section({ renderer: createUser }, ".users");
const posts = new Section({ renderer: createPost }, ".posts-container");

function createPost(data) {
  const post = new Post(
    {
      data,
    },
    ".post-template",
  );
  posts.addItem(post.getPost());
}

function createUser(data) {
  const user = new User(
    {
      data,
      handleUserClick: () => {
        Promise.all([api.getPostsByUserId(data.id)])
          .then(([postData]) => {
            posts.renderItems(postData);
          })
          .catch((err) => console.log(`Error: ${err}`));
      },
    },
    ".user-template",
  );
  users.addItem(user.getUser());
}

Promise.all([api.getUsersInfo()])
  .then(([userData]) => {
    users.renderItems(userData);
  })
  .catch((err) => console.log(`Error: ${err}`));

import axios from "axios";

export const FetchUser = () => {
  console.log("fetching user...");
  return axios
    .get("https://jsonplaceholder.typicode.com/users/1")
    .then(res => res.data)
    .catch(err => console.log("fetch err", err));
};

export const FetchPosts = () => {
  console.log("fetching user posts...");
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.data)
    .catch(err => console.log("fetch err", err));
};

import React, { Suspense } from "react";

import "./App.css";
import { FetchData } from "./PromiseUtilities";

const resource = FetchData();

function App() {
  return (
    <div className="App">
      <header className="App-header">header</header>
      <main className="App-main">
        <Suspense fallback={<h1>Loading user...</h1>}>
          <ProfileDetails />
        </Suspense>
        <Suspense fallback={<h1>Loading posts...</h1>}>
          <ProfilePosts />
        </Suspense>
      </main>
      <footer className="App-footer">footer</footer>
    </div>
  );
}

// normally in component folder (or the like)
const ProfileDetails = () => {
  const user = resource.user.read();
  return (
    <div className="card card-body my-3">
      <h1 className="large text-primary">{user.name}</h1>
      <ul>
        <li>Username: {user.username}</li>
        <li>Email: {user.email}</li>
        <li>City: {user.address.city}</li>
      </ul>
    </div>
  );
};

const ProfilePosts = () => {
  const posts = resource.posts.read();
  return (
    <ul className="listgroup">
      <li className="list-group-iten">
        <strong>Latest Posts</strong>
      </li>
      {posts.map(post => (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default App;

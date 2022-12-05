import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Posts from "./Components/Posts";
import Photos from "./Components/Photos";
import Users from "./Components/Users";
function App() {
  const [posts, setPosts] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => setPhotos(json.filter(photo=>photo.id<=100)));
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);
  return (
    <div>
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<Posts posts={posts} />} />
        <Route path="photos" element={<Photos photos={photos} />} />
        <Route path="users" element={<Users users={users} />} />
      </Routes>
    </div>
  );
}

export default App;

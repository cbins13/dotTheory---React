import React,{useState, useEffect} from 'react';
import { Route } from 'react-router-dom';
import Main from "./Components/Main";

function App() {
  const [posts,setPosts] = useState([]);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  },[]);

  return (
    <div>
      <Main posts={posts}/>
    </div>
  );
}

export default App;

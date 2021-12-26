import React, { useState } from "react";

import './App.css';

import Posts from './components/posts'
import CreatePost from './components/createPost'
import CreatePostButton from "./components/createPostButton";

import logo from './logo.svg'

function App() {
  const [viewingAllPosts, setViewingAllPosts] = useState(true);

  

  return (
    <div>
      <div className="App-header">
          <h1 onClick={() => {window.location.reload(false)}}>NotReddit</h1>
          <img src={logo} className="App-logo" onClick={() => {window.location.reload(false)}} alt="logo"/>
      </div>
      <div className="App">
        {viewingAllPosts ? <Posts /> : <CreatePost />}
      </div>
      {viewingAllPosts ? <CreatePostButton didClick={() => {setViewingAllPosts(false)}} className="Share"/> : null}
    </div>
  );
}

export default App;

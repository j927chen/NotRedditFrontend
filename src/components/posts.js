import React, { useEffect, useState } from "react";

import './posts.css';

const Posts = () => {
    const [posts, setPosts] = useState([]);

useEffect(() => {
    const getPosts = async () => {
        const resp = await fetch("https://not_reddit.j927chen.workers.dev/posts");
        const postsResp = await resp.json();
        setPosts(postsResp);
    };

    getPosts();
}, []);

return (
  <div>
    <h1>Posts</h1>
    {posts.map((post) => (
      <div key={post.id} className="Post">
        <div className="PostContent">
          <p className="Author">
            {"u/" + post.username}
          </p>
          <h3>
            {post.title}
          </h3>
        <p>
          {post.content}
        </p>
        </div>
      </div>
    ))}
  </div>
);
};

export default Posts;
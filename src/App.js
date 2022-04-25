import React, { useState } from "react";
import Posts from "./Components/PostFolder/Posts";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import CreatePost from "./Components/CreatePost/CreatePost";
import "./Apps.css";

function App() {
  const [postsEntries, setPostsEntries] = useState([
    { name: "Unique", posts: "I'm thinking" },
  ]);

  function addNewPostEntry(newPostEntry) {
    let tempPostsEntry = [newPostEntry, ...postsEntries];
    setPostsEntries(tempPostsEntry);
  }

  return (
    <div>
    
    <h2>
      Social<small className="text-muted">Feed</small>
    </h2>
      
      <body>
        <div className="container">
          <div className="newPosts">
            <CreatePost addNewPostEntry={addNewPostEntry} />
          </div>

          <div className="displayPosts">
            <DisplayPosts parentPostsEntries={postsEntries} />
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;

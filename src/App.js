import React, { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
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
      <div><NavBar/></div>
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

import React, { useState } from 'react';
import Posts from './Components/PostFolder/Posts';
import CustomButtons from './Components/CustomButtons/CustomButtons';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import CreatePost from './Components/CreatePost/CreatePost';



function App() {

  const [postsEntries, setPostsEntries] = useState([{name: 'Unique', posts:"I'm thinking"}])

  function addNewPostEntry(newPostEntry){
    let tempPostsEntry = [newPostEntry, ...postsEntries];
    setPostsEntries(tempPostsEntry);
  }


  return (
    <div>
      <h2>Social Feed</h2>
      <div>
      
        <CreatePost addNewPostEntry={addNewPostEntry}/>
        <Posts/>
        <DisplayPosts parentPostsEntries= {postsEntries}/>
        
      </div>
    </div>
  );
}

export default App;

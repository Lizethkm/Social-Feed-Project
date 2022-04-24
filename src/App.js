import React, { useState } from 'react';
import Posts from './Components/PostFolder/Posts';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import CreatePost from './Components/CreatePost/CreatePost';
import './Apps.css'


function App() {

  const [postsEntries, setPostsEntries] = useState([{name: 'Unique', posts:"I'm thinking"}])

  function addNewPostEntry(newPostEntry){
    let tempPostsEntry = [newPostEntry, ...postsEntries];
    setPostsEntries(tempPostsEntry);
  }


  return (
    <div className='container'>
      <h2>Social Feed</h2>
        <div className='body'> 
          <CreatePost addNewPostEntry={addNewPostEntry}/>
          <DisplayPosts parentPostsEntries= {postsEntries}/>
          <Posts/>
        </div>

    </div>
  );
}

export default App;

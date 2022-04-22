import React, { useState } from 'react';
import Posts from './Components/PostFolder/Posts';
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
      <body className='body' >
        <div className='container'> 
          <div className='createPost'><CreatePost addNewPostEntry={addNewPostEntry}/></div>
          <div className='posts'><Posts/></div>
          <div className='displayPosts'><DisplayPosts parentPostsEntries= {postsEntries}/></div>
        </div>
      </body>

    </div>
  );
}

export default App;

import { useState } from "react";
import './CreatePost.css'


const CreatePost = (props) => {

    const[name, setName] = useState ('');
    const[posts, setPosts] = useState ('');

    function handleCreate(event){
        event.preventDefault();
        let newPostEntry = {
            name: name,
            posts: posts,
        };
        console.log(newPostEntry);
        props.addNewPostEntry(newPostEntry)
    }


    return ( 
        <form onSubmit= {handleCreate} className="newPosts" >
            <div className="container">
            <label>Name:</label>
                <input type='text' value={name} onChange= {(event) => setName(event.target.value)} placeholder="What do they call you?"></input>
            </div>
            <div className="container">
                <label>Post:</label>
                <textarea name="Post" value={posts} onChange= {(event) => setPosts(event.target.value)} placeholder = "What's on your mind?"></textarea>
                <button type="submit" >Create</button>
            </div>
            
        </form>
     );
}
 
export default CreatePost;
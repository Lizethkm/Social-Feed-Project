import { useState } from "react";


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
        <form onSubmit= {handleCreate} className="form-grid" >
            <div className="form-group">
            <label>Name</label>
                <input type='text' value={name} onChange= {(event) => setName(event.target.value)} placeholder="What do they call you?"></input>
            </div>
            <div className="form">
                <label>Post</label>
                <textarea name="Post" value={posts} onChange= {(event) => setPosts(event.target.value)} placeholder = "What's on your mind?"></textarea>
            </div>
            <button type="submit" >Create</button>
        </form>
     );
}
 
export default CreatePost;
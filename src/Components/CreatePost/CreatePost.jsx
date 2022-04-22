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
        props.addNewPostEntryProperty(newPostEntry)
    }


    return ( 
        <form  onSubmit= {handleCreate} className= "form-grid">
            <div className="form-group">
            <label>Name</label>
                <input type='text' className="form-control" value={name} onChange= {(event) => setName(event.target.value)} placeholder="What do they call you?"></input>
            </div>
            <div className="form-group">
                <label>Post</label>
                <textarea name="Post"  className="form-control" value={posts} onChange= {(event) => setPosts(event.target.value)} placeholder = "What's on your mind?"></textarea>
            </div>
            <button type="submit" className="btn btn-priamry">Create</button>
        </form>
     );
}
 
export default CreatePost;



const Posts = (props) => {

    return (
        <form>
            <div>
                <label>Name</label>
                <input type='text' placeholder="What do they call you?"></input>
            </div>
            <div>
                <label>Post</label>
                <textarea name="Post" placeholder = "What's on your mind?"></textarea>
            </div>

        </form>
      );
}
 
export default Posts;
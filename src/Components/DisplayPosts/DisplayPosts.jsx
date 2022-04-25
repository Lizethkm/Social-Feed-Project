import CustomButtons from "../CustomButtons/CustomButtons";
import Posts from "../PostFolder/Posts";
import './DisplayPosts.css'

const DisplayPosts = (props) => {




    return (
       
        <div>
                {props.parentPostsEntries.map((postEntry) => {
                    return (
                    <div>
                        <div className="name">{postEntry.name}</div>
                        <div className="posts">{postEntry.posts} <CustomButtons/></div>
                        <div className="timeStamp">{new Date().toLocaleString() + ''}</div>
                        <hr/>
                    </div>
                    )
                })}
            <div>
                <Posts />
                <div className="timeStamp">{new Date().toLocaleString() + ''}</div>
                <hr/>
            </div>
        </div>



    );
}
 
export default DisplayPosts;
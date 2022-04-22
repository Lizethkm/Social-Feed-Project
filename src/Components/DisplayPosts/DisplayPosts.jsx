import CustomButtons from "../CustomButtons/CustomButtons";

const DisplayPosts = (props) => {




    return (
       
        <div className= "container">
                {props.parentPostsEntries.map((postEntry) => {
                    return (
                    <div className="display">
                        <div>{postEntry.name}</div>
                        <div>{postEntry.posts}</div>
                        <div><CustomButtons/></div>
                    </div>
                    )
                })}
        </div>



    );
}
 
export default DisplayPosts;
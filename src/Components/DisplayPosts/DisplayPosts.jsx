import CustomButtons from "../CustomButtons/CustomButtons";

const DisplayPosts = (props) => {




    return (
       
        <form className= "form-grid">
                {props.parentPostsEntries.map((postEntry) => {
                    return (
                    <div>
                        <div>{postEntry.name}</div>
                        <div>{postEntry.posts}</div>
                        <div><CustomButtons/></div>
                    </div>
                    )
                })}
        </form>



    );
}
 
export default DisplayPosts;
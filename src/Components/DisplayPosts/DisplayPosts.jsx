import CustomButtons from "../CustomButtons/CustomButtons";

const DisplayPosts = (props) => {




    return (
       
        <form className= "form-grid">
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {props.parentPostsEntries.map((postEntry) => {
                    return (
                    <tr>
                        <td>{postEntry.name}</td>
                        <td>{postEntry.posts}</td>
                        <td><CustomButtons/></td>
                    </tr>
                    )
                })}
                </tbody>
            </table>
        </form>



    );
}
 
export default DisplayPosts;
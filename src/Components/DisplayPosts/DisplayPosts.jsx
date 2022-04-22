// import { useEffect, useState } from "react";
// import Posts from "../PostFolder/Posts";
// import CreatePost from "../CreatePost/CreatePost";




const DisplayPosts = (props) => {




    return (
       
        <form className= "form-grid">
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Posts</th>
                </tr>
                </thead>
                <tbody>
                {props.parentPostsEntries.map((postEntry) => {
                    return (
                    <tr>
                        <td>{postEntry.name}</td>
                        <td>{postEntry.post}</td>
                    </tr>
                    )
                })}
                </tbody>
            </table>
        </form>



    );
}
 
export default DisplayPosts;
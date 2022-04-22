
// this posts are already created so I don't need a form here

import CustomButtons from "../CustomButtons/CustomButtons";

const Posts = (props) => {

    return (
        <form>
            <div>
                <label>Name:</label>
                <p>Mango</p>
                <p>Sorry for being late... I was enjoying my last few seconds of not being here</p>
                <CustomButtons className= "buttons"/>
            </div>
        </form>
      );
}
 
export default Posts;
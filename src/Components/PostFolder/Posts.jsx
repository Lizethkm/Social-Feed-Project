
// this posts are already created so I don't need a form here

import CustomButtons from "../CustomButtons/CustomButtons";

const Posts = (props) => {

    return (
        <form>
            <div>
                <div className="name">Mango</div>
                <div className="posts">Sorry for being late... I was enjoying my last few seconds of not being here</div>
                <CustomButtons />
            </div>   
        </form>
      );
}
 
export default Posts;
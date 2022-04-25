
import CustomButtons from "../CustomButtons/CustomButtons";

const Posts = (props) => {

    return (
            <div>
                <div className="name">Mango</div>
                <div className="posts">Sorry for being late... I was enjoying my last few seconds of not being here<CustomButtons /></div>
                {new Date().toLocaleString() + ''}
            </div>  
      );
}
 
export default Posts;
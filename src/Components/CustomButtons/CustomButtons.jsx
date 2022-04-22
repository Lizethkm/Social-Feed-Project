import React, { useState } from 'react';
import "./CustomButtons.css"



const CustomButtons = (props) => {

    const [likeButton, setLikeButton] = useState("inactive");

    function handleClick(){
        if(likeButton === "inactive"){
            setLikeButton("active");
            setDislikeButton("inactive")
        }
        else {
            setLikeButton("inactive")
        }

    }


    const [dislikeButton, setDislikeButton] = useState("inactive");

    function dislikeHandleClick(){
        if(dislikeButton === "inactive"){
            setDislikeButton("active");
            setLikeButton("inactive")
        }
        else {
            setDislikeButton("inactive")
        }

    }

    return ( 
        <div className='buttons'>
            <div className="leftButton">
                <button className ={likeButton} type="button" onClick= {handleClick}>Like</button>
            </div>
            <div className="rightButton">
                <button className ={dislikeButton} type="button" onClick= {dislikeHandleClick}>Dislike</button>
            </div>
        </div>
    
        
    );
} 


export default CustomButtons;
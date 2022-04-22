import React, { useState } from 'react';
import "./CustomButtons.css"



const CustomButtons = (props) => {

    const [likeButton, setLikeButton] = useState("inactive");

    function handClick(){
        if(likeButton === "inactive"){
            setLikeButton("active");
            setDislikeButton("inactive")
        }
        else {
            setLikeButton("inactive")
        }

    }


    const [dislikeButton, setDislikeButton] = useState("inactive");

    function dislikeHandClick(){
        if(dislikeButton === "inactive"){
            setDislikeButton("active");
            setLikeButton("inactive")
        }
        else {
            setDislikeButton("inactive")
        }

    }

    return ( 
        <div className='container'>
            <div className="leftButton">
                <button className ={likeButton} type="button" onClick= {handClick}>Like</button>
            </div>
            <div className="rightButton">
                <button className ={dislikeButton} type="button" onClick= {dislikeHandClick}>Dislike</button>
            </div>
        </div>
    
        
    );
} 


export default CustomButtons;
import React, { useState } from 'react';
import "./CustomButtons.css"



const CustomButtons = (props) => {

    const [likeButton, setLikeButton] = useState("inactive");

    function handClick(){
        if(likeButton === "inactive"){
            setLikeButton("active")
        }
        else {
            setLikeButton("inactive")
        }

    }

    const [dislikeButton, setDislikeButton] = useState("inactive");

    function dislikeHandClick(){
        if(dislikeButton === "inactive"){
            setDislikeButton("active")
        }
        else {
            setDislikeButton("inactive")
        }

    }

    return ( 
        <div>
            <div>
                <button className = {likeButton} type="button" onClick= {handClick}>{props.message}</button>
            </div>
            <div>
                <button className = {dislikeButton} type="button" onClick= {dislikeHandClick}>Dislike</button>
            </div>
        </div>
    
        
    );
} 


export default CustomButtons;
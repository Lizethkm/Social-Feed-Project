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

    // Create Conditional for buttons if one is active keep the other inactive

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
                <button class= "btn-grp btn-primary" className =  {likeButton} type="button" onClick= {handClick}>Like</button>
            </div>
            <div>
                <button class= "btn-grp btn-secondary" className = {dislikeButton} type="button" onClick= {dislikeHandClick}>Dislike</button>
            </div>
        </div>
    
        
    );
} 


export default CustomButtons;
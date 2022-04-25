import React, { useState } from 'react';
import {FiThumbsUp} from 'react-icons/fi'
import {FiThumbsDown} from 'react-icons/fi'
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
        <div>
            <div className="buttons">
                <div className='dislikeIcon'><FiThumbsDown   className={dislikeButton} onClick={dislikeHandleClick}/></div>
                <div className='likeIcon'><FiThumbsUp   className={likeButton} onClick={handleClick}/></div>
            </div>
        </div>
    );
} 


export default CustomButtons;
import React, { useState } from 'react';
import "./CustomButtons.css"



const CustomButtons = (props) => {

    const [buttonClass, setButtonClass] = useState("inactive");

    function handClick(){
        if(buttonClass === "inactive"){
            setButtonClass("active")
        }
        else {
            setButtonClass("inactive")
        }

    }


    return ( 
        <div>
            <div>
                <button className = {buttonClass} type="button" onClick= {handClick}>{props.message}</button>
            </div>
            <div>
            <button className = {buttonClass} type="button" onClick= {handClick}>Dislike</button>
            </div>
        </div>
    
        
    );
} 


export default CustomButtons;
import React from "react";

function HoverCounter({count , handelCount}) {
       
        return(
            <h1 onMouseOver={handelCount}>Hovered {count} Times</h1>
        )
    
}


export default HoverCounter;
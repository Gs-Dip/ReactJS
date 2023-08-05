import React from "react";

function ClickCounter({count,handelCount}){       
            
        return(
            <button type="button" onClick={handelCount}>Clicked {count} Times</button>
        )
     
}


export default ClickCounter;
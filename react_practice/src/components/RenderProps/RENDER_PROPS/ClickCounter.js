import React from "react";

class ClickCounter extends React.Component{       
    render(){        
        return(
            <button type="button" onClick={this.handelCount}>Clicked {count} Times</button>
        )
    }
}


export default ClickCounter;
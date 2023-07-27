import React from "react";

class HoverCounter extends React.Component{
    state={
        count:0,
    }


    handelHover=() =>{
        this.setState((prevState)=>({ count: prevState.count+1 }))
    }

    render(){
        const {count}=this.state
        return(
            <h1 onMouseOver={this.handelHover}>Hovered {count} Times</h1>
        )
    }
}


export default HoverCounter;
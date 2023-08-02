import React from "react";

class HoverCounter extends React.Component{
    state={
        count:0,
    }

    handelCount= () =>{
        this.setState((prevProps) => ({count:prevProps.count+1}));
    }
    render(){
        const {count} =this.state;
        return(
            <h1 onMouseOver={this.handelCount}>Hovered {count} Times</h1>
        )
    }
}


export default HoverCounter;
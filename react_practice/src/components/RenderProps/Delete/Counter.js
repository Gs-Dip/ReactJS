import React from "react";

class Counter extends React.Component{
    state ={
        count:0,
    }

    HandelClickAndHover=()=>{
        this.setState( (Prevstate) => ( {count: Prevstate.count+1} ))
    }
    render(){
        const{children}=this.props
        const {count}=this.state
        return children(count,this.HandelClickAndHover)
    }
}


export default Counter;
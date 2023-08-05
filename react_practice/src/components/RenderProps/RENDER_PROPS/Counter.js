import React from "react";

class Counter extends React.Component{
    state={
        count:0,
    }

    handelCount= () =>{
        this.setState((prevProps) =>( {count: prevProps.count+1} ))
    }

    render(){
        ////const {render} =this.props
        const {children} =this.props
        const {count} = this.state

        return children(count,this.handelCount);
    }
}

export default Counter;
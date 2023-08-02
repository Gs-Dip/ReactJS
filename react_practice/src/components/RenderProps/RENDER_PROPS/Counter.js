import React from "react";

class Counter extends React.Component{
    state={
        count:0,
    }

    handelCount= () =>{
        this.setState((prevProps) =>( {count: prevProps.count+1} ))
    }

    render(){
        const {render} =this.props
        return render();
    }
}

export default Counter;
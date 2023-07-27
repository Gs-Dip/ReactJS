import React from "react";


const Dip = (OriginalComponent) =>{
    class NewComponent extends React.Component{
        state={
            count:0,
        }
    
        handelCount=() =>{
            this.setState((prevState)=>({ count: prevState.count+1})) 
        }

        render(){
            const {count}= this.state
            return(
                <OriginalComponent />
            )
        }
    }

    return NewComponent;
}


export default Dip;
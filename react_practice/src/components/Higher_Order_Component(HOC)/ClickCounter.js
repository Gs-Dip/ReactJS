import React from 'react';


class ClickCounter extends React.Component{
    state={
        count:0,
    }

    handelCount=() =>{
        this.setState((prevState)=>({ count: prevState.count+1})) 
    }

    render(){
        const {count}=this.state

        return(
            <button type="button" onClick={this.handelCount} >Clicked {count} Times</button>
        )
    }
}


export default ClickCounter;
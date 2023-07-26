import React from "react";

class Bracket extends React.Component{
    
    addBracket= (text) => `[ ${text} ]`;

    render(){
        return this.props.children( {bra : this.addBracket} );  
    }
}


export default Bracket;
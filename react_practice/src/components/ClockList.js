import React from "react";
import Clock from "./Clock";

class ClockList extends React.Component{
    render(){
        const {quentity} =this.props

        return(
          <div>  
                <div>
                    {quentity.map((c) =>( ///// quentity theke 1 2 3 aigula akbar akbar kore c ar moddhe ashbe abong protibar Clock class render hobe 
                    
                    <Clock  key={Math.random()} />)  //////chack note book to know what is key.... 
                    
                    )};
                </div>


                <div>
                    {quentity.map((c) =>( 

                    <Clock  key={Math.random()} />)  /////Math.random ke ami  protita map function ar  key hishebe a bebohar korte parbo ta te kono problem nai

                    )};
               </div>
           
          </div>  
        )
    }
}


export default ClockList;
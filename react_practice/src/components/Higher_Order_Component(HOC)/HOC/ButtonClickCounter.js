import Dip from "./withCounter";

const ButtonClickCounter= () =>{
    const {count}=this.state

        return(
            <button type="button" onClick={this.handelCount} >Clicked {count} Times</button>
        )
} 

export default Dip(ButtonClickCounter);
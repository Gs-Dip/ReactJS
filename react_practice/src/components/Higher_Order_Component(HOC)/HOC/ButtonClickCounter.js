import Dip from "./withCounter";

const ButtonClickCounter= (props) =>{
    const {count, handelCount}= props;  ////// akhane ami 2 ta peramiter receive korechi...jehetu ami aita state theke distructure kori nai tai this.state likhi nai

        return(
            <button type="button" onClick={handelCount} >Clicked {count} Times</button>
        )
} 

export default Dip(ButtonClickCounter); //////akhane Dip function ar moddhe ButtonClickCounter component ke pass kora hoyeche
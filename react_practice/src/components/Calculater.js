import React from "react";
import InputTemprature from "./InputTemprature";


class Calculate extends React.Component{
    
    state={
        temprature:'',
        ScaleNameValue:'c',
    }

    handelChange= (e) =>{
        this.setState({
            temprature: e.target.value
        })
    }


    render(){
        
        return(
            <form action="">
                <InputTemprature ScaleNameValue='c' />
                <InputTemprature ScaleNameValue='f' />

                {/* <Boiling selcious={parseFloat(temprature)} />  jehetu ami state ar temprature ke string a rakhchi tai parseFloat() ai ta bebohar korechi */}
            </form>
        )
    }
}


export default Calculate;
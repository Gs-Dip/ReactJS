import React from "react";
import { Convart, toCelsius, toFahrenheit } from "../lib/Convarter";
import Boiling from "./Boiling";
import InputTemprature from "./InputTemprature";


class Calculate extends React.Component{
    
    state={
        temprature:'',
        ScaleNameValue:'c',
    }

    handelChange= (e,ScaleNameValue) =>{
        this.setState({
            temprature: e.target.value,
            ScaleNameValue
        })
    }


    render(){
        const {temprature,ScaleNameValue}=this.state //////state theke amra aigulo distucture kore nilam
        const celsius= ScaleNameValue === 'f' ? Convart(temprature,toCelsius) :temprature;
        const fahrenheit= ScaleNameValue === 'c' ? Convart(temprature,toFahrenheit) :temprature;

        return(
            <form action="">
                <InputTemprature ScaleNameValue='c' temprature={celsius} onTempratureChange={this.handelChange} />
                <InputTemprature ScaleNameValue='f' temprature={fahrenheit} onTempratureChange={this.handelChange} />

               <Boiling selcious={parseFloat(temprature)} />   {/*  jehetu ami state ar temprature ke string a rakhchi tai parseFloat() ai ta bebohar korechi */}
            </form>
        )
    }
}


export default Calculate;
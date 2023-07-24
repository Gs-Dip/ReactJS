import React from "react";

const ScaleName={
    c: 'Celsius',
    f: 'Fahrenheit',
}

function InputTemprature( {temprature,ScaleNameValue,onTempratureChange} ){
     
    return(
        <form action="">
            <fieldset>
                <legend>Inter Temprature In {ScaleName[ScaleNameValue]}:</legend>
                <input type="text" value={temprature} onChange={ (e) => onTempratureChange(e,ScaleNameValue)} />
            </fieldset>

             
        </form>
    )
}


export default InputTemprature;
export function toCelsius(fahrenheit){
    return ((fahrenheit -32) * 5 ) /9;
}

export function toFahrenheit(celsius){
    return(celsius * 9) /5 + 32;
}


export function Convart(temprature,convartTo){
    const input=parseFloat(temprature) /////akhane input take Float baniye nilam

    if(Number.isNaN(input)) { ///isNaN mane hocche is not a number.........amra akhane chack korchi input ta ki kono number ki na karon input number na hoye oono kichu oo ashte pare
     
     return '' ////input ta number na hoye onno kichu hole black return korbe

    }

    const output=convartTo(input);
    const rounded=Math.round(output * 1000) /1000   ////////ami jei output ta pabo ami chacchi doshomik ar por 3 ta sonkha dekhate tai ami input ar sathe 1000 gun korchi aabar 1000 vag korechi....jodi doshomik ar por ami 4 sonkha dekhte chai tahole 10000 gun korte hobe aabar 10000 vag korte hobe 
    
    return rounded.toString() //////rounded ta ke ami string baniye diyechi

}
 
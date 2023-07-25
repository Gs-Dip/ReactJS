import Emoji from "./Emoji";

class Test extends Emoji{
    constructor(props){  /////// jokhon amra amader banano class ke extends korbo ba inheritance korbo tokhon obosshoi constructor() class ke call korte hobe ..Emoji class ta amader banano akta class
        super(props)  ////akhane super ar kaj hocche amar parents class mane Emoji class ar props guloke niye ashbe 
    }

    render(){
        const decoratedText=this.addEmoji('i am Dip', ':purple');
        
        return super.render(decoratedText);
    }
}


export default Test;
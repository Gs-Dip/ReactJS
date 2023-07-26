import React from "react";

class Emoji extends React.Component{
    
    addEmoji= (text,emoji) => `${emoji} ${text} ${emoji}`;

    render(){
        return this.props.children( {data : this.addEmoji} ); /////akhane this.props.children lekha hoyeche koaron app.js ar moddhe amra Emoji class ar moddhe Test class ke rap kor diyechi tai abong data name akta peramiter ar moddhe ami amar addEmoji funcion take pass kore dicchi child component ar kache 
    }
}


export default Emoji;
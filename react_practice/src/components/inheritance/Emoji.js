import React from "react";


class Emoji extends React.Component{

    addEmoji=(text,emoji) => `${emoji} ${text} ${emoji}`; 

    render(overwrite){
        let text="i am the Emoji Component";
        if(overwrite) text =overwrite;

        return(
            <div>{text}</div>
        )
    }
}


export default Emoji;
function Test({data,bra}) {
    let text="i am the Emoji Component2";
    
    if(data) {
        text= data(text,'🌹')
    }
    if (bra) {
        text=bra(text);
    }

    return <div>{text}</div> 
}


export default Test;
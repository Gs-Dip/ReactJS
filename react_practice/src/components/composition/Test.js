function Test({data}) {
    const text="i am the Emoji Component2";
    return <div>{data ? data(text,'❤') : text}</div> 
}


export default Test;
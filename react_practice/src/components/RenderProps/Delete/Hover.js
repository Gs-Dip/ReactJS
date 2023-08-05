function Hover({count,HandelClickAndHover}){
    return(
        <h1 onMouseOver={HandelClickAndHover}>Hovered {count} times</h1>
    )
}


export default Hover;
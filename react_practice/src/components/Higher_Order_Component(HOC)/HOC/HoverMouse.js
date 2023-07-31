import Dip from "./withCounter";

const HoverMouse= (props) =>{
    const {count,handelCount}= props;

    return(
        <h1 onMouseOver={handelCount} >Hoverd {count} Times</h1>
    )
}

export default Dip(HoverMouse);
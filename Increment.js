
const domcontainer = document.querySelector("#root"); // here i have taken a variable which is domcontainer

// const myElement = React.createElement("div", null,[ React.createElement("p", null, "THIS IS P TAG"),React.createElement("p",null,"THIS IS P TAG 2"),]);

// we can write this above code in jsx cintex which is react cintex

// const myElement=(
//     <div>
//         <h1 id="display">0</h1>

//         <div>
//             <button id="button">Increment +</button> 
//         </div> 
//     </div>

// );

const Increment= () => {  
    const[counter,setCounter] = React.useState(0);
    console.log(counter,setCounter)
    return(        
        <div>
        <h1 id="display">{counter}</h1>

        <div>
            <button id="button" onClick={ () => setCounter(counter+1)}>Increment +</button> 
        </div> 
    </div>
    );
};


ReactDOM.render(
<div>
    <Increment/>
    <Increment/>
    <Increment/>
    </div>, domcontainer); // increment ta akta function tai eeta print korar jonno ai vabe likhte hobe <Increment/>

 

// let number=0;

// const button=document.querySelector("#button")
// const display=document.querySelector("#display")

// button.addEventListener("click",()=>{
//     number++;
//     display.textContent=number;

// });




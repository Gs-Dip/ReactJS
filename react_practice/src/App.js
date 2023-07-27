// import ClockList from './components/ClockList';

// function App() {
//   console.log('App component renderd')
//   const quentites=[1,2,3]

//   return <div><ClockList quentity={quentites} /></div>;
  
// }

// export default App;


////////////////// Forms.js take browser a dekhar jonno aita kora hoyeche------------------------------------------------------
// import Forms from './components/Forms';

// function App() {  
   

//   return <div><Forms /></div>;
  
// }

// export default App;



/////////////////// Lifting state up---------------------------------------------------------------------------------------------

// import Calculate from './components/Calculater';

// function App() {

//   return <div><Calculate  /></div>
// }


// export default App;



//////////////////COMPOSITION Vs INHERITANCE ----------------------------------------------------------
///////INHERITANCE---------------------------
// import Test from "./components/inheritance/Test";

// function App() {

//   return  <Test />;
// }


// export default App;



//////////////////COMPOSITION--------------------------------------
// import Emoji from "./components/composition/Emoji";
// import Test from "./components/composition/Test";



// function App() {

//   return( 
//   <Emoji>
//     { ({data})=> <Test data={data} /> }
//   </Emoji>
//   )
// }


// export default App;


///////////////NESTED COMPOSITION----------------------------

// import Bracket from "./components/composition/Bracket";
// import Emoji from "./components/composition/Emoji";
// import Test from "./components/composition/Test";



// function App() {

//   return( 
//   <Emoji>
//     { ({data})=> (
    
//     <Bracket>
//       { ({bra})=>  <Test data={data} bra={bra} /> }    
//     </Bracket> )}

//   </Emoji>
//   )
// }


// export default App;


//////////////////////Higher Order Component(HOC)-------------------------

import ClickCounter from "./components/Higher_Order_Component(HOC)/ClickCounter";
import HoverCounter from "./components/Higher_Order_Component(HOC)/HoverCounter";

function App() {
  return( 
  <div> 
    <ClickCounter /> 
    <HoverCounter/>
  </div> )
}


export default App;
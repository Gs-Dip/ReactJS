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


//////////////////////HOC eemon code ar jonno korte hobe jodi bar bar code repete korte hoy same kaj tai ami HOC diye niche korechi code repete na kore barbar-------------------------

// import ClickCounter from "./components/Higher_Order_Component(HOC)/ClickCounter";
// import HoverCounter from "./components/Higher_Order_Component(HOC)/HoverCounter";

// function App() {
//   return( 
//   <div className="app"> 
//     <ClickCounter /> 
//     <HoverCounter/>
//   </div> )
// }


// export default App;

///////////// HOC -------------------------------------------

// import ButtonClickCounter from "./components/Higher_Order_Component(HOC)/HOC/ButtonClickCounter";
// import HoverMouse from "./components/Higher_Order_Component(HOC)/HOC/HoverMouse";


// function App() {

//   return( 
//     <div>
//       <ButtonClickCounter />
//       <HoverMouse />
//     </div>  
     
//   )
// }

// export default App;

/////////////Render Props---------------------------------------------
//import User from "./components/RenderProps/User";

// function App() {  //////////////////////// for User.js file (1)
//   return(
//     <User name="Anik"/>
//   )
// }

// function App() {   //////////////////////// for User.js file (2)
//   return(
//     <User name={() =>'Dip'}/>
//   )
// }

// function App() {     //////////////////////// for User.js file (3)
//   return <User render={(isLoggdIn) => isLoggdIn ? 'Dibbo' : 'Gust'}/> /////akhane ami peramiter ar nam diyechi render
// }

// export default App;

///////////////////////////RENDER_PROPS----------------------------------------------------------------------------------------------------

import ClickCounter from "./components/RenderProps/RENDER_PROPS/ClickCounter";
import Counter from "./components/RenderProps/RENDER_PROPS/Counter";

function App() {
  return( <Counter render={ () => <ClickCounter/> } /> )
}

export default App;

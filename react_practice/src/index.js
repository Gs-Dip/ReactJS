import React from "react";
import ReactDOM from "react-dom";
// const element=React.createElement('h1',null,'hello world!');// aivabe muloto element create korte hoy react a kintu aita kub jhabelar kintu amra same jinish tai ee nicher moto kore likhte pari jeta bable nije react ar formate a shajiye nebe
// const element=<h1>hello world</h1> //aivabe likhleo bable nijei react ar formate a shajiye nebe
//ReactDOM.render(element, document.getElementById('root'));
//----------------------------------------------------------------------------------
// const number=0;
// const element=(
//   <h1 className='heading' tabIndex={number}>
//     <span className='text'>Hello world</span>
//     <img src="" alt="" />
//   </h1>
// );

// ReactDOM.render(element,document.getElementById('root'));

////----------------------------------------------------------------------------
//--AMRA MULOTO AI VABEI REACT CODE LIKHBO JATE AKTAI RENDER THAKBE
// const number=0;



//   const element=(
//     <h1 className='heading' tabIndex={number}>
//       <span className='text'>Hello world</span>
//       <img src="" alt="" />
//     </h1>
//   );
//   ReactDom.render(element,document.getElementById('root'));





////////------------------------------------------------------------------------
////CLOCK

// const number=0;


// setInterval(()=>{
//   const element=(
//     <h1 className='heading' tabIndex={number}>
//       <span className='text'>Hello world {new Date().toLocaleTimeString()}</span>
//       <img src="" alt="" />
//     </h1>
//   );
//   ReactDom.render(element,document.getElementById('root'));
// },1000);


//--------------------------------------------------------------------------------------


////-----------------(COMPONENTS AND PROPS)----------------------------------------
//chack note book
///////(1)functional components----
// function Clock({locale}) {
//   return (
//     <h1 className='heading'>
//       <span className='text'>Hello world{new Date().toLocaleTimeString(locale)}</span>
//       <img src="" alt="" />
//     </h1>
//   );
// }
// ReactDOM.render(Clock(),document.getElementById('root'));
//// amra function ke ai vabe oo like print korte pari(locale peramitar pass kora hoyeche clock function ar moddhe..english a somoy dekhar jonno likhte hobe "en-US")----
// ReactDom.render(<Clock locale="bn-BD" /> ,document.getElementById('root'));

//////(2) class components-------------------------
// class Clock {
//   print() {
//     return (
//       <h1 className="heading">
//         <span className="text">hello world{new Date().toLocaleTimeString()}</span>
//       </h1>
//     );
//   }
// }


// const ClockComponent=new Clock(); ////akhane Clock class ke component a  convert kora hoyeche
// ReactDOM.render(ClockComponent.print(),document.getElementById('root'));


///////class component ke function aakare render korar jonno ai niyome korte hobe-----------------

class Clock extends React.Component { ////React.component ke amra extend korechi Clock class ar moddhe
  render() {  //////akhane render dite hobe karon React.component render ke call kore tai
    return (
      <h1 className="heading">
        <span className="text">hello world{new Date().toLocaleTimeString(this.props.locale)}</span>
      </h1>
    );
  }
}


ReactDOM.render(<Clock locale="bn-BD"/>,document.getElementById('root'));////akhane class component ke amra function component ar moto kore render korechi
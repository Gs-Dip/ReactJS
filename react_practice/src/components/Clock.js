import React from 'react';
import Button from './Button';

class Clock extends React.Component { ////React.component ke amra extend korechi Clock class ar moddhe
  constructor(props) {  /////(chack note book state and lifecycle)react jokhon ee constructor ta call korbe props soho call korbe
    
    super(props) /////constructor ar moddhe super call korte hoy jar fole react.component ar props oooo call hoye jai  
    this.state={ date:new Date() , locale:'bn-BD' }; //// class ar kono props ba peramiter ke amra this. diye tarpor use kori  
     
  }

  tick(){
    this.setState({ ///// this.state.date= new Date() -never do that
      date:new Date()
    });
  }  


  componentDidMount(){  /////eeta hocche react.component ar akta method (chack note book)
    this.clockTimer =setInterval(() => {this.tick()}, 1000);
  }


  componentWillUnmount(){ ////// aita hocce react.component ar r akta method aita kaj hocce jokhon ami amar ai colck timer page theke beriye onno page a jabo browser a tokhon ati (mane timer ta) off hoye jabe jate kore webpage ar performance slow hobe na 
    clearInterval(this.clockTimer);
  }


  handelClick = (locale) => {    /////this ar problem ba this ar error jeno na hoy she jonno akhane arrow function bebohar kora hoyeche
   this.setState({
    locale, 
   });
  }


  
 
    render() {  //////akhane render dite hobe karon React.component render ke call kore tai
      console.log('clock component renderd');

      const {date,locale}=this.state /////akhane date , locale  ke state theke distruckcharing kore newa hoyeche
      
     /////111((( let button; /// akhane let diye akta veriable niyechi jar nam button....kintu amra aivabe jsx a likhbo na mane return ar moddhe likhbo na jodi kokhono 3 ta ba tar beshi if else niye kaj korte hoy tokhon amra aivabee korbo return ar baire....2 ta if else hole return ar moddhei kaj korbo      
      // if(locale === 'bn-BD') {
      //   button=(
      //     <Button change={this.handelClick} locale="en-US">
      //     Click Hare
      //     </Button> 

      //     );
      // } else {
      //   button=( 
      //   <Button change={this.handelClick} locale="bn-BD">
      //     Click Hare
      //     </Button>
      //   );
      // }////)))
      
      return (
       <div>

        <h1 className="heading">
          <span className="text">hello world{date.toLocaleTimeString(locale)}</span>
        </h1>

        {/* <Button  change={this.handelClick.bind(this,'en-US')}>Click Hare</Button> */}  {/*{/* amra jodi bind() ar moddhe peramiter pass kori tahole bind protibar akta function props akare pathabe jar fole nextChange kokhono currentChange ar soman hobe na abong Button class ta bar bar render hote thakbe...tai amra nicher niyome likhbo  */}

        {/* <Button change={this.handelClick} locale="en-US">Click Hare</Button> */} {/* ai code ta amra if else ar moddhe bebohar korechi button take toggle korar jonno mane jokhon bangla thakbe tar por english korte parbo aabar jokhon clock ta english thakbe tokhon bangla korte parbo */}
       
        {/* {button} */} {/*(111 ar result ta akhane pring kora hoyeche) */}

        {locale === 'bn-BD' ? ( //////jsx a if else aivabe likhbo jodi if else 2ta thake tobo...tar beshi thakle amra return ar opore if else diye likhbo
          <Button change={this.handelClick} locale="en-US" show={false} enable={false}/>
               

        ) : (

        <Button change={this.handelClick} locale="bn-BD" show enable/>         
        
        )};

       </div>
      );
    }
  }

export default Clock; //////ami amar ai file theke Clock class take export korechi jate kore ami ai file take oonnoo file ar moddhe import korte pari  
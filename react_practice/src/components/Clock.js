import React from 'react';

class Clock extends React.Component { ////React.component ke amra extend korechi Clock class ar moddhe
  constructor(props) {  /////(chack note book state and lifecycle)react jokhon ee constructor ta call korbe props soho call korbe
    
    super(props) /////constructor ar moddhe super call korte hoy jar fole react.component ar props oooo call hoye jai  
    this.state={ date:new Date() }; //// class ar kono props ba peramiter ke amra this. diye tarpor use kori  
     
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


  
 
    render() {  //////akhane render dite hobe karon React.component render ke call kore tai
      return (
        <h1 className="heading">
          <span className="text">hello world{this.state.date.toLocaleTimeString(this.props.locale)}</span>
        </h1>
      );
    }
  }

export default Clock; //////ami amar ai file theke Clock class take export korechi jate kore ami ai file take oonnoo file ar moddhe import korte pari  
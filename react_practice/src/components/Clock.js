import React from 'react';

class Clock extends React.Component { ////React.component ke amra extend korechi Clock class ar moddhe
  constructor(props) {  /////(chack note book state and lifecycle)react jokhon ee constructor ta call korbe props soho call korbe
    
    super(props) /////constructor ar moddhe super call korte hoy jar fole react.component ar props oooo call hoye jai  
    this.state={ date:new Date() }; //// class ar kono props ba peramiter ke amra this. diye tarpor use kori  
     
  }


  componentDidMount(){  /////eeta hocche react.component ar akta method (chack note book)
    setInterval(() => {
      this.setState({
        date:new Date()
      });
    }, 1000);
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
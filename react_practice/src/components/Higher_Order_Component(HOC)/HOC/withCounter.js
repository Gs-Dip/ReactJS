import React from "react";


const Dip = (OriginalComponent) =>{  ////// akhane ami akta function likhechi jeta OriginalComponent ar maddhome akta component receive kore abong pore akta new component return kore(ai ta hocche HOC ar concept)
    class NewComponent extends React.Component{
        state={
            count:0,
        }
    
        handelCount=() =>{
            this.setState((prevState)=>({ count: prevState.count+1})) 
        }

        render(){
            const {count}= this.state
            return(
                <OriginalComponent count={count} handelCount={this.handelCount} /> ////// Opore OriginalComponent ar moddhe amra je component na pabo peramiter hishebe tar moddhe aabar ami akhan theke 2 ta peramiter pass kore diyechi count abong handelCount name
            )
        }
    }

    return NewComponent;
}


export default Dip;
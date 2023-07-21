import React from 'react';


class Forms extends React.Component{
    state={
        title:'java',
        textarea: 'write a letter',
        select:'react',
        chackbox:true,
    };


    handelChange = (e) =>{
        console.log(e.target.value);
       if(e.target.type === "text"){

        this.setState({
            title: e.target.value,
        });

       } else if(e.target.type ==="textarea"){
        this.setState({
            textarea: e.target.value,
        });

       } else if(e.target.type === "select-one"){
        this.setState({
            select:e.target.value,
        });

       } else if (e.target.type === "checkbox"){
        this.setState({
            chackbox:e.target.checked, ////// eeta jehetu checkbox input tai amra eevar value update korbo na amra tik chinho update korbo tai akhane amra e.target.checked diyechi
        });

       }else{
        
        console.log("nothing here")
       }
        
    };


    submitHandelar= (e) =>{
        const {title,textarea,select,chackbox}=this.state
        e.preventDefault(); //// e.preventDefault() aita deyar karone submit korar por je page ta reload hoto ja html ar default behaveor oita bondho hoye jabe....mane page submit korar por r page reload hobe na
        
        console.log(title,textarea,select,chackbox);
    }



    render(){
        const {title,textarea,select,chackbox}=this.state
        return(
            <div>
                <form  onSubmit={this.submitHandelar}>
                    <input type="text" value={null} />
                    <input type="text" placeholder='Enter Title' value={title} onChange={this.handelChange} />
                
                    <p>Your Title Text:{title}</p>

                    <textarea name="text" value={textarea} onChange={this.handelChange} ></textarea>

                   <br />
                   <br />
                    <select value={select} onChange={this.handelChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                    </select>

                    <br />
                    <br />
                      
                   <input type="checkbox" checked={chackbox} onChange={this.handelChange}/>   {/*  chackbox ar jonno value use kora jabe na karon amra value change korbo na.. amra chackbox ar tik chinho change korbo tai value ar poriborte  checked  use korte hobe   */}
                   <br />
                   <br />

                   <input type="submit" value="submit" />
                </form>
                
            </div>
        )
    }
}


export default Forms; 
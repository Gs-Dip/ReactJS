import React from 'react';


class Forms extends React.Component{
    state={
        title:'java',
        textarea: 'write a letter',
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

       }else{
        console.log("nothing here")
       }
        
    };

    render(){
        const {title,textarea}=this.state
        return(
            <div>
                <form >
                    <input type="text" placeholder='Enter Title' value={title} onChange={this.handelChange} />
                
                    <p>Your Title Text:{title}</p>

                    <textarea name="text" value={textarea} onChange={this.handelChange} ></textarea>


                    <select>
                        <option value="React"></option>
                    </select>
                
                </form>
                
            </div>
        )
    }
}


export default Forms; 
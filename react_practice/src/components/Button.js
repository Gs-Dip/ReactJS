import React from "react";

class Button extends React.Component{
    shouldComponentUpdate(nextProps){ ////// akhane shouldComponentUpdate() function ta bebohar kora hoyeche button class ta jeno bar bar render na hoy karon amader button ta bar bar render korar dorkar nai shudhu clock tai bar bar change hocche tai clock tai render hobe bar bar....button ar render bondho korar jonno amra ai function bebohar korechi 
        const {change:currentChange, locale:currentLocale}= this.props ////// akhane ami change ar arakta name diyechi current change
        const {change:nextChange,locale:nextLocale}= nextProps ////akhane oooo dekhbe next change ta ki hocche

        if(currentChange === nextChange && currentLocale === nextLocale){ /////akhane jodi currentChange  r  nextChange soman hoy tahole aita false return korbe mane Button class ta pore r render hobe na  
            return false;
        } else{
            return true; //// currentChange r nextChange soman na hole Button class ta bar bar render hote thakbe
        }



    }
    render() {
        console.log('button component rendered')
        const {change,locale,show,enable}=this.props

        if(!enable) return null;
        return(
         <div>
            <button type='button' onClick={() =>change(locale)}>            
            
            {locale ==='bn-BD' ? "change clock" : "গড়ি পরিবর্তন করুন" }            
            
            </button>

           {show && <p>hello</p>}

         </div>   
        )
    }
}

export default Button;
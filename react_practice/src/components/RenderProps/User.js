// function User({name}) {   //////// (1)
//     return name;
// } 

// function User({name}) {   ///// (2)  akhane name akta peramiter receive korche abong peramiter ta jehetu akta function tai niche  return name() likhte hobe 
//     return name();
// } 


function User({render}) {    ///////(3)
    return render(false); //////akhane true hole ba true dile sotto milbe abong Dibbo print korbe false dile Gust print korbe
} 

export default User;
function Boiling({selcious=0}){ ///////akhane selcious hocche akta perametar jar value default ami 0 set kore diyechi jate user jodi kono value na oo dei tahole jeno amar program a kono error na ashe tai
    if(selcious >= 100){
        return <p>The water would boil</p>
    }

    return <p>The water would not boil</p>
}

export default Boiling;
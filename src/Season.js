import React from 'react'
import './season.css'


const seasonConfig = {
    summer : {
        text : "Hey! It's too hot today. Let's bath",
        iconName : 'sun'
    },
    winter : {
        text : 'Uff! So Cold tonight!',
        iconName : 'moon'
    }
}

const getSeason = (lat, month)=>{
   if(month >2 && month <9) { //3 to 8 is summer
       return lat> 0 ? 'summer' : 'winter'
   }   else {
       return lat>0 ? 'winter' : 'summer'
   }
}

const Season = (props)=>{
    const season = getSeason(props.lat, new Date().getMonth())
    const {text, iconName}  = seasonConfig[season]  
    
    return(
        <div className={`season ${season}`} >
            <i className={`icon-right massive ${iconName} icon`} />
            <h1 className='seasonText'>{text}</h1>
            <i className={`icon-left massive ${iconName} icon`} />
        </div>
    )
}

export default Season
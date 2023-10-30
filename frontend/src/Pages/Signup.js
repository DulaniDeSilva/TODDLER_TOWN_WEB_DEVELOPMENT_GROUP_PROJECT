import React from 'react';
import Signupcomponent from '../Components/SignupComponent/Signupcomponent';
import purple from './../Assets/Images/LogSign/purple.jpg';



export default function Signup() {
 
  return (
    <div style={{
        backgroundImage: `url(${purple})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '110vh',
      }}>

        <Signupcomponent/>
        {/* <img  src={purple} alt = "logo" className='carouselimage'/> */}
                
        
    </div>
  )
}
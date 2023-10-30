import React from 'react';
import Logincomponent from '../Components/LoginComponent/Logincomponent';
import purple2 from './../Assets/Images/LogSign/purple2.jpg';



export default function Login() {
 
  return (
    <div style={{
        backgroundImage: `url(${purple2})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '110vh',
      }}>

        <Logincomponent/>
        
    </div>
  )
}
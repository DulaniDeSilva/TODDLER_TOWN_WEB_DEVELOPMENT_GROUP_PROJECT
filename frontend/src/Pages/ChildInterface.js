import React from 'react'
// import Homenavigation from '../Components/HomeComponents/Homenavigation'
import ChildInterfaceNavigation from '../Components/ChildInterfaceComponent/ChildInterfaceNavigation'

import '../Assets/Styles/ChildInterface/childinterfaceNavbar.css';
import '../Assets/Styles/ChildInterface/sidebar.css';
import '../Assets/Styles/ChildInterface/profile.css';
import '../Assets/Styles/CommonStyles/buttonStyle.css';
import '../Assets/Styles/ChildInterface/payment.css';
import '../Assets/Styles/ChildInterface/cctv.css';
import ChildInterfaceNavBar from '../Components/ChildInterfaceComponent/ChildInterfaceNavBar';


export default function ChildInterface() {
  return (
    <div>

      <div className='childInterface-topbar'>
        <ChildInterfaceNavBar/>
      </div>

      {/* <Homenavigation/> */}


      <div className='childInterface-sections'>
        <ChildInterfaceNavigation/>
      </div>
    
  
       
        
       

      
    
    </div>
  )
}

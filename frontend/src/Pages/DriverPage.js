import React, { useState, useRef } from 'react';

import '../Assets/Styles/StaffInterface.css';

import logo from '../Assets/Images/Driver/logo.png'
import pickupserviceImage from '../Assets/Images/Driver/pickupservice.jpg'
import salaryImage from '../Assets/Images/Driver/salary.jpg'
import Pickupservice from '../Components/DriverComponents/pickupservice/Pickupservice';
import SalaryDetails from '../Components/DriverComponents/salaryDetails/SalaryDetails';


function DriverPage() {
  const [activeComponent, setActiveComponent] = useState('');
  const contentRef = useRef(null);

  function handleButtonClick(componentName) {
    setActiveComponent(componentName);
    contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className="staff-page">
      <h1 className="header">Hi, Nimal!</h1>
      { <img src={logo} alt="App Logo" className="app-logo" /> }

      <div className="tab-container">
        

        <div className="tab">
          <img src={pickupserviceImage} alt="Pickupservice" />
          <button onClick={() => handleButtonClick('pickupservice')}>Pickup Service</button>
        </div>

        <div className="tab">
          <img src={salaryImage} alt="Salary" />
          <button onClick={() => handleButtonClick('salaryDetails')}>Salary Details</button>
        </div>
      </div>

      <div ref={contentRef} className="content-full-page">
        {activeComponent === 'pickupservice' && <Pickupservice/>}
        {activeComponent === 'salaryDetails' && <SalaryDetails/>}
      </div>
    </div>
  );
}

export default DriverPage;

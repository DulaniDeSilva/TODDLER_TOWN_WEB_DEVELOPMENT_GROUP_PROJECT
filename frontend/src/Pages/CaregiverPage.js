import React, { useState, useRef } from 'react';
import '../Assets/Styles/StaffInterface.css';

import Attendance from '../Components/CaregiverComponents/attendance/Attendance';
import ActivityPlans from '../Components/CaregiverComponents/activityPlans/ActivityPlans';
import HealthRecords from '../Components/TeacherComponents/healthRecords/HealthRecords';
import Reports from '../Components/CaregiverComponents/report/Reports';
import SalaryDetails from '../Components/CaregiverComponents/salaryDetails/SalaryDetails';


import attendanceImage from '../Assets/Images/Caregiver/calendar.jpg'
import healthImage from '../Assets/Images/Caregiver/health.jpg';
import activityPlanImage from '../Assets/Images/Caregiver/children-having-fun-summer-camp.jpg';
import salaryImage from '../Assets/Images/Caregiver/salary.jpg';
import reportImage from '../Assets/Images/Caregiver/report.jpg';
import pickupImage from '../Assets/Images/Caregiver/pickup.jpg';


import logo from '../Assets/Images/TeacherPage/logo.png';


function CaregiverPage() {
    const [activeComponent, setActiveComponent] = useState('');
    const contentRef = useRef(null);
  
    function handleButtonClick(componentName) {
      setActiveComponent(componentName);
      contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }


    return (
      <div className="staff-page">
      <h1 className="header">Hi!</h1>
      { <img src={logo} alt="App Logo" className="app-logo" /> }

      <div className="tab-container">
        <div className="tab">
          <img src={attendanceImage} alt="Attendance" />
          <button onClick={() => handleButtonClick('attendance')}>Attendance Tracking</button>
        </div>

        <div className="tab">
        <img src={activityPlanImage} alt="ActivityImage" />
            <button onClick={() => handleButtonClick('activityPlans')}>Activity Plans</button>
          </div>

          <div className="tab">
        <img src={pickupImage} alt="pickupImage" />
            <button onClick={() => handleButtonClick('activityPlans')}>Pickup Data</button>
          </div>


        <div className="tab">
          <img src={healthImage} alt="HealthImage" />
          <button onClick={() => handleButtonClick('healthRecords')}>Health Record Management</button>
        </div>

        <div className="tab">
          <img src={reportImage} alt="Report" />
          <button onClick={() => handleButtonClick('reports')}>Generate Reports</button>
        </div>

        <div className="tab">
          <img src={salaryImage} alt="Salary" />
          <button onClick={() => handleButtonClick('salaryDetails')}>Salary Details</button>
        </div>
      </div>

      <div ref={contentRef} className="content-full-page">
          {activeComponent === 'activityPlans' && <ActivityPlans />}
          
        {activeComponent === 'attendance' && <Attendance />}
        
        {activeComponent === 'healthRecords' && <HealthRecords />}
        {activeComponent === 'reports' && <Reports />}
        {activeComponent === 'salaryDetails' && <SalaryDetails />}
      </div>
    </div>
  );
}

export default CaregiverPage;

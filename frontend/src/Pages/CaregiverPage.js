import React, { useState, useRef } from 'react';
import '../App.css';

import Attendance from '../Components/CaregiverComponents/attendance/Attendance';
import ActivityPlans from '../Components/CaregiverComponents/activityPlans/ActivityPlans';
import HealthRecords from '../Components/TeacherComponents/healthRecords/HealthRecords';
import Reports from '../Components/CaregiverComponents/report/Reports';
import SalaryDetails from '../Components/CaregiverComponents/salaryDetails/SalaryDetails';


import attendanceImage from '../Assets/Images/Caregiver/calendar.jpg'
import healthImage from '../Assets/Images/Caregiver/health.jpg';
import activityPlanImage from '../Assets/Images/Caregiver/ActivityPlan.jpg';
import salaryImage from '../Assets/Images/Caregiver/salary.jpg';
import reportImage from '../Assets/Images/Caregiver/report.jpg';

import logo from '../Assets/Images/TeacherPage/logo.png';


function CaregiverPage() {
    const [activeComponent, setActiveComponent] = useState('');
    const contentRef = useRef(null);
  
    function handleButtonClick(componentName) {
      setActiveComponent(componentName);
      contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }


    return (
        <div className="App container">
      <h1 className="header">Hi, Name!</h1>
      { <img src={logo} alt="App Logo" className="app-logo" /> }

      <div className="tab-container">
        <div className="tab">
          <img src={attendanceImage} alt="Attendance" />
          <button onClick={() => handleButtonClick('attendance')}>Attendance Tracking</button>
        </div>

        <div className="tab">
          <img src={activityPlanImage} alt="Activity" />
          <button onClick={() => handleButtonClick('activityPlans')}>Activity Plans</button>
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
        {activeComponent === 'attendance' && <Attendance />}
        {activeComponent === 'activityPlans' && <ActivityPlans />}
        {activeComponent === 'healthRecords' && <HealthRecords />}
        {activeComponent === 'reports' && <Reports />}
        {activeComponent === 'salaryDetails' && <SalaryDetails />}
      </div>
    </div>
  );
}

export default CaregiverPage;

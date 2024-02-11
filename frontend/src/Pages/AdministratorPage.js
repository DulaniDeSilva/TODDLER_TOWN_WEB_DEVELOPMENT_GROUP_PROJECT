//frontend/src/pages/adminpage.js
import React, { useState, useRef } from 'react';
import '../Assets/Styles/StaffInterface.css';

import Attendance from '../Components/AdminisratorComponents/attendance/Attendance';
import LessonPlans from '../Components/TeacherComponents/lessonPlans/LessonPlans';
import ActivityPlans from '../Components/CaregiverComponents/activityPlans/ActivityPlans'
import HealthRecords from '../Components/TeacherComponents/healthRecords/HealthRecords';
import Reports from '../Components/AdminisratorComponents/report/Reports';
import SalaryDetails from '../Components/AdminisratorComponents/salaryDetails/SalaryDetails';
import Information from '../Components/AdminisratorComponents/Information/Information';
import CCTVManagement from '../Components/AdminisratorComponents/CCTV/CCTVManagement';
// import Inventory from '../Components/AdminisratorComponents/inventory/Inventory';
import StaffSalary from '../Components/AdminisratorComponents/salaryDetails/SalaryDetails'
import InventoryPage from './InventoryPage';
import AdminPaymentPage from './AdminPaymentPage';

import attendanceImage from '../Assets/Images/Administrator/calendar.jpg';
import healthImage from '../Assets/Images/Administrator/health.jpg';
import lessonPlanImage from '../Assets/Images/Administrator/lessonPlan.jpg';
import paymentImage from '../Assets/Images/Administrator/payments.jpg';
import reportImage from '../Assets/Images/Administrator/report.jpg';
import activityPlanImage from '../Assets/Images/Administrator/activityPlan.jpg'
import informationImage from '../Assets/Images/Administrator/information.jpg'
import cctvImage from '../Assets/Images/Administrator/cctv.jpeg'
import inventoryImage from '../Assets/Images/Administrator/inventory.jpg'
import salaryImage from '../Assets/Images/Administrator/salary.jpg'

import logo from '../Assets/Images/TeacherPage/logo.png';




function AdministratorPage() {
  
    const [activeComponent, setActiveComponent] = useState('');
    const contentRef = useRef(null);
  
    function handleButtonClick(componentName) {
      setActiveComponent(componentName);
      contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  
    return (
      <div className="staff-page">
        <h1 className="header">Hi, Vimukthi!</h1>
        <img src={logo} alt="App Logo" className="app-logo" />
  
        <div className="tab-container">
  
        <div className="tab">
            <img src={informationImage} alt="Info" />
            <button onClick={() => handleButtonClick('information')}>Information Management</button>
          </div>
  
          <div className="tab">
            <img src={paymentImage} alt="payment" />
            <button onClick={() => handleButtonClick('payment')}>Payments</button>
          </div>
  
          <div className="tab">
            <img src={inventoryImage} alt="inventory" />
            <button onClick={() => handleButtonClick('inventory')}>Inventory</button>
          </div>
  
          <div className="tab">
            <img src={cctvImage} alt="cctv" />
            <button onClick={() => handleButtonClick('cctv')}>CCTV Management</button>
          </div>
  
          <div className="tab">
            <img src={attendanceImage} alt="Attendance" />
            <button onClick={() => handleButtonClick('attendance')}>Staff Attendance</button>
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
            <img src={lessonPlanImage} alt="Lesson" />
            <button onClick={() => handleButtonClick('lessonPlans')}>Lesson Plans</button>
          </div>
  
          <div className="tab">
            <img src={activityPlanImage} alt="Activity" />
            <button onClick={() => handleButtonClick('activityPlans')}>Activity Plans</button>
          </div>

          <div className="tab">
            <img src={salaryImage} alt="Salary" />
            <button onClick={() => handleButtonClick('staffSalary')}>Staff Salary Management</button>
          </div>
  
  
          
  
          
  
          
        </div>
  
        <div ref={contentRef} className="content-full-page">
          {activeComponent === 'attendance' && <Attendance />}
          {activeComponent === 'information' && <Information />}
          {activeComponent === 'lessonPlans' && <LessonPlans />}
          {activeComponent === 'activityPlans' && <ActivityPlans />}
          {activeComponent === 'healthRecords' && <HealthRecords />}
          {activeComponent === 'reports' && <Reports />}
          {/* {activeComponent === 'payment' && <SalaryDetails />} */}
          {activeComponent === 'cctv' && <CCTVManagement />}
          {activeComponent === 'inventory' && <InventoryPage/>}
          {activeComponent === 'payment' && <AdminPaymentPage/>}
          {activeComponent === 'staffSalary' && <StaffSalary />}

        </div>
      </div>
     
    );
  }
  
  export default AdministratorPage;
  
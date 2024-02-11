import React, { useState, useRef } from 'react';
import '../App.css';

import Attendance from '../Components/TeacherComponents/attendance/Attendance';
import LessonPlans from '../Components/TeacherComponents/lessonPlans/LessonPlans';
import GoogleClassroom from '../Components/TeacherComponents/googleClassroom/GoogleClassroom';
import HealthRecords from '../Components/TeacherComponents/healthRecords/HealthRecords';
import Reports from '../Components/TeacherComponents/report/Reports';
import SalaryDetails from '../Components/TeacherComponents/salaryDetails/SalaryDetails';


import attendanceImage from '../Assets/Images/TeacherPage/calendar.jpg';
import healthImage from '../Assets/Images/TeacherPage/health.jpg';
import lessonPlanImage from '../Assets/Images/TeacherPage/lessonPlan.jpg';
import googleClassroomImage from '../Assets/Images/TeacherPage/lessonPlan.jpg';
import salaryImage from '../Assets/Images/TeacherPage/salary.jpg';
import reportImage from '../Assets/Images/TeacherPage/report.jpg';

import logo from '../Assets/Images/TeacherPage/logo.png';

function TeacherPage() {
    const [activeComponent, setActiveComponent] = useState('');
    const contentRef = useRef(null);
  
    function handleButtonClick(componentName) {
      setActiveComponent(componentName);
      contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }


    return (
      <div className="staff-page">
      <h1 className="header">Hi, Ridmi!</h1>
      { <img src={logo} alt="App Logo" className="app-logo" /> }

      <div className="tab-container">
        <div className="tab">
          <img src={attendanceImage} alt="Attendance" />
          <button onClick={() => handleButtonClick('attendance')}>Attendance Tracking</button>
        </div>

        <div className="tab">
          <img src={lessonPlanImage} alt="Lesson" />
          <button onClick={() => handleButtonClick('lessonPlans')}>Lesson Plans</button>
        </div>

        <div className="tab">
          <img src={googleClassroomImage} alt="Google Classroom" />
          <button onClick={() => handleButtonClick('googleClassroom')}>Google Classroom</button>
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
        {activeComponent === 'lessonPlans' && <LessonPlans />}
        {activeComponent === 'googleClassroom' && <GoogleClassroom />}
        {activeComponent === 'healthRecords' && <HealthRecords />}
        {activeComponent === 'reports' && <Reports />}
        {activeComponent === 'salaryDetails' && <SalaryDetails />}
      </div>
    </div>
  );
}

export default TeacherPage;

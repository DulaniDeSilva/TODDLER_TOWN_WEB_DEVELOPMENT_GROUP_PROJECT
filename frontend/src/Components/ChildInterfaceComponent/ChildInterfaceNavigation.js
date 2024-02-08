import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHome, faCreditCard, faHeartPulse, faCamera, faSchool, faMessage} from '@fortawesome/free-solid-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import ChildEnrollmentPage from '../../Pages/ChildEnrollmentPage';
import PaymentPage from '../../Pages/PaymentPage';
import WaitingList from '../HomeComponents/WaitingList';
import CctvComponent from './CctvComponent';
import Footer from '../HomeComponents/Footer';
import HealthRecords from '../TeacherComponents/healthRecords/HealthRecords';
import Attendance from '../CaregiverComponents/attendance/Attendance';

// import PhoneVertificationComponent from '../PhoneVertification/PhoneVertificationComponent';

// import Homenavigation from '../HomeComponents/Homenavigation';



export default function ChildInterfaceNavigation() {
    const [selectedComponent, setSelectedComponent] = useState('childProfile');

    const handleLinkClick = (component) =>{
        setSelectedComponent(component);
    }

    const renderSelectedComponent = () =>{
        switch(selectedComponent){
            case 'childProfile':
                return <ChildEnrollmentPage/>;
            case 'payment':
                return <PaymentPage/>;
            case 'cctv':
                return <CctvComponent/>;
            case 'message':
                return <WaitingList/>;
            case 'health':
                return <HealthRecords/>;
            case 'curriculum':
                return <Attendance/>
            default:
                return null;
        }
    };

  return (
    <div className = "child-nav-sidebar">
        
        <Row >
        <Col className='child-nav-sidebar-col' lg = {2}>
        <Row className = 'child-nav-sidebar-row'>
        <button className = " child-sidebar-button" onClick = {() =>handleLinkClick('childProfile')}>
            <FontAwesomeIcon icon = {faHome}   className='child-nav-sidebar-icons'></FontAwesomeIcon>
            <span>Profile</span>
        </button>
        </Row>

        <Row className = 'child-nav-sidebar-row'>
        <button className = " child-sidebar-button" onClick = {() =>handleLinkClick('curriculum')}>
            <FontAwesomeIcon icon = {faSchool}   className='child-nav-sidebar-icons' ></FontAwesomeIcon>
            <span>Child Curriculum</span>
        </button>
        </Row>
    
        <Row className = 'child-nav-sidebar-row'>
        <button className = " child-sidebar-button" onClick = {() =>handleLinkClick('health')}>
            <FontAwesomeIcon icon = {faHeartPulse}  className='child-nav-sidebar-icons' ></FontAwesomeIcon>
            <span>Child Health Record</span>
        </button>
        </Row>

        <Row className = 'child-nav-sidebar-row'>
        <button className = " child-sidebar-button"onClick = {() =>handleLinkClick('cctv')} >
            <FontAwesomeIcon icon = {faCamera}   className='child-nav-sidebar-icons' ></FontAwesomeIcon>   
            <span>Request CCTV access</span>
        </button>
        </Row>

        <Row className = 'child-nav-sidebar-row'>
        <button className = " child-sidebar-button" onClick = {() =>handleLinkClick('payment')}>
            <FontAwesomeIcon icon = {faCreditCard}   className='child-nav-sidebar-icons' ></FontAwesomeIcon>
            <span>Payments</span>
        </button>
        </Row>

        <Row className = 'child-nav-sidebar-row'>
        <button className = " child-sidebar-button" onClick = {() =>handleLinkClick('message')}>
            <FontAwesomeIcon icon = {faMessage}   className='child-nav-sidebar-icons' ></FontAwesomeIcon>
            <span>Send a message</span>
        </button>
        </Row>
        </Col>
        

        <Col className='child-nav-sidebar-col2'>
            {renderSelectedComponent()}
        </Col>
        </Row>

        <Row className= 'child-nav-sidebar-footer'>
        <Footer/>
        </Row>
       
    
    
    </div>
  )
}

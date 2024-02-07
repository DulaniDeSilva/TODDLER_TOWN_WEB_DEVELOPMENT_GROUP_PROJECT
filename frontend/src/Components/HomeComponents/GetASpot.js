import React from 'react'
import Homenavigation from './Homenavigation';
import flowers from "../../Assets/Images/Home/flowers.png";
import  boy3 from "../../Assets/Images/Home/boy3.png";
import Footer from '../HomeComponents/Footer';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import WaitingList from './WaitingList';

export default function GetASpot() {
  return (
    <div>GetASpot
    <Homenavigation/>

    <Row>
        <Col>
        <img src={boy3} alt = "logo" className = "registrationform-image"/>
        </Col>
        <Col>

        </Col>
    </Row>

    <WaitingList/>

    <Row>
                <Col lg ={3}>
                    <img src={flowers} alt = "logo" className = "registrationform-image"/>
                </Col>
                <Col lg = {3}>
                    <img src={flowers} alt = "logo" className = "registrationform-image"/>
                </Col>
                <Col lg = {3}>
                    <img src={flowers} alt = "logo" className = "registrationform-image"/>
                </Col>
                <Col lg = {3}>
                    <img src={flowers} alt = "logo" className = "registrationform-image"/>
                </Col>
            </Row>
           
           <Footer/>
    
    </div>
  )
}

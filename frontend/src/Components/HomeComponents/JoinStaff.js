import React from 'react'
import Homenavigation from './Homenavigation'
import join from "../../Assets/Images/Home/join.webp";
import {Row, Col, Container} from 'react-bootstrap';


export default function JoinStaff() {
  return (
    <div>
        <Homenavigation/>
        <Container>

        <Row className='JoinStaff-row'>
            <Col className = "JoinStaff-col1" lg = {6}>
                <span>Want to Join Our Team?</span>
            </Col>
            <Col className = "JoinStaff-col2" lg = {6}>
                <img src={join} alt = "logo" className = "JoinStaff-image"/>
            </Col>
        </Row>
        </Container>
    
    
    
    </div>
  )
}

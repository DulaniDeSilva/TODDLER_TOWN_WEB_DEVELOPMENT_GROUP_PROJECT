import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import img1 from "../Assets/Images/img1.jpeg";




function TeamComponent() {

   

  return (
    <div class = "teamcards">
       <Container className= "teamcontainer">
        <h3> Meet the Team</h3>
        <Row className='teamrow'>
            <Col md = {4} className='teamcolumn'>
            <img className='teamlogo' src={img1} alt = "logo"/>
              <h4> Lynn De Silva</h4>
              <h6>Principle</h6>
              <p>sdifhuiwhfdsjbfuihwiehf</p>
            </Col>
            <Col md = {4} className='teamcolumn'>
            <img className='teamlogo' src={img1} alt = "logo"/>
            <h4> Lynn De Silva</h4>
              <h6>Principle</h6>
              <p>sdifhuiwhfdsjbfuihwiehf</p>
            </Col>
            <Col md = {4} className='teamcolumn'>
            <img className='teamlogo' src={img1} alt = "logo"/>
            <h4> Lynn De Silva</h4>
              <h6>Principle</h6>
              <p>sdifhuiwhfdsjbfuihwiehf</p>
            </Col>
           
            

        </Row>


       </Container>



    </div>
  )
}

export default TeamComponent;
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import img1 from "../../Assets/Images/Home/img1.jpeg";




function TeamComponent() {
  // const teamsData = [
  //  {
  //   id: 1,
  //   image: require('../../Assets/Images/Home/img1.jpeg'),
  //   fbLink : "https://www.facebook.com",
  //   linkedinLink :"https://www.linkedin.com",
  //   name : "A.T.Herath",
  //   designation :'Principle',
  //   description: 'Hello Hello ello Helloello Helloello Helloello Helloello Helloello Helloello Hello'
  //  },

  //  {
  //   id: 2,
  //   image: require('../../Assets/Images/Home/img1.jpeg'),
  //   fbLink : "https://www.facebook.com",
  //   linkedinLink :"https://www.linkedin.com",
  //   name : "A.T.Herath",
  //   designation :'Preschool Head',
  //   description: 'Hello Hello ello Helloello Helloello Helloello Helloello Helloello Helloello Hello'
  //  },

  //  {
  //   id: 3,
  //   image: require('../../Assets/Images/Home/img1.jpeg'),
  //   fbLink : "https://www.facebook.com",
  //   linkedinLink :"https://www.linkedin.com",
  //   name : "A.T.Herath",
  //   designation :'Administrator',
  //   description: 'Hello Hello ello Helloello Helloello Helloello Helloello Helloello Helloello Hello'
  //  },

  // ]
   

  return (
    <div class = "teamcards">
       <Container fluid >
        <div> 
          <h3> Meet the Team</h3>
          <h6> Force behind Success</h6>
        </div>
        
        <Row className='teamrow'>
            <Col md = {4} className='teamcolumn'>
            <img className='teamlogo' src={img1} alt = "logo"/>
              <h4> Lynn De Silva</h4>
              <h6>Principle</h6>
              <p>Graphics (from Ancient Greek γραφικός (graphikós) 'pertaining to drawing, painting, writing, etc. ' </p>
            </Col>
            <Col md = {4} className='teamcolumn'>
            <img className='teamlogo' src={img1} alt = "logo"/>
            <h4> Lynn De Silva</h4>
              <h6>Head of PreSchool</h6>
              <p>Graphics (from Ancient Greek γραφικός (graphikós) 'pertaining to drawing, painting, writing, etc. '</p>
            </Col>
            <Col md = {4} className='teamcolumn'>
            <img className='teamlogo' src={img1} alt = "logo"/>
            <h4> Lynn De Silva</h4>
              <h6>Administrator</h6>
              <p>Graphics (from Ancient Greek γραφικός (graphikós) 'pertaining to drawing, painting, writing, etc. '</p>
            </Col>
           
            

        </Row>


       </Container>



    </div>
  )
}

export default TeamComponent;
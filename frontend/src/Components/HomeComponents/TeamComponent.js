import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import img1 from "../../Assets/Images/Home/background.jpg";
import admin from "../../Assets/Images/Home/admin.jpg";
import sub from "../../Assets/Images/Home/sub.jpg";
import principle from "../../Assets/Images/Home/principle.jpg";


import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';




function TeamComponent() {

   

  return (
    <div class = "teamcards">
       <Container className= "teamcontainer">
        <h3> Meet the Team</h3>
        <h6> Force Behind the success</h6>

        <Row className='teamrow'>
            <Col md = {4} className='teamcolumn'>
            <img className=' team-image' src={principle} alt = "logo"/>
            <span> Mrs. H. K De Silva</span>
              <p >Principle</p>
              <div className = "team-share">
              <FontAwesomeIcon icon= {faFacebook} className='team-icons' ></FontAwesomeIcon>
              <FontAwesomeIcon icon= {faYoutube} className='team-icons'></FontAwesomeIcon>
              <FontAwesomeIcon icon= {faInstagram} className='team-icons' ></FontAwesomeIcon>
              </div>
            </Col>


            <Col md = {4} className='teamcolumn'>
            <img className=' team-image' src={sub} alt = "logo"/>
            <span > Mrs. T Jayarathna</span>
              <p className = 'info'>Head of PreSchool</p>
              {/* <p> </p> */}
              <div className = "team-share">
              <FontAwesomeIcon icon= {faFacebook} ></FontAwesomeIcon>
              <FontAwesomeIcon icon= {faYoutube} ></FontAwesomeIcon>
              <FontAwesomeIcon icon= {faInstagram}  ></FontAwesomeIcon>
              </div>
            </Col>
           

            <Col md = {4} className='teamcolumn'>
            <img className=' team-image' src={admin} alt = "logo"/>
              <span > Miss Maria Perara</span>
              <p className='info'>Administrator</p>
              <p>  </p>
              <div className = "team-share">
              <FontAwesomeIcon icon= {faFacebook} ></FontAwesomeIcon>
              <FontAwesomeIcon icon= {faYoutube} ></FontAwesomeIcon>
              <FontAwesomeIcon icon= {faInstagram}  ></FontAwesomeIcon>
              </div>
            </Col>
            

        </Row>


       </Container>



    </div>
  )
}

export default TeamComponent;
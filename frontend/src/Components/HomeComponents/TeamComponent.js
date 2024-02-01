import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

// import img1 from "../../Assets/Images/Home/img1.jpeg";
import admin from "../../Assets/Images/Home/admin.jpg";
import sub from "../../Assets/Images/Home/sub.jpg";
import principle from "../../Assets/Images/Home/principle.jpg";




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
        
        <Row className='teamrow ' >
            <Col md = {4} className=' card'>
            <img className=' image' src={principle} alt = "logo"/>
              <span> Mrs. H. K De Silva</span>
              <p className='info'>Principle</p>
              {/* <p>wktweuh</p> */}
              <div className = "share">
              <FontAwesomeIcon icon= {faFacebook} ></FontAwesomeIcon>
              <FontAwesomeIcon icon= {faYoutube} ></FontAwesomeIcon>
              <FontAwesomeIcon icon= {faInstagram}  ></FontAwesomeIcon>
              </div>
            </Col>
            <Col md = {4} className='card'>
            <img className=' image' src={sub} alt = "logo"/>
            <span > Mrs. T Jayarathna</span>
              <p className = 'info'>Head of PreSchool</p>
              {/* <p> </p> */}
              <div className = "share">
              <FontAwesomeIcon icon= {faFacebook} ></FontAwesomeIcon>
              <FontAwesomeIcon icon= {faYoutube} ></FontAwesomeIcon>
              <FontAwesomeIcon icon= {faInstagram}  ></FontAwesomeIcon>
              </div>
            </Col>
            <Col md = {4} className='card'>
            <img className='image' src={admin} alt = "logo"/>
              <span > Miss Maria Perara</span>
              <p className='info'>Administrator</p>
              <p>  </p>
              <div className = "share">
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
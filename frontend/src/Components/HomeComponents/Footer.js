import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt ,faPhone} from '@fortawesome/free-solid-svg-icons';
import {Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='footer'>
        <Container className='footer_upper'>
            <Row>
                <Col md={4} className='footer_links'>
                   <Link to="/"><h5>Home</h5></Link>
                   <Link to="/AboutUs"><h5>About Us</h5></Link>
                   <Link to="/OurCurriculam"><h5>Our Curriculam</h5></Link>
                   <Link to="/ContactUs"><h5>Contact Us</h5></Link>
                   <Link to="/FAQ"><h5>FAQ</h5></Link>

                </Col>

                <Col md={4} className='footer_links'>
                <h4>Connect Us</h4>

                
                 <Row className='contact'>
                    
                    <p><FontAwesomeIcon icon={faMapMarkerAlt} /> ToddlerTown PreSchool, Kalagedihena, Gampaha</p>
                 </Row>   
                 <Row className='contact'>
                    <p><FontAwesomeIcon icon={faPhone} /> 071-3456789</p>
                 </Row>

                
                 
                 
                    
                </Col>

                <Col md={4} className='footer_links'>
                 <h4>Touch With Us</h4>
                  <div className="socialmedia">
                    <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
                  </div>
                </Col>
            </Row>
        </Container>
        <hr></hr>
        <Container className="footer_below">
        <Row>
          <Col md={6}>
            <div className="footer_copyright">
              <p>@{new Date().getFullYear()} TODDLER TOWN. All right reserved.</p>
            </div>
          </Col>
          <Col md={6}>
             <div className="footer_below_links">
               <Link to="/Terms&Conditions"><div><p>Terms & Conditions</p></div></Link>
               <Link to="/privacy&Policy"><div><p>Privacy & Policy</p></div></Link>
              
             </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
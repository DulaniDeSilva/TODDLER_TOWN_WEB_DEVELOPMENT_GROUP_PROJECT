import {useRef} from 'react';
import { Button , Col, Container, Row} from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon

import { faEnvelope,faMapMarkerAlt ,faPhone} from '@fortawesome/free-solid-svg-icons';

import '../../Assets/Styles/ContactUs.css'
import Homenavigation from './Homenavigation';
import Footer from './Footer';


function ContactUs(props) {
  const form =useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gif23ge', 'template_x8ylgi9', form.current, 'GDHOMWnuASrjwZ8Dr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <div className='contactUs'>

      <Homenavigation/>

      <Row className='contentHeader'>
       
          <p className='subHeadding'>get in touch</p>
          <h2 className='headding'>CONTACT US</h2>
        
      </Row>      

    <Container className='contact-us-container'>

      <Row>
       
          <Col lg={6} className='contactUs_left'>
         
              <p><FontAwesomeIcon icon={faPhone}  className = "contactUs-icon"/> <span>012-3456789</span></p>
              <p> <FontAwesomeIcon icon={faEnvelope} className = "contactUs-icon" /> <span>toddlertown@gmail.com</span></p>
              <p><FontAwesomeIcon icon={faMapMarkerAlt} className = "contactUs-icon" /><span> 123 Main Street, Cityville</span></p>
          
          </Col>

          <Col lg ={6} className='contactUs_right'>
            <form ref={form} action="" onSubmit={sendEmail}>
          
              <div className='contact-contactForm'>
                <span className='input_Content'>Full Name</span>
              
                <input className="contactus-input" type="text" placeholder='Full Name' name='userName' required />
                
                <span className='input_Content'>Phone Number</span>
              
                <input className="contactus-input" type="text" placeholder='Phone Number' name='phoneNumber' required />
                
                <span className='input_Content'>Enter Email</span>
               
                <input className="contactus-input" type="email" placeholder='ABC@gmail.com' name='userEmail' required />
                
                <span className='input_Content'>Subject</span>
                
                <input className="contactus-input" type="text" placeholder='Subject' name='subject' required />
                
                <span className='input_Content'>Message</span>
                
                <textarea className="contactus-input" type="text" placeholder='Type Your Message Here'name='message' cols='40' rows='6' required ></textarea>
                
                <Button type='submit' className='common-button contactus-button'>Send Message</Button>
                
              </div>
            </form>
  
          </Col> 
       
         
        
 

      </Row>
      </Container>
      
        <div className="map__card">
          <h3 className="map__card__heading">Here is Us</h3>
          <p className='ContactUs-address'>ToddlerTown PreSchool, Kalagedihena, Gampaha.</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31672.47055401668!2d80.04406889545852!3d7.119182479786839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fd06c09aa1d7%3A0xc9189afd77e63f20!2sKalagedihena!5e0!3m2!1sen!2slk!4v1707321443802!5m2!1sen!2slk"
           width="100%" 
           height="450" 
           style={{border: "0" }}
           allowfullscreen=""
           loading="lazy" 
           referrerpolicy="no-referrer-when-downgrade">

           </iframe>
           
         
        </div>
     
        <Footer/>
    </div>
    
    
  )
}

export default ContactUs;
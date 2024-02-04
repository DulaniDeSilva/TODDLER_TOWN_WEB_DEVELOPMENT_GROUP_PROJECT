import React from 'react'
import child3 from "../../Assets/Images/Home/child3.jpg";
import register from "../../Assets/Images/Home/register.jpg";
import web5 from "../../Assets/Images/Home/web5.webp";
import Homenavigation from './Homenavigation';
import '../../Assets/Styles/HomeInterface/Services.css';
import { Container } from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';
import Footer from './Footer';
import Subscribe from './Subscribe';

export default function AfterService() {
  return (
    <div>
  
        <Homenavigation/>
    
      <div className='services-maindiv'>
        <h2>Welcome to Toddler Town PreSchool</h2>

        <Container className = "services-container">
          <Row>
              <h2>Welcome to Toddler Town After School Child Care</h2>
          </Row>
          <Row>
            <Col lg= {6}>
              <img src={child3} alt = "logo" className = "preschool-into-img"/>
            </Col>
            <Col lg= {6}>
              <p>
              👉🏽 Enrich your child's after-school experience at our childcare center! We offer personalized homework support, safe pick-up services, top-tier security measures, seamless technology integration, and all at the best prices. 📚🚗🚨🌐💲 Join now, and let us create a nurturing environment where your child can thrive and learn while having fun! 🌈👶 #ChildhoodUnleashed #JoinUsNow
              </p>
            
            </Col>
          </Row>

          <Row >
            <Col lg ={6}>
              <Row><button className = "services-button"> 🚗 Pick Up Services </button></Row>
              <Row><button className = "services-button"> 🌐 Technology Integration </button></Row>
              <Row><button className = "services-button"> 📚 After School Homework Monitoring </button></Row>
              <Row><button className = "services-button"> 💲 Best Prices for Best Services</button></Row>
              <Row><button className = "services-button"> 👉🏽 Join Now </button></Row>
            </Col>
            <Col lg = {6}>
              <img src={web5} alt = "logo" className = "preschool-into-img"/>
            </Col>
          </Row>

          <Row>
            <Col lg = {6}>
              <img src={register} alt = "logo" className = "preschool-into-img"/>
            </Col>
            <Col lg = {6}>
              <Subscribe/>
            </Col>
          </Row>







        </Container>

       

      </div>


      
      {/* <img  src={child2} alt = "logo"/> */}
      
      {/* <img  src={child1} alt = "logo"/> */}
     
     <div>
       <Footer/>
     </div>
      
    
    </div>
  )
}

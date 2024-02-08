import React from 'react'
import toddler1 from "../../Assets/Images/Home/todder1.jpg";
import toddler2 from "../../Assets/Images/Home/toddler2.jpg";
import register from "../../Assets/Images/Home/register.jpg";
import Homenavigation from './Homenavigation';
import '../../Assets/Styles/HomeInterface/Services.css';
import { Container } from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';
import Footer from './Footer';
import Subscribe from './Subscribe';

export default function ToddlerService() {
  return (
    <div>
  
        <Homenavigation/>
    
      <div className='services-maindiv'>
        <h2>Welcome to Toddler Town PreSchool</h2>

        <Container className = "services-container">
          <Row>
              <h2>Welcome to Toddler Town Toddler Care</h2>
          </Row>
         

          <Row >
            <Col lg= {6}>
              <img src={toddler2} alt = "logo" className = "preschool-into-img"/>
            </Col>


          <Col lg= {6}>
              <p>🌟 Welcome to our preschool! 🤗 We offer a warm, nurturing environment where your child can thrive and love learning. Our dedicated team focuses on holistic development, blending academics, creativity, and social skills. 🏫 Choose our center for individualized attention, well-equipped facilities, and a strong foundation for a lifetime of success. 🌈 Join our community and watch your child flourish! 🚀</p>
              <ul type='none'>
                <li>🌟 Safe and secure haven for your little ones</li>
                <li>🏆 Experienced and nurturing teachers</li>
                <li>🎨 Exciting and age-tailored learning adventures</li>
                <li>🌳 Spacious and vibrant outdoor play zones</li>
                <li>🍎 Nutrient-packed, delicious meals and snacks</li>
                <li>📞 Regular, open communication with parents</li>
                <li>🚀 Developmental assessments and progress galore</li>
                <li>🎉 Fun updates on your child's daily escapades</li>
                <li>🩺 Vigilant health and safety protocols</li>
                <li>📜 Crystal-clear policies and procedures</li>
                </ul>
            
            </Col>
          </Row>


          <Row>
            <Col lg ={6}>
              <Row><button className = "services-button"> 🗓️ Academic Calendar </button></Row>
              <Row><button className = "services-button"> 📚 Lesson Plan </button></Row>
              <Row><button className = "services-button"> 🎨 Extracurricular Activities </button></Row>
              <Row><button className = "services-button"> 🖥️ Technology Integration</button></Row>
              <Row><button className = "services-button"> 🍎 Nutrition and Meals </button></Row>
            </Col>
            <Col lg = {6}>
              <img src={toddler1} alt = "logo" className = "preschool-into-img"/>
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

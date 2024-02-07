import React from 'react';

import Homenavigation from '../Components/HomeComponents/Homenavigation';
import Category from '../Components/HomeComponents/Category';
import FeaturesCard from '../Components/HomeComponents/FeaturesCard';
import TeamComponent from '../Components/HomeComponents/TeamComponent';

import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

import '../Assets/Styles/Home.css';

import butterfly from "../Assets/Images/Home/butterfly.png";
import group3 from "../Assets/Images/Home/group3.png";
import Welcome from '../Components/HomeComponents/Welcome';
import WaitingList from '../Components/HomeComponents/WaitingList';
import Footer from '../Components/HomeComponents/Footer';
import CarouselComponent from '../Components/HomeComponents/CarouselComponent';
import flowers from "../Assets/Images/Home/flowers.png";
import Us from '../Components/HomeComponents/Us';



export default function Home() {
  return (
    <div>

        

          {/* main navigation bar */}
          <Row>
            <Homenavigation/>
          </Row>

          {/* main interface home */}
          <Row className='main_image'>
            <Col  sm = {3} md = {6}>
              <img className=' mainimg ' src={group3} alt = "mainImage" fluid />
            </Col>

            <Col sm = {9} md = {6} >
             <div className='mainimagebutterfly '>
                <Row> 
                  <img  src={butterfly} alt = "butterflyimg" />
                </Row>
              </div>
              <Row> 
                <h3 className='maintitle'> Toddler Town PreSchool and Child Care Center</h3> 
              </Row>
            </Col>
        </Row>

        <Row>
          <Welcome/>
        </Row>

        <Row>
          <Us/>
        </Row>

        <Category/>

        <Row className='welcome'>
        <header>Unleash Your Child's Potential 🚀"</header>

        <p> Step into our institute, where excellence isn't just a goal—it's our standard. Our commitment to your child's growth and happiness is unmatched. Our team of dedicated professionals brings years of experience and expertise, ensuring top-notch care and education. From nurturing their curiosity to fostering their creativity, we go above and beyond to provide the best services possible. With us, your child will thrive in an environment filled with warmth, encouragement, and endless opportunities for growth. Choose us for a journey of learning and discovery like no other.

          <footer>"Start the Journey Today! 🌟</footer>

        </p>
        </Row>
        
        <FeaturesCard/>
          
       
        <TeamComponent/>
        <CarouselComponent/>

       

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

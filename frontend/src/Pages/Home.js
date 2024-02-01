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
          

          
        <Category/>
        <TeamComponent/>
        <FeaturesCard/>
          

        
       
        
    </div>
  )
}

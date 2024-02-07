import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faShield } from '@fortawesome/free-solid-svg-icons';
import { faChild } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
 import Button from 'react-bootstrap/Button';
 import {Link } from 'react-router-dom';





function FeaturesCard() {


  

   

  return (
    <div class = "featurescard">
    
       <Container className= "featurecontainer">
        <Row className='featurerow'>
            <Col md = {3} className='featurecolumn'>
            <FontAwesomeIcon icon = {faHeart} className='icons'></FontAwesomeIcon>
              <h3> Love</h3>
              <p>" Our staff fosters a warm, inviting environment where your child can thrive, building lasting friendships and cherished memories."</p>
            </Col>
            <Col md = {3} className='featurecolumn'>
            <FontAwesomeIcon icon = {faShield} className='icons'></FontAwesomeIcon>
            <h3> Secure</h3>
              <p>"At our preschool, your child's safety comes first. With strict security measures and vigilant supervision, we ensure their well-being."</p>
            </Col>
            <Col md = {3} className='featurecolumn'>
            <FontAwesomeIcon icon = {faChild} className='icons'></FontAwesomeIcon>
            <h3> Care</h3>
              <p>"Our care covers it all: meals, activities, and personalized attention for your child's growth and happiness."</p>
            </Col>
            <Col md = {3} className='featurecolumn'>
            <FontAwesomeIcon icon = {faSmile} className='icons'></FontAwesomeIcon>
            <h3> Friendly</h3>
              <p>"At our preschool, friendliness is key. Our experienced staff creates a welcoming atmosphere, fostering positive relationships for your child with peers and educators."</p>
            </Col>
            

        </Row>


       </Container>


    </div>
  )
}

export default FeaturesCard;
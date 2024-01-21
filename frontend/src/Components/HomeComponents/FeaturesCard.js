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
              <p>" Our friendly and experienced staff ensures a warm, inviting atmosphere where your child can thrive, forming lasting friendships and cherished memories."</p>
            </Col>
            <Col md = {3} className='featurecolumn'>
            <FontAwesomeIcon icon = {faShield} className='icons'></FontAwesomeIcon>
            <h3> Secure</h3>
              <p>"Security is paramount at our preschool and child care center, with stringent safety measures and vigilant supervision in place to ensure your child's well-being."</p>
            </Col>
            <Col md = {3} className='featurecolumn'>
            <FontAwesomeIcon icon = {faChild} className='icons'></FontAwesomeIcon>
            <h3> Care</h3>
              <p>"We provide comprehensive care that encompasses every aspect of your child's development, from nutritious meals to stimulating activities. Our caregivers are deeply committed to personalized care"</p>
            </Col>
            <Col md = {3} className='featurecolumn'>
            <FontAwesomeIcon icon = {faSmile} className='icons'></FontAwesomeIcon>
            <h3> Friendly</h3>
              <p>"At our preschool and child care center, friendliness is not just a value; it's a way of life. Our friendly and experienced staff creates a warm, inviting atmosphere where your child can build positive relationships with both their peers and our educators."</p>
            </Col>
            

        </Row>


       </Container>


{/* testing button should delete ! */}
<Link to="/inventoryPage" >
      <Button  className="signinsubmit">
         Inventory System
        </Button>
      </Link>

      <Link to="/paymentPage" >
      <Button  className="signinsubmit">
         Payment Page
        </Button>
      </Link>




    </div>
  )
}

export default FeaturesCard;
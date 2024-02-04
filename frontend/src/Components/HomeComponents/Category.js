import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import img1 from "../../Assets/Images/Home/img1.jpg";
import img4 from "../../Assets/Images/Home/img4.jpg";
import img5 from "../../Assets/Images/Home/img5.jpg";
import toddler2 from "../../Assets/Images/Home/toddler2.jpg";
import web3 from "../../Assets/Images/Home/web3.avif";
import child3 from "../../Assets/Images/Home/child3.jpg";







function Category() {
  return (
    <div className='category-cards'>
      <Container >
          <Row>
            <Col className='categorycol-01 categorycol' md = {3} lg = {3} >
            
              <Row ><img  src={web3} alt = "" className = 'categoryimg'/> </Row>
              <Row className='category-content'> <span> PreSchool Service</span></Row>
              <Row className='category-content-button'><button className = "common-button">Visit Now!</button> </Row>
            </Col>

            <Col className='categorycol-02 categorycol' md = {3} lg = {3} >
           
              <Row><img  src={toddler2} alt = "logo" className='categoryimg'/> </Row>
              <Row className='category-content'> <span> Toddler Service</span></Row>
              <Row className='category-content-button'><button className = "common-button">Visit Now!</button> </Row>
            </Col>

            <Col className='categorycol-03 categorycol' md = {3} lg = {3} >
            
              <Row><img  src={child3} alt = "logo" className='categoryimg'/> </Row>
              <Row className='category-content'> <span> After School Child Care</span></Row>
              <Row className='category-content-button'><button className = "common-button">Visit Now!</button> </Row>
            </Col>

          </Row>

      </Container>


    </div>

  );
};


export default Category;
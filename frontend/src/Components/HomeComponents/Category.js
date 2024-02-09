import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';

import img1 from "../../Assets/Images/Home/img1.jpg";
import visit from "../../Assets/Images/Home/visit.png";
import img4 from "../../Assets/Images/Home/img4.jpg";
import img5 from "../../Assets/Images/Home/img5.jpg";
import toddler2 from "../../Assets/Images/Home/toddler2.jpg";
import web3 from "../../Assets/Images/Home/web3.avif";
import child3 from "../../Assets/Images/Home/child3.jpg";







function Category() {
  return (
    <div className='category-cards'>
      <Container >
      <Row><h3>Main Service Categories</h3></Row>
        
          <Row>
            <Col  md = {3} lg = {3} >
              <img  src={visit} alt = "" className='category-visit-image'/> 
            </Col>
            
            <Col className='categorycol-01 categorycol' md = {3} lg = {3} >
              <Row ><img  src={web3} alt = "" className = 'categoryimg'/> </Row>
              <Row className='category-content'> <span> PreSchool Service</span></Row>
              <Row className='category-content-button'>
              <Link to = "/preschoolservice" className='common-link' >
                <button className = "common-button">Visit Now!</button> 
              </Link>
              </Row>
            </Col>
           
            <Col className='categorycol-02 categorycol' md = {3} lg = {3} >
           
              <Row><img  src={toddler2} alt = "logo" className='categoryimg'/> </Row>
              <Row className='category-content'> <span> Toddler Service</span></Row>
              <Row className='category-content-button'>
              <Link to = "/toddlerservice" className='common-link' >
                <button className = "common-button">Visit Now!</button> 
              </Link>
              </Row>
            </Col>

            <Col className='categorycol-03 categorycol' md = {3} lg = {3} >
            
              <Row><img  src={child3} alt = "logo" className='categoryimg'/> </Row>
              <Row className='category-content'> <span>  School Child Care</span></Row>
              <Row className='category-content-button'>
              <Link to = "/afterschoolservice" className='common-link' >
                <button className = "common-button">Visit Now!</button> 
              </Link>
              </Row>
            </Col>

          </Row>

      </Container>


    </div>

  );
};


export default Category;
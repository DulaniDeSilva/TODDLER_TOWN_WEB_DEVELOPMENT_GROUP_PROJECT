import React from 'react';
import { useNavigate} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import { version, ConfigProvider, Row, Col, Grid, Tag } from "antd";
import Button from 'react-bootstrap/Button';
import butterfly from "../../Assets/Images/Home/butterfly.png";
import group3 from "../../Assets/Images/Home/group3.png";

// responsive web site
//import {useMediaQuery} from 'react-responsive';

function Homenavigation() {

  const navigate = useNavigate();

  const navigateLogin = () =>{
    navigate("/login");
  };

  const navigateSignin = () =>{
    navigate("/signin");
  }

  return (
  <div className='navbarall'>

      <Container fluid>
            {/* Nav bar row */}
        <Row>
          <Col>
            <Navbar expand="lg"  >
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
                    <Nav.Link href="/Blog">Blog</Nav.Link> 
                    <NavDropdown title="Services" id="basic-nav-dropdown">
                      <NavDropdown.Item href="">Pre-School</NavDropdown.Item>
                      <NavDropdown.Item href="">Child-Care</NavDropdown.Item>
                      <NavDropdown.Item href="">After-Schooler-Care</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
            </Navbar>
          </Col>

          <Col>
            <div className='mainbutton'>
              <Button variant="outline-success" onClick = {navigateLogin} className='actionbutton'>LogIn</Button>
              <Button variant="outline-success" onClick = {navigateSignin} className='actionbutton'>SignUp</Button>
            </div>
          </Col>
        </Row>

    


        <Row>
          <Col  sm = {3} md = {6}>
          <img className=' mainimg ' src={group3} alt = "mainImage" fluid />
          </Col>

          <Col sm = {9} md = {6} >
             <div className='mainimagebutterfly '><Row> <img  src={butterfly} alt = "butterflyimg" /></Row></div>
            <Row> <h3 className='maintitle'> Toddler Town PreSchool and Child Care Center</h3> </Row>
            
          </Col>
        </Row>

      </Container>



  </div>
  )
};


export default Homenavigation;

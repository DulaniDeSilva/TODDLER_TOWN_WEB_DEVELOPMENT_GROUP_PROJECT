import React from 'react';

import Navigationbarhome from './Navigationbarhome';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




function Homenavigation() {
  return (
  <div className='navbarall'>
            <Navbar expand="lg"  >
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className=" navbar-links">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Aboutus">About Us</Nav.Link>
                    <Nav.Link href="/Gallery">Gallery</Nav.Link>
                    <Nav.Link href="/Blog">Blog</Nav.Link> 
                    <NavDropdown title="Services" id="basic-nav-dropdown">
                      <NavDropdown.Item href="">Pre-School</NavDropdown.Item>
                      <NavDropdown.Item href="">Child-Care</NavDropdown.Item>
                      <NavDropdown.Item href="">After-Schooler-Care</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href = "/Blog">Get a Spot</Nav.Link>
                  </Nav>

                <div className='navigationbarhome '>
                <Navigationbarhome/>
                </div>
                  
                
                  
                  
                </Navbar.Collapse>
            </Navbar>

  </div>
  )
};


export default Homenavigation;

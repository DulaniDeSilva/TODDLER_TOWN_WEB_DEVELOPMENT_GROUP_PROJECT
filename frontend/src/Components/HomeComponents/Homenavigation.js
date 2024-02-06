import React from 'react';

import Navigationbarhome from './Navigationbarhome';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useAuthContext } from '../../hooks/useAuthContext';



function Homenavigation() {
  const {user} = useAuthContext();

  

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
                      <NavDropdown.Item href="/preschoolservice">Pre-School</NavDropdown.Item>
                      <NavDropdown.Item href="/toddlerservice">Child-Care</NavDropdown.Item>
                      <NavDropdown.Item href="/afterschoolservice">After-Schooler-Care</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href = "/getSpot">Get a Spot</Nav.Link>
                    <Nav.Link href = "/joinus">Join Us</Nav.Link>

                    {user && (
                    <div >
                    <NavDropdown title="Go To Dashboard" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/childInterface">Child Interface</NavDropdown.Item>
                    <NavDropdown.Item href="//staffInterface">Staff Interface</NavDropdown.Item>
                    <NavDropdown.Item href="/adminInterface">Admin Interface</NavDropdown.Item>
                    </NavDropdown>
                    </div>
                    )}



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

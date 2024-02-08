import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Navigationbarhome from '../HomeComponents/Navigationbarhome';
// import Navigationbarhome from './Navigationbarhome';

export default function ChildInterfaceNavBar() {
  return (
    <div className='childinterface-navbarall'>
    <Navbar expand="lg"  >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" childinterface-navbar-links">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Blog">Blog</Nav.Link> 
            <Nav.Link href = "/waitingList">New Spot</Nav.Link>
          </Nav>

        <div className='childinterface-navigationbarhome '>
          <Navigationbarhome/>
        </div>
          


   
        
          
          
        </Navbar.Collapse>
    </Navbar>

</div>
  )
}

import React from 'react';
import { useNavigate} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { version, ConfigProvider, Row, Col, Grid, Tag } from "antd";
import Button from 'react-bootstrap/Button';
import butterfly from "../../Assets/Images/Home/butterfly.png";
import group3 from "../../Assets/Images/Home/group3.png";



function Homenavigation() {

  const navigate = useNavigate();

  const navigateLogin = () =>{
    navigate("/login");
  };

  const navigateSignin = () =>{
    navigate("/signin");
  }

  return (
  <div>

{/* Navigation bar opened */}
    <div className='navbarall'
    grid = {{
      xs: '480px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1600px',
      }}> 

      <Navbar expand="lg" className=" navbarall" >
        <Container className='navbarall'>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Aboutus">About Us</Nav.Link>
              <Nav.Link href="/Gallery">Gallery</Nav.Link>
              <Nav.Link href="/Blog">Blog</Nav.Link> 
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="">Pre-School</NavDropdown.Item>
                <NavDropdown.Item href="">Child-Care</NavDropdown.Item>
                <NavDropdown.Item href="">After-Schooler-Care</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <div className='actionbutton_div'>
              <Button variant="outline-success" onClick = {navigateLogin} className='actionbutton'>LogIn</Button>
              <Button variant="outline-success" onClick = {navigateSignin} className='actionbutton'>SignUp</Button>
          </div> 
        </Container>
      </Navbar>
    

            <div className='parent'>
                <img className='mainimg' src={group3} alt = "logo" />
                <h3 className='maintitle'> Toddler Town PreSchool and Child Care Center</h3>
                <img className='mainimagebutterfly ' src={butterfly} alt = "logo" />
            </div>


    </div> 



  </div>
  )
};


export default Homenavigation;

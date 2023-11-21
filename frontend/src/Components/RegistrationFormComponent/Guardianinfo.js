import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import logo from "../Assets/Images/logo.jpg";
import Button from 'react-bootstrap/Button';
import {Link } from 'react-router-dom';






function Guardianinfo() {




  return (
    // opening div
    <div>
{/* top header */}
<Container className='header'>
      <Row className='headerRow' xs={12} md={8}>
        {/* <Col className='headerCol' xs = {4}>  <img className='headerlogo' src={logo} alt = "logo"/></Col> */}
        <Col className='headerCol' xs = {8}>
        <Row className='headerSubRow'> <h1>REGISTRATION FORM </h1></Row>
        <Row className='headerSubRow'> <h4>Toddler Town Pre School and Childcare center </h4> </Row>
        </Col>
      </Row>
    </Container>    



    {/* form */}
    <Container className='formcontainer'>

    <Form className='mainform'>

        <Row className="mb-3">
        <Form.Group as={Col} controlId="">
          <Form.Label className='formheading'>3.Details of the Guardian </Form.Label>
        </Form.Group>
      </Row>

    
      <Row className="mb-3">
        <Form.Group as={Col} controlId="">
          <Form.Label>Name of Guardian </Form.Label>
          <Form.Control type="text" placeholder="A.F.Perera" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address </Form.Label>
        <Form.Control as="textarea" rows={2} />
      </Form.Group>
      </Row>

     
      
      <Row className="mb-3">
      <Form.Group as={Col}   className="mb-3" controlId="formGridAddress1">
        <Form.Label>Telephone Number (Home) </Form.Label>
        <Form.Control type="number" />
      </Form.Group>

      <Form.Group as={Col}  className="mb-3" controlId="formGridAddress1">
        <Form.Label>Telephone Number (Work) </Form.Label>
        <Form.Control type="number" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </Row>


{/* 
      <Button variant="primary" type="submit">
        Next Page
        <Link to = "/bankinfo"> Register</Link>
      </Button>

      <Button variant="primary" type="submit">
       Go Back
        <Link to = "/parentinfo"> Register</Link>
      </Button> */}

      
     

      
     



      
      <div className='buttoncontainer'>
      <Link to="/parentinfo" >
      <Button  className="signinsubmit">
         Go Back
        </Button>
      </Link>
      <Link to="/bankinfo" >
      <Button  className="signinsubmit">
          Next Page
        </Button>
      </Link>
      </div>



    </Form>


    </Container>
   


    {/* form closing */}

    
    
    
    
    
    
    
    
    
    
    
    
    
    {/* closing div */}
    </div>
  )
}


export default Guardianinfo;
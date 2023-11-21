import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import logo from "../Assets/Images/logo.jpg";
import Button from 'react-bootstrap/Button';
import {Link } from 'react-router-dom';


export default function Bankinfo() {



  
  return (
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
    

    <Form className='mainform'>

     <Row className="mb-3">
        <Form.Group as={Col} controlId="">
          <Form.Label className='formheading'>4. Payment Details </Form.Label>
        </Form.Group>
      </Row>

    <Row>
        <Col>
            <Button variant="primary" type="submit">
                 Paypal
            </Button>
        
         </Col>
        <Col>
            <Button variant="primary" type="submit">
                 Pay
            </Button>
        
         </Col>
    </Row>

    <Row>
        <p> or credid card</p>
    </Row>

    <Container>

    <Row className="mb-3">
        <Form.Group as={Col} controlId="">
          <Form.Label>Cardholder Name </Form.Label>
          <Form.Control type="text" placeholder="A.F.Perera" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="">
          <Form.Label>Card Number </Form.Label>
          <Form.Control type="text"  />
        </Form.Group>

        <Form.Group as={Col} controlId="">
          <Form.Label>Expiration </Form.Label>
          <Form.Control type="date"  />
        </Form.Group>

        <Form.Group as={Col} controlId="">
          <Form.Label>CVV </Form.Label>
          <Form.Control type="number"  />
        </Form.Group>
      </Row>


  

    
    



    </Container>







  {/* <Button variant="primary" type="submit">
   Next Page
   <Link to = "/officeinfo"> Register</Link>
  </Button>

  <Button variant="primary" type="submit">
       Go Back
        <Link to = "/guardianinfo"> Register</Link>
      </Button> */}


      
 
    

      <div className='buttoncontainer'>
      <Link to="/guardianinfo" >
      <Button  className="signinsubmit">
         Go Back
        </Button>
      </Link>

      <Link to="/officeinfo" >
      <Button  className="signinsubmit">
         Next Page
        </Button>
      </Link>

      
      </div>






</Form>





{/* form closing */}














    
    
    </div>
  )
}
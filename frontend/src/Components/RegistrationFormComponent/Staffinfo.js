import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
//import logo from "../Assets/Images/logo.jpg";
import {Link } from 'react-router-dom';

export default function Staffinfo() {
  return (
    <div>
    
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
      <Form.Label className='formheading'>2. Bank Details </Form.Label>
    </Form.Group>
  </Row>


<Row className="mb-3">
    <Form.Group as={Col} controlId="">
      <Form.Label>Bank Account Number: </Form.Label>
      <Form.Control type="number" max={12} />
    </Form.Group>
  </Row>


<Row className="mb-3">
    <Form.Group as={Col} controlId="">
      <Form.Label>Branch Name:</Form.Label>
      <Form.Control type="text" placeholder="Kurunegala Branch" />
    </Form.Group>

    <Form.Group as={Col} controlId="">
      <Form.Label>City: </Form.Label>
      <Form.Control type="text" placeholder="Kurunegala" />
    </Form.Group>
  </Row>



  <Row className="mb-3">
    <Form.Group as={Col} controlId="">
      <Form.Label className='formheading'>3. Uploads </Form.Label>
    </Form.Group>
  </Row>


  <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Please upload following documents 
        <ListGroup  horizontal>
      <ListGroup.Item as="li">NIC</ListGroup.Item>
      <ListGroup.Item as="li">Grama Sewaka Certificate</ListGroup.Item>
      <ListGroup.Item as="li">Copy of Bank PassBook</ListGroup.Item>
      <ListGroup.Item as="li">Letter of Accptance</ListGroup.Item>
      <ListGroup.Item as="li">Personal Photograph (Passport Size)</ListGroup.Item>
      </ListGroup>
        </Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>










  




  <div className='buttoncontainer'>
  <Link to="/staffinfo" >
  <Button  className="signinsubmit back">
     Back
    </Button>
  </Link>

  <Link to="/welcome" >
  <Button  className="signinsubmit front">
     Submit
    </Button>
  </Link>
  </div>
 



</Form>


</Container>



{/* form closing */}





    
  
    
    
    







    
    </div>
  )
}
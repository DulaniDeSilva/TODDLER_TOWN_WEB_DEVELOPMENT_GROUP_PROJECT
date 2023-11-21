import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import logo from "../Assets/Images/logo.jpg";
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import {Link } from 'react-router-dom';






function Parentinfo() {




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

    {/* parent infromation */}
    <Row className="mb-3">
        <Form.Group as={Col} controlId="">
          <Form.Label  className='formheading'>2.Family Details </Form.Label>
        </Form.Group>
      </Row>


    <Row>
        <Col>
        <Row className="mb-3">
        <Form.Group as={Col} controlId="">
          <Form.Label className='formheading'> Details of the Father </Form.Label>
        </Form.Group>
      </Row>

    
      <Row className="mb-3">
        <Form.Group as={Col} controlId="">
          <Form.Label>Name of Father </Form.Label>
          <Form.Control type="text" placeholder="A.F.Perera" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address (if differ from child)</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      </Row>

      <Row className="mb-3">
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Occupation</Form.Label>
        <Form.Control type="text" />
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

      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Please upload following documents 
        <ListGroup as="ol" numbered horizontal>
      <ListGroup.Item as="li">NIC</ListGroup.Item>
      <ListGroup.Item as="li">Grama Sewaka Certificate</ListGroup.Item>
      </ListGroup>
        </Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>
    </Col>



        <Col>

        <Row className="mb-3">
        <Form.Group as={Col} controlId="">
          <Form.Label className='formheading'> Details of the  Mother </Form.Label>
        </Form.Group>
      </Row>

    
      <Row className="mb-3">
        <Form.Group as={Col} controlId="">
          <Form.Label>Name of Mother </Form.Label>
          <Form.Control type="text" placeholder="A.F.Perera" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address (if differ from child)</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      </Row>

      <Row className="mb-3">
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Occupation</Form.Label>
        <Form.Control type="text" />
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

      
      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Please upload following documents 
        <ListGroup as="ol" numbered horizontal>
      <ListGroup.Item as="li">NIC</ListGroup.Item>
      <ListGroup.Item as="li">Grama Sewaka Certificate</ListGroup.Item>
      </ListGroup>
        </Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>
        </Col>

    </Row>

      {/* <Button variant="primary" type="submit">
        Next Page
        <Link to = "/guardianinfo"> Register</Link>
      </Button>

      <Button variant="primary" type="submit">
       Go Back
        <Link to = "/childinfo"> Register</Link>
      </Button> */}

    
     

      
    



      <div className='buttoncontainer'>
      <Link to="/childinfo" >
      <Button  className="signinsubmit">
         Go Back
        </Button>
      </Link>
      <Link to="/guardianinfo" >
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


export default Parentinfo;
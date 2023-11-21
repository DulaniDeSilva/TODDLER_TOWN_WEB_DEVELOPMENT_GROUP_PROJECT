import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
//import logo from "../Assets/Images/logo.jpg";
import Button from 'react-bootstrap/Button';
import {Link } from 'react-router-dom';






function Officeinfo() {




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
          <Form.Label className='formheading'>5. Other </Form.Label>
        </Form.Group>
      </Row>


    {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$office usage details */}

    <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Select the type of Service </Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Pre-School</option>
            <option>Child-Care</option>
            <option>After-School-Child-Care</option>
          </Form.Select>
        </Form.Group>




      <Row className="mb-3">
      <Form.Group as={Col}   className="mb-3" controlId="formGridAddress1">
        <Form.Label>Please list any allergies:  </Form.Label>
        <Form.Control as="textarea" rows={5} />
      </Form.Group>
      </Row>


      {/* <Button variant="primary" type="submit">
        Save and Submit
        <Link to = "/welcome"> Register</Link>
      </Button>

      <Button variant="primary" type="submit">
       Go Back
        <Link to = "/bankinfo"> Register</Link>
      </Button> */}

       
    

      
      



      <div className='buttoncontainer'>
      <Link to="/bankinfo" >
      <Button  className="signinsubmit">
         Go Back
        </Button>
      </Link>

      <Link to="/welcome" >
      <Button  className="signinsubmit">
         Submit
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


export default Officeinfo;
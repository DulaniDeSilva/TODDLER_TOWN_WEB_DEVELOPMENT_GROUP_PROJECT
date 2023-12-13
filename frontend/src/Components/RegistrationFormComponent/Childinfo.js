import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container'
import ListGroup from 'react-bootstrap/ListGroup';


export default function Childinfo() {
  return (
    <div>
      <Container>
      <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Andrea Jane Charlote Eyre" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridInitials">
          <Form.Label>Initials</Form.Label>
          <Form.Control type="text" placeholder="A.J" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Jane" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Eyre" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEnrollmentNo">
          <Form.Label>Enroll No</Form.Label>
          <Form.Control type="text" placeholder="T001" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridBirthDay">
          <Form.Label>Birthday</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridAge">
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" placeholder='2' max={16} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridGender">
          <Form.Label>Gender</Form.Label>
          <Form.Select defaultValue="Gender">
            <option>Male</option>
            <option>Female</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="T001" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridService">
          <Form.Label>Service Type</Form.Label>
          <Form.Select defaultValue="Toddler Service">
            <option>Toddler Service</option>
            <option>Pre-School Service</option>
            <option>After-School Service</option>
          </Form.Select>
        </Form.Group>
      </Row>

      {/* information about mother */}
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFatherName">
          <Form.Label>Name of Mother </Form.Label>
          <Form.Control type="text" placeholder="A.F.Perera" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
       <Form.Group className="mb-3" controlId="formGridFatherAddress">
         <Form.Label>Address </Form.Label>
         <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Occupation</Form.Label>
          <Form.Control type="text" placeholder="School Teacher" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>NIC No </Form.Label>
          <Form.Control type="text" placeholder="5243535v" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Telephone No</Form.Label>
          <Form.Control type="text" placeholder="078-1111111" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Telephone No (Work) </Form.Label>
          <Form.Control type="text" placeholder="078-1111111" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Mother@email.com" />
        </Form.Group>
      </Row>

    {/* information about father*/}
    <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFatherName">
          <Form.Label>Name of Father </Form.Label>
          <Form.Control type="text" placeholder="A.F.Perera" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
       <Form.Group className="mb-3" controlId="formGridFatherAddress">
         <Form.Label>Address </Form.Label>
         <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Occupation</Form.Label>
          <Form.Control type="text" placeholder="School Teacher" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>NIC No </Form.Label>
          <Form.Control type="text" placeholder="5243535v" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Telephone No</Form.Label>
          <Form.Control type="text" placeholder="078-1111111" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Telephone No (Work) </Form.Label>
          <Form.Control type="text" placeholder="078-1111111" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Father@email.com" />
        </Form.Group>
      </Row>


      {/* Guardian information */}
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFatherName">
          <Form.Label>Name of Guardian </Form.Label>
          <Form.Control type="text" placeholder="A.F.Perera" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
       <Form.Group className="mb-3" controlId="formGridFatherAddress">
         <Form.Label>Address </Form.Label>
         <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>NIC No </Form.Label>
          <Form.Control type="text" placeholder="5243535v" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Telephone No</Form.Label>
          <Form.Control type="text" placeholder="078-1111111" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Guardian@email.com" />
        </Form.Group>
      </Row>


      {/* bank information */}
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>CardHolder Name</Form.Label>
          <Form.Control type="text" placeholder="A.K.Jane" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Name on the card</Form.Label>
          <Form.Control type="text" placeholder= "BOC eplus" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Card Number</Form.Label>
          <Form.Control type="number" placeholder= "3498 9948 8922" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Expiration</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Card Number</Form.Label>
          <Form.Control type="number" placeholder= "432" maxLength={3} />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group controlId="formFileMultiple">
         <Form.Label>Please Input following documents (pdf format)</Form.Label>
            <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">NIC Father/ Mother/ Guardian</ListGroup.Item>
            <ListGroup.Item as="li">Grame Sewaka Certificate</ListGroup.Item>
            <ListGroup.Item as="li">Birth Certificate of Child</ListGroup.Item>
            <ListGroup.Item as="li">Medical Records of the Child</ListGroup.Item>
            </ListGroup>
          <Form.Control type="file" multiple />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </Container>
    </div>
  )
}

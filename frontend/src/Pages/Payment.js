import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../Assets/Styles/PaymentPage/Payment.css';




export default function Payment() {
  return (
    <div class = "modal">

    <h1> Payment Details</h1>
    <Form>
    <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
            Radios
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="first radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="second radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
          </Col>
        </Form.Group>
      </fieldset>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Card Number</Form.Label>
          <Form.Control type="number" placeholder="Card Number" />
        </Form.Group>

        <Form.Group as={Col}  controlId="formGridEmail">
          <Form.Label>Name on the card</Form.Label>
          <Form.Control type="text" placeholder="BOC eplus" />
       </Form.Group>
       </Row>
      
    <Row className="mb-3">
      <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
        <Form.Label>Expiry Date</Form.Label>
        <Form.Control type = "date"  />
      </Form.Group>

      <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
        <Form.Label>CVV</Form.Label>
        <Form.Control type = "number" placeholder = "234" />
      </Form.Group>
    </Row>

    <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
        <Col sm={{ span: 10, offset: 2 }}>
          <Form.Check label="Save my Card" />
        </Col>
      </Form.Group>

      <Button variant="primary" type="submit">
        Pay Now
      </Button>
    </Form>
    

    </div>
  )
}

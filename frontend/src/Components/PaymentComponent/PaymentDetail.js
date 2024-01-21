import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function PaymentDetail() {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Admission Fee</Card.Title>
        <Card.Text>
          Rs.5000.00
        </Card.Text>
        <Button variant="primary">Add</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Monthly Admission Fee</Card.Title>
        <Card.Text>
          Rs.30000.00
        </Card.Text>
        <Button variant="primary">Add</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Beverages Fee</Card.Title>
        <Card.Text>
          Rs.5000.00
        </Card.Text>
        <Button variant="primary">Add</Button>
      </Card.Body>
    </Card>

    </div>
  )
}

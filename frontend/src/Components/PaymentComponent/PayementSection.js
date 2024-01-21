import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import PaymentDetail from './PaymentDetail';

export default function PayementSection() {
  return (
    <div>
    <Accordion defaultActiveKey="0">

      <Accordion.Item eventKey="0">
        <Accordion.Header>Toddler Payments</Accordion.Header>
        <Accordion.Body>
            <PaymentDetail/>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>PreSchool Payments</Accordion.Header>
        <Accordion.Body>
            <PaymentDetail/>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>AfterSchool Payments</Accordion.Header>
        <Accordion.Body>
            <PaymentDetail/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    </div>
  )
}

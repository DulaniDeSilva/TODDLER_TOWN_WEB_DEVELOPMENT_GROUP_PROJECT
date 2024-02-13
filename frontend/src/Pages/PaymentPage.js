// import React, {useEffect, useState } from 'react';
// import { useAuthContext } from '../hooks/useAuthContext';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import PaymentTable from '../Components/PaymentComponent/PaymentTable';
import PaymentDetail from '../Components/PaymentComponent/PaymentDetail';
// import Button from 'react-bootstrap/Button';
// import {Link } from 'react-router-dom';

import CardDetails from '../Components/PaymentComponent/CardDetails';
// import PaymentCardPay from '../Components/PaymentComponent/PaymentCardPay';
// import { useChildEnrollmentContext } from '../hooks/useChildEnrollmentContext';
// import { usePaymentCardContext } from '../hooks/usePaymentCardContext';
import CardUpdateForm from '../Components/PaymentComponent/CardUpdateForm';
import UpdatedPaymentCards from '../Components/PaymentComponent/UpdatedPaymentCards';

const PaymentPage = ()=>{
  
  
  // const {user} = useAuthContext();
  // const [PaymentType, setPaymentType] = useState('');

  // const handleProceedToPay = (e) =>{
  //   e.preventDefault();
  // }


    return(
        <div className='paymentPage'>
           
        <div className="paymentPage">
           <div>
                <PaymentDetail/>
           </div>

          <PaymentTable/>    


        <Row className='PaymentPage-section'>
          <Col>
              <span className = "paymentPage-span">Existing cards:</span>
              <CardDetails/>
              <UpdatedPaymentCards/>
          </Col>

          <Col>
              <span className = "paymentPage-span">Add a new Payment card</span>
              <CardUpdateForm/>
          </Col>
        </Row>

       </div>
      <div>
        
          <button className='cardUpdateForm-button common-button '
          onClick = {()=>{
            const link = 'https://online.boc.lk/T001/channel.jsp';
            window.open(link, '_blank');
          }}>Proceed to Pay</button>
        
        
        </div>
        </div>
    )
   
};

export default PaymentPage;
import React, {useEffect, useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import PaymentTable from '../Components/PaymentComponent/PaymentTable';
import PaymentDetail from '../Components/PaymentComponent/PaymentDetail';
// import Button from 'react-bootstrap/Button';
// import {Link } from 'react-router-dom';

import CardDetails from '../Components/PaymentComponent/CardDetails';
// import PaymentCardPay from '../Components/PaymentComponent/PaymentCardPay';
import { useChildEnrollmentContext } from '../hooks/useChildEnrollmentContext';
import { usePaymentCardContext } from '../hooks/usePaymentCardContext';
import CardUpdateForm from '../Components/PaymentComponent/CardUpdateForm';
import UpdatedPaymentCards from '../Components/PaymentComponent/UpdatedPaymentCards';


const PaymentPage = ()=>{
  
  
  const {user} = useAuthContext();
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
        {/* <CardUpdateForm/> */}

        <Row>
          <Col>
              <span>Existing cards:</span>
              <CardDetails/>
              <UpdatedPaymentCards/>
          </Col>

          <Col>
              <span>Add a new Payment card</span>
              <CardUpdateForm/>
          </Col>
        </Row>

       </div>
{/* 
      <form onSubmit = {handleProceedToPay}>
        <fieldset className='paymentPage-fieldset'>

        <div className = "login-container">
        <label>
            <input 
              className="radio"
              type = "radio"
              name = "PaymentType"
              value = "Existing_Card"
              onChange={(e) => setPaymentType(e.target.value)}
            />
            <span className = "paymentPage-span">Existing Card</span>
        </label>

        
        <label>
            <input 
              className="radio"
              type = "radio"
              name = "PaymentType"
              value = "New_Card"
              onChange={(e) => setPaymentType(e.target.value)}
            />
            <span class>New Card</span>
        </label>


        </div>
        


        {PaymentType === "Existing_Card"?(
                <div>
                  <CardDetails/>
                  <UpdatedPaymentCards/>
               </div> ):null}

        {PaymentType === "New_Card"?(
                <div>
                  <CardUpdateForm/>
                </div> ):null}
              
        </fieldset>
      </form> */}



        <div>
        <button className='cardUpdateForm-button common-button '>Proceed to Pay</button>
        </div>
        </div>
    )
   
};

export default PaymentPage;
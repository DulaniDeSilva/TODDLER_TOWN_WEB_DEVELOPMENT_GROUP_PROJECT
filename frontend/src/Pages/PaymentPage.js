import React, {useEffect, useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';

import PaymentTable from '../Components/PaymentComponent/PaymentTable';
import PaymentDetail from '../Components/PaymentComponent/PaymentDetail';
// import Button from 'react-bootstrap/Button';
// import {Link } from 'react-router-dom';

import CardDetails from '../Components/PaymentComponent/CardDetails';
// import PaymentCardPay from '../Components/PaymentComponent/PaymentCardPay';
import { useChildEnrollmentContext } from '../hooks/useChildEnrollmentContext';
import CardUpdateForm from '../Components/PaymentComponent/CardUpdateForm';
import UpdatedPaymentCards from '../Components/PaymentComponent/UpdatedPaymentCards';


const PaymentPage = ()=>{
  
  const {children, dispatch} = useChildEnrollmentContext();
  const {user} = useAuthContext();
  const [PaymentType, setPaymentType] = useState('');

  useEffect(() =>{
    const fetchChildrenData = async() =>{
      const response = await fetch('/children',{
        headers:{
          'Authorization': `Bearer ${user.token}`
        }
      });
      const json = await response.json();

      if(response.ok){
        dispatch({type: 'SET_CHILD',payload:json});
      }
    };

    
      if(user){
        fetchChildrenData();
      }

  },[dispatch, user]);


    return(
        <div className='paymentPage'>
           
        <div className="paymentPage">
           <div>
                <PaymentDetail/>
           </div>
        <PaymentTable/>    
       </div>

      <form>
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
      
        <div>
        <button className='cardUpdateForm-button common-button '>Proceed to Pay</button>
        </div>

      </form>

        </div>
    )
   
};

export default PaymentPage;
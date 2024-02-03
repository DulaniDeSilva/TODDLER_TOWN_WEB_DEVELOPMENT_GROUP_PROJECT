import React, {useEffect, useState } from 'react';

import {useChildEnrollmentContext} from "../../hooks/useChildEnrollmentContext"
import { useAuthContext } from '../../hooks/useAuthContext';
import CardDetails from './CardDetails';
import CardUpdate from './CardUpdate';

// import '../Assets/Styles/PaymentPage/PaymentNewCard.css';
const PaymentCardPay = ()=>{

    
    const [PaymentType, setPaymentType] = useState('');
    const {children, dispatch} = useChildEnrollmentContext();
    const {user} = useAuthContext();
    useEffect(()=>{
        const fetchChildren = async () =>{
            const response = await fetch('/children',{
                headers:{
                    'Authorization': `Bearer ${user.token}`

                }
            });
            const json = await response.json();

            if(response.ok){
               dispatch({type: 'SET_CHILD', payload: json});
            }
        };

        if(user){
            fetchChildren()
        }

       
    }, [dispatch, user]);
  return (
    <div>


      <div className='container'>
     
      <form>
        <fieldset>

        <label>
            <input 
              className="radio"
              type = "radio"
              name = "PaymentType"
              value = "Existing_Card"
              onChange={(e) => setPaymentType(e.target.value)}
            />
            <span>Existing Card</span>
        </label>

        <label>
            <input 
              className="radio"
              type = "radio"
              name = "PaymentType"
              value = "New_Card"
              onChange={(e) => setPaymentType(e.target.value)}
            />
            <span>New Card</span>
        </label>

        {PaymentType === "Existing_Card"?(
                <div>
                  <CardDetails/>
               </div> ):null}

        {PaymentType === "New_Card"?(
                <div>
                  <CardUpdate/>
                </div> ):null}
              
        </fieldset>
      
        <div>
        <button>Proceed to Pay</button>
        </div>

      </form>
      
    </div>


    </div>
  );
}

export default PaymentCardPay;
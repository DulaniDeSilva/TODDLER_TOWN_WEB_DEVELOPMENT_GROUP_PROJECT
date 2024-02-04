import {useEffect} from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';


import { usePaymentCardContext } from '../../hooks/usePaymentCardContext';

const UpdatedPaymentCards = ()=>{
    const {child, dispatch} = usePaymentCardContext();
    const {user} = useAuthContext();
    useEffect(()=>{
        const fetchPyamentCard = async () =>{
            const response = await fetch('/paymentCard',{
                headers:{
                    'Authorization': `Bearer ${user.token}`

                }
            });
            const json = await response.json();

            if(response.ok){
               dispatch({type: 'SET_PAYMENTCARD', payload: json});
            }
        };

        if(user){
            fetchPyamentCard()
        }

       
    }, [dispatch, user]);



    return(
        <div className='pages'>
            
        <div className="ChildEnrollmentHome">
           <div>
               {child && child.map((child)=>(
                <div key={child._id}>
                    <p><strong>Card Number:</strong>{child.cardNumber}</p>
                    <p><strong>Name on Card:</strong>{child.nameOnCard}</p>
                    <p><strong>Expiration:</strong>{child.expiration}</p>
                    <p><strong>CVV:</strong>{child.cvv}</p>
                </div>
               ))}
           </div>
       </div>
        </div>

    )
   
};

export default UpdatedPaymentCards;
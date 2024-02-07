import {useEffect} from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';


import { usePaymentCardContext } from '../../hooks/usePaymentCardContext';
import UpdatedPaymentCardsDetails from './UpdatedPaymentCardsDetails';

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
                    <UpdatedPaymentCardsDetails/>
                    <UpdatedPaymentCardsDetails key ={child._id} paymentCard = {child}/>
                </div>
               ))}
           </div>

          
       </div>
        </div>

    )
   
};

export default UpdatedPaymentCards;
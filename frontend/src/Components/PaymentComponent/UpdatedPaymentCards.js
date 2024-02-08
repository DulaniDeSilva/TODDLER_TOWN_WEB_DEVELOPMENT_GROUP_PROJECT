import {useEffect, useState} from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';


import { usePaymentCardContext } from '../../hooks/usePaymentCardContext';
import UpdatedPaymentCardsDetails from './UpdatedPaymentCardsDetails';

const UpdatedPaymentCards = ()=>{
    const {paymentCard, dispatch} = usePaymentCardContext();
    const {user} = useAuthContext();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchPaymentCard = async () => {
            try {
                const response = await fetch('/paymentCard', {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                });
                const json = await response.json();

                if (response.ok) {
                    dispatch({ type: 'SET_PAYMENTCARD', payload: json });
                } else {
                    throw new Error(json.error || 'Failed to fetch payment cards');
                }
            } catch (error) {
                console.error('Error fetching payment cards:', error.message);
            } finally {
                setLoading(false);
            }
        };

        if (user) {
            fetchPaymentCard();
        }
    }, [dispatch, user]);



    return(
        <div className='pages'>
            
        <div className="ChildEnrollmentHome">
           <div>
           {loading ? (
                        <p>Loading...</p>
                    ) : (
                        paymentCard.map(payment => (
                            <UpdatedPaymentCardsDetails key={payment._id} paymentCard={payment} />
                        ))
                    )}
           </div>

          
       </div>
        </div>

    )
   
};

export default UpdatedPaymentCards;
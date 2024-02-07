import {useEffect} from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



import { useChildEnrollmentContext } from '../../hooks/useChildEnrollmentContext';

// import ChildEnrollmentform from '../Components/ChildEnrollmentComponent/ChildEnrollmentform';


const CardDetails = ()=>{
    const {child, dispatch} = useChildEnrollmentContext();
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



    return(
        <div >
            
        <div className="cardDetails-maindiv">
           <div>
               {child && child.map((child)=>(
                <div key={child._id}>
                <button><span><FontAwesomeIcon icon = {faTrash} className='icon'></FontAwesomeIcon></span></button>
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

export default CardDetails;
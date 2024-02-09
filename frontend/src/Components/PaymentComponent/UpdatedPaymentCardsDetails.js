import { usePaymentCardContext } from "../../hooks/usePaymentCardContext";
// import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { useAuthContext } from "../../hooks/useAuthContext";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {  faTrash } from '@fortawesome/free-solid-svg-icons';



const UpdatedPaymentCardsDetails = ({paymentCard})=>{
    const {dispatch} = usePaymentCardContext();
    const {user} = useAuthContext();
    
     const handleClick = async(e) =>{
        e.preventDefault();
        if(!user){
            return 
        }
        const response = await fetch('/paymentCard/' + paymentCard._id,{
            method:'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json();

        if(response.ok){
            dispatch({type: 'DELETE_PAYMENTCARD', payload:json})
        }
    }

    return(
        <div className="cardDetails-maindiv">
            <button><span onClick={handleClick}><FontAwesomeIcon icon = {faTrash} ></FontAwesomeIcon></span></button>
            <p><strong>Card Number:</strong>{paymentCard.cardNumber}</p>
            <p><strong>Name on Card:</strong>{paymentCard.nameOnCard}</p>
            <p><strong>Expiration: </strong>{paymentCard.expiration}</p>
            <p><strong>CVV: </strong>{paymentCard.cvv}</p>
          
            {/* <button><FontAwesomeIcon icon = {faEdit} ></FontAwesomeIcon></button> */}
            
           
        </div>
    )
};

export default UpdatedPaymentCardsDetails;
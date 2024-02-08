import { usePaymentCardContext } from "../../hooks/usePaymentCardContext";
// import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { useAuthContext } from "../../hooks/useAuthContext";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {  faTrash } from '@fortawesome/free-solid-svg-icons';


const UpdatedPaymentCardsDetails = ({paymentCard})=>{
    const {dispatch} = usePaymentCardContext();
    const {user} = useAuthContext();
    
     const handleClick = async() =>{
        if(!user){
            return 
        }
        const response = await fetch('/paymentCard' + paymentCard._id,{
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
        <div>

            <h6><strong>Item Name:</strong>{paymentCard.cardNumber}</h6>
            <p><strong>Description:</strong>{paymentCard.nameOnCard}</p>
            <p><strong>Quantity</strong>{paymentCard.expiration}</p>
            <p><strong>Date</strong>{paymentCard.cvv}</p>
            <button><span onClick={handleClick}><FontAwesomeIcon icon = {faTrash} ></FontAwesomeIcon></span></button>
            {/* <button><FontAwesomeIcon icon = {faEdit} ></FontAwesomeIcon></button> */}
            
           
        </div>
    )
};

export default UpdatedPaymentCardsDetails;
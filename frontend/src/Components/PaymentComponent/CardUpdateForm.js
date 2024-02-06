import {useState} from 'react'
import { usePaymentCardContext } from '../../hooks/usePaymentCardContext';
import { useAuthContext } from '../../hooks/useAuthContext';

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {   faCreditCardAlt, faExplosion, faICursor,  faPerson } from '@fortawesome/free-solid-svg-icons';
import '../../Assets/Styles/PaymentPage/PaymentNewCard.css';

const CardUpdateForm =()=>{
    
    const {dispatch} = usePaymentCardContext();
    const {user} = useAuthContext();

    const [cardNumber, setCardNumber] = useState('');
    const [nameOnCard, setNameOnCard] = useState('');
    const [expiration, setExpiration] = useState('');
    const [cvv, setCVV] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([])
    
    const handleSubmit = async(e) =>{
        e.preventDefault();
        
        if(!user){
            setError('You must be logged in');
            return
        }
        const child = {cardNumber, nameOnCard, expiration, cvv};
        const response = await fetch('/paymentCard',{
            method: 'POST',
            body: JSON.stringify(child),
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
        });
        const json = await response.json();
        if(!response.ok){
            setError(json.error);
            setEmptyFields(json.emptyFields || []);
        }
        if(response.ok){
            setCardNumber('');
            setNameOnCard('');
            setExpiration('');
            setCVV('');
            setError(null);
            setEmptyFields([]);
            console.log("New Payment Card Added",json)
            dispatch({type: 'CREATE_PAYMENTCARD', payload:json});
        }
    }

    return(
        <div className='cardUpdateform-container'>

            <form onSubmit = {handleSubmit}>
                <h4> Add a new card </h4>

            <fieldset>
            <div class = "cardUpdateform-input-div">
                <label>Name on Card:<FontAwesomeIcon icon = {faPerson} className='cardUpdateform-icon'></FontAwesomeIcon> </label>
                
                <input 
                     placeholder="BOC eplus"
                    type="text"
                    onChange = {(e) =>setNameOnCard(e.target.value)}
                    value = {nameOnCard}
                    // className={` ${emptyFields.includes('nameOnCard') ? 'error' : ''} inputs`}
                    className = {emptyFields.includes('nameOnCard') ? 'error': ''}
                />
                </div>

                <div class = "cardUpdateform-input-div">
                <label>Card Number:<FontAwesomeIcon icon = {faCreditCardAlt} className='cardUpdateform-icon'></FontAwesomeIcon> </label>
                
                <input 
                     placeholder="0987 4567 3456 2345"
                    type="text"
                    onChange = {(e) =>setCardNumber(e.target.value)}
                    value = {cardNumber}
                    // className={` ${emptyFields.includes('cardNumber') ? 'error' : ''} inputs`}
                    className = {emptyFields.includes('cardNumber') ? 'error': ''}
                />
                </div>

                <div class = "cardUpdateform-input-div">
                <label>Expire Date: <FontAwesomeIcon icon = {faExplosion} className='cardUpdateform-icon'></FontAwesomeIcon> </label>
                
                
                <input 
                    placeholder='2-23-2025'
                    type="date"
                    onChange = {(e) =>setExpiration(e.target.value)}
                    value = {expiration}
                    // className={` ${emptyFields.includes('expiration') ? 'error' : ''} inputs`}
                    className = {emptyFields.includes('expiration') ? 'error': ''}
                />
                </div>

            <div  class = "cardUpdateform-input-div">
                <label>CVV:<FontAwesomeIcon icon = {faICursor}className='cardUpdateform-icon'></FontAwesomeIcon> </label>
                
                <input 
                    placeholder='344'
                    type="text"
                    onChange = {(e) =>setCVV(e.target.value)}
                    value = {cvv}
                    // className={` ${emptyFields.includes('cvv') ? 'error' : ''} inputs`}
                    className = {emptyFields.includes('cvv') ? 'error': ''}
                />
                </div>

                
                <button className='cardUpdateForm-button common-button'>Save Card</button>
                {error && <div className ="error">{error}</div>}
                
               

            </fieldset>

            </form>

        </div>
    )
};

export default CardUpdateForm;

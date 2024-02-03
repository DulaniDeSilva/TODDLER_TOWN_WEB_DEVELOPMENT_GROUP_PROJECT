import {useState} from 'react'
import { useChildEnrollmentContext } from '../../hooks/useChildEnrollmentContext';
import { useAuthContext } from '../../hooks/useAuthContext';

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {   faCreditCardAlt, faExplosion, faICursor,  faPerson } from '@fortawesome/free-solid-svg-icons';
import '../../Assets/Styles/PaymentPage/PaymentNewCard.css';

const CardUpdate =()=>{
    const {dispatch} = useChildEnrollmentContext();
    const {user} = useAuthContext();

    const [cardNumber, setCardNumber] = useState('');
    const [nameOnCard, setNameOnCard] = useState('');
    const [expiration, setExpiration] = useState('');
    const [cvv, setCVV] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([])
    
    const handleSubmit = async (e) =>{
        e.preventDefault();

        if(!user){
            setError('You must be logged in');
            return 
        }

        const children = {cardNumber, nameOnCard, expiration, cvv};

        const response = await fetch('/children/$(user._id)',{
            method: 'PATCH',
            body: JSON.stringify(children),
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`

            }
        })
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
            console.log("new card added", json);
            dispatch({type: 'UPDATE_CHILD', payload: json});
        }
    }

    return(
        <div className='container'>

            <form onSubmit = {handleSubmit}>
                <h4> Add a new card </h4>

            <fieldset>
            <div class = "input-field">
                <label>Name on Card: </label>
                <FontAwesomeIcon icon = {faPerson} className='icon'></FontAwesomeIcon>
                <input 
                     placeholder="BOC eplus"
                    type="text"
                    onChange = {(e) =>setNameOnCard(e.target.value)}
                    value = {nameOnCard}
                    // className={` ${emptyFields.includes('nameOnCard') ? 'error' : ''} inputs`}
                    className = {emptyFields.includes('nameOnCard') ? 'error': ''}
                />
                </div>

                <div class = "input-field">
                <label>Card Number: </label>
                <FontAwesomeIcon icon = {faCreditCardAlt} className='icon'></FontAwesomeIcon>
                <input 
                     placeholder="0987 4567 3456 2345"
                    type="text"
                    onChange = {(e) =>setCardNumber(e.target.value)}
                    value = {cardNumber}
                    // className={` ${emptyFields.includes('cardNumber') ? 'error' : ''} inputs`}
                    className = {emptyFields.includes('cardNumber') ? 'error': ''}
                />
                </div>

                <div className = "input-field">
                <label>Expire Date: </label>
                <FontAwesomeIcon icon = {faExplosion} className='icon'></FontAwesomeIcon>
                
                <input 
                    placeholder='2-23-2025'
                    type="date"
                    onChange = {(e) =>setExpiration(e.target.value)}
                    value = {expiration}
                    // className={` ${emptyFields.includes('expiration') ? 'error' : ''} inputs`}
                    className = {emptyFields.includes('expiration') ? 'error': ''}
                />
                </div>

            <div className = "input-field">
                <label>CVV: </label>
                <FontAwesomeIcon icon = {faICursor} className='icon'></FontAwesomeIcon>
                <input 
                    placeholder='344'
                    type="text"
                    onChange = {(e) =>setCVV(e.target.value)}
                    value = {cvv}
                    // className={` ${emptyFields.includes('cvv') ? 'error' : ''} inputs`}
                    className = {emptyFields.includes('cvv') ? 'error': ''}
                />
                </div>

                
                <button className='pay-button center-button'>Save Card</button>
                {error && <div className ="error">{error}</div>}
                
               

            </fieldset>

            </form>

        </div>
    )
};

export default CardUpdate;

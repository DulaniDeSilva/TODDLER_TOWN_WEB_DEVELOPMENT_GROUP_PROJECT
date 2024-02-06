import {useState} from 'react'
import { usePhoneContext } from '../../hooks/usePhoneContext';



const PhoneRegisterComponent =()=>{
    const {dispatch} = usePhoneContext();

    const [phoneNumber, setPhonenumber] = useState('');
    const [error, setError] = useState(null);
    const [errorVerificationCode, setErrorVerificationCode] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);
    const [verificationCode, setVerificationCode] = useState('');
    
    const handleSubmit = async (e) =>{
        e.preventDefault();

        const phone = {phoneNumber};

        const response = await fetch('/phone/send-code',{
            method: 'POST',
            body: JSON.stringify(phone),
            headers:{
                'Content-Type': 'application/json',

            }
        })
        const json = await response.json();

        if(!response.ok){
            setError(json.error);
            // setEmptyFields(json.emptyFields || []);
        }
        if(response.ok){
            setPhonenumber(phoneNumber);
            setError(null);
            setEmptyFields([]);
            console.log("new phone added", json);
            dispatch({type: 'CREATE_PHONE', payload: json});
        }
    }

    const handleVerificationSubmit = async (e) =>{
        e.preventDefault();

        const phoneVerification = {phoneNumber, verificationCode};
        const response = await fetch('/phone/verify',{
            method: 'POST',
            body: JSON.stringify(phoneVerification),
            headers:{
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json();

        if(!response.ok){
            setErrorVerificationCode(json.error);
        }
        if(response.ok){
            setPhonenumber('');
            setVerificationCode('');
            setErrorVerificationCode(null);
            console.log('Succesfully Verified', json);
            dispatch({type: 'VERIFY_PHONE', payload:json});
        }
    };


    return(
        <div className = "cctvpage-maindiv">

            <form onSubmit = {handleSubmit}>
                
                <label>Phone Number:</label>
                <input
                    type = "text"
                    onChange={(e)=> setPhonenumber(e.target.value)}
                    value = {phoneNumber}
                    className = {emptyFields.includes('phoneNumber')? 'error': ''}
                />

          
                <button className='common-button'>Send</button>
                {error && <div className ="error">{error}</div>}

            </form>


            <form onSubmit = {handleVerificationSubmit}>
                
                <label>Verification Code:</label>
                <input
                    type = "text"
                    onChange={(e)=> setVerificationCode(e.target.value)}
                    value = {verificationCode}
                    className = {emptyFields.includes('verificationCode')? 'error': ''}
                />

          
                <button className='common-button'>Send</button>
                {errorVerificationCode && <div className ="error">{errorVerificationCode}</div>}

            </form>



        </div>
    )
};

export default PhoneRegisterComponent;

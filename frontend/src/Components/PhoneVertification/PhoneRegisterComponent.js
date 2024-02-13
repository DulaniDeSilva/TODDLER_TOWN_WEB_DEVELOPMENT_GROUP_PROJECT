import {useState} from 'react'
import { usePhoneContext } from '../../hooks/usePhoneContext';
import CctvComponent from '../ChildInterfaceComponent/CctvComponent';
// import {Link } from 'react-router-dom';


//initialization
const PhoneRegisterComponent =()=>{
    const {dispatch} = usePhoneContext();
    const [phoneNumber, setPhonenumber] = useState('');
    const [error, setError] = useState(null);
    const [errorVerificationCode, setErrorVerificationCode] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);
    const [verificationCode, setVerificationCode] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isPhoneVerified, setIsPhoneVerified] = useState(false);
    const [showCCTV, setShowCCTV] = useState(false);

    const handleCCTV = () =>{
        setShowCCTV(true);
    }
    
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
            setSuccessMessage('Phone number sent successfully');
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
            setError('Phone number verification failed. Please try again');
        }
        if(response.ok){
            setPhonenumber('');
            setVerificationCode('');
            setErrorVerificationCode(null);
            console.log('Succesfully Verified', json);
            setSuccessMessage('Phone number verified successfully');
            dispatch({type: 'VERIFY_PHONE', payload:json});
            setIsPhoneVerified(true);
           
        }
    };


    return(
        <div className='cctv-page'>
            <p>Please Enter the following details to access CCTV</p>
        <div className = "cctvpage-maindiv">
            <form onSubmit = {handleSubmit}>
                
                <label>Phone Number:</label>
                <input
                    type = "text"
                    onChange={(e)=> setPhonenumber(e.target.value)}
                    value = {phoneNumber}
                    className = {emptyFields.includes('phoneNumber')? 'error': ''}
                    placeholder='+94729809887'
                />

          
                <button className='common-button cctv-phone-button'>Send</button>
                {error && <div className ="error">{error}</div>}

            </form>


            <form onSubmit = {handleVerificationSubmit}>
                
                <label>Verification Code:</label>
                <input
                    type = "text"
                    onChange={(e)=> setVerificationCode(e.target.value)}
                    value = {verificationCode}
                    placeholder='9999'
                    className = {emptyFields.includes('verificationCode')? 'error': ''}
                />

          
                <button className='common-button cctv-phone-button'>Send</button>
                {errorVerificationCode && <div className ="error">{errorVerificationCode}</div>}

            </form>
            

        </div>
                {successMessage && <div className = "success-message">{successMessage}</div>}
            {isPhoneVerified && (
                <button className = "watch-cctv-button" onClick={handleCCTV}>WATCH CCTV NOW</button> 
            )}

           
            {showCCTV && <CctvComponent/>}
        </div>
    )
};

export default PhoneRegisterComponent;

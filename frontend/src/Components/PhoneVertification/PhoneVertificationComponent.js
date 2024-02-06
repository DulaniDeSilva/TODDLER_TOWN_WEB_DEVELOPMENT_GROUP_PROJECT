import {useState, useContext} from 'react'
import { usePhoneContext } from '../../hooks/usePhoneContext';


const PhoneVertificationComponent =()=>{
    const {dispatch} = usePhoneContext();

    const [userOTP, setUserOTP] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);
    

    const { state: { phone } } = useContext(usePhoneContext);

    const handleVerifyOTP = async () =>{
     try{
        const response = await fetch('/phone/verify-phone-number',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phoneNumber:phone,
                verificationCode:userOTP,
            }),
        });
        const json = await response.json();

        if(!response.ok){
            setError(json.error);
            setEmptyFields(json.emptyFields || []);
            console.error('Error verifying OTP: ', json.error);
        }
        if(response.ok){
            setUserOTP('');
            setError(null);
            setEmptyFields([]);
            console.log(" successfully vertified", json);
            dispatch({type: 'VERIFY_PHONE', payload: json});
        }
     }catch(error){
        console.log("Error verifying OTP:", error);
     }
    

       
    };


    return(
        <div>

            <form onSubmit = {handleVerifyOTP}>
                
                <label>Verification Code:</label>
                <input
                    type = "text"
                    onChange={(e)=> setUserOTP(e.target.value)}
                    value = {userOTP}
                    className = {emptyFields.includes('vertificationCode')? 'error': ''}
                />

          
                <button>Send</button>
                {error && <div className ="error">{error}</div>}

            </form>



           


        </div>
    )
};

export default PhoneVertificationComponent;

import {useState} from 'react'
import { useChildEnrollmentContext } from '../../hooks/useChildEnrollmentContext';
import { useAuthContext } from '../../hooks/useAuthContext';

import Container from 'react-bootstrap/Container';




const ChildEnrollmentform =()=>{
    const {dispatch} = useChildEnrollmentContext();
    const {user} = useAuthContext();

    const [name, setName] = useState('');
    const [initials, setInitials] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [enrollmentNo, setEnrollmentNo] = useState('');
    const [birthday, setBirthday] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [motherName, setMotherName] = useState('');
    const [motherAddress, setMotherAddress] = useState('');
    const [motherOccupation, setMotherOccupation] = useState('');
    const [motherNicNo, setMotherNicNo] = useState('');
    const [motherTelephoneNo, setMotherTelephoneNo] = useState('');
    const [motherWorkTelephoneNo, setMotherWorkTelephoneNo] = useState('');
    const [motherEmail, setMotherEmail] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [fatherAddress, setFatherAddress] = useState('');
    const [fatherOccupation, setFatherOccupation] = useState('');
    const [fatherNicNo, setFatherNicNo] = useState('');
    const [fatherTelephoneNo, setFatherTelephoneNo] = useState('');
    const [fatherWorkTelephoneNo, setFatherWorkTelephoneNo] = useState('');
    const [fatherEmail, setFatherEmail] = useState('');
    const [guardianName, setGuardianName] = useState('');
    const [guardianAddress, setGuardianAddress] = useState('');
    const [guardianNicNo, setGuardianNicNo] = useState('');
    const [guardianTelephoneNo, setGuardianTelephoneNo] = useState('');
    const [guardianEmail, setGuardianEmail] = useState('');
    const [cardHolderName, setCardHolderName] = useState('');
    const [nameOnCard, setNameOnCard] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiration, setExpiration] = useState('');
    const [cvv, setCvv] = useState('');
    

    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([])
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(!user){
            setError('You must be logged in');
            return 
        }
        
        const children = {name, initials, firstName, lastName, enrollmentNo, birthday, age, gender
        ,address, city, zip, serviceType, motherName, motherAddress, motherOccupation,
        motherNicNo, motherTelephoneNo, motherWorkTelephoneNo, motherEmail,
        fatherName, fatherAddress, fatherOccupation, fatherNicNo, fatherTelephoneNo,
        fatherWorkTelephoneNo, fatherEmail, guardianName,guardianAddress, guardianNicNo, guardianTelephoneNo,
        guardianEmail, cardHolderName, nameOnCard,cardNumber, expiration,
        cvv};

        const response = await fetch('/children',{
            method: 'POST',
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
            setName('');
            setInitials('');
            setFirstName('');
            setLastName('');
            setEnrollmentNo('');
            setBirthday('');
            setAge('');
            setGender('');
            setAddress('');
            setCity('');
            setZip('');
            setServiceType('');
            setMotherName('');
            setMotherAddress('');
            setMotherOccupation('');
            setMotherNicNo('');
            setMotherTelephoneNo('');
            setMotherWorkTelephoneNo('');
            setMotherEmail('');
            setFatherName('');
            setFatherAddress('');
            setFatherOccupation('');
            setFatherNicNo('');
            setFatherTelephoneNo('');
            setFatherWorkTelephoneNo('');
            setFatherEmail('');
            setGuardianName('');
            setGuardianAddress('');
            setGuardianNicNo('');
            setGuardianTelephoneNo('');
            setGuardianEmail('');
            setCardHolderName('');
            setNameOnCard('');
            setCardNumber('');
            setExpiration('');
            setCvv('');
            setError(null);
            setEmptyFields([]);
            console.log("new child added", json);
            dispatch({type: 'CREATE_CHILD', payload: json});
        }
    }

    return(
        <div>
            <Container>
            <h2>Registration Form</h2>
            <form onSubmit = {handleSubmit}>

                <label>Name: </label>
                <input 
                    type="text"
                    onChange = {(e) =>setName(e.target.value)}
                    value = {name}
                    className = {emptyFields.includes('name') ? 'error': ''}
                />

                <label>Initials: </label>
                <input 
                    type="text"
                    onChange = {(e) =>setInitials(e.target.value)}
                    value = {initials}
                    className = {emptyFields.includes('initials') ? 'error': ''}
                />

                <label>First Name: </label>
                <input 
                    type="text"
                    onChange = {(e) =>setFirstName(e.target.value)}
                    value = {firstName}
                    className = {emptyFields.includes('firstName') ? 'error': ''}
                />

                <label>Last Name: </label>
                <input 
                    type="text"
                    onChange = {(e) =>setLastName(e.target.value)}
                    value = {lastName}
                    className = {emptyFields.includes('lastName') ? 'error': ''}
                />

                <label>Enrollment No: </label>
                <input 
                    type="text"
                    onChange = {(e) =>setEnrollmentNo(e.target.value)}
                    value = {enrollmentNo}
                    className = {emptyFields.includes('enrollmentNo') ? 'error': ''}
                />

                <label>Birth day: </label>
                <input 
                    type="date"
                    onChange = {(e) =>setBirthday(e.target.value)}
                    value = {birthday}
                    className = {emptyFields.includes('birthday') ? 'error': ''}
                />
                <label>Age: </label>
                <input 
                    type="number"
                    onChange = {(e) =>setAge(e.target.value)}
                    value = {age}
                    className = {emptyFields.includes('age') ? 'error': ''}
                />

                
                
                <label>Gender: </label>
                <select
                    name = "gender"
                    onChange = {(e) =>setGender(e.target.value)}
                    value = {gender}
                    className = {emptyFields.includes('gender') ? 'error': ''}
                >
                    <option>Male</option>
                    <option>Female</option>
                </select>

                <label>Address: </label>
                <input 
                    type="text"
                    placeholder="ABC road, Colombo"
                    onChange = {(e) =>setAddress(e.target.value)}
                    value = {address}
                    className = {emptyFields.includes('address') ? 'error': ''}
                />

                <label>City: </label>
                <input 
                    type="text"
                    placeholder='Colombo'
                    onChange = {(e) =>setCity(e.target.value)}
                    value = {city}
                    className = {emptyFields.includes('city') ? 'error': ''}
                />

                <label>Zip: </label>
                <input 
                    type="text"
                    placeholder='60000'
                    onChange = {(e) =>setZip(e.target.value)}
                    value = {zip}
                    className = {emptyFields.includes('zip') ? 'error': ''}
                />

                <label>Service Type: </label>
                <select
                    name = 'serviceType'
                    onChange = {(e) =>setServiceType(e.target.value)}
                    value = {serviceType}
                    className = {emptyFields.includes('serviceType') ? 'error': ''}
                >
                    <option>Toddler Service</option>
                    <option>Pre-School Service</option>
                    <option>After School Service</option>
                </select>

                
           
                <h1>Mother Information</h1>
            
                <label>Name: </label>
                <input 
                    type="text"
                    onChange = {(e) =>setMotherName(e.target.value)}
                    value = {motherName}
                    className = {emptyFields.includes('motherName') ? 'error': ''}
                />
                <label>Address: </label>
                <input 
                    type="text"
                    onChange = {(e) =>setMotherAddress(e.target.value)}
                    value = {motherAddress}
                    className = {emptyFields.includes('motherAddress') ? 'error': ''}
                />
                <label>Occupation: </label>
                <input 
                    type="text"
                    onChange = {(e) =>setMotherOccupation(e.target.value)}
                    value = {motherOccupation}
                    className = {emptyFields.includes('motherOccupation') ? 'error': ''}
                />
                <label>NIC No: </label>
                <input 
                    type="text"
                    onChange = {(e) =>setMotherNicNo(e.target.value)}
                    value = {motherNicNo}
                    className = {emptyFields.includes('motherNicNo') ? 'error': ''}
                />
                <label>Email: </label>
                <input 
                    type="email"
                    onChange = {(e) =>setMotherEmail(e.target.value)}
                    value = {motherEmail}
                    className = {emptyFields.includes('motherEmail') ? 'error': ''}
                />
                <label>Telephone nameOnCard: </label>
                <input 
                    type="text"
                    onChange = {(e) =>setMotherTelephoneNo(e.target.value)}
                    value = {motherTelephoneNo}
                    className = {emptyFields.includes('motherTelephoneNo') ? 'error': ''}
                />
                <label>Work Telephone No: </label>
                <input 
                    type="text"
                    onChange = {(e) =>setMotherWorkTelephoneNo(e.target.value)}
                    value = {motherWorkTelephoneNo}
                    className = {emptyFields.includes('motherWorkTelephoneNo') ? 'error': ''}
                />
{/* father information */}
            
                <h1>Father Information</h1>
            

            <label>Name: </label>
                <input 
                    type="text"
                    onChange = {(e) =>setFatherName(e.target.value)}
                    value = {fatherName}
                    className = {emptyFields.includes('fatherName') ? 'error': ''}
                />
                <label>Address: </label>
                <input 
                    type="text"
                    onChange = {(e) =>setFatherAddress(e.target.value)}
                    value = {fatherAddress}
                    className = {emptyFields.includes('fatherAddress') ? 'error': ''}
                />
                <label>Occupation: </label>
                <input 
                    type="text"
                    onChange = {(e) =>setFatherOccupation(e.target.value)}
                    value = {fatherOccupation}
                    className = {emptyFields.includes('fatherOccupation') ? 'error': ''}
                />
                <label>NIC No: </label>
                <input 
                    type="text"
                    onChange = {(e) =>setFatherNicNo(e.target.value)}
                    value = {fatherNicNo}
                    className = {emptyFields.includes('fatherNicNo') ? 'error': ''}
                />
                <label>Email: </label>
                <input 
                    type="email"
                    onChange = {(e) =>setFatherEmail(e.target.value)}
                    value = {fatherEmail}
                    className = {emptyFields.includes('fatherEmail') ? 'error': ''}
                />
                <label>Telephone No: </label>
                <input 
                    type="text"
                    onChange = {(e) =>setFatherTelephoneNo(e.target.value)}
                    value = {fatherTelephoneNo}
                    className = {emptyFields.includes('fatherTelephoneNo') ? 'error': ''}
                />
                <label>Work Telephone No: </label>
                <input 
                    type="text"
                    onChange = {(e) =>setFatherWorkTelephoneNo(e.target.value)}
                    value = {fatherWorkTelephoneNo}
                    className = {emptyFields.includes('fatherWorkTelephoneNo') ? 'error': ''}
                />
                
        
{/* guardian  */}



                <h1>Guardian Information</h1>
            

            <label>Name: </label>
                <input 
                    type="text"
                    onChange = {(e) =>setGuardianName(e.target.value)}
                    value = {guardianName}
                    className = {emptyFields.includes('guardianName') ? 'error': ''}
                />
                <label>Address: </label>
                <input 
                    type="text"
                    onChange = {(e) =>setGuardianAddress(e.target.value)}
                    value = {guardianAddress}
                    className = {emptyFields.includes('guardianAddress') ? 'error': ''}
                />
                
                <label>NIC No: </label>
                <input 
                    type="text"
                    onChange = {(e) =>setGuardianNicNo(e.target.value)}
                    value = {guardianNicNo}
                    className = {emptyFields.includes('guardianNicNo') ? 'error': ''}
                />
                <label>Email: </label>
                <input 
                    type="email"
                    onChange = {(e) =>setGuardianEmail(e.target.value)}
                    value = {guardianEmail}
                    className = {emptyFields.includes('guardianEmail') ? 'error': ''}
                />
                <label>Telephone : </label>
                <input 
                    type="text"
                    onChange = {(e) =>setGuardianTelephoneNo(e.target.value)}
                    value = {guardianTelephoneNo}
                    className = {emptyFields.includes('guardianTelephoneNo') ? 'error': ''}
                />
               

{/* bank information */}
            
            <h1>Bank Information</h1>
            
                <label>Card Holder Name: </label>
                <input 
                    type="text"
                    onChange = {(e) =>setCardHolderName(e.target.value)}
                    value = {cardHolderName}
                    className = {emptyFields.includes('cardHolderName') ? 'error': ''}
                />
                <label>Name on Card: </label>
                <input 
                    type="text"
                    onChange = {(e) =>setNameOnCard(e.target.value)}
                    value = {nameOnCard}
                    className = {emptyFields.includes('nameOnCard') ? 'error': ''}
                />
                <label>Card Number: </label>
                <input 
                    type="text"
                    onChange = {(e) =>setCardNumber(e.target.value)}
                    value = {cardNumber}
                    className = {emptyFields.includes('cardNumber') ? 'error': ''}
                />
                <label>Expire Date: </label>
                <input 
                    type="date"
                    onChange = {(e) =>setExpiration(e.target.value)}
                    value = {expiration}
                    className = {emptyFields.includes('expiration') ? 'error': ''}
                />
                <label>CVV: </label>
                <input 
                    type="text"
                    onChange = {(e) =>setCvv(e.target.value)}
                    value = {cvv}
                    className = {emptyFields.includes('cvv') ? 'error': ''}
                />

        
                <button>Add To Enrollment List</button>
                {error && <div className ="error">{error}</div>}


            </form>
            </Container>
        </div>
    )
};

export default ChildEnrollmentform;

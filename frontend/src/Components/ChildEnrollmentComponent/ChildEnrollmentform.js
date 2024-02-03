import {useState} from 'react'
import { useChildEnrollmentContext } from '../../hooks/useChildEnrollmentContext';
import { useAuthContext } from '../../hooks/useAuthContext';

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAddressBook, faAddressCard, faBirthdayCake, faChalkboardTeacher, faChild, faCity, faCreditCardAlt, faExplosion,  faHeart, faICursor, faIdCard, faMailReply, faPen, faPerson, faPersonShelter, faPhone, faPhoneFlip, faShieldBlank, faTransgenderAlt } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
// import {Link} from 'react-router-dom';

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

    const buttonstyle = {
        backgroundColor: '#F8BDEB',
        margin: '10px',
        display: 'flex',
        justifyContent: 'space-between',  
        alignItems: 'center',
        padding: '20px',
      };

    const back = {
        margin: '0 5px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'right',
        fontSize: '1.5em',
        fontColor: 'black',
    }

    return(
        <div>
             <div style={buttonstyle} >
                        <span className='submit' style = {back}>Back to Sign up</span>
                        <span style = {back} className='submit'>Home</span>
                        {/* <Link to = "/loginPage" style = {linkStyle}>Login</Link> */}
                        {/* <Link to = "/signupPage" style = {linkStyle}>Sign up</Link> */}
                    </div>



            <div class = "registrationform-container">
                <header>Registration Form</header>



            <Container>
                <Col>

                </Col>


                <Col>
                <form onSubmit = {handleSubmit} >
                <fieldset className='registrationform-fieldset'>
                <div class = "input-field">
                <label>Name: </label>
                <FontAwesomeIcon icon = {faChild} className='registrationform-icon'></FontAwesomeIcon>
                <input 
                    placeholder='Andrea Joane Jane Eyre'
                    type="text"
                    onChange = {(e) =>setName(e.target.value)}
                    value = {name}
                    className={` ${emptyFields.includes('name') ? 'error' : ''} inputs`}
                />
                </div>



                <div class = "input-field">
                <label>Initials: </label>
                <FontAwesomeIcon icon = {faChild} className='registrationform-icon'></FontAwesomeIcon>
                <input 
                    placeholder='A.J'
                    type="text"
                    onChange = {(e) =>setInitials(e.target.value)}
                    value = {initials}
                    // className = {emptyFields.includes('initials') ? 'error': ''}
                    className={` ${emptyFields.includes('initials') ? 'error' : ''} inputs`}
                />
                </div>

                <div class = "input-field">
                <label>First Name: </label>
                <FontAwesomeIcon icon = {faChild} className='registrationform-icon'></FontAwesomeIcon>
                <input 
                    placeholder='Jane'
                    type="text"
                    onChange = {(e) =>setFirstName(e.target.value)}
                    value = {firstName}
                    // className = {emptyFields.includes('firstName') ? 'error': ''}
                    className={` ${emptyFields.includes('firstName') ? 'error' : ''} inputs`}
                />
                </div>


                <div class = "input-field">
                <label>Last Name: </label>
                <FontAwesomeIcon icon = {faChild} className='registrationform-icon'></FontAwesomeIcon>
                <input 
                    placeholder='Eyre'
                    type="text"
                    onChange = {(e) =>setLastName(e.target.value)}
                    value = {lastName}
                    // className = {emptyFields.includes('lastName') ? 'error': ''}
                    className={` ${emptyFields.includes('lastName') ? 'error' : ''} inputs`}
                />
                </div>

                <div class = "input-field">
                <label>Enrollment No: </label>
                <FontAwesomeIcon icon = {faIdCard } className='registrationform-icon'></FontAwesomeIcon>
                <input 
                    placeholder='T001'
                    type="text"
                    onChange = {(e) =>setEnrollmentNo(e.target.value)}
                    value = {enrollmentNo}
                    // className = {emptyFields.includes('enrollmentNo') ? 'error': ''}
                    className={` ${emptyFields.includes('enrollmentNo') ? 'error' : ''} inputs`}
                />
                </div>

                <div class = "input-field">
                <label>Birth day: </label>
                <FontAwesomeIcon icon = {faBirthdayCake} className='registrationform-icon'></FontAwesomeIcon>
                <input 
                    placeholder='12-3-2020'
                    type="date"
                    onChange = {(e) =>setBirthday(e.target.value)}
                    value = {birthday}
                    // className = {emptyFields.includes('birthday') ? 'error': ''}
                    className={` ${emptyFields.includes('birthday') ? 'error' : ''} inputs`}
                />
                </div>

<div class = "input-field">
                <label>Age: </label>
                <FontAwesomeIcon icon = {faHeart} className='registrationform-icon'></FontAwesomeIcon>
                <input 
                    placeholder='2'
                    type="number"
                    onChange = {(e) =>setAge(e.target.value)}
                    value = {age}
                    // className = {emptyFields.includes('age') ? 'error': ''}
                    className={` ${emptyFields.includes('age') ? 'error' : ''} inputs`}
                />
                </div>

                
<div class = "input-field">
                <label className='gender'>Gender: </label>
                <FontAwesomeIcon icon = {faTransgenderAlt} className='registrationform-icon'></FontAwesomeIcon>
                <select
                    name = "gender"
                    onChange = {(e) =>setGender(e.target.value)}
                    value = {gender}
                    // className = {emptyFields.includes('gender') ? 'error': ''}
                    className={` ${emptyFields.includes('gender') ? 'error' : ''} inputs`}
                >   
                    <option>Choose ...</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>
                </div>

                <div class = "input-field">
                <label className='message'>Address: </label>
                <FontAwesomeIcon icon = {faAddressBook} className='registrationform-icon'></FontAwesomeIcon>
                <input 
                    type="textarea"
                    placeholder="ABC road, Colombo"
                    onChange = {(e) =>setAddress(e.target.value)}
                    value = {address}
                    // className = {emptyFields.includes('address') ? 'error': ''}
                    className={` ${emptyFields.includes('address') ? 'error' : ''} inputs`}
                />
                </div>

<div class = "input-field">
                <label>City: </label>
                <FontAwesomeIcon icon = {faCity} className='registrationform-icon'></FontAwesomeIcon>
                <input 
                    type="text"
                    placeholder='Colombo'
                    onChange = {(e) =>setCity(e.target.value)}
                    value = {city}
                    // className = {emptyFields.includes('city') ? 'error': ''}
                    className={` ${emptyFields.includes('city') ? 'error' : ''} inputs`}
                />
                </div>

<div class = "input-field">
                <label>Zip: </label>
                <FontAwesomeIcon icon = {faPersonShelter} className='registrationform-icon'></FontAwesomeIcon>
                <input 
                    type="text"
                    placeholder='60000'
                    onChange = {(e) =>setZip(e.target.value)}
                    value = {zip}
                    className={` ${emptyFields.includes('zip') ? 'error' : ''} inputs`}
                    // className = {emptyFields.includes('zip') ? 'error': ''}
                />
                </div>

<div class = "input-field">
                <label>Service Type: </label>
                <FontAwesomeIcon icon = {faChalkboardTeacher} className='registrationform-icon'></FontAwesomeIcon>
                <select
                    name = 'serviceType'
                    onChange = {(e) =>setServiceType(e.target.value)}
                    value = {serviceType}
                    className={` ${emptyFields.includes('serviceType') ? 'error' : ''} inputs`}
                    // className = {emptyFields.includes('serviceType') ? 'error': ''}
                >
                    <option>Choose ...</option>
                    <option>Toddler Service</option>
                    <option>Pre-School Service</option>
                    <option>After School Service</option>
                </select>
                </div>
                </fieldset>
                
                <fieldset className = "registrationform-fieldset">
                <header>Mother Information</header>
            
                <div class = "input-field">
                <label>Name: </label>
                <FontAwesomeIcon icon = {faPerson} className='registrationform-icon'></FontAwesomeIcon>
                <input 
                    placeholder='A.K.Hilary Perera'
                    type="text"
                    onChange = {(e) =>setMotherName(e.target.value)}
                    value = {motherName}
                    className={` ${emptyFields.includes('motherName') ? 'error' : ''} inputs`}
                    // className = {emptyFields.includes('motherName') ? 'error': ''}
                />
                </div>

<div class = "input-field">
                <label>Address: </label>
                <FontAwesomeIcon icon = {faAddressBook} className='registrationform-icon'></FontAwesomeIcon>
                <input 
                     placeholder="ABC road, Colombo"
                    type="text"
                    onChange = {(e) =>setMotherAddress(e.target.value)}
                    value = {motherAddress}
                    className={` ${emptyFields.includes('motherAddress') ? 'error' : ''} inputs`}
                    // className = {emptyFields.includes('motherAddress') ? 'error': ''}
                />
                </div>

<div class = "input-field">
                <label>Occupation: </label>
                <FontAwesomeIcon icon = {faPen} className='registrationform-icon'></FontAwesomeIcon>
                <input 
                    placeholder='Teacher'
                    type="text"
                    onChange = {(e) =>setMotherOccupation(e.target.value)}
                    value = {motherOccupation}
                    className={` ${emptyFields.includes('motherOccupation') ? 'error' : ''} inputs`}
                    // className = {emptyFields.includes('motherOccupation') ? 'error': ''}
                />
                </div>

<div class = "input-field">
                <label>NIC No: </label>
                <FontAwesomeIcon icon = {faIdCard} className='registrationform-icon'></FontAwesomeIcon>
                <input 
                     placeholder="897866473v"
                    type="text"
                    onChange = {(e) =>setMotherNicNo(e.target.value)}
                    value = {motherNicNo}
                    className={` ${emptyFields.includes('motherNicNo') ? 'error' : ''} inputs`}
                    // className = {emptyFields.includes('motherNicNo') ? 'error': ''}
                />
                </div>

<div class = "input-field">
                <label>Email: </label>
                <FontAwesomeIcon icon = {faMailReply} className='registrationform-icon'></FontAwesomeIcon>
                <input 
                     placeholder="Hil45@gmail.com"
                    type="email"
                    onChange = {(e) =>setMotherEmail(e.target.value)}
                    value = {motherEmail}
                    className={` ${emptyFields.includes('motherEmail') ? 'error' : ''} inputs`}
                    // className = {emptyFields.includes('motherEmail') ? 'error': ''}
                />
                </div>

<div class = "input-field">
                <label>Telephone No: </label>
                <FontAwesomeIcon icon = {faPhone} className='registrationform-icon'></FontAwesomeIcon>
                <input 
                    placeholder='0934487698'
                    type="text"
                    onChange = {(e) =>setMotherTelephoneNo(e.target.value)}
                    value = {motherTelephoneNo}
                    className={` ${emptyFields.includes('motherTelephoneNo') ? 'error' : ''} inputs`}
                    // className = {emptyFields.includes('motherTelephoneNo') ? 'error': ''}
                />
                </div>

<div class = "input-field">
                <label>Work Telephone No: </label>
                <FontAwesomeIcon icon = {faPhoneFlip} className='registrationform-icon'></FontAwesomeIcon>
                <input 
                    placeholder='8763345893'
                    type="text"
                    onChange = {(e) =>setMotherWorkTelephoneNo(e.target.value)}
                    value = {motherWorkTelephoneNo}
                    className={` ${emptyFields.includes('motherWorkTelephoneNo') ? 'error' : ''} inputs`}
                    // className = {emptyFields.includes('motherWorkTelephoneNo') ? 'error': ''}
                />
                </div>
                </fieldset>
{/* father information */}
                <fieldset className = "registrationform-fieldset">
                <header>Father Information</header>
            
                <div class = "input-field">
            <label>Name: </label>
            <FontAwesomeIcon icon = {faPerson} className='registrationform-icon'></FontAwesomeIcon>
                <input 
                    placeholder='w.K.I.Peris'
                    type="text"
                    onChange = {(e) =>setFatherName(e.target.value)}
                    value = {fatherName}
                    className={` ${emptyFields.includes('fatherName') ? 'error' : ''} inputs`}
                    // className = {emptyFields.includes('fatherName') ? 'error': ''}
                />
                </div>

<div class = "input-field">
                <label>Address: </label>
                <FontAwesomeIcon icon = {faAddressCard} className='registrationform-icon'></FontAwesomeIcon>
                <input 
                     placeholder="ABC road, Colombo"
                    type="text"
                    onChange = {(e) =>setFatherAddress(e.target.value)}
                    value = {fatherAddress}
                    className={` ${emptyFields.includes('fatherAddress') ? 'error' : ''} inputs`}
                    // className = {emptyFields.includes('fatherAddress') ? 'error': ''}
                />
                </div>

<div class = "input-field">
                <label>Occupation: </label>
                <FontAwesomeIcon icon = {faPen} className='registrationform-icon'></FontAwesomeIcon>
                <input 
                     placeholder="Army Officer"
                    type="text"
                    onChange = {(e) =>setFatherOccupation(e.target.value)}
                    value = {fatherOccupation}
                    className={` ${emptyFields.includes('fatherOccupation') ? 'error' : ''} inputs`}
                    // className = {emptyFields.includes('fatherOccupation') ? 'error': ''}
                />
                </div>

<div class = "input-field">
                <label>NIC No: </label>
                <FontAwesomeIcon icon = {faIdCard} className='registrationform-icon'></FontAwesomeIcon>
                <input 
                     placeholder="873455786v"
                    type="text"
                    onChange = {(e) =>setFatherNicNo(e.target.value)}
                    value = {fatherNicNo}
                    className={` ${emptyFields.includes('fatherNicNo') ? 'error' : ''} inputs`}
                    // className = {emptyFields.includes('fatherNicNo') ? 'error': ''}
                />
                </div>

<div class = "input-field">
                <label>Email: </label>
                <FontAwesomeIcon icon = {faMailReply} className='registrationform-icon'></FontAwesomeIcon>
                <input 
                     placeholder="John@gmail.com"
                    type="email"
                    onChange = {(e) =>setFatherEmail(e.target.value)}
                    value = {fatherEmail}
                    className={` ${emptyFields.includes('fatherEmail') ? 'error' : ''} inputs`}
                    // className = {emptyFields.includes('fatherEmail') ? 'error': ''}
                />
                </div>

<div class = "input-field">
                <label>Telephone No: </label>
                <FontAwesomeIcon icon = {faPhone} className='registrationform-icon'></FontAwesomeIcon>
                <input 
                    placeholder='9873345674'
                    type="text"
                    onChange = {(e) =>setFatherTelephoneNo(e.target.value)}
                    value = {fatherTelephoneNo}
                    className={` ${emptyFields.includes('fatherTelephoneNo') ? 'error' : ''} inputs`}
                    // className = {emptyFields.includes('fatherTelephoneNo') ? 'error': ''}
                />
                </div>

<div class = "input-field">
                <label>Work Telephone No: </label>
                <FontAwesomeIcon icon = {faPhone} className='registrationform-icon'></FontAwesomeIcon>
                <input 
                    placeholder='9873345674'
                    type="text"
                    onChange = {(e) =>setFatherWorkTelephoneNo(e.target.value)}
                    value = {fatherWorkTelephoneNo}
                    className={` ${emptyFields.includes('fatherWorkTelephoneNo') ? 'error' : ''} inputs`}
                    // className = {emptyFields.includes('fatherWorkTelephoneNo') ? 'error': ''}
                />
                </div>
                </fieldset>
        
{/* guardian  */}


                <fieldset className = "registrationform-fieldset">
                <header>Guardian Information</header>
            
                <div class = "input-field">
            <label>Name: </label>
            <FontAwesomeIcon icon = {faPerson} className='registrationform-icon'></FontAwesomeIcon>
                <input 
                    placeholder='Edward smith'
                    type="text"
                    onChange = {(e) =>setGuardianName(e.target.value)}
                    value = {guardianName}
                    className={` ${emptyFields.includes('guardianName') ? 'error' : ''} inputs`}
                    // className = {emptyFields.includes('guardianName') ? 'error': ''}
                />
                </div>

<div class = "input-field">
                <label>Address: </label>
                <FontAwesomeIcon icon = {faAddressBook} className='registrationform-icon'></FontAwesomeIcon>
                <input 
                     placeholder="New town road, Colombo"
                    type="text"
                    onChange = {(e) =>setGuardianAddress(e.target.value)}
                    value = {guardianAddress}
                    className={` ${emptyFields.includes('guardianAddress') ? 'error' : ''} inputs`}
                    // className = {emptyFields.includes('guardianAddress') ? 'error': ''}
                />
                </div>
                
                <div class = "input-field">
                <label>NIC No: </label>
                <FontAwesomeIcon icon = {faIdCard} className='registrationform-icon'></FontAwesomeIcon>
                <input 
                     placeholder="347866738v"
                    type="text"
                    onChange = {(e) =>setGuardianNicNo(e.target.value)}
                    value = {guardianNicNo}
                    className={` ${emptyFields.includes('guardianNicNo') ? 'error' : ''} inputs`}
                    // className = {emptyFields.includes('guardianNicNo') ? 'error': ''}
                />
                </div>

<div class = "input-field">
                <label>Email: </label>
                <FontAwesomeIcon icon = {faMailReply} className='registrationform-icon'></FontAwesomeIcon>
                <input 
                     placeholder="snith@gmail.com"
                    type="email"
                    onChange = {(e) =>setGuardianEmail(e.target.value)}
                    value = {guardianEmail}
                    className={` ${emptyFields.includes('guardianEmail') ? 'error' : ''} inputs`}
                    // className = {emptyFields.includes('guardianEmail') ? 'error': ''}
                />
                </div>

<div class = "input-field">
                <label>Telephone : </label>
                <FontAwesomeIcon icon = {faPhone} className='registrationform-icon'></FontAwesomeIcon>
                <input 
                     placeholder="9873345783"
                    type="text"
                    onChange = {(e) =>setGuardianTelephoneNo(e.target.value)}
                    value = {guardianTelephoneNo}
                    className={` ${emptyFields.includes('guardianTelephoneNo') ? 'error' : ''} inputs`}
                    // className = {emptyFields.includes('guardianTelephoneNo') ? 'error': ''}
                />
                </div>
               </fieldset>

{/* bank information */}
            <fieldset className = "registrationform-fieldset">
            <header>Bank Information</header>
            
            <div class = "input-field">
                <label>Card Holder Name: </label>
                <FontAwesomeIcon icon = {faShieldBlank} className='registrationform-icon'></FontAwesomeIcon>
                <input 
                     placeholder="Jane Smith"
                    type="text"
                    onChange = {(e) =>setCardHolderName(e.target.value)}
                    value = {cardHolderName}
                    className={` ${emptyFields.includes('cardHolderName') ? 'error' : ''} inputs`}
                    // className = {emptyFields.includes('cardHolderName') ? 'error': ''}
                />
             </div>

<div class = "input-field">
                <label>Name on Card: </label>
                <FontAwesomeIcon icon = {faPerson} className='registrationform-icon'></FontAwesomeIcon>
                <input 
                     placeholder="BOC eplus"
                    type="text"
                    onChange = {(e) =>setNameOnCard(e.target.value)}
                    value = {nameOnCard}
                    className={` ${emptyFields.includes('nameOnCard') ? 'error' : ''} inputs`}
                    // className = {emptyFields.includes('nameOnCard') ? 'error': ''}
                />
                </div>

<div class = "input-field">
                <label>Card Number: </label>
                <FontAwesomeIcon icon = {faCreditCardAlt} className='registrationform-icon'></FontAwesomeIcon>
                <input 
                     placeholder="0987 4567 3456 2345"
                    type="text"
                    onChange = {(e) =>setCardNumber(e.target.value)}
                    value = {cardNumber}
                    className={` ${emptyFields.includes('cardNumber') ? 'error' : ''} inputs`}
                    // className = {emptyFields.includes('cardNumber') ? 'error': ''}
                />
                </div>

<div class = "input-field">
                <label>Expire Date: </label>
                <FontAwesomeIcon icon = {faExplosion} className='registrationform-icon'></FontAwesomeIcon>
                
                <input 
                    placeholder='2-23-2025'
                    type="date"
                    onChange = {(e) =>setExpiration(e.target.value)}
                    value = {expiration}
                    className={` ${emptyFields.includes('expiration') ? 'error' : ''} inputs`}
                    // className = {emptyFields.includes('expiration') ? 'error': ''}
                />
                </div>

<div class = "input-field">
                <label>CVV: </label>
                <FontAwesomeIcon icon = {faICursor} className='registrationform-icon'></FontAwesomeIcon>
                <input 
                    placeholder='344'
                    type="text"
                    onChange = {(e) =>setCvv(e.target.value)}
                    value = {cvv}
                    className={` ${emptyFields.includes('cvv') ? 'error' : ''} inputs`}
                    // className = {emptyFields.includes('cvv') ? 'error': ''}
                />
                </div>
                </fieldset>
        
                <button className = "submit">Add To Enrollment List</button>
                {error && <div className ="error ">{error}</div>}


            </form>
                </Col>
            </Container>

                
           
            </div>
        </div>
    )
};

export default ChildEnrollmentform;

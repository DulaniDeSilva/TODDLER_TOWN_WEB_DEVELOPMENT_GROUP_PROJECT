import {useState} from 'react'
import { useChildEnrollmentContext } from '../../hooks/useChildEnrollmentContext';
import { useAuthContext } from '../../hooks/useAuthContext';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

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
            <Form onSubmit = {handleSubmit}>

                <Form.Group className="mb-3" controlId="">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" 
                    placeholder="Andrea Jane Charlote Eyre" 
                    onChange = {(e) =>setName(e.target.value)}
                    value = {name}
                    className = {emptyFields.includes('name')? 'error': ''}
                />
                </Form.Group>
                
            <Row className="mb-3">
                <Form.Group as={Col} controlId="">
                <Form.Label>Initials</Form.Label>
                <Form.Control type="text" 
                    placeholder="A. J" 
                    onChange = {(e) =>setInitials(e.target.value)}
                    value = {initials}
                    className = {emptyFields.includes('initials')? 'error': ''}
                />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" 
                    placeholder="Jane" 
                    onChange = {(e) =>setFirstName(e.target.value)}
                    value = {firstName}
                    className = {emptyFields.includes('firstName')? 'error': ''}
                />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last Name:</Form.Label>
                <Form.Control type="text" 
                    placeholder="Eyre" 
                    onChange = {(e) =>setLastName(e.target.value)}
                    value = {lastName}
                    className = {emptyFields.includes('lastName')? 'error': ''}
                />
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Enrollment No:</Form.Label>
                <Form.Control type="text" 
                    placeholder="T032" 
                    onChange = {(e) =>setEnrollmentNo(e.target.value)}
                    value = {enrollmentNo}
                    className = {emptyFields.includes('enrollmentNo')? 'error': ''}
                />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Birth day</Form.Label>
                <Form.Control type="date" 
                    onChange = {(e) =>setBirthday(e.target.value)}
                    value = {birthday}
                    className = {emptyFields.includes('birthday')? 'error': ''}
                />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Age:</Form.Label>
                <Form.Control type="number" 
                    placeholder="2" 
                    onChange = {(e) =>setAge(e.target.value)}
                    value = {age}
                    className = {emptyFields.includes('age')? 'error': ''}
                />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Gender:</Form.Label>
                <Form.Control type="text" 
                    placeholder="Male" 
                    onChange = {(e) =>setGender(e.target.value)}
                    value = {gender}
                    className = {emptyFields.includes('gender')? 'error': ''}
                />
                </Form.Group>
            </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address:</Form.Label>
                <Form.Control
                        placeholder="ABC road, Colombo" 
                        onChange = {(e) =>setAddress(e.target.value)}
                        value = {address} 
                        className = {emptyFields.includes('address')? 'error': ''}/>
                </Form.Group>

            <Row className="mb-3">
                <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>City:</Form.Label>
                <Form.Control 
                        placeholder=" Colombo" 
                        onChange = {(e) =>setCity(e.target.value)}
                        value = {city} 
                        className = {emptyFields.includes('city')? 'error': ''}
                        />
                        
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Zip:</Form.Label>
                <Form.Control 
                        placeholder="349503" 
                        onChange = {(e) =>setZip(e.target.value)}
                        value = {zip} 
                        className = {emptyFields.includes('zip')? 'error': ''}
                        />
                </Form.Group>
            </Row>

                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Service Type</Form.Label>
                    <Form.Select defaultValue="Choose..."
                        onChange = {(e) =>setServiceType(e.target.value)}
                        value = {serviceType}
                        className = {emptyFields.includes('serviceType')? 'error': ''}>
                        <option>Choose...</option>
                        <option>Toddler Service</option>
                        <option>Pre-School Service</option>
                        <option>After School Service</option>
                    </Form.Select>
                </Form.Group>
            <Row>
                <h1>Mother Information</h1>
            </Row>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" 
                        placeholder="Eyre" 
                        onChange = {(e) =>setMotherName(e.target.value)}
                        value = {motherName}
                        className = {emptyFields.includes('motherName')? 'error': ''}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Address:</Form.Label>
                    <Form.Control type="text" 
                        placeholder="ABC road, Colombo" 
                        onChange = {(e) =>setMotherAddress(e.target.value)}
                        value = {motherAddress}
                        className = {emptyFields.includes('motherAddress')? 'error': ''}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Occupation:</Form.Label>
                    <Form.Control type="text" 
                        placeholder="School Teacher" 
                        onChange = {(e) =>setMotherOccupation(e.target.value)}
                        value = {motherOccupation}
                        className = {emptyFields.includes('motherOccupation')? 'error': ''}
                    />
                </Form.Group>

                <Row>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>NIC no:</Form.Label>
                    <Form.Control type="text" 
                        placeholder="354523897v" 
                        onChange = {(e) =>setMotherNicNo(e.target.value)}
                        value = {motherNicNo}
                        className = {emptyFields.includes('motherNicNo')? 'error': ''}
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" 
                        placeholder="mother@gmail.com" 
                        onChange = {(e) =>setMotherEmail(e.target.value)}
                        value = {motherEmail}
                        className = {emptyFields.includes('motherEmail')? 'error': ''}
                    />
                </Form.Group>
                </Row>

                <Row>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Telephone No:</Form.Label>
                    <Form.Control type="text" 
                        placeholder="047-38493029" 
                        onChange = {(e) =>setMotherTelephoneNo(e.target.value)}
                        value = {motherTelephoneNo}
                        className = {emptyFields.includes('motherTelephoneNo')? 'error': ''}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Work Telephone No:</Form.Label>
                    <Form.Control type="text" 
                        placeholder="047-39834590" 
                        onChange = {(e) =>setMotherWorkTelephoneNo(e.target.value)}
                        value = {motherWorkTelephoneNo}
                        className = {emptyFields.includes('motherWorkTelephoneNo')? 'error': ''}
                    />
                </Form.Group>
                </Row>

{/* father information */}
            <Row>
                <h1>Father Information</h1>
            </Row>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" 
                        placeholder="Eyre" 
                        onChange = {(e) =>setFatherName(e.target.value)}
                        value = {fatherName}
                        className = {emptyFields.includes('fatherName')? 'error': ''}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Address:</Form.Label>
                    <Form.Control type="text" 
                        placeholder="ABC road, Colombo" 
                        onChange = {(e) =>setFatherAddress(e.target.value)}
                        value = {fatherAddress}
                        className = {emptyFields.includes('fatherAddress')? 'error': ''}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Occupation:</Form.Label>
                    <Form.Control type="text" 
                        placeholder="School Teacher" 
                        onChange = {(e) =>setFatherOccupation(e.target.value)}
                        value = {fatherOccupation}
                        className = {emptyFields.includes('fatherOccupation')? 'error': ''}
                    />
                </Form.Group>

                <Row>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>NIC no:</Form.Label>
                    <Form.Control type="text" 
                        placeholder="354523897v" 
                        onChange = {(e) =>setFatherNicNo(e.target.value)}
                        value = {fatherNicNo}
                        className = {emptyFields.includes('fatherNicNo')? 'error': ''}
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" 
                        placeholder="father@gmail.com" 
                        onChange = {(e) =>setFatherEmail(e.target.value)}
                        value = {fatherEmail}
                        className = {emptyFields.includes('fatherEmail')? 'error': ''}
                    />
                </Form.Group>
                </Row>

                <Row>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Telephone No:</Form.Label>
                    <Form.Control type="text" 
                        placeholder="047-38493029" 
                        onChange = {(e) =>setFatherTelephoneNo(e.target.value)}
                        value = {fatherTelephoneNo}
                        className = {emptyFields.includes('fatherTelephoneNo')? 'error': ''}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Work Telephone No:</Form.Label>
                    <Form.Control type="text" 
                        placeholder="047-39834590" 
                        onChange = {(e) =>setFatherWorkTelephoneNo(e.target.value)}
                        value = {fatherWorkTelephoneNo}
                        className = {emptyFields.includes('fatherWorkTelephoneNo')? 'error': ''}

                    />
                </Form.Group>
                </Row>

{/* guardian  */}


<Row>
                <h1>Guardian Information</h1>
            </Row>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" 
                        placeholder="Eyre" 
                        onChange = {(e) =>setGuardianName(e.target.value)}
                        value = {guardianName}
                        className = {emptyFields.includes('guardianName')? 'error': ''}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Address:</Form.Label>
                    <Form.Control type="text" 
                        placeholder="ABC road, Colombo" 
                        onChange = {(e) =>setGuardianAddress(e.target.value)}
                        value = {guardianAddress}
                        className = {emptyFields.includes('guardianAddress')? 'error': ''}
                    />
                </Form.Group>


                <Row>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>NIC no:</Form.Label>
                    <Form.Control type="text" 
                        placeholder="354523897v" 
                        onChange = {(e) =>setGuardianNicNo(e.target.value)}
                        value = {guardianNicNo}
                        className = {emptyFields.includes('guardianNicNo')? 'error': ''}
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" 
                        placeholder="guardian@gmail.com" 
                        onChange = {(e) =>setGuardianEmail(e.target.value)}
                        value = {guardianEmail}
                        className = {emptyFields.includes('guardianEmail')? 'error': ''}
                    />
                </Form.Group>
                </Row>

                <Row>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Telephone No:</Form.Label>
                    <Form.Control type="text" 
                        placeholder="047-38493029" 
                        onChange = {(e) =>setGuardianTelephoneNo(e.target.value)}
                        value = {guardianTelephoneNo}
                        className = {emptyFields.includes('guardinaTelephoneNo')? 'error': ''}
                    />
                </Form.Group>

                </Row>

{/* bank information */}
            <Row>
            <h1>Bank Information</h1>
            </Row>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Card Holder Name:</Form.Label>
                    <Form.Control type="text" 
                        placeholder="Eyre" 
                        onChange = {(e) =>setCardHolderName(e.target.value)}
                        value = {cardHolderName}
                        className = {emptyFields.includes('cardHolderName')? 'error': ''}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Name on Card:</Form.Label>
                    <Form.Control type="text" 
                        placeholder="BOC eplus" 
                        onChange = {(e) =>setNameOnCard(e.target.value)}
                        value = {nameOnCard}
                        className = {emptyFields.includes('nameOnCard')? 'error': ''}
                    />
                </Form.Group>


                <Row>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Card Number:</Form.Label>
                    <Form.Control type="text" 
                        placeholder="3490529-34592" 
                        onChange = {(e) =>setCardNumber(e.target.value)}
                        value = {cardNumber}
                        className = {emptyFields.includes('cardNumber')? 'error': ''}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Expire Date:</Form.Label>
                    <Form.Control type="date"  
                        onChange = {(e) =>setExpiration(e.target.value)}
                        value = {expiration}
                        className = {emptyFields.includes('expiration')? 'error': ''}
                    />
                </Form.Group>
                </Row>

                <Row>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>CVV:</Form.Label>
                    <Form.Control type="text" 
                        placeholder="047" 
                        onChange = {(e) =>setCvv(e.target.value)}
                        value = {cvv}
                        className = {emptyFields.includes('cvv')? 'error': ''}
                    />
                </Form.Group>

                </Row>



                

            
   



                <button>Add To Enrollment List</button>
                {error && <div className ="error">{error}</div>}


            </Form>
            </Container>
        </div>
    )
};

export default ChildEnrollmentform;

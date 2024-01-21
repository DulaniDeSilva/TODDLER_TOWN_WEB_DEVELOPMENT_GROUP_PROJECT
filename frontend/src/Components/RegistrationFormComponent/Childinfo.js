import React, {Children, useState} from 'react'
// import { useChildEnrollmentContext } from '../../hooks/useChildEnrollmentContext';
import { useAuthContext } from '../../hooks/useAuthContext';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FormContainer from './FormContainer';
import ChildInterface from '../../Pages/ChildInterface';
export default function Childinfo() {
 

 
  // State hook for documents
  const [documents, setDocuments] = useState([]);
  // State hooks for error handling
  // const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);


  const calcAge = (dateString) =>{
    const today = new Date()
    const birthDate = new Date(dateString)
    let age = today.getFullYear() - birthDate.getFullYear()
    const m = today.getMonth() - birthDate.getMonth()
    if(m<0 || (m ===0 && today.getDate() < birthDate.getDate())){
      age--
    }
    return age
  }


  const [form, setForm] = useState([]);
  const [error, setError] = useState([]);
  const [message, setMessage] = useState([]);
  const setField = (field, value) =>{
    setForm({
      ...form,
      [field]:value
    })
    if(!!error[field])
    setError({
      ...error,
      [field]:null
    })
  }







  const validateForm = () =>{
    const {name, initials, firstName,lastName, enrollmentNo, date, age,gender}  = form;
    const newErrors = {};

    if(!name || name === '')
      newErrors.name = "Please enter a name"
    if(!initials || initials === '')
      newErrors.initials = "Enter initials"
    if(!firstName || firstName === '')
      newErrors.firstName = "Enter first name"
    if(!lastName || lastName === '')
      newErrors.lastName = "Enter last name"
    if(!enrollmentNo || enrollmentNo === '')
      newErrors.enrollmentNo = "Enter enrollment"
    if(!date || date === '')
      newErrors.date = "Enter birth date"
    else if(calcAge(date) >16 || age === '')
      newErrors.age = "Age <16"
    if(!gender || gender === '')
      newErrors.gender = "Enter gender"
    return newErrors;
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setMessage('');

    const formErrors = validateForm();
    if(Object.keys(formErrors).length >0 ){
      setError(formErrors)
      setMessage("Whoops, please check for errors below hightlighted");
    }else{
      console.log(form)
      
    }
    

  }
  

  return (
    <div>
      <FormContainer>
      <h2>Registration Form</h2>
      <Form >
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" 
              placeholder="Andrea Jane Charlote Eyre" 
              onChange = {(e) =>setField('name',e.target.value)}
              value = {form.name}
              isInvalid = {!!error.name}
              className = {emptyFields.includes('name')? 'error': ''}
              />
        </Form.Group>
        <Form.Control.Feedback type = 'invalid'>
          {error.name}
        </Form.Control.Feedback>
      </Row>


      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridInitials">
          <Form.Label>Initials</Form.Label>
          <Form.Control type="text" 
              placeholder="A.J"
              onChange = {(e) =>setField('initials', e.target.value)}
              value = {form.initials}
              isInvalid = {!!error.initials}
              className = {emptyFields.includes('initials')? 'error': ''}
               />
                <Form.Control.Feedback type = 'invalid'>
                  {error.name}
                </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" 
            placeholder="Jane"
            onChange = {(e) =>setField('firstName',e.target.value)}
            value = {form.firstName}
            isInvalid = {!!error.firstName}
            className = {emptyFields.includes('firstName')? 'error': ''} />
             <Form.Control.Feedback type = 'invalid'>
              {error.name}
            </Form.Control.Feedback>
        </Form.Group>


        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" 
              placeholder="Eyre"
              onChange = {(e) =>setField('lastName',e.target.value)}
              value = {form.lastName}
              isInvalid = {!!error.lastName}
              className = {emptyFields.includes('lastName')? 'error': ''} />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEnrollmentNo">
          <Form.Label>Enroll No</Form.Label>
          <Form.Control type="text" 
            placeholder="T001" 
            onChange = {(e) =>setField('enrollmentNo',e.target.value)}
            value = {form.enrollmentNo}
            isInvalid = {!!error.enrollmentNo}
            className = {emptyFields.includes('name')? 'error': ''}
            />
          <Form.Control.Feedback type = 'invalid'>
            {error.enrollmentNo}
          </Form.Control.Feedback>
        </Form.Group>


        <Form.Group as={Col} controlId="formGridBirthDay">
          <Form.Label>Birthday</Form.Label>
          <Form.Control type="date"
               onChange = {(e) =>setField('date', e.target.value)}
              value = {form.date}
              isInvalid = {!!error.date}
              className = {emptyFields.includes('date')? 'error': ''}
               />
                <Form.Control.Feedback type = 'invalid'>
                  {error.date}
                </Form.Control.Feedback>
        </Form.Group>



        <Form.Group as={Col} controlId="formGridAge">
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" 
            placeholder='2'
            onChange = {(e) =>setField('age',e.target.value)}
            value = {form.age}
            className = {emptyFields.includes('age')? 'error': ''}
            isInvalid = {!!error.age}
            max={16} />
                <Form.Control.Feedback type = 'invalid'>
                  {error.age}
                </Form.Control.Feedback>
        </Form.Group>


        <Form.Group as={Col} controlId="formGridGender">
          <Form.Label>Gender</Form.Label>
          <Form.Select defaultValue="Gender" onChange={(e) => setField('gender',e.target.value)}>
            <option>Male</option>
            <option>Female</option>
          </Form.Select>
            <Form.Control.Feedback type = 'invalid'>
                  {error.age}
            </Form.Control.Feedback>
        </Form.Group>
      </Row>
      
      
      <Button variant="primary" type="submit" onClick = {handleSubmit}>
        Submit
      </Button>

      {/* {error && <div className ="error">{error}</div>} */}
    </Form>
    </FormContainer>
    </div>
  )
}

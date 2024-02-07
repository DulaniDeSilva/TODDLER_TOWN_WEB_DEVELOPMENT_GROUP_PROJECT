import { useChildEnrollmentContext } from "../../hooks/useChildEnrollmentContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAddressBook, faAddressCard, faBirthdayCake, faChalkboardTeacher, faChild, faCity, faCreditCardAlt, faExplosion,   faICursor, faIdCard, faMailReply, faPen, faPerson, faPersonShelter, faPhone, faPhoneFlip, faShieldBlank, faTransgenderAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const ChildEnrollmentDetails = ({child})=>{
   
    const {dispatch} = useChildEnrollmentContext();
    const {user} = useAuthContext();

    const handleClick = async() =>{
        if(!user){
            return 
        }
        const response = await fetch('/children/' + child._id,{
            method:'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json();

        if(response.ok){
            dispatch({type: 'DELETE_CHILD', payload:json})
        }
    }

    if(!child){
        return <div>No child data available</div>;
    }

    return(
        <div className = "childenrollment-details">
            
            <div >
            <hr></hr>
            <Row><h5><strong>Child Details<span><button className = "childenrollment-edit-button"><FontAwesomeIcon icon = {faEdit}></FontAwesomeIcon></button></span></strong></h5></Row>   
                <Row className = "childenrollment-div">
                    <p><strong><FontAwesomeIcon icon = {faChild} className = "childenrollment-icon"></FontAwesomeIcon>Child Name:</strong> {child.name}</p>
                    <p><strong><FontAwesomeIcon icon = {faChild} className = "childenrollment-icon"></FontAwesomeIcon>Initials:</strong> {child.initials}</p>
                    <p><strong><FontAwesomeIcon icon = {faChild} className = "childenrollment-icon"></FontAwesomeIcon>First Name:</strong> {child.firstName}</p>
                    <p><strong><FontAwesomeIcon icon = {faChild} className = "childenrollment-icon"></FontAwesomeIcon>Last Name:</strong> {child.lastName}</p>
                    <p><strong><FontAwesomeIcon icon = {faIdCard} className = "childenrollment-icon"></FontAwesomeIcon>Enrollment No:</strong> {child.enrollmentNo}</p>
                    <p><strong><FontAwesomeIcon icon = {faBirthdayCake} className = "childenrollment-icon"></FontAwesomeIcon>Birthday:</strong> {new Date(child.birthday).toLocaleDateString()}</p>
                    <p><strong><FontAwesomeIcon icon = {faTransgenderAlt} className = "childenrollment-icon"></FontAwesomeIcon>Age:</strong> {child.age}</p>
                    <p><strong><FontAwesomeIcon icon = {faAddressBook} className = "childenrollment-icon"></FontAwesomeIcon>Gender:</strong> {child.gender}</p>
                    <p><strong><FontAwesomeIcon icon = {faCity} className = "childenrollment-icon"></FontAwesomeIcon>Address Information:</strong></p>
                    <p><strong><FontAwesomeIcon icon = {faPersonShelter} className = "childenrollment-icon"></FontAwesomeIcon>Address:</strong> {child.address}</p>
                    <p><strong><FontAwesomeIcon icon = {faChalkboardTeacher} className = "childenrollment-icon"></FontAwesomeIcon>City:</strong> {child.city}</p>
                    <p><strong><FontAwesomeIcon icon = {faPersonShelter} className = "childenrollment-icon"></FontAwesomeIcon>Zip:</strong> {child.zip}</p>
                    <p><strong><FontAwesomeIcon icon = {faChalkboardTeacher} className = "childenrollment-icon"></FontAwesomeIcon>Service Type:</strong> {child.serviceType}</p>
                </Row>
               
<hr></hr>
                <Row><h5><strong>Mother's Information<span><button className = "childenrollment-edit-button"><FontAwesomeIcon icon = {faEdit}></FontAwesomeIcon></button></span></strong></h5></Row>   

                <Row className = "childenrollment-div">
                    <p><strong><FontAwesomeIcon icon = {faPerson} className = "childenrollment-icon"></FontAwesomeIcon>Name:</strong> {child.motherName}</p>
                    <p><strong><FontAwesomeIcon icon = {faAddressBook} className = "childenrollment-icon"></FontAwesomeIcon>Address:</strong> {child.motherAddress}</p>
                    <p><strong><FontAwesomeIcon icon = {faPen} className = "childenrollment-icon"></FontAwesomeIcon>Occupation:</strong> {child.motherOccupation}</p>
                    <p><strong><FontAwesomeIcon icon = {faIdCard} className = "childenrollment-icon"></FontAwesomeIcon>NIC No:</strong> {child.motherNicNo}</p>
                    <Row>
                        <p><strong><FontAwesomeIcon icon = {faPhone} className = "childenrollment-icon"></FontAwesomeIcon>Telephone No:</strong> {child.motherTelephoneNo}</p>
                        <p><strong><FontAwesomeIcon icon = {faPhoneFlip} className = "childenrollment-icon"></FontAwesomeIcon>Work Telephone No:</strong> {child.motherWorkTelephoneNo}</p>
                        <p><strong><FontAwesomeIcon icon = {faMailReply} className = "childenrollment-icon"></FontAwesomeIcon>Email:</strong> {child.motherEmail}</p>
                    </Row>
                </Row>     
                <hr></hr>

                <Row> <h5><strong>Father's Information<span><button className = "childenrollment-edit-button"><FontAwesomeIcon icon = {faEdit}></FontAwesomeIcon></button></span></strong></h5></Row>   

                <Row className = "childenrollment-div">
                    <p><strong><FontAwesomeIcon icon = {faPerson} className = "childenrollment-icon"></FontAwesomeIcon>Name:</strong> {child.fatherName}</p>
                    <p><strong><FontAwesomeIcon icon = {faAddressCard} className = "childenrollment-icon"></FontAwesomeIcon>Address:</strong> {child.fatherAddress}</p>
                    <p><strong><FontAwesomeIcon icon = {faPen} className = "childenrollment-icon"></FontAwesomeIcon>Occupation:</strong> {child.fatherOccupation}</p>
                    <p><strong><FontAwesomeIcon icon = {faIdCard} className = "childenrollment-icon"></FontAwesomeIcon>NIC No:</strong> {child.fatherNicNo}</p>
                    <Row>
                        <p><strong><FontAwesomeIcon icon = {faPhone} className = "childenrollment-icon"></FontAwesomeIcon>Telephone No:</strong> {child.fatherTelephoneNo}</p>
                        <p><strong><FontAwesomeIcon icon = {faPhoneFlip} className = "childenrollment-icon"></FontAwesomeIcon>Work Telephone No:</strong> {child.fatherWorkTelephoneNo}</p>
                        <p><strong><FontAwesomeIcon icon = {faMailReply} className = "childenrollment-icon"></FontAwesomeIcon>Email:</strong> {child.fatherEmail}</p>
                    </Row>
                </Row>     
                
                <hr></hr>      
                <Row><h5><strong>Guardian's Information<span><button className = "childenrollment-edit-button"><FontAwesomeIcon icon = {faEdit}></FontAwesomeIcon></button></span></strong></h5></Row>
                <Row className = "childenrollment-div">
                    <p><strong><FontAwesomeIcon icon = {faPerson} className = "childenrollment-icon"></FontAwesomeIcon>Name:</strong> {child.guardianName}</p>
                    <p><strong><FontAwesomeIcon icon = {faAddressBook} className = "childenrollment-icon"></FontAwesomeIcon>Address:</strong> {child.guardianAddress}</p>
                    <p><strong><FontAwesomeIcon icon = {faIdCard} className = "childenrollment-icon"></FontAwesomeIcon>NIC No:</strong> {child.guardianNicNo}</p>
                    <p><strong><FontAwesomeIcon icon = {faPhone} className = "childenrollment-icon"></FontAwesomeIcon>Telephone No:</strong> {child.guardianTelephoneNo}</p>
                    <p><strong><FontAwesomeIcon icon = {faMailReply} className = "childenrollment-icon"></FontAwesomeIcon>Email:</strong> {child.guardianEmail}</p>
                </Row>

                <hr></hr>
                <Row> <h5><strong>Bank Information<span><button className = "childenrollment-edit-button"><FontAwesomeIcon icon = {faEdit}></FontAwesomeIcon></button></span></strong></h5></Row>
               <Row className = "childenrollment-div">
                <p><strong><FontAwesomeIcon icon = {faShieldBlank} className = "childenrollment-icon"></FontAwesomeIcon>Card Holder Name:</strong> {child.cardHolderName}</p>
                <p><strong><FontAwesomeIcon icon = {faPerson} className = "childenrollment-icon"></FontAwesomeIcon>Name on Card:</strong> {child.nameOnCard}</p>
                <p><strong><FontAwesomeIcon icon = {faCreditCardAlt} className = "childenrollment-icon"></FontAwesomeIcon>Card Number:</strong> {child.cardNumber}</p>
                <p><strong><FontAwesomeIcon icon = {faExplosion} className = "childenrollment-icon"></FontAwesomeIcon>Expiration:</strong> {new Date(child.expiration).toLocaleDateString()}</p>
                <p><strong><FontAwesomeIcon icon = {faICursor} className = "childenrollment-icon"></FontAwesomeIcon>CVV:</strong> {child.cvv}</p>
               </Row>

                <button><span onClick = {handleClick}>Do not press..delete</span></button>
        </div>

                
        </div>
    )
};

export default ChildEnrollmentDetails;


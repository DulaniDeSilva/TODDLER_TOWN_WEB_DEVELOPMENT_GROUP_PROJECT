import { useChildEnrollmentContext } from "../../hooks/useChildEnrollmentContext";
import { useAuthContext } from "../../hooks/useAuthContext";

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
            
            <div>
                <h6><strong>Child Name:</strong> {child.name}</h6>
                <p><strong>Initials:</strong> {child.initials}</p>
                <p><strong>First Name:</strong> {child.firstName}</p>
                <p><strong>Last Name:</strong> {child.lastName}</p>
                <p><strong>Enrollment No:</strong> {child.enrollmentNo}</p>
                <p><strong>Birthday:</strong> {new Date(child.birthday).toLocaleDateString()}</p>
                <p><strong>Age:</strong> {child.age}</p>
                <p><strong>Gender:</strong> {child.gender}</p>

                <h6><strong>Address Information:</strong></h6>
                <p><strong>Address:</strong> {child.address}</p>
                <p><strong>City:</strong> {child.city}</p>
                <p><strong>Zip:</strong> {child.zip}</p>

                <h6><strong>Service Information:</strong></h6>
                <p><strong>Service Type:</strong> {child.serviceType}</p>

                <h6><strong>Mother's Information:</strong></h6>
                <p><strong>Name:</strong> {child.mother && child.mother.name}</p>
                <p><strong>Address:</strong> {child.mother && child.mother.address}</p>
                <p><strong>Occupation:</strong> {child.mother && child.mother.occupation}</p>
                <p><strong>NIC No:</strong> {child.mother && child.mother.nicNo}</p>
                <p><strong>Telephone No:</strong> {child.mother && child.mother.telephoneNo}</p>
                <p><strong>Work Telephone No:</strong> {child.mother && child.mother.workTelephoneNo}</p>
                <p><strong>Email:</strong> {child.mother && child.mother.email}</p>

                <h6><strong>Father's Information:</strong></h6>
                <p><strong>Name:</strong> {child.father &&child.father.name}</p>
                <p><strong>Address:</strong> {child.father && child.father.address}</p>
                <p><strong>Occupation:</strong> {child.father && child.father.occupation}</p>
                <p><strong>NIC No:</strong> {child.father && child.father.nicNo}</p>
                <p><strong>Telephone No:</strong> {child.father && child.father.telephoneNo}</p>
                <p><strong>Work Telephone No:</strong> {child.father && child.father.workTelephoneNo}</p>
                <p><strong>Email:</strong> {child.father && child.father.email}</p>

                <h6><strong>Guardian's Information:</strong></h6>
                <p><strong>Name:</strong> {child.guardian && child.guardian.name}</p>
                <p><strong>Address:</strong> {child.guardian && child.guardian.address}</p>
                <p><strong>NIC No:</strong> {child.guardian && child.guardian.nicNo}</p>
                <p><strong>Telephone No:</strong> {child.guardian && child.guardian.telephoneNo}</p>
                <p><strong>Email:</strong> {child.guardian && child.guardian.email}</p>

                <h6><strong>Bank Information:</strong></h6>
                <p><strong>Card Holder Name:</strong> {child.bankInformation && child.bankInformation.cardHolderName}</p>
                <p><strong>Name on Card:</strong> {child.bankInformation && child.bankInformation.nameOnCard}</p>
                <p><strong>Card Number:</strong> {child.bankInformation && child.bankInformation.cardNumber}</p>
                <p><strong>Expiration:</strong> {new Date(child.bankInformation && child.bankInformation.expiration).toLocaleDateString()}</p>
                <p><strong>CVV:</strong> {child.bankInformation && child.bankInformation.cvv}</p>

                <button><span onClick = {handleClick}>Delete</span></button>
        </div>

                
        </div>
    )
};

export default ChildEnrollmentDetails;


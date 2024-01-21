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


    return(
        <div className = "childenrollment-details">
            <h6><strong>Child Name:</strong>{child.name}</h6>
            <p><strong>Initials:</strong>{child.initials}</p>
            <p><strong>firstName:</strong>{child.firstName}</p>
            <p><strong>LastName:</strong>{child.lastName}</p>
            <p><strong>Enrollment No:</strong>{child.enrollmentNo}</p>
            <p><strong>Birthday: </strong>{child.birthday}</p>
            <p><strong>Age:</strong>{child.age}</p>
            <p><strong>Gender:</strong>{child.gender}</p>
            {/* <p><strong>Gender:</strong>{child.gender}</p> */}
            <button><span onClick = {handleClick}>Delete</span></button>
        </div>
    )
};

export default ChildEnrollmentDetails;


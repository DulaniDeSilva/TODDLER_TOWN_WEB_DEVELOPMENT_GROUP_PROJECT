const RegistrationDetails = ({children}) =>{
    return (
        <div>
            <h4> Details</h4>
            <p>Initials: {children.initials}</p>
            <p>firstName: {children.firstName}</p>
            <p>lastName: {children.lastName}</p>
            <p>birthday: {children.birthday}</p>
            <p>age: {children.age}</p>
            <p>gender: {children.gender}</p>
        </div>
    )
}
export default RegistrationDetails;

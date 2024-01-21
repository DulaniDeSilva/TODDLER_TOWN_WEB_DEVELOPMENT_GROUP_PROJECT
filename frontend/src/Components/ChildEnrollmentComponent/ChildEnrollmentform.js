import {useState} from 'react'
import { useChildEnrollmentContext } from '../../hooks/useChildEnrollmentContext';
import { useAuthContext } from '../../hooks/useAuthContext';


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
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([])
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(!user){
            setError('You must be logged in');
            return 
        }
        const children = {name, initials, firstName, lastName, enrollmentNo, birthday, age, gender};

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
            setError(null);
            setEmptyFields([]);
            console.log("new child added", json);
            dispatch({type: 'CREATE_CHILD', payload: json});
        }
    }

    return(
        <div>

            <form onSubmit = {handleSubmit}>
                <h4> Adding child to the list of enrollment</h4>

                <label>Name</label>
                <input
                    type = "text"
                    onChange={(e)=> setName(e.target.value)}
                    value = {name}
                    className = {emptyFields.includes('name')? 'error': ''}
                />

                <label>Initials</label>
                <input
                    type = "text"
                    onChange={(e)=> setInitials(e.target.value)}
                    value = {initials}
                    className = {emptyFields.includes('initials')? 'error': ''}
                />

                <label>First Name</label>
                <input
                    type = "text"
                    onChange={(e)=> setFirstName(e.target.value)}
                    value = {firstName}
                    className = {emptyFields.includes('firstName')? 'error': ''}
                />

                <label>Last Name</label>
                <input
                    type = "text"
                    onChange={(e)=> setLastName(e.target.value)}
                    value = {lastName}
                    className = {emptyFields.includes('lastName')? 'error': ''}
                />

                <label>Enrollment No</label>
                <input
                    type = "text"
                    onChange={(e)=> setEnrollmentNo(e.target.value)}
                    value = {enrollmentNo}
                    className = {emptyFields.includes('enrollmentNo')? 'error': ''}
                />

                <label>Birth day</label>
                <input
                    type = "date"
                    onChange={(e)=> setBirthday(e.target.value)}
                    value = {birthday}
                    className = {emptyFields.includes('birthday')? 'error': ''}
                />

                <label>Age</label>
                <input
                    type = "number"
                    onChange={(e)=> setAge(e.target.value)}
                    value = {age}
                    className = {emptyFields.includes('age')? 'error': ''}
                />

                <label>Gender</label>
                <input
                    type = "text"
                    onChange={(e)=> setGender(e.target.value)}
                    value = {gender}
                    className = {emptyFields.includes('gender')? 'error': ''}
                />

                <button>Add To Enrollment List</button>
                {error && <div className ="error">{error}</div>}


            </form>

        </div>
    )
};

export default ChildEnrollmentform;

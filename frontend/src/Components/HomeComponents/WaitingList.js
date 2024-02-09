import {useState} from 'react'
import { useWaitingListContext } from '../../hooks/useWaitingListContext';
// import { useAuthContext } from '../../hooks/useAuthContext';


// import girl from "../../Assets/Images/LogSign/girl.png";
import girl2 from "../../Assets/Images/LogSign/girl2.png";
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';


export default function WaitingList() {

  const {dispatch} = useWaitingListContext();
  // const {user} = useAuthContext();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) =>{
    e.preventDefault();

    // if(!user){
    //   setError('You must be logged in');
    //   return;
    // }
    const waitingList = {fullName, email, description};

    const response = await fetch('/waitingList',{
      method: 'POST',
      body:JSON.stringify(waitingList),
      headers:{
        'Content-Type' : 'application/json',
        // 'Authorization': `Bearer ${user.token}`
      }
    });
    const json = await response.json();
    if(!response.ok){
      setError(json.error);
      setEmptyFields(json.emptyFields || []);
    }
    if(response.ok){
      setFullName('');
      setEmail('');
      setDescription('');
      setError(null);
      setEmptyFields([]);
      console.log("new Subscription added", json);
      dispatch({type: 'CREATE_WAITINGLIST', payload:json});
    }
  }
 
  return (
    <div>
          <div className='waitinglist-topic'>
            <h3>Want to know more? </h3>
          </div>

      <Container className='waiting-list-container'>
        <Row>
      
          <Col className='waiting-list-col1'>
          <img className = "waiting-list-img" src ={girl2}  alt = "login background"/>
          
          </Col>

          <Col className='waiting-list-col2'>
            <form onSubmit = {handleSubmit}>
              
                <h2> 🙋‍♀️Send Us Your Message!💌</h2>
              
                <label>Full Name</label>
                <input type="text" 
                  onChange = {(e) =>setFullName(e.target.value)}
                  placeholder='A.J. Jane Eyre'
                  value = {fullName}
                  className = {emptyFields.includes('fullName')? 'error': ''}
                />
               
                <label>Email</label>
                <input type="email" 
                  placeholder='janeEyre56@gmail.com'
                  onChange = {(e) =>setEmail(e.target.value)}
                  value = {email}
                  className = {emptyFields.includes('email')? 'error': ''}
                />
                
                <label>Type your message...</label>
                <input
                    type = "text"
                    onChange={(e)=> setDescription(e.target.value)}
                    placeholder='I want to know ...'
                    value = {description}
                    className = {emptyFields.includes('description')? 'error': ''}
                />
                
              
              <button className='common-button'>SEND </button>
              {error && <div className ="error">{error}</div>}

            </form>
          </Col>
        
        </Row>
      </Container>






    </div>
  )
}

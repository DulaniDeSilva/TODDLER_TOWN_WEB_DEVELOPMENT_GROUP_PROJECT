import {useState} from 'react'
import { usePaymentContext } from '../../hooks/usePaymentContext';
import { useAuthContext } from '../../hooks/useAuthContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const PaymentDetail =()=>{
    const {dispatch} = usePaymentContext();
    const {user} = useAuthContext();

    const [paymentType, setPaymentType] = useState('');
    const [paymentName, setPaymentName] = useState('');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([])
    
    const handleSubmit = async (e) =>{
        e.preventDefault();

        if(!user){
            setError('You must be logged in');
            return 
        }

        const payment = {paymentType, paymentName,description, amount, date};

        const response = await fetch('/payment',{
            method: 'POST',
            body: JSON.stringify(payment),
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
            setPaymentType('');
            setPaymentName('');
            setDescription('');
            setAmount('');
            setDate('');
            setError(null);
            setEmptyFields([]);
            console.log("new Payment Selection added", json);
            dispatch({type: 'CREATE_PAYMENT', payload: json});
        }
    }

    return(
        <div>
            <Container>
            <form onSubmit = {handleSubmit}>
                <header> List of Payments</header>

                <Row>
                
                <Col>
                <div class = "input-field">
                <label>Payment Type</label>
              
                
                <select
                    value = {paymentType}
                    onChange = {(e) => setPaymentType(e.target.value)}
                    className={` ${emptyFields.includes('paymentType') ? 'error' : ''} inputs`}
                    >
                    <option>Select Payment Type</option>
                    <option>Toddler Payment</option>
                    <option>AfterSchool Payment</option>
                    <option>PreSchool Payment</option>
                </select>
                
                </div>
                </Col>
                


                <Col>
                <div class = "input-field">
                
                <label>Payment Name</label>
                

                
                <select
                    value = {paymentName}
                    onChange = {(e) => setPaymentName(e.target.value)}
                    className={` ${emptyFields.includes('paymentName') ? 'error' : ''} inputs`}
                    >
                    <option>Select Payment Name</option>
                    <option>Admission</option>
                    <option>Supplies</option>
                    <option>Food and drinks</option>
                </select>
            
                </div>
                </Col>
            </Row>

            <Row>
                <Col>
                <div class = "input-field">
                <label>Description</label>
                <select
                    value = {description}
                    onChange = {(e) => setDescription(e.target.value)}
                    className={` ${emptyFields.includes('description') ? 'error' : ''} inputs`}
                    >
                    <option>Description about payment</option>
                    <option>Toddler Payment</option>
                    <option>AfterSchool Payment</option>
                    <option>PreSchool Payment</option>
                </select>
                </div>
                </Col>

                <Col>
                <div class = "input-field">
                <label>Amount</label>
                <select
                    value = {amount}
                    onChange = {(e) => setAmount(e.target.value)}
                    className={` ${emptyFields.includes('amount') ? 'error' : ''} inputs`}
                     >
                    <option>Amount</option>
                    <option>20000</option>
                    <option>23444</option>
                    <option>1233</option>
                </select>
                </div>
                </Col>

                <Col>
                <div class = "input-field">
                <label>Date</label>
                <input
                    type = "date"
                    onChange={(e)=> setDate(e.target.value)}
                    value = {date}
                    className={` ${emptyFields.includes('date') ? 'error' : ''} inputs`}
                    
                />
                </div>
                </Col>
                
                </Row>

                


                
                <Row>
                <button className='pay-button '>Add To Payment List</button>
                {error  && <div className ="error">{error}</div>}
                </Row>

            </form>
</Container>
        </div>
    )
};

export default PaymentDetail;

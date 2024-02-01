import { usePaymentContext } from "../../hooks/usePaymentContext";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { useAuthContext } from "../../hooks/useAuthContext";
import Table from 'react-bootstrap/Table';
import {useEffect} from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';




const PaymentTable = ()=>{
    const {payment, dispatch} = usePaymentContext();
    const {user} = useAuthContext();
    useEffect(()=>{
        const fetchPayment = async () =>{
            const response = await fetch('/payment',{
                headers:{
                    'Authorization': `Bearer ${user.token}`

                }
            });
            const json = await response.json();

            if(response.ok){
               dispatch({type: 'SET_PAYMENT', payload: json});
            }
        };

        if(user){
            fetchPayment()
        }

       
    }, [dispatch, user]);

     const handleClick = async(paymentId) =>{
        if(!user){
            return 
        }
        const response = await fetch('/payment/' + paymentId,{
            method:'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json();

        if(response.ok){
            dispatch({type: 'DELETE_PAYMENT', payload:json})
        }
    }

    return(
        <div className = "container">
            
            <Table striped bordered hover>
            <thead>
             <tr>
                <th className = "heading">Payment Type</th>
                <th>Payment Name</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Time</th>
                <th> </th>
                </tr>
            </thead>

            <tbody>

            {payment && payment.map((payment)=>(
                <tr key = {payment._id} payment = {payment}>
                <td>{payment.paymentType}</td>
                <td>{payment.paymentName}</td>
                <td>{payment.description}</td>
                <td>{payment.amount}</td>
                <td>{payment.date}{formatDistanceToNow(new Date(payment.createdAt), {addSuffix:true})}</td>
                <td><button><span onClick={() =>handleClick(payment._id)}><FontAwesomeIcon icon = {faTrash} className='icon'></FontAwesomeIcon></span></button></td>
            </tr>

            ))}

           
            </tbody>
             </Table>



        </div>
    )
};

export default PaymentTable;
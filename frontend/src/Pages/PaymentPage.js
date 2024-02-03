import PaymentTable from '../Components/PaymentComponent/PaymentTable';
import PaymentDetail from '../Components/PaymentComponent/PaymentDetail';
// import Button from 'react-bootstrap/Button';
// import {Link } from 'react-router-dom';
import '../Assets/Styles/PaymentPage/Payment.css';
import PaymentCardPay from '../Components/PaymentComponent/PaymentCardPay';


const PaymentPage = ()=>{
    
    return(
        <div className='pages'>
           
        <div className="PaymentHome">
           <div>
                <PaymentDetail/>
           </div>
        <PaymentTable/>    
       </div>

       {/* <Link to="/gotoPayment" >
        <Button  className="pay-button new-button">
         Procced to Pay
        </Button>
      </Link> */}

      <PaymentCardPay/>

        </div>
    )
   
};

export default PaymentPage;
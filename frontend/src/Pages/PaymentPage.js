import PaymentTable from '../Components/PaymentComponent/PaymentTable';
import PaymentDetail from '../Components/PaymentComponent/PaymentDetail';
import Button from 'react-bootstrap/Button';
import {Link } from 'react-router-dom';

const PaymentPage = ()=>{
    
    return(
        <div className='pages'>
           
        <div className="PaymentHome">
           <div>
            <h1>Payment Page</h1>
                <PaymentDetail/>
           </div>
        <PaymentTable/>    
       </div>

       <Link to="/gotoPayment" >
        <Button  className="signinsubmit">
         Procced to Pay
        </Button>
      </Link>

        </div>
    )
   
};

export default PaymentPage;
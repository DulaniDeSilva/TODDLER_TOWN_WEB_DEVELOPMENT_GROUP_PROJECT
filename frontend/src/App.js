import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
// style sheet relevant to the react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// IMPORTS DULANI
import Home from './Pages/Home';

import Parentinfo from './Components/RegistrationFormComponent/Parentinfo';
import Guardianinfo from './Components/RegistrationFormComponent/Guardianinfo';
import Officeinfo from './Components/RegistrationFormComponent/Officeinfo';
import Staffinfo from './Components/RegistrationFormComponent/Staffinfo';
import Bankinfo from './Components/RegistrationFormComponent/Bankinfo';
import Maininterface from './Components/ParentComponents/Maininterface';


import InventoryPage from './Pages/InventoryPage';
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import ChildEnrollmentPage from "./Pages/ChildEnrollmentPage";
import ChildRegistrationPage from "./Pages/ChildRegistrationPage";
import PaymentPage from "./Pages/PaymentPage";
import Payment from "./Pages/Payment";
import Contacts from "./Components/HomeComponents/Contacts";

function App() {

  const {user} = useAuthContext();

 


  return (
    <div className="App">
  
    {/* DULANI ROUTER PATHS */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>} />
      
      
       
      
        <Route path = "/inventoryPage" element = { user ? (<InventoryPage/>) : (<Navigate to= "/loginPage"/>)}/>

        {/* <Route path = "/login" element = {!user ? <Login/> : <Navigate to = "/"/>}/> */}
        <Route path = "/loginPage" element = {!user ? <LoginPage/> : <Navigate to = "/" />}/>


        <Route path = "/signupPage" element = {!user ? <SignupPage/> : <Navigate to = "/" />}/>
         {/* <Route path = "/signup" element = {!user ? <Signup/> : <Navigate to = "/" />}/> */}

        <Route path = "/childEnrollmentPage" element = {<ChildEnrollmentPage/>}/>
        <Route path = "/childRegistrationPage" element = {<ChildRegistrationPage/>}/>

        <Route path = "/paymentPage" element = {<PaymentPage/>}/>
        <Route path = "/gotoPayment" element = {<Payment/>}/>

        <Route path = "/Aboutus" element = {<Contacts/>}/>


      
        <Route path = "/parentinfo" element = {<Parentinfo/>}/>
        <Route path = "/guardianinfo" element = {<Guardianinfo/>}/>
        <Route path = "/bankinfo" element = {<Bankinfo/>}/>
        <Route path = "/officeinfo" element = {<Officeinfo/>}/>
        <Route path = "/staffinfo" element = {<Staffinfo/>}/>
        <Route path = "/maininterface" element = {<Maininterface/>}/>
        <Route path = "*" element = {<div>Page Not found</div>}/>
      </Routes>
   
    </BrowserRouter>
   

 
    </div>
  );
}

export default App;

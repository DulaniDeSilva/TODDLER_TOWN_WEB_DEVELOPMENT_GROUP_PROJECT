import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
// style sheet relevant to the react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Assets/Styles/CommonStyles/linkStyles.css';


// IMPORTS DULANI
import Home from './Pages/Home';

// import Bankinfo from './Components/RegistrationFormComponent/Bankinfo';
import Maininterface from './Components/ParentComponents/Maininterface';


import InventoryPage from './Pages/InventoryPage';
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import ChildEnrollmentPage from "./Pages/ChildEnrollmentPage";
import ChildRegistrationPage from "./Pages/ChildRegistrationPage";
import PaymentPage from "./Pages/PaymentPage";
import WaitingList from "./Components/HomeComponents/WaitingList";
import ChildInterface from "./Pages/ChildInterface";
import CardDetails from "./Components/PaymentComponent/CardDetails";
import Services from "./Components/HomeComponents/Services";
import ToddlerService from "./Components/HomeComponents/ToddlerService";
import AfterService from "./Components/HomeComponents/AfterService";
import GetASpot from "./Components/HomeComponents/GetASpot";
import Us from "./Components/HomeComponents/Us";
import CardUpdateForm from "./Components/PaymentComponent/CardUpdateForm";
import UpdatedPaymentCards from "./Components/PaymentComponent/UpdatedPaymentCards";



function App() {

  const {user} = useAuthContext();

 


  return (
    <div className="App">
  
    {/* DULANI ROUTER PATHS */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>} />
      
      
       
      
        {/* <Route path = "/inventoryPage" element = { user ? (<InventoryPage/>) : (<Navigate to= "/loginPage"/>)}/> */}

        <Route path = "/inventoryPage" element = {<InventoryPage/>} />


        {/* <Route path = "/login" element = {!user ? <Login/> : <Navigate to = "/"/>}/> */}
        <Route path = "/loginPage" element = {!user ? <LoginPage/> : <Navigate to = "/" />}/>


        <Route path = "/signupPage" element = {!user ? <SignupPage/> : <Navigate to = "/" />}/>
         {/* <Route path = "/signup" element = {!user ? <Signup/> : <Navigate to = "/" />}/> */}

        <Route path = "/childEnrollmentPage" element = {<ChildEnrollmentPage/>}/>
        <Route path = "/childRegistrationPage" element = {<ChildRegistrationPage/>}/>
        <Route path = "/childInterface" element = {<ChildInterface/>}/>

        <Route path = "/paymentPage" element = {<PaymentPage/>}/>
        <Route path = "/cardDetails"  element = {<CardDetails/>}/>
        <Route path = "/cardUpdate"  element = {<CardUpdateForm/>}/>
        <Route path = "/cardUpdateList"  element = {<UpdatedPaymentCards/>}/>



        <Route path = "/waitingList" element = {<WaitingList/>}/>
        <Route path = "/preschoolservice" element = {<Services/>}/>
        <Route path = "/toddlerservice" element = {<ToddlerService/>}/>
        <Route path = "/afterschoolservice" element = {<AfterService/>}/>
        <Route path = "/getSpot" element = {<GetASpot/>}/>
        <Route path = "/us" element = {<Us/>}/>
        
      


      
        
        <Route path = "/maininterface" element = {<Maininterface/>}/>
        <Route path = "*" element = {<div>Page Not found</div>}/>
      </Routes>
   
    </BrowserRouter>
   

 
    </div>
  );
}

export default App;

import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
// style sheet relevant to the react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


// IMPORTS NILMI

// IMPORTS CHAMITHTHREE


// IMPORTS CHALANI


// IMPORTS DULANI
import Home from './Pages/Home';


import Childinfo from './Components/RegistrationFormComponent/Childinfo';
import Parentinfo from './Components/RegistrationFormComponent/Parentinfo';
import Guardianinfo from './Components/RegistrationFormComponent/Guardianinfo';
import Officeinfo from './Components/RegistrationFormComponent/Officeinfo';
import Staffinfo from './Components/RegistrationFormComponent/Staffinfo';
import Bankinfo from './Components/RegistrationFormComponent/Bankinfo';
import Maininterface from './Components/ParentComponents/Maininterface';
import ChildInterface from "./Pages/ChildInterface";

import InventoryPage from './Pages/InventoryPage';
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";



function App() {

  const {user} = useAuthContext();

  return (
    <div className="App">
  
   


    {/* ADDING ROUTER PATHS */}
    {/* NILMI ROUTER PATHS */}





    {/* CHALANI ROUTER PATHS */}





    {/* CHAMITHTHREE ROUTER PATHS */}





    {/* DULANI ROUTER PATHS */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>} />
      
      
       
      
        <Route path = "/inventoryPage" element = {user ? <InventoryPage/>: <Navigate to= "/loginPage"/>}/>

        {/* <Route path = "/login" element = {!user ? <Login/> : <Navigate to = "/"/>}/> */}
        <Route path = "/loginPage" element = {!user ? <LoginPage/> : <Navigate to = "/" />}/>


        <Route path = "/signupPage" element = {!user ? <SignupPage/> : <Navigate to = "/" />}/>
         {/* <Route path = "/signup" element = {!user ? <Signup/> : <Navigate to = "/" />}/> */}

       
        <Route path = "/childinterface" element = {<ChildInterface/>}/>
      
        <Route path = "/childinfo" element = {<Childinfo/>}/>
        <Route path = "/parentinfo" element = {<Parentinfo/>}/>
        <Route path = "/guardianinfo" element = {<Guardianinfo/>}/>
        <Route path = "/bankinfo" element = {<Bankinfo/>}/>
        <Route path = "/officeinfo" element = {<Officeinfo/>}/>
        <Route path = "/staffinfo" element = {<Staffinfo/>}/>
        <Route path = "/maininterface" element = {<Maininterface/>}/>
 
      </Routes>
   
    </BrowserRouter>
   

 
    </div>
  );
}

export default App;

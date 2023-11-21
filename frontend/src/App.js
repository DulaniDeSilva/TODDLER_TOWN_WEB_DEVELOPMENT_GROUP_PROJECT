
// style sheet relevant to the react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


// IMPORTS NILMI

// IMPORTS CHAMITHTHREE


// IMPORTS CHALANI


// IMPORTS DULANI
import Home from './Pages/Home';
import {Routes, Route  } from "react-router-dom";
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import InventorySystem from './Components/AdminComponents/InventorySystem';
import Childinfo from './Components/RegistrationFormComponent/Childinfo';
import Parentinfo from './Components/RegistrationFormComponent/Parentinfo';
import Guardianinfo from './Components/RegistrationFormComponent/Guardianinfo';
import Officeinfo from './Components/RegistrationFormComponent/Officeinfo';
import Staffinfo from './Components/RegistrationFormComponent/Staffinfo';
import Bankinfo from './Components/RegistrationFormComponent/Bankinfo';
import Maininterface from './Components/ParentComponents/Maininterface';


function App() {
  return (
    <div className="App">

   


    {/* ADDING ROUTER PATHS */}
    {/* NILMI ROUTER PATHS */}





    {/* CHALANI ROUTER PATHS */}





    {/* CHAMITHTHREE ROUTER PATHS */}





    {/* DULANI ROUTER PATHS */}

    <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path = "/signup" element = {<Signup/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/inventory" element = {<InventorySystem/>}/>
        <Route path = "/childinfo" element = {<Childinfo/>}/>
        <Route path = "/parentinfo" element = {<Parentinfo/>}/>
        <Route path = "/guardianinfo" element = {<Guardianinfo/>}/>
        <Route path = "/bankinfo" element = {<Bankinfo/>}/>
        <Route path = "/officeinfo" element = {<Officeinfo/>}/>
        <Route path = "/staffinfo" element = {<Staffinfo/>}/>
        <Route path = "/maininterface" element = {<Maininterface/>}/>
    </Routes>
   

 
    </div>
  );
}

export default App;

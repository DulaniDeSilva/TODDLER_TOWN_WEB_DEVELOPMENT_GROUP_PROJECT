
// style sheet relevant to the react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home';

// IMPORTS NILMI

// IMPORTS CHAMITHTHREE


// IMPORTS CHALANI


// IMPORTS DULANI
import {Routes, Route  } from "react-router-dom";
import Signup from './Pages/Signup';
import Login from './Pages/Login';



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
   
     


  </Routes>
   

 
    </div>
  );
}

export default App;

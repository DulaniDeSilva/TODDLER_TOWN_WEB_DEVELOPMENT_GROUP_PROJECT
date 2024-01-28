//app.js 

import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// style sheet relevant to the react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home';
import TeacherPage from "./Pages/TeacherPage";
import CaregiverPage from "./Pages/CaregiverPage";
import AdministratorPage from "./Pages/AdministratorPage";



function App() {
  return (
    <div className="App">
      
         <Routes>

            <Route path='/' element = {<Home/>} />
            <Route path = "/teacherInterface" element = {<TeacherPage/>}/>
            <Route path = "/caregiverInterface" element = {<CaregiverPage/>}/>
            <Route path = "/administratorInterface" element = {<AdministratorPage/>}/>

          </Routes>

        
    </div>
  );
}

export default App;
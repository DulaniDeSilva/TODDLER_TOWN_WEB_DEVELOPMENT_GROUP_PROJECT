import { useState } from "react"
// import Navigationbarhome from "../../Components/HomeComponents/Navigationbarhome";
import {useLogin} from "../../hooks/useLogin";
import {Link } from 'react-router-dom';
import login_image from "../../Assets/Images/LogSign/login.jpg";
import Homenavigation from "../HomeComponents/Homenavigation";



const Logincomponent = () =>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const {login, error, isLoading} = useLogin();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    await login(email, password,userType);
  }

  return(

    <div className="login_page_all">

    <div>
      <Homenavigation/>
    </div>
     
        <div className = "login_box">
          <div className = "login-left">
           <div className = "login-type">
           {/* opening form */}
           <form onSubmit={handleSubmit}>

            <h3>LOG IN</h3>

            <div className = "login-container">
            {/* <label>Login As: </label> */}
            <label>
            <input 
              className="radio"
              type = "radio"
              name = "userType"
              value = "Admin"
              onChange={(e) => setUserType(e.target.value)}
            />
            <span>Admin</span>
            </label>
            

              <label>
              <input 
                type = "radio"
                name = "userType"
                value = "Parent"
                onChange={(e) => setUserType(e.target.value)}
              />
              <span>Parent</span>
              </label>
              

              <label>
              <input 
                type = "radio"
                name = "userType"
                value = "Staff"
                onChange={(e) => setUserType(e.target.value)}
              />
              <span>Staff</span>
              </label>
              
              </div>

              <label className="input-lable">Email</label>
              <input
                onChange = {(e) => setEmail(e.target.value)}
                value = {email}
                className="input-input"
              />

              <label className="input-lable">Password</label>
              <input
                type = "password"
                onChange = {(e) => setPassword(e.target.value)}
                value = {password}
                className="input-input"
              />

              <button disabled = {isLoading} className="login-button common-link" >Log in</button>
              {error && <div className = "error">{error}</div>}
              <p className = "signup-link">No account?
              <Link to="/signupPage" >
                    Register
              </Link>
              </p>

              <p className = "signup-link">
              <Link to="/signupPage" >
                Forgot Password?  
              </Link>
              </p>
              


              </form>

            {/* closing form */}
           </div>
          </div>
            <div className = "login-right">
            <div className = "right-inductor">
              <img src ={login_image}  alt = "login background"/>
              </div>
          </div>

        </div>
    








    </div>
    
  )
};

export default Logincomponent;
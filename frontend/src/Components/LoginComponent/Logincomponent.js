import { useState } from "react"
// import Navigationbarhome from "../../Components/HomeComponents/Navigationbarhome";
import {useLogin} from "../../hooks/useLogin";
import {Link } from 'react-router-dom';
import login_image from "../../Assets/Images/LogSign/login.jpg";



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

    <div>
    {/* <Navigationbarhome/> */}
      <div className = "login">
        <div className = "login_box">
          <div className = "left">
           <div className = "contact">
           {/* opening form */}
           <form onSubmit={handleSubmit}>

            <h3>LOG IN</h3>

            <div className = "container">
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

              <label>Email</label>
              <input
                onChange = {(e) => setEmail(e.target.value)}
                value = {email}
              />

              <label>Password</label>
              <input
                type = "password"
                onChange = {(e) => setPassword(e.target.value)}
                value = {password}
              />

              <button disabled = {isLoading} className="submit">Log in</button>
              <p className = "signup-link">No account?
              <Link to="/signupPage" >
                    Sign up  
              </Link>
              </p>
              {error && <div className = "error">{error}</div>}


              </form>

            {/* closing form */}
           </div>
          </div>
            <div className = "right">
            <div className = "right-inductor">
              <img src ={login_image}  alt = "login background"/>
              </div>
          </div>

        </div>
      </div>









    </div>
    
  )
};

export default Logincomponent;
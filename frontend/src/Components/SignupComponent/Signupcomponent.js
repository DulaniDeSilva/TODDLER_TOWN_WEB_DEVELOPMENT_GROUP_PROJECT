import { useState } from "react"
import { useSignup } from "../../hooks/useSignup";
import {Link } from 'react-router-dom';
import login_image from "../../Assets/Images/LogSign/login.jpg";



const Signupcomponent = () =>{
  const [userType, setUserType] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signup, error, isLoading} = useSignup();

  const handleSubmit = async (e) =>{
    if(userType === 'Admin' && secretKey !== "Jungle"){
      e.preventDefault();
      alert("Invalid Admin");
    }else if(userType === "Staff" && secretKey !== "ToddlerStaff"){
      e.preventDefault();
      alert("Invalid Staff");
    }else{
      e.preventDefault();
      await signup(email,password,userType);
    }
  }

  return(
    <div>
      <div className = "login">
        <div className = "login_box">
          <div className = "left">
            <div className = "contact">
              {/* opening form */}
              <form onSubmit={handleSubmit}>
                <h3>SIGN UP</h3>

                <div className = "container">
                <label>
                <input 
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

                {userType === "Admin"?(<div><label>Admin Secret Key: </label>
                <input 
                  type = "text"
                  placeholder = "Secret Key"
                  // value= "Secret Key"
                  onChange = {(e) => setSecretKey(e.target.value)}
                  /></div> ):null}

                {userType === "Staff"?(<div><label>Staff Secret Key: </label>
                <input 
                  type = "text"
                  placeholder = "Secret Key"
                  // value= "Secret Key"
                  onChange = {(e) => setSecretKey(e.target.value)}
                  /></div> ):null}

     

                <label>Email</label>
              <input
                type = "email"
                onChange = {(e) => setEmail(e.target.value)}
                value = {email}
              />

              <label>Password</label>
              <input
                type = "password"
                onChange = {(e) => setPassword(e.target.value)}
                value = {password}
              />

              <button disabled = {isLoading} className = "submit">Sign up</button>
              <p class = "signup-link">Have account?
              <Link to="/loginPage" >
                    Log in 
              </Link>
              </p>
              {error && <div className = "error">{error}</div>}

              </form>
              {/* closing form */}
            </div>
          </div>
          <div className="right">
          <div class = "right-inductor">
          <img src ={login_image}  alt = "login background"/>
          </div>
          </div>
        </div>
      </div>
      
    </div>
  )
};

export default Signupcomponent;
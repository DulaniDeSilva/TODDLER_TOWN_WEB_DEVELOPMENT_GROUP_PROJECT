import { useState } from "react"
import { useSignup } from "../../hooks/useSignup";
import {Link } from 'react-router-dom';
import login_image from "../../Assets/Images/LogSign/login.jpg";
import Homenavigation from "../HomeComponents/Homenavigation";



const Signupcomponent = () =>{
  const [userType, setUserType] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signup, error, isLoading} = useSignup();
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) =>{
    e.preventDefault();
   
    if(!userType || !email || !password){
      setEmptyFields(['userType', 'email', 'password']);
      return;
    }

    if(emptyFields.length >0){
      setEmptyFields(emptyFields);
      return;
    }


    if(userType === 'Admin' && secretKey !== "Jungle"){
      alert("Invalid Admin");
    }else if(userType === "Staff" && secretKey !== "ToddlerStaff"){
      alert("Invalid Staff");
    }else{
      await signup(email,password,userType);
      // console.log(email, password, userType);
    }
  }

  return(
    <div className = "login_page_all">
      <div>
        <Homenavigation/>
      </div>


        <div className = "login_box">
          <div className = "login-left">
            <div className = "login-type">
              {/* opening form */}
              <form onSubmit={handleSubmit}>
                <h3>REGISTER</h3>

                <div className = "login-container">
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

     

                <label className="input-lable">User Name</label>
              <input
                type = "email"
                onChange = {(e) => setEmail(e.target.value)}
                value = {email}
                className="input-input"
                // className = {emptyFields.includes('email')? 'error': ''}
              />

              <label className="input-lable">Password</label>
              <input
                type = "password"
                onChange = {(e) => setPassword(e.target.value)}
                value = {password}
                className="input-input"
                // className = {emptyFields.includes('password')? 'error': ''}
              />

              
              {/* <Link to="/childRegistrationPage" className="common-link" > */}
                  <button disabled = {isLoading} className = "login-button ">
                  Register 
                  </button> 
              {/* </Link> */}
              {error && <div className = "error">{error}</div>}


              <p class = "signup-link">Have account?
              <Link to="/loginPage" >
                    Login
              </Link>
              </p>
              <p class = "signup-link">
              <Link to="/loginPage" >
                    Need Help?
              </Link>
              </p>
              

              </form>
              {/* closing form */}
            </div>
          </div>
          <div className="login-right">
          <div class = "right-inductor">
          <img src ={login_image}  alt = "login background"/>
          </div>
          </div>
        </div>
    
    </div>
  )
};

export default Signupcomponent;
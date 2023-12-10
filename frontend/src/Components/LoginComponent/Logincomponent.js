import { useState } from "react"
// import Navigationbarhome from "../../Components/HomeComponents/Navigationbarhome";
import {useLogin} from "../../hooks/useLogin";

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


<form onSubmit={handleSubmit}>

<h3>Log in</h3>

<label>Login As: </label>
<label>Admin</label>
<input 
  type = "radio"
  name = "userType"
  value = "Admin"
  onChange={(e) => setUserType(e.target.value)}
/>

<label>Parent</label>
<input 
  type = "radio"
  name = "userType"
  value = "Parent"
  onChange={(e) => setUserType(e.target.value)}
/>

<label>Staff</label>
<input 
  type = "radio"
  name = "userType"
  value = "Staff"
  onChange={(e) => setUserType(e.target.value)}
/>


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

<button disabled = {isLoading}>Log in</button>
{error && <div className = "error">{error}</div>}


</form>

    </div>
    
  )
};

export default Logincomponent;
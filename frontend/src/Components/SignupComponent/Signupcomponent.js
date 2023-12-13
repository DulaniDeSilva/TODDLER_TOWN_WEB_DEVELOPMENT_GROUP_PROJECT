import { useState } from "react"
import { useSignup } from "../../hooks/useSignup";



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
    <form onSubmit={handleSubmit}>
      <h3>Sign up</h3>

      <label>Signup As: </label>
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

      <button disabled = {isLoading}>Sign up</button>
      {error && <div className = "error">{error}</div>}

    </form>
  )
};

export default Signupcomponent;
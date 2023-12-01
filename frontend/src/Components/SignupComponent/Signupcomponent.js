import axios from "axios";
import React, { useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import signin from "../../Assets/Images/LogSign/signin2.png";

function SigninComponent(){

    const [data, setData] = useState({
      email: "",
      password:"",
    });

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({currentTarget:input})=>{
      setData({ ...data, [input.name]: input.value});
    };

    const handleSubmit = async(e)=>{
      e.preventDefault();
      try{
        const url = "http://localhost:3001//parentauth";
        const {data:res} = await axios.post(url, data);
        navigate("/login");
        console.log(res.message);
      }catch(error){
        if(
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ){
          setError(error.response.data.message);
        }
      }
    };

    return(
      <div>
        
        <Container flex className="signincontainer">
        <Row>
          <h1> Welcome To Toddler Town PreSchool and ChildCare Center </h1>
        </Row>

        
        

        <Form onSubmit = {(e) => handleSubmit(e)} className="signinform">
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="signinlabel">Email address</Form.Label>
          <Form.Control 
            type="email" 
            name = "email"
            value = {data.email}
            onChange = {handleChange}
            required
            placeholder="Email"
            className="signincontrol" />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="signinlabel" >Password</Form.Label>
          <Form.Control
          type="password" 
          name='password'
          value={data.password}
          onChange = {handleChange}
          placeholder="Password" 
          required 
          className="signincontrol"
          />
          </Form.Group>

          <Link to="/registerMainform" >
      		<Button  className="signinsubmit">
        		 Register
        	</Button>
      		</Link>

      		<Link to="/" >
      		<Button  className="signinsubmit">
        		 Home
        	</Button>
      		</Link>





        </Form>
        </Container>






      </div>
    );

}


export default SigninComponent;
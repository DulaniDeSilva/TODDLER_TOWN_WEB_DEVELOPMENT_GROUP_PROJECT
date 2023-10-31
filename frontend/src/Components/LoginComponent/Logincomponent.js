import axios from "axios";
import React, { useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import login from "../../Assets/Images/LogSign/login.png";
import login from "../../Assets/Images/LogSign/login3.jpg";



import Spline from '@splinetool/react-spline';
import FormGroup from "react-bootstrap/esm/FormGroup";

function LoginComponent() {

  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[register, setRegister] = useState(false);

  const handleSubmit = (e) =>{
      e.preventDefault();
      
  }

  
  const configuration = {
      method :"post",
      url: "http://localhost:3000",  //heroku configuration
      data:{
          email,
          password,
      },
  };

  axios(configuration)
    .then((result)=>{
      setRegister(true);
  })
    .catch((error)=>{
      error = new Error();
  })




  // 🥰
  

  return (
    <div className="maindiv">

      <Container flex className="MainContainer">
          <Row> <h1>  Welcome To Toddler Town PreSchool and ChildCare Center </h1>
          </Row>
          <Row>

          {/* begining col */}
            <Col md = {8}>
            
            <img className="loginimage"  src={login} alt = "Loginimg" />
            {/* ending col image */}
            </Col>

            {/*  column open */}
            <Col md = {4}>
            <Row> <h2>  SIGN IN</h2> </Row>
            <Tabs
                defaultActiveKey="profile"
                id="justify-tab-example"
                className="mb-3 allform"
                justify
            >
            <Tab eventKey="home" title=" 👩 Parent Sign In" className="tabkey">
            <Form onSubmit = {(e) => handleSubmit(e)} className="loginform">
              <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="loglabel">Email address*</Form.Label>
              <Form.Control 
                type="email" 
                name = "email"
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="logincontrol" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="loginlabel" >Password*</Form.Label>
              <Form.Control
                type="password" 
                name='password'
                value={password}
                onChange = {(e) =>setPassword(e.target.value)}
                placeholder="Password" 
                className="logincontrol"
                />
              </Form.Group>

              <Form.Group className="mb-3" >
              <Link to="/parent" >
        <Button  className="loginsubmit ">
          LogIn
        </Button>
      </Link>

      <Link to="/" >
        <Button  className="loginsubmit ">
          Home
        </Button>
      </Link>  
              </Form.Group>

              
      
    
    </Form>

  </Tab>


  <Tab eventKey="profile" title=" 👨‍💻 Admin Sign In">

  <Form onSubmit = {(e) => handleSubmit(e)} className="loginform">
              <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="loglabel">Email address *</Form.Label>
              <Form.Control 
                type="email" 
                name = "email"
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="logincontrol" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="loginlabel" >Password *</Form.Label>
              <Form.Control
                type="password" 
                name='password'
                value={password}
                onChange = {(e) =>setPassword(e.target.value)}
                placeholder="Password" 
                className="logincontrol"
                />
              </Form.Group>


    
      <Link to="/registerMainform" >
      <Button  className="signinsubmit">
        LogIn
        </Button>
      </Link>

      <Link to="/" >
      <Button  className="signinsubmit">
           Home
      </Button>
      </Link>

{/* 
      {login ? (
        <p className="text-success"> You are logged in successfully</p>
      ):(
        <p className = "text-danger"> You are not logged in</p>
      )} */}
    </Form>
        

      </Tab>






      <Tab eventKey="longer-tab" title=" 👩🏻‍🏫 Staff Sign In">

 <Form onSubmit = {(e) => handleSubmit(e)} className="loginform">
              <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="loglabel">Email address *</Form.Label>
              <Form.Control 
                type="email" 
                name = "email"
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="logincontrol" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="loginlabel" >Password*</Form.Label>
              <Form.Control
                type="password" 
                name='password'
                value={password}
                onChange = {(e) =>setPassword(e.target.value)}
                placeholder="Password" 
                className="logincontrol"
                />
              </Form.Group>

     

     
      
      <Link to="/parent" >
      <Button  className="signinsubmit">
         Login
        </Button>
      </Link>

      <Link to="/" >
      <Button  className="signinsubmit">
         Home
        </Button>
      </Link>
       



   
    </Form>
       
       
      </Tab>
     
    </Tabs>

            </Col>
          </Row>
       </Container>








     
    



       
   
    
    </div>
  )


};

export default LoginComponent;
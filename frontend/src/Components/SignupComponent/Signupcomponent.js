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
import signin from "../../Assets/Images/LogSign/signin2.png";
// import signin from "../../Assets/Images/LogSign/signin.png";
function SigninComponent() {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[login, setLogin] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();
        // alert("Submited");
    }

    const configuration = {
        method :"post",
        url: "http://localhost:3000/",  //heroku configuration
        data:{
            email,
            password,
        },
    };

    axios(configuration)
     .then((result)=>{
        setLogin(true);
     })
     .catch((error)=>{
        error = new Error();
     })

    


  return (
    <div className="signinmaindiv">
{/* start of the div */}

    <Container flex className="signincontainer">

   
      <Row>
        <h1> Welcome To Toddler Town PreSchool and ChildCare Center </h1>
      </Row>
      
      <Row>
        <Col md = {4}>
          <Row><h2> SIGNUP</h2></Row>
          {/* begin */}
          <Row> 
          <Tabs
              defaultActiveKey="profile"
              id="justify-tab-example"
              className="mb-3 "
              justify
          >
          <Tab eventKey="home" title=" 👩 Parent SignUp" className="tabkey">
          <Form onSubmit = {(e) => handleSubmit(e)} className="signinform">
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="signinlabel">Email address</Form.Label>
          <Form.Control 
            type="email" 
            name = "email"
            value = {email}
            onChange = {(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className="signincontrol" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="signinlabel" >Password</Form.Label>
          <Form.Control
          type="password" 
          name='password'
          value={password}
          onChange = {(e) =>setPassword(e.target.value)}
          placeholder="Password" 
          className="signincontrol"
          />
          </Form.Group>

   

      {/* <Button variant="primary"
       type="submit"
       onClick={(e) => handleSubmit(e)} className="signinsubmit">
       <Link to = "/registerMainform"> Register</Link>
  
      </Button> */}


      
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
      {/* {login ? (
        <p className="text-success"> You are logged in successfully</p>
      ):(
        <p className = "text-danger"> You are not logged in</p>
      )} */}
    </Form>

      </Tab>







      <Tab eventKey="profile" title=" 👨‍💻 Admin SignUp">
         <Form onSubmit = {(e) => handleSubmit(e)} className="signinform">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="signinlabel">Email address</Form.Label>
        <Form.Control 
        type="email" 
        name = "email"
        value = {email}
        onChange = {(e) => setEmail(e.target.value)}
        placeholder="Enter email"
        className="signincontrol" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="signinlabel" >Password</Form.Label>
        <Form.Control
        type="password" 
        name='password'
        value={password}
        onChange = {(e) =>setPassword(e.target.value)}
        placeholder="Password" 
        className="signincontrol"
        />
      </Form.Group>


    
      <Link to="/staffinfo" >
      <Button  className="signinsubmit">
         Register
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






      <Tab eventKey="longer-tab" title=" 👩🏻‍🏫 Staff SignUp">
        <Form onSubmit = {(e) => handleSubmit(e)} className="signinform">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="signinlabel">Email address</Form.Label>
        <Form.Control 
        type="email" 
        name = "email"
        value = {email}
        onChange = {(e) => setEmail(e.target.value)}
        placeholder="Enter email"
        className="signincontrol" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="signinlabel" >Password</Form.Label>
        <Form.Control
        type="password" 
        name='password'
        value={password}
        onChange = {(e) =>setPassword(e.target.value)}
        placeholder="Password" 
        className="signincontrol"
        />
      </Form.Group>

     

     
      
      <Link to="/staffinfo" >
      <Button  className="signinsubmit">
         Register
        </Button>
      </Link>
       

      <Link to="/" >
      <Button  className="signinsubmit">
         Home
        </Button>
      </Link>




      {/* {login ? (
        <p className="text-success"> You are logged in successfully</p>
      ):(
        <p className = "text-danger"> You are not logged in</p>
      )} */}
    </Form>
       
       
      </Tab>
     
    </Tabs>
          
          </Row>
          {/* row end */}
        </Col>

        <Col md ={8}>
        <img className="signupimage"  src={signin} alt = "Signimg" />
        </Col>
      </Row>




       
   
      </Container>
    </div>
  )


};

export default SigninComponent;
import React from 'react'
// import q from "../../Assets/Images/Home/q.png";
// import y from "../../Assets/Images/Home/y.png";
import us1 from "../../Assets/Images/Home/us1.jpg";
import us2 from "../../Assets/Images/Home/us2.jpg";
import us3 from "../../Assets/Images/Home/us3.jpg";
import us4 from "../../Assets/Images/Home/us4.jpg";
import us5 from "../../Assets/Images/Home/us5.jpg";
import us6 from "../../Assets/Images/Home/us6.jpg";
import us7 from "../../Assets/Images/Home/us7.jpg";
import us8 from "../../Assets/Images/Home/us8.jpg";
import us9 from "../../Assets/Images/Home/us9.jpg";
import us10 from "../../Assets/Images/Home/us10.jpg";
import us11 from "../../Assets/Images/Home/us11.jpg";
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
// import Container from 'react-bootstrap/esm/Container';

export default function Us() {
  return (
    <div className='us-component'>
       <header>
        Why Choose Us?
       </header>
        <Row>
        <Col lg = {2}>
        <img src={us3} alt = "logo"  className='us-image'/>
        </Col>
        <Col lg = {2} className='col12'>
          <span>Seamless Parent-School Interaction</span>
        </Col>
        <Col lg = {2} >
        <img src={us1} alt = "logo"  className='us-image'/>
        </Col>
        <Col lg = {2} className='col14'>
        <span>Empowering Parental Involvement</span>
        </Col>
        <Col lg = {2}>
        <img src={us11} alt = "logo"  className='us-image'/>
        </Col>
        <Col lg = {2} className='col16'>
        <span>Child Wellness Assurance</span>
        </Col>
        </Row>


        <Row>
        <Col lg = {2} className='col21'>
        <span>Hassle-Free Pick-Up Solutions</span>
        </Col>
        <Col lg = {2}>
        <img src={us4} alt = "logo"  className='us-image'/>
        </Col>
        <Col lg = {2} className='col23'>
        <span>Fortified Safety Measures</span>
        </Col>
        <Col lg = {2}>
        <img src={us5} alt = "logo"  className='us-image'/>
        </Col>
        <Col lg = {2} className='col25'>
        <span>Insightful CCTV Oversight</span>
        </Col>
        <Col lg = {2}>
        <img src={us10} alt = "logo"  className='us-image'/>
        </Col>
        </Row>


        <Row>
        <Col lg = {2}>
        <img src={us7} alt = "logo"  className='us-image'/>
        </Col>
        <Col lg = {2} className='col32'>
        <span>Effortless Online Transactions</span>
        </Col>
        <Col lg = {2}>
        <img src={us8} alt = "logo"  className='us-image'/>
        </Col>
        <Col lg = {2} className='col34'>
        <span>Individualized Child Care</span>
        </Col>
        <Col lg = {2}>
        <img src={us9} alt = "logo"  className='us-image'/>
        </Col>
        <Col lg = {2} className='col36'>
        <span>Personalized Student Progress Tracking</span>
        </Col>
        </Row>

       
    </div>
  )
}

import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import img1 from "../../Assets/Images/Home/background.jpg";
import admin from "../../Assets/Images/Home/admin.jpg";
import sub from "../../Assets/Images/Home/sub.jpg";
import principle from "../../Assets/Images/Home/principle.jpg";


import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';




function TeamComponent() {

  const [countStudents, setCountStudents] = useState(0);
  const [countStaff, setCountStaff] = useState(0);
  const [countTeachers, setCountTeachers] = useState(0);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCountStudents(prevCount=>{
        if(prevCount >= 60){
          return 1;
        }else{
          return prevCount +1;
        }
      });

      setCountStaff(prevCount=>{
        if(prevCount >= 30){
          return 1;
        }else{
          return prevCount +1;
        }
      });

      setCountTeachers(prevCount =>{
        if(prevCount >= 15){
          return 1;
        }else{
          return prevCount +1;
        }
      })
      
    }, 200);
    return () => clearInterval(interval);
  },[]);

  return (
    <div class = "teamcards">
       <Container className= "teamcontainer">
        <h3> Meet the Team</h3>
        <h6> Force Behind the success</h6>

        <Row className='teamrow'>
            <Col lg = {4} className='teamcolumn'>
            <img className=' team-image' src={principle} alt = "logo"/>
            <span> Mrs. H. K De Silva</span>
              <p >Principle</p>
              <div className = "team-share">
              <FontAwesomeIcon icon= {faFacebook} className='team-icons' ></FontAwesomeIcon>
              <FontAwesomeIcon icon= {faLinkedin} className='team-icons'></FontAwesomeIcon>
              <FontAwesomeIcon icon= {faInstagram} className='team-icons' ></FontAwesomeIcon>
              </div>
            </Col>


            <Col lg = {4} className='teamcolumn'>
            <img className=' team-image' src={sub} alt = "logo"/>
            <span > Mrs. T Jayarathna</span>
              <p className = 'info'>Head of PreSchool</p>
              {/* <p> </p> */}
              <div className = "team-share">
              <FontAwesomeIcon icon= {faFacebook} className='team-icons'></FontAwesomeIcon>
              <FontAwesomeIcon icon= {faLinkedin} className='team-icons'></FontAwesomeIcon>
              <FontAwesomeIcon icon= {faInstagram} className='team-icons' ></FontAwesomeIcon>
              </div>
            </Col>
           

            <Col lg = {4} className='teamcolumn'>
            <img className=' team-image' src={admin} alt = "logo"/>
              <span > Miss Maria Perara</span>
              <p className='info'>Administrator</p>
              <p>  </p>
              <div className = "team-share">
              <FontAwesomeIcon icon= {faFacebook} className='team-icons' ></FontAwesomeIcon>
              <FontAwesomeIcon icon= {faLinkedin} className='team-icons'></FontAwesomeIcon>
              <FontAwesomeIcon icon= {faInstagram} className='team-icons' ></FontAwesomeIcon>
              </div>
            </Col>

        </Row>



        <Row>
            <Col lg = {4} className = "team-component-count">
            <span className='team-component-count-name'>🧒👶👩</span>
            <span className='team-component-count-name-count' >{countStudents}+</span>
            <span className='team-component-count-name' >Students</span>
            </Col>

            <Col lg = {4} className = "team-component-count">
            <span className='team-component-count-name'>🧑‍💼👩‍💼</span>
            <span className='team-component-count-name-count' >{countTeachers}+</span>
            <span className='team-component-count-name' >Teachers</span></Col>

            <Col lg = {4} className = "team-component-count">
            <span className='team-component-count-name'>👩‍🏫🧑‍🏫</span>
            <span className='team-component-count-name-count'>{countStaff}+</span>
            <span className='team-component-count-name' >Staff</span></Col>
        </Row>
       </Container>



    </div>
  )
}

export default TeamComponent;
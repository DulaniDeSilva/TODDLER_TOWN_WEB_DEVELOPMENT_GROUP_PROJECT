import React from 'react'
import { useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import ReactPlayer from 'react-player';

import video1 from "../../Assets/Images/cctv/video1.mp4";
import video2 from "../../Assets/Images/cctv/video2.mp4";
import Prvideo1 from "../../Assets/Images/cctv/Prvideo1.mp4";
import Prvideo2 from "../../Assets/Images/cctv/Prvideo2.mp4";
import Prvideo3 from "../../Assets/Images/cctv/Prvideo3.mp4";
import Pvideo2 from "../../Assets/Images/cctv/Pvideo2.mp4";
import Pvideo3 from "../../Assets/Images/cctv/Pvideo3.mp4";
import Pvideo4 from "../../Assets/Images/cctv/Pvideo4.mp4";
import Pvideo5 from "../../Assets/Images/cctv/Pvideo5.mp4";
import Pvideo6 from "../../Assets/Images/cctv/Pvideo6.mp4";
import Tvideo1 from "../../Assets/Images/cctv/Tvideo1.mp4";
import Tvideo2 from "../../Assets/Images/cctv/Tvideo2.mp4";
import Tvideo3 from "../../Assets/Images/cctv/Tvideo3.mp4";
import Tvideo4 from "../../Assets/Images/cctv/Tvideo4.mp4";
import Tvideo5 from "../../Assets/Images/cctv/Tvideo5.mp4";
import Rvideo1 from "../../Assets/Images/cctv/Rvideo1.mp4";
import Rvideo2 from "../../Assets/Images/cctv/Rvideo2.mp4";
import Rvideo3 from "../../Assets/Images/cctv/Rvideo3.mp4";
import Rvideo4 from "../../Assets/Images/cctv/Rvideo4.mp4";
import Rvideo5 from "../../Assets/Images/cctv/Rvideo5.mp4";


// import PhoneRegisterComponent from '../PhoneVertification/PhoneRegisterComponent';


export default function CctvComponent() {


  const videoUrl = 'https://media.istockphoto.com/id/469802844/video/nursery-workers-with-children-playing-with-toys.mp4?s=mp4-640x640-is&k=20&c=ZQjd8NWV5DLgE1Whv0wUIOhKrXz4o79Dd_TxtLyisxc=';
  return (
    <div className='cctv-maindiv'>
        {/* <PhoneRegisterComponent/> */}
      
        <Row className = "cctv-mainvideo">
    <ReactPlayer
      url={video1}
      width="500"
      height="300"
      controls autoPlay
    />
    </Row>

    <Container className = "cctv-container">
    <Row><h4 className = "cctv-topic">Pre School </h4></Row>
    <Row>
      <Col lg = {4}>
        <video width = "300" height = "200" controls  autoPlay>
          <source src = {videoUrl} type = "video/mp4"/>
        </video>
      </Col>
      <Col lg = {4}>
        <video width = "300" height = "200" controls  autoPlay>
          <source src = {video2} type = "video/mp4"/>
        </video>
      </Col>
      <Col lg = {4}>
        <video width = "300" height = "200" controls  autoPlay>
          <source src = {Prvideo1} type = "video/mp4"/>
        </video>
      </Col>
    </Row>

    <Row>
      <Col lg = {4}>
        <video width = "300" height = "200" controls  autoPlay>
          <source src = {Prvideo2} type = "video/mp4"/>
        </video>
      </Col>
      <Col lg = {4}>
        <video width = "300" height = "200" controls  autoPlay>
          <source src = {Prvideo3} type = "video/mp4"/>
        </video>
      </Col>
      <Col lg = {4}>
        <video width = "300" height = "200" controls  autoPlay>
          <source src = {video1} type = "video/mp4"/>
        </video>
      </Col>
    </Row>

    <Row><h4 className = "cctv-topic">Toddler Care </h4></Row>
    <Row>
      <Col lg = {4}>
        <video width = "300" height = "200" controls  autoPlay>
          <source src = {Tvideo1} type = "video/mp4"/>
        </video>
      </Col>
      <Col lg = {4}>
        <video width = "300" height = "200" controls  autoPlay>
          <source src = {Tvideo2} type = "video/mp4"/>
        </video>
      </Col>
      <Col lg = {4}>
        <video width = "300" height = "200" controls  autoPlay>
          <source src = {Tvideo3} type = "video/mp4"/>
        </video>
      </Col>
    </Row>

    <Row>
      <Col lg = {4}>
        <video width = "300" height = "200" controls  autoPlay>
          <source src = {Tvideo4} type = "video/mp4"/>
        </video>
      </Col>
      <Col lg = {4}>
        <video width = "300" height = "200" controls  autoPlay>
          <source src = {Tvideo5} type = "video/mp4"/>
        </video>
      </Col>
      <Col lg = {4}>
        <video width = "300" height = "200" controls  autoPlay>
          <source src = {Tvideo2} type = "video/mp4"/>
        </video>
      </Col>
    </Row>

    <Row><h4 className = "cctv-topic">Ground </h4></Row>
    <Row>
      <Col lg = {4}>
        <video width = "300" height = "200" controls  autoPlay>
          <source src = {Pvideo2} type = "video/mp4"/>
        </video>
      </Col>
      <Col lg = {4}>
        <video width = "300" height = "200" controls  autoPlay>
          <source src = {Pvideo3} type = "video/mp4"/>
        </video>
      </Col>
      <Col lg = {4}>
        <video width = "300" height = "200" controls  autoPlay>
          <source src = {Pvideo4} type = "video/mp4"/>
        </video>
      </Col>
    </Row>

    <Row>
      <Col lg = {4}>
        <video width = "300" height = "200" controls  autoPlay>
          <source src = {Pvideo5} type = "video/mp4"/>
        </video>
      </Col>
      <Col lg = {4}>
        <video width = "300" height = "200" controls  autoPlay>
          <source src = {Pvideo6} type = "video/mp4"/>
        </video>
      </Col>
      <Col lg = {4}>
        <video width = "300" height = "200" controls  autoPlay>
          <source src = {Pvideo2} type = "video/mp4"/>
        </video>
      </Col>
    </Row>


    <Row><h4 className = "cctv-topic">Main road, background </h4></Row>
    <Row>
      <Col lg = {4}>
        <video width = "300" height = "200" controls  autoPlay>
          <source src = {Rvideo1} type = "video/mp4"/>
        </video>
      </Col>
      <Col lg = {4}>
        <video width = "300" height = "200" controls  autoPlay>
          <source src = {Rvideo2} type = "video/mp4"/>
        </video>
      </Col>
      <Col lg = {4}>
        <video width = "300" height = "200" controls  autoPlay>
          <source src = {Rvideo3} type = "video/mp4"/>
        </video>
      </Col>
    </Row>

    <Row>
      <Col lg = {4}>
        <video width = "300" height = "200" controls  autoPlay>
          <source src = {Rvideo4} type = "video/mp4"/>
        </video>
      </Col>
      <Col lg = {4}>
        <video width = "300" height = "200" controls  autoPlay>
          <source src = {Rvideo5} type = "video/mp4"/>
        </video>
      </Col>
      <Col lg = {4}>
        <video width = "300" height = "200" controls  autoPlay>
          <source src = {Rvideo1} type = "video/mp4"/>
        </video>
      </Col>
    </Row>



    </Container>



  
    </div>
  )
}

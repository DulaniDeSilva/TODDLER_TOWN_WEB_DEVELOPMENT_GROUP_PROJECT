import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import ReactPlayer from 'react-player';
import video1 from "../../Assets/Images/cctv/video1.mp4";
import video2 from "../../Assets/Images/cctv/video2.mp4";
import PhoneRegisterComponent from '../PhoneVertification/PhoneRegisterComponent';


export default function CctvComponent() {
  const videoUrl = 'https://media.istockphoto.com/id/469802844/video/nursery-workers-with-children-playing-with-toys.mp4?s=mp4-640x640-is&k=20&c=ZQjd8NWV5DLgE1Whv0wUIOhKrXz4o79Dd_TxtLyisxc=';
  return (
    <div className='cctv-maindiv'>

      <div className = "cctv-vertification">
      <PhoneRegisterComponent/>
      {/* <PhoneVertificationComponent/> */}
      </div>

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
          <source src = {videoUrl} type = "video/mp4"/>
        </video>
      </Col>
    </Row>

    <Row>
      <Col lg = {4}>
        <video width = "300" height = "200" controls  autoPlay>
          <source src = {video2} type = "video/mp4"/>
        </video>
      </Col>
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
    </Row>

    <Row><h4>Toddler Care </h4></Row>
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
          <source src = {videoUrl} type = "video/mp4"/>
        </video>
      </Col>
    </Row>

    <Row>
      <Col lg = {4}>
        <video width = "300" height = "200" controls  autoPlay>
          <source src = {video2} type = "video/mp4"/>
        </video>
      </Col>
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
    </Row>

    <Row><h4>Ground </h4></Row>
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
          <source src = {videoUrl} type = "video/mp4"/>
        </video>
      </Col>
    </Row>
    </Container>





    </div>
  )
}

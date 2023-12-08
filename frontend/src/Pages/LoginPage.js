import React from 'react';
import Logincomponent from '../Components/LoginComponent/Logincomponent'


import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/esm/Container';



export default function SignupPage() {
  return (
    <div>

      <Container>
        <Tabs
          defaultActiveKey="profile"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="home" title="🧑‍💻Admin Login">
            <Logincomponent/>
          </Tab>
          <Tab eventKey="profile" title="👪 Parent Login">
            <Logincomponent/>
          </Tab>
          <Tab eventKey="longer-tab" title="🧑‍🏫 Staff Login">
            <Logincomponent/>
          </Tab>
        </Tabs>
      </Container>

     



        
       
    </div>
  )
}

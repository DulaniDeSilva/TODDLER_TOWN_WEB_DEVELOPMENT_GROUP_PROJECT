import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { Link } from 'react-router-dom';

const BotRedirect = ({ url, message }) => {
  return (
    <div>
      <a href={url} target="_blank">
        {message}
      </a>
    </div>
  );
};



const CHATBOT_THEME = {
  background: "#FFFEFC",
  fontFamily: "Roboto",
  headerBgColor: "#FFBFB5",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#C8D7C2",
  botFontColor: "purple",
  userBubbleColor: "#FFBFB5",
  userFontColor: "purple",

  
};

const ChatBotHelper = () => {
  
  const steps = [

  

    {
      id: "1",
      message: "Hello! Welcome to Toddler Town",
      trigger: "2"
    },
    {
      id: "2",
      message: "How can I help you?",
      trigger: "3"
    },
    {
      id: "3",
      options: [
        { value: 1, label: "Opening Hours?", trigger: "4" },
        { value: 2, label: "Open in Week ends?", trigger: "5" },
        { value: 3, label: "Contact Number?", trigger: "6" },
        { value: 4, label: "Special Events and Activities", trigger: "7" },
        { value: 5, label: "More information", trigger: "8" },
        { value: 8, label: "Do you want to leave", trigger: "17" }
      ]
    },
    {
      id: "4",
      component: (
        <div>From 6.30 am to 6.00 pm</div>
      ),
      
      trigger: "2"
    },
    {
      id: "5",
      message: "Yes ",
      trigger: "2"
    },
    {
      id: "6",
      message: " 076-2234598 ",
      trigger: "2"
    },
    {
      id: "7",
      component: (
        // link the blog page
        <Link to="/parentInterface"> 
         Explore ToddlerTown world 
      </Link>
      ),
      
      trigger: "2"
    },
    {
      id: "8",
      message:"Want to know about services?",
      trigger: "9"
    },

    {
      id: "9",
      options: [
        { value: 1, label: "Enroll to Toddler Town", trigger: "10" },
        { value: 2, label: "Call admin", trigger: "11" },
        { value: 3, label: "Contact Toddler Town", trigger: "12" },
        { value: 4, label: "About Toddler Care", trigger: "13" },
        { value: 5, label: "About PreSchool", trigger: "14" },
        { value: 6, label: "About After school Care", trigger: "15" },
        { value: 7, label: "Join as a staff member", trigger: "16" },
        { value: 20, label: "Back", trigger: "3" },
        { value: 8, label: "Do you want to leave", trigger: "17" }


      ]
    },
    
    {
      id: "10",
      component: (
        // link the contact admin call/ contactUs page
        <Link to="/parentInterface"> 
         Contact Admin
      </Link>
      ),
      trigger: "9"
      
    },
    {
      id: "11",
      component: (
        // link the contact us 
        <Link to="/parentInterface">
          You can Contact Us
      </Link>
      ),
      trigger: "9"
    },
    {
      id: "12",
      component: (
        //link the Contact us
        <Link to="/parentInterface">
          You can contact us
      </Link>
      ),
      trigger: "9"
    },
    {
      id: "13",
      component: (
        //link the toldler care 
        <Link to="/parentInterface">
          Welcome to Tolder Care
      </Link>
      ),
      trigger: "9"
    },
    {
      id: "14",
      component: (
        //link the preschool
        <Link to="/parentInterface">
          Welcome to ToddlerTown PreSchool
      </Link>
      ),
      trigger: "9"
    },
    {
      id: "15",
      component: (
        //link the Afterschool
        <Link to="/parentInterface">
          Welcome to ToddlerTown Afterschool Care
      </Link>
      ),
      trigger: "9"
    },
    {
      id: "16",
      component: (
        //vacancies page
        <Link to="/parentInterface">
          Join as a Staff
      </Link>
      ),
      trigger: "9"
    },
    {
      id: "17",
      options: [
        { value: 1, label: "Yes", trigger: "18" },
        { value: 2, label: "No", trigger: "19" },
      ]
    },
    {
      id: "18",
      message: "It's been a pleasure assisting you. Have a wonderful day!",
      end: true,
    },
    
    {
      id: "19",
      message: " ",
      trigger: "2"
    },
    
  ];

  return (
    <>
      <ThemeProvider theme={CHATBOT_THEME}>
        <ChatBot
         steps={steps} 
         floating={true}
        // botAvatar={"T"}
        //  userAvatar="url_to_user_avatar_image"
        headerTitle={"ToddlerTown ChatChum"}
        placeholder={"Please select the what do you want to know"}
        floatingStyle={{
          background: '#4B0082', 
          color: '#fff',         
          borderRadius: '50%',   
        }}
          />


      </ThemeProvider>
    </>
  );
};

export default ChatBotHelper;

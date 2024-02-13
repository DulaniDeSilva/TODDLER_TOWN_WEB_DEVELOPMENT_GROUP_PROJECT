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
        { value: 4, label: "Located in", trigger: "7" },
        { value: 5, label: "More information", trigger: "8" },
        { value: 6, label: "Do you want to leave", trigger: "13" }
      ]
    },
    {
      id: "4",
      component: (
        <div>From 6.30 am to 6.00 pm</div>
      ),
      trigger: '3',
    },
    {
      id: "5",
      message: "Yes ",
      trigger: '3',
    },
    {
      id: "6",
      message: " 076-2234598 ",
      trigger: '3',
    },
    {
      id: "7",
      message: "Kalagedihena, Gampaha",
      trigger: "3"
    },
    {
      id: "8",
      options: [
        { value: 1, label: "Services", trigger: "9" },
        { value: 2, label: "Contact Administrator", trigger: "10" },
        { value: 3, label: "Admission Fees", trigger: "11" },
        { value: 4, label: "Facilities", trigger: "12" },
        { value: 5, label: "Do you want to leave", trigger: "13" }
      ]
    },

    {
      id: "9",
      component: (
        <div>
          <ul>
            <li>
              Pre School
            </li>
            <li>
              ToddlerCare
            </li>
            <li>
              After School Care
            </li>
          </ul>
        </div>
      ),
      trigger: "8"
      
    },
    
    {
      id: "10",
      component: (
        <div>You can Contact Administrator through Contact Us page</div>
      ),
      trigger: "8",
      
    },
    {
      id: "11",
      component: (
        <BotRedirect
        message="Contact Administrator"
        url="admin@gmail.com"
      />
    ),
      
      trigger: "8"
    },
    {
      id: "12",
      component: (
        <div>
          <ul>
            <li>
             We have provided meal
            </li>
            <li>
             Curriculer Management
            </li>
            <li>
            Online Payments
            </li>
            
          </ul>
        </div>
      ),
      trigger: "8"
    },
    
    {
      id: "13",
      options: [
        { value: 1, label: "No", trigger: "14" },
        { value: 2, label: "Yes", trigger: "15" },
      ]
    },
    {
      id: "14",
      message: " ",
      trigger: "2"
      
    },
    
    {
      id: "15",
      message: "It's been a pleasure assisting you. Have a wonderful day!",
      end: true,
    },
    
  ];

  return (
    <>
      <ThemeProvider theme={CHATBOT_THEME}>
        <ChatBot
         steps={steps} 
         floating={true}
        
         //cache={false}
        // botAvatar={"T"}
        //  userAvatar="url_to_user_avatar_image"
        headerTitle={"ToddlerTown ChatChum"}
        placeholder={"Please select what you want to know"}
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

import React from 'react'
import '../../Assets/Styles/Contactus.css';
import girl from "../../Assets/Images/LogSign/girl.png";


export default function Contacts() {
 
  return (
    <div>
         <div className="container">
      
      <div className="content">
        <div className="col-1">
        <img className = "img" src ={girl}  alt = "login background"/>
          
         
        </div>
        <div className="col-2">
          <form>
            <div className="form-container">
              <h2>Book an Appointment</h2>
              <div className="form-row">
                <label>Full Name</label>
                <div>
                  <input type="text" className="form-field" />
                </div>
              </div>
              <div className="form-row">
                <label>Email</label>
                <div>
                  <input type="text" className="form-field" />
                </div>
              </div>
              <div className="form-row">
                <label>Type your message...</label>
                <div>
                  <input type="text" className="form-field" />
                </div>
              </div>
              <input type="button" className="send-btn" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>




    </div>
  )
}

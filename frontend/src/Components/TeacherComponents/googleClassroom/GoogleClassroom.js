// frontend/src/features/googleClassroom/GoogleClassroom.js

import React from 'react';
import '../../../Assets/Styles/StaffInterface.css'; 

function GoogleClassroom() {
  const redirectToGoogleClassroom = () => {
    window.location.href = "https://classroom.google.com/";
  };

  return (
    <div className="information-container">
      <h2 className="container">Access Google Classroom</h2>
      <div className="button-container">
        <button onClick={redirectToGoogleClassroom}>Go to Google Classroom</button>
      </div>
    </div>
  );
}

export default GoogleClassroom;

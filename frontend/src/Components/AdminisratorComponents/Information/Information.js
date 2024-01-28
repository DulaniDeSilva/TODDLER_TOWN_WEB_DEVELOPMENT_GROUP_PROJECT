import React, { useState } from 'react';
import './Information.css';  // Assuming you'll have a separate CSS file

function Information() {
    const [showChildInfo, setShowChildInfo] = useState(false);
    const [showStaffInfo, setShowStaffInfo] = useState(false);

    return (
        <div className="information-container">
            <h2>Information</h2>

            {!showChildInfo && <button className="main-tab" onClick={() => setShowChildInfo(true)}>Child Information</button>}
            {showChildInfo && (
                <div>
                    <h3>Child Information</h3>
                    {/* Your child information contents will go here */}
                    <p>Display child-specific information here...</p>
                    <button onClick={() => setShowChildInfo(false)}>Close Child Info</button>
                </div>
            )}

            {!showStaffInfo && <button className="main-tab" onClick={() => setShowStaffInfo(true)}>Staff Information</button>}
            {showStaffInfo && (
                <div>
                    <h3>Staff Information</h3>
                    {/* Your staff information contents will go here */}
                    <p>Display staff-specific information here...</p>
                    <button onClick={() => setShowStaffInfo(false)}>Close Staff Info</button>
                </div>
            )}
        </div>
    );
}

export default Information;

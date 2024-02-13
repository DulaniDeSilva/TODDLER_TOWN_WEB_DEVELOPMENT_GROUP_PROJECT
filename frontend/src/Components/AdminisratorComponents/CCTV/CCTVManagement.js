import React, { useState } from 'react';
import '../../../Assets/Styles/StaffInterface.css'; 

function CCTV() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const DEMO_USERNAME = 'admin';
    const DEMO_PASSWORD = 'password123';

    const handleLogin = () => {
        if (username === DEMO_USERNAME && password === DEMO_PASSWORD) {
            setIsAuthenticated(true);
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="information-container">
            <h2>CCTV Footage</h2>
            {!isAuthenticated ? (
                <div>
                    <div className="input-group">
                        <label>Username:</label>
                        <input 
                            type="text" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            className="text-input"
                        />
                    </div>
                    <div className="input-group">
                        <label>Password:</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            className="text-input"
                        />
                    </div>
                    <button onClick={handleLogin} className="login-button">Login</button>
                </div>
            ) : (
                <div>
                    <p>Live CCTV Footage:</p>
                    <iframe 
                        src="https://www.earthcam.com/usa/newyork/timessquare/?cam=tsrobo1" // Replace with the actual URL you have permission to use
                        title="CCTV Footage"
                        width="600" 
                        height="400"
                        allowFullScreen>
                    </iframe>
                </div>
            )}
        </div>
    );
}

export default CCTV;

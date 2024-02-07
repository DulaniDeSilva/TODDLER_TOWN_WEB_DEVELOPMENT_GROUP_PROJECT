import React, { useState } from 'react';
import './Inventory.css';  // Assuming you'll have a separate CSS file

function Inventory() {
    const [showInventory, setShowInventory] = useState(false);

    return (
        <div className="inventory-container">
            <h2>Inventory</h2>

            {!showInventory && <button className="main-tab" onClick={() => setShowInventory(true)}>Inventory</button>}
            
            {showInventory && (
                <div>
                    <h3>Inventory Controls</h3>
                    {/* inventory contents will go here */}
                    <p>Display inventory data here..</p>
                    <button onClick={() => setShowInventory(false)}>Close Inventory</button>
                </div>
            )}
        </div>
    );
}

export default Inventory;
import React, { useState } from 'react';

function ChildInformation({ showChildInfo, setShowChildInfo }) {
    const [view, setView] = useState('');
    const [showAddForm, setShowAddForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        initials: '',
        // Add other fields from your child schema
    });
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAdd = async () => {
        try {
            // Send a POST request to your API to add the new child
            const response = await fetch('your_api_url', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log('Child added successfully:', data);
            // Optionally, you can reset the form or update the UI here
            setShowAddForm(false); // Hide the form after adding the child
        } catch (error) {
            console.error('Failed to add child:', error);
        }
    };

    const toggleAddForm = () => {
        setShowAddForm(prevState => !prevState); // Toggle the state to show/hide the form
    };

    const handleDelete = () => {
        // Implement your delete function here
        console.log('Delete button clicked');
    };

    const handleView = () => {
        // Implement your view function here
        console.log('View button clicked');
    };

    const handleUpdate = () => {
        // Implement your update function here
        console.log('Update button clicked');
    };

    const handlePrint = () => {
        // Implement your update function here
        console.log('print button clicked');
    };

    const handleCancel = () => {
        setShowChildInfo(false);
    };

    return (
        <>
            {!showChildInfo && <button className="main-tab" onClick={() => setShowChildInfo(true)}>Child Information</button>}
            {showChildInfo && (
                <div>
                    <h5><b>Child Information</b></h5>
                    {showAddForm ? (
                        <div>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
                            <input type="text" name="initials" value={formData.initials} onChange={handleChange} placeholder="Initials" required />
                            {/* Add other input fields for other child information */}
                            <button onClick={handleAdd}>Add</button>
                            <button onClick={toggleAddForm}>Cancel</button>
                        </div>
                    ) : (
                        <button onClick={toggleAddForm}>Add</button>
                    )}
                    <button onClick={handleDelete}>Delete</button>
                    <button onClick={handleView}>View</button>
                    <button onClick={handleUpdate}>Update</button>
                    <button onClick={handlePrint}>Print</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            )}
        </>
    );
}

export default ChildInformation;


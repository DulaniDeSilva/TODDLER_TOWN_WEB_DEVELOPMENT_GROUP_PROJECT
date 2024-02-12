import React, { useState } from 'react';
import '../../../Assets/Styles/StaffInterface.css';
import axios from 'axios';

function Pickupservice() {
    const [view, setView] = useState('');  
    const [showTable, setShowTable] = useState(false);
    const [searchRegNumber, setSearchRegNumber] = useState('');
    const [formData, setFormData] = useState({
        studentName: '',
        location: '',
        pickupTime: '',
        dropoffTime: '',
        verify: 'yes',
        empNo: '', // Add empNo field to the state
      });

    const handleViewSubmit = async () => {
        // Assuming you have a backend endpoint for fetching pickup data
        try {
          const response = await axios.get(`/api/pickupservice?regNumber=${searchRegNumber}`);
          // Handle the response data as needed
          console.log(response.data);
          setShowTable(true);
        } catch (error) {
          console.error('Error fetching pickup data:', error);
        }
      };

    
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Assuming you have a backend endpoint for adding pickup data
    try {
      const response = await axios.post('/api/pickupservice', formData);
      // Handle the response data as needed
      console.log(response.data);
    } catch (error) {
      console.error('Error adding pickup data:', error);
    }
  };

    return (
        <div className="information-container">
            <h2 className="headerh">Pickup Service</h2>
            
            <div className="button-containerr">
                <button onClick={() => setView('add')}>Update Pickup Details</button>
                <button onClick={() => setView('view')}>View Pickup Details</button>
            </div>
            
            {view === 'add' && (
                <form>
                    <label>
                        Name of the student :
                        <input 
                            type="text"
                            value={formData.studentName}
                            onChange={e => setFormData({ ...formData, studentName: e.target.value })}
                        />
                    </label>
                    <label>
                        Location : 
                        <input 
                            type="text"
                            value={formData.location}
                            onChange={e => setFormData({ ...formData, location: e.target.value })}
                        />
                    </label>
                    <label>
                        Time picked up:
                        <input 
                            type="text"
                            value={formData.pickupTime}
                            onChange={e => setFormData({ ...formData, pickupTime: e.target.value })}
                        />
                    </label>
                    <label>
                        Time dropped off:
                        <input 
                            type="text"
                            value={formData.dropoffTime}
                            onChange={e => setFormData({ ...formData, dropoffTime: e.target.value })}
                        />
                    </label>
                    <label>
  Verify Pickup:
  <div>
    <input
      type="radio"
      id="yes"
      name="verify"
      value="yes"
      checked={formData.verify === "yes"}
      onChange={e => setFormData({ ...formData, verify: e.target.value })}
    />
    <label htmlFor="yes">Yes</label>
  </div>
  <div>
    <input
      type="radio"
      id="no"
      name="verify"
      value="fno"
      checked={formData.verify === "no"}
      onChange={e => setFormData({ ...formData, verify: e.target.value })}
    />
    <label htmlFor="no">No</label>
  </div>
</label>

                    <input type="submit" value="Submit" />
                </form>
            )}

            {view === 'view' && (
                <div className="search-container">
                    <label>
                        Enter Employee Number:
                        <input 
                            type="text"
                            value={formData.empNo}
                            onChange={e => setFormData({ ...formData, empNo: e.target.value })}
                        />
                    </label>
                    <button onClick={handleViewSubmit}>Submit</button>
                </div>
            )}

            {showTable && (
                <table>
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Location</th>
                            <th>Time Picked Up</th>
                            <th>Time Dropped Off</th>
                            <th>Pickup Verified</th>
                        </tr>
                    </thead>
                </table>
            )}
        </div>
    );
}

export default Pickupservice;

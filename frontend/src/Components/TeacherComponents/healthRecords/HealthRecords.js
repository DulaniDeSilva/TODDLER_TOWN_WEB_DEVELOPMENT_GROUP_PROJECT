import React, { useState } from 'react';
import './HealthRecords.css';

function HealthRecords() {
    const [view, setView] = useState('');  
    const [showTable, setShowTable] = useState(false);
    const [fetchedRecords, setFetchedRecords] = useState(null);
    const [searchRegNumber, setSearchRegNumber] = useState('');
    const [formData, setFormData] = useState({
        regNumber: '',
        name: '',
        measurement: 'Height',
        data: ''
    });

    // Placeholder function for adding health record
    const addHealthRecord = async (recordData) => {
        console.log("Adding health record", recordData);
        // Implementation would go here
    };

    // Placeholder function for fetching health record by registration number
    const fetchHealthRecordByRegNumber = async (regNumber) => {
        console.log("Fetching health record for", regNumber);
        // Implementation would go here
        return null; // Returning null as a placeholder
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const recordData = {
            regNumber: formData.regNumber,
            name: formData.name,
            records: {
                [formData.measurement]: formData.data
            }
        };

        try {
            await addHealthRecord(recordData);
            setFormData({
                regNumber: '',
                name: '',
                measurement: 'Height',
                data: ''
            });
        } catch (error) {
            console.error("Error adding record:", error);
        }
    };

    const handleViewSubmit = async () => {
        try {
            const record = await fetchHealthRecordByRegNumber(searchRegNumber);
            if (record) {
                setFetchedRecords(record);
                setShowTable(true);
            } else {
                setShowTable(false);
            }
        } catch (error) {
            console.error("Error fetching records:", error);
        }
    };

    return (
        <div className="container">
            <h2 className="headerh">Health Records Management</h2>
            
            <div className="button-containerr">
                <button onClick={() => setView('add')}>Add Health Record</button>
                <button onClick={() => setView('view')}>View Health Records</button>
            </div>
            
            {view === 'add' && (
                <form onSubmit={handleSubmit}>
                    <label>
                        Registration Number:
                        <input 
                            type="text"
                            value={formData.regNumber}
                            onChange={e => setFormData({ ...formData, regNumber: e.target.value })}
                        />
                    </label>
                    <label>
                        Name: 
                        <input 
                            type="text"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                        />
                    </label>
                    <label>
                        Measurement:
                        <select 
                            value={formData.measurement}
                            onChange={e => setFormData({ ...formData, measurement: e.target.value })}
                        >
                            <option value="Height">Height</option>
                            <option value="Weight">Weight</option>
                            <option value="Vision">Vision</option>
                            <option value="Hearing">Hearing</option>
                            <option value="Allergies">Allergies</option>
                            <option value="Current Medications">Current Medications</option>
                            <option value="Immunization Record">Immunization Record</option>
                            <option value="Physical Activity Limitations">Physical Activity Limitations</option>
                            <option value="Preferred Hospital/Clinic">Preferred Hospital/Clinic</option>
                        </select>
                    </label>
                    <label>
                        Data:
                        <input 
                            type="text"
                            value={formData.data}
                            onChange={e => setFormData({ ...formData, data: e.target.value })}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            )}

            {view === 'view' && (
                <div className="search-container">
                    <label>
                        Enter Registration Number:
                        <input 
                            type="text"
                            value={searchRegNumber}
                            onChange={e => setSearchRegNumber(e.target.value)}
                        />
                    </label>
                    <button onClick={handleViewSubmit}>Submit</button>
                </div>
            )}

            {showTable && fetchedRecords && (
                <table>
                    <thead>
                        <tr>
                            <th>Registration Number</th>
                            <th>Name</th>
                            <th>Height</th>
                            <th>Weight</th>
                            <th>Vision</th>
                            <th>Hearing</th>
                            <th>Allergies</th>
                            <th>Current Medications</th>
                            <th>Immunization Record</th>
                            <th>Physical Activity Limitations</th>
                            <th>Preferred Hospital/Clinic</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{fetchedRecords.regNumber}</td>
                            <td>{fetchedRecords.name}</td>
                            <td>{fetchedRecords.records.Height}</td>
                            <td>{fetchedRecords.records.Weight}</td>
                            <td>{fetchedRecords.records.Vision}</td>
                            <td>{fetchedRecords.records.Hearing}</td>
                            <td>{fetchedRecords.records.Allergies}</td>
                            <td>{fetchedRecords.records.CurrentMedications}</td>
                            <td>{fetchedRecords.records.ImmunizationRecord}</td>
                            <td>{fetchedRecords.records.PhysicalActivityLimitations}</td>
                            <td>{fetchedRecords.records.PreferredHospitalClinic}</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default HealthRecords;

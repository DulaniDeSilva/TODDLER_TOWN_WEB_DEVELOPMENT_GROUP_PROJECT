import React, { useState } from 'react';
import { addHealthRecord, searchHealthRecordByRegNumber, updateHealthRecord } from '../../../api';
import '../../../Assets/Styles/StaffInterface.css';

function HealthRecords() {
  const [regNumber, setRegNumber] = useState('');
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [vision, setVision] = useState('');
  const [hearing, setHearing] = useState('');
  const [allergies, setAllergies] = useState('');
  const [currentMedications, setCurrentMedications] = useState('');
  const [immunizationRecord, setImmunizationRecord] = useState('');
  const [physicalActivityLimitations, setPhysicalActivityLimitations] = useState('');
  const [preferredHospitalClinic, setPreferredHospitalClinic] = useState('');

  const [updateRegNumber, setUpdateRegNumber] = useState('');
  const [updateData, setUpdateData] = useState(null);

  const [viewRegNumber, setViewRegNumber] = useState('');
  const [viewData, setViewData] = useState(null);

  const [isAddSectionVisible, setAddSectionVisible] = useState(false);
  const [isUpdateSectionVisible, setUpdateSectionVisible] = useState(false);
  const [isViewSectionVisible, setViewSectionVisible] = useState(false);

  const handleViewHealthData = async () => {
    try {
      const viewedData = await searchHealthRecordByRegNumber(viewRegNumber);
      setViewData(viewedData);
      setAddSectionVisible(false);
      setUpdateSectionVisible(false);
    } catch (error) {
      console.error('Failed to fetch health record for view:', error);
      // Display error message to the user
      alert('Failed to fetch health record for view. Please try again.');
    }
  };

  const handleAddHealthRecord = async (e) => {
    e.preventDefault();

    try {
      const newHealthRecord = {
        regNumber,
        name,
        records: {
          height,
          weight,
          vision,
          hearing,
          allergies,
          currentMedications,
          immunizationRecord,
          physicalActivityLimitations,
          preferredHospitalClinic,
        },
      };

      const response = await addHealthRecord(newHealthRecord);
      console.log('Health record added:', response);

      // Optionally, you can fetch and display the added record
      const searchedRecord = await searchHealthRecordByRegNumber(regNumber);
      console.log('Searched Health record:', searchedRecord);

      // Reset the form fields
      setRegNumber('');
      setName('');
      setHeight('');
      setWeight('');
      setVision('');
      setHearing('');
      setAllergies('');
      setCurrentMedications('');
      setImmunizationRecord('');
      setPhysicalActivityLimitations('');
      setPreferredHospitalClinic('');

      // Display success message to the user
      alert('Health record added successfully!');
    } catch (error) {
      console.error('Failed to add health record:', error);
      // Display error message to the user
      alert('Failed to add health record. Please try again.');
    }
  };

  const handleSearchHealthRecord = async () => {
    try {
      const searchedRecord = await searchHealthRecordByRegNumber(updateRegNumber);
      setUpdateData(searchedRecord);
      setAddSectionVisible(false);
      setViewSectionVisible(false);
    } catch (error) {
      console.error('Failed to fetch health record for update:', error);
      // Display error message to the user
      alert('Failed to fetch health record for update. Please try again.');
    }
  };

  const handleUpdateHealthRecord = async () => {
    try {
      // Ensure updateData is not null and has the required fields
      if (updateData && updateData.regNumber) {
        // Perform the update using the updateHealthRecord API function
        await updateHealthRecord(updateData.regNumber, updateData);

        // Optionally, you can fetch and display the updated record
        const updatedRecord = await searchHealthRecordByRegNumber(updateData.regNumber);
        console.log('Updated Health record:', updatedRecord);

        // Reset the form fields
        setUpdateRegNumber('');
        setUpdateData(null);

        // Display success message to the user
        alert('Health record updated successfully!');
      } else {
        alert('No health record to update. Please search for a record first.');
      }
    } catch (error) {
      console.error('Failed to update health record:', error);
      // Display error message to the user
      alert('Failed to update health record. Please try again.');
    }
  };

  return (
    <div className="information-container">
      <h2 className="container">Health Records management</h2>
      <button onClick={() => { setAddSectionVisible(true); setUpdateSectionVisible(false); setViewSectionVisible(false); }}>Add health data</button>
      <button onClick={() => { setUpdateSectionVisible(true); setAddSectionVisible(false); setViewSectionVisible(false); }}>Update health data</button>
      <button onClick={() => { setViewSectionVisible(true); setAddSectionVisible(false); setUpdateSectionVisible(false); }}>View health data</button>

      {isAddSectionVisible && (
        <div>
          <h4><b>Add Health Record</b></h4>
          <form onSubmit={handleAddHealthRecord}>
            <label>Registration Number:</label>
        <input type="text" value={regNumber} onChange={(e) => setRegNumber(e.target.value)} />

        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Height:</label>
        <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />

        <label>Weight:</label>
        <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />

        <label>Vision:</label>
        <input type="text" value={vision} onChange={(e) => setVision(e.target.value)} />

        <label>Hearing:</label>
        <input type="text" value={hearing} onChange={(e) => setHearing(e.target.value)} />

        <label>Allergies:</label>
        <input type="text" value={allergies} onChange={(e) => setAllergies(e.target.value)} />

        <label>Current Medications:</label>
        <input type="text" value={currentMedications} onChange={(e) => setCurrentMedications(e.target.value)} />

        <label>Immunization Record:</label>
        <input type="text" value={immunizationRecord} onChange={(e) => setImmunizationRecord(e.target.value)} />

        <label>Physical Activity Limitations:</label>
        <input
          type="text"
          value={physicalActivityLimitations}
          onChange={(e) => setPhysicalActivityLimitations(e.target.value)}
        />

        <label>Preferred Hospital Clinic:</label>
        <input
          type="text"
          value={preferredHospitalClinic}
          onChange={(e) => setPreferredHospitalClinic(e.target.value)}
        />
            <button type="submit">Add Health Record</button>
          </form>
        </div>
      )}
      {isUpdateSectionVisible && (
        <div>
          <h4><b>Update Health Record</b></h4>
          <h5>Registration Number:</h5>
          <input
            type="text"
            value={updateRegNumber}
            onChange={(e) => setUpdateRegNumber(e.target.value)}
          />
          <button onClick={handleSearchHealthRecord}>Search</button>

          {updateData && (
            <div>
			
          <table>
            <thead>
              <tr>
                <th>Field</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Registration Number</td>
                <td>{updateData.regNumber}</td>
              </tr>
              <tr>
                <td>Name</td>
                <td
                  contentEditable="true"
                  onBlur={(e) => setUpdateData((prevData) => ({
                    ...prevData,
                    name: e.target.innerText,
                  }))}
                >
                  {updateData.name}
                </td>
              </tr>
              <tr>
                <td>Height</td>
                <td
                  contentEditable="true"
                  onBlur={(e) => setUpdateData((prevData) => ({
                    ...prevData,
                    records: {
                      ...prevData.records,
                      height: e.target.innerText,
                    },
                  }))}
                >
                  {updateData.records?.height}
                </td>
              </tr>
              <tr>
                <td>Weight</td>
                <td
                  contentEditable="true"
                  onBlur={(e) => setUpdateData((prevData) => ({
                    ...prevData,
                    records: {
                      ...prevData.records,
                      weight: e.target.innerText,
                    },
                  }))}
                >
                  {updateData.records?.weight}
                </td>
              </tr>
              <tr>
                <td>Vision</td>
                <td
                  contentEditable="true"
                  onBlur={(e) => setUpdateData((prevData) => ({
                    ...prevData,
                    records: {
                      ...prevData.records,
                      vision: e.target.innerText,
                    },
                  }))}
                >
                  {updateData.records?.vision}
                </td>
              </tr>
              <tr>
                <td>Hearing</td>
                <td
                  contentEditable="true"
                  onBlur={(e) => setUpdateData((prevData) => ({
                    ...prevData,
                    records: {
                      ...prevData.records,
                      hearing: e.target.innerText,
                    },
                  }))}
                >
                  {updateData.records?.hearing}
                </td>
              </tr>
              <tr>
                <td>Allergies</td>
                <td
                  contentEditable="true"
                  onBlur={(e) => setUpdateData((prevData) => ({
                    ...prevData,
                    records: {
                      ...prevData.records,
                      allergies: e.target.innerText,
                    },
                  }))}
                >
                  {updateData.records?.allergies}
                </td>
              </tr>
              <tr>
                <td>Current Medications</td>
                <td
                  contentEditable="true"
                  onBlur={(e) => setUpdateData((prevData) => ({
                    ...prevData,
                    records: {
                      ...prevData.records,
                      currentMedications: e.target.innerText,
                    },
                  }))}
                >
                  {updateData.records?.currentMedications}
                </td>
              </tr>
              <tr>
                <td>Immunization Record</td>
                <td
                  contentEditable="true"
                  onBlur={(e) => setUpdateData((prevData) => ({
                    ...prevData,
                    records: {
                      ...prevData.records,
                      immunizationRecord: e.target.innerText,
                    },
                  }))}
                >
                  {updateData.records?.immunizationRecord}
                </td>
              </tr>
              <tr>
                <td>Physical Activity Limitations</td>
                <td
                  contentEditable="true"
                  onBlur={(e) => setUpdateData((prevData) => ({
                    ...prevData,
                    records: {
                      ...prevData.records,
                      physicalActivityLimitations: e.target.innerText,
                    },
                  }))}
                >
                  {updateData.records?.physicalActivityLimitations}
                </td>
              </tr>
              <tr>
                <td>Preferred Hospital Clinic</td>
                <td
                  contentEditable="true"
                  onBlur={(e) => setUpdateData((prevData) => ({
                    ...prevData,
                    records: {
                      ...prevData.records,
                      preferredHospitalClinic: e.target.innerText,
                    },
                  }))}
                >
                  {updateData.records?.preferredHospitalClinic}
                </td>
              </tr>
            </tbody>
          </table>
              
              <button onClick={handleUpdateHealthRecord}>Update Health Record</button>
            </div>
          )}
        </div>
      )}
      {isViewSectionVisible && (
        <div>
          <h4><b>View Health Data</b></h4>
          <h5>Registration Number:</h5>
          <input
            type="text"
            value={viewRegNumber}
            onChange={(e) => setViewRegNumber(e.target.value)}
          />
          <button onClick={handleViewHealthData}>View</button>

          {viewData && (
            <div>
            
          <table>
            <thead>
              <tr>
                <th>Field</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Registration Number</td>
                <td>{viewData.regNumber}</td>
              </tr>
              <tr>
                <td>Name</td>
                <td>{viewData.name}</td>
              </tr>
              <tr>
                <td>Height</td>
                <td>{viewData.records?.height}</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>{viewData.records?.weight}</td>
              </tr>
              <tr>
                <td>Vision</td>
                <td>{viewData.records?.vision}</td>
              </tr>
              <tr>
                <td>Hearing</td>
                <td>{viewData.records?.hearing}</td>
              </tr>
              <tr>
                <td>Allergies</td>
                <td>{viewData.records?.allergies}</td>
              </tr>
              <tr>
                <td>Current Medications</td>
                <td>{viewData.records?.currentMedications}</td>
              </tr>
              <tr>
                <td>Immunization Record</td>
                <td>{viewData.records?.immunizationRecord}</td>
              </tr>
              <tr>
                <td>Physical Activity Limitations</td>
                <td>{viewData.records?.physicalActivityLimitations}</td>
              </tr>
              <tr>
                <td>Preferred Hospital Clinic</td>
                <td>{viewData.records?.preferredHospitalClinic}</td>
              </tr>
            </tbody>
          </table>
            </div>
          )}
        </div>
      )}

    </div>
  );
}

export default HealthRecords;

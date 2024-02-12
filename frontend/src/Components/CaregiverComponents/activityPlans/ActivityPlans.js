import React, { useState, useEffect } from 'react';
import { addActivityPlan, getActivityPlanByMonth, updateActivityPlan, updateActivityPlanTracking } from '../../../api'; // Import your API functions
import '../../../Assets/Styles/StaffInterface.css';

function ActivityPlans() {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const [selectedMonth, setSelectedMonth] = useState('');
  const [activities, setActivities] = useState(Array(20).fill(''));
  const [activityPlanDetails, setActivityPlanDetails] = useState(null);
  const [isUpdateSectionVisible, setUpdateSectionVisible] = useState(false);
  const [isAddSectionVisible, setAddSectionVisible] = useState(false);
  const [isTrackSectionVisible, setTrackSectionVisible] = useState(false);

  useEffect(() => {
    // Fetch lesson plan details when selectedMonth changes
    if (selectedMonth) {
      const fetchActivityPlanDetails = async () => {
        try {
          const activityPlan = await getActivityPlanByMonth(selectedMonth);
          setActivityPlanDetails(activityPlan);
        } catch (error) {
          console.error('Failed to fetch Activity plan details:', error);
          // Handle error
        }
      };

      fetchActivityPlanDetails();
    }
  }, [selectedMonth]);

  const handleTrackActivityPlan = () => {
    setTrackSectionVisible(true);
    setAddSectionVisible(false);
    setUpdateSectionVisible(false);
  };

  const handleUpdateTrackingData = async () => {
    try {
      // Perform the update using the updateActivityPlanTracking API function
      await updateActivityPlanTracking(selectedMonth, activityPlanDetails.trackingData);

      // Optionally, you can fetch and display the updated lesson plan
      const updatedActivityPlan = await getActivityPlanByMonth(selectedMonth);
      console.log('Updated Activity plan (tracking data):', updatedActivityPlan);

      // Reset the form fields
      setSelectedMonth('');
      setActivityPlanDetails(null);

      // Display success message to the user
      alert('Activity plan tracking data updated successfully!');
    } catch (error) {
      console.error('Failed to update Activity plan tracking data:', error);
      // Display error message to the user
      alert('Failed to update Activity plan tracking data. Please try again.');
    }
  };

  const handleAddActivityPlan = async () => {
    try {
      const newActivityPlan = {
        month: selectedMonth,
        activities,
        trackingData: [],
      };

      const response = await addActivityPlan(newActivityPlan);
      console.log('Activity plan added:', response);

      // Optionally, you can fetch and display the added lesson plan
      const fetchedActivityPlan = await getActivityPlanByMonth(selectedMonth);
      console.log('Fetched Activity plan:', fetchedActivityPlan);

      // Display success message to the user
      alert('Activity plan added successfully!');
    } catch (error) {
      console.error('Failed to add Activity plan:', error);
      // Display error message to the user
      alert('Failed to add Activity plan. Please try again.');
    }
  };

  const handleUpdateActivityPlan = async () => {
    try {
      // Ensure ActivityPlanDetails is not null
      if (activityPlanDetails) {
        // Perform the update using the updateLessonPlan API function
        await updateActivityPlan(selectedMonth, activityPlanDetails);

        // Optionally, you can fetch and display the updated lesson plan
        const updatedActivityPlan = await getActivityPlanByMonth(selectedMonth);
        console.log('Updated Activity plan:', updatedActivityPlan);

        // Reset the form fields
        setSelectedMonth('');
        setActivities(Array(20).fill(''));
        setActivityPlanDetails(null);

        // Display success message to the user
        alert('Activity plan updated successfully!');
      } else {
        alert('No Activity plan to update. Please select a month first.');
      }
    } catch (error) {
      console.error('Failed to update Activity plan:', error);
      // Display error message to the user
      alert('Failed to update Activity plan. Please try again.');
    }
  };

  const handleSelectMonth = (event) => {
    const selectedMonth = event.target.value;
    setSelectedMonth(selectedMonth);
  };

  const handleSelectActivity = (index, event) => {
    const updatedActivities = [...activities];
    updatedActivities[index] = event.target.value;
    setActivities(updatedActivities);
  };

  return (
    <div className="information-container">
        <h2 className="container">Activity Planning</h2>
      <button onClick={() => { setAddSectionVisible(true); setUpdateSectionVisible(false); setTrackSectionVisible(false); }}>Add Activity Plan</button>
      <button onClick={() => { setUpdateSectionVisible(true); setAddSectionVisible(false); setTrackSectionVisible(false); }}>Update Activity Plan</button>
      <button onClick={handleTrackActivityPlan}>Track Activity Plan</button>
      
      {isUpdateSectionVisible && (
        <div>
          <h4><b>Update Activity Plan</b></h4>
          <h5>Select Month:</h5>
          <select value={selectedMonth} onChange={handleSelectMonth}>
            {months.map(month => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>

          {activityPlanDetails && (
            <div>
              <h5>Activity Plan Details:</h5>
              <table>
                <thead>
                  <tr>
                    <th>Activity Number</th>
                    <th>Activity</th>
                  </tr>
                </thead>
                <tbody>
                  {activityPlanDetails.activities.map((activity, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <input
                          type="text"
                          value={activity}
                          onChange={(e) => handleSelectActivity(index, e)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={handleUpdateActivityPlan}>Update Activity Plan</button>
            </div>
          )}
        </div>
      )}

      {/* Add Lesson Plan Section */}
      {isAddSectionVisible && (
        <div>
          <h4><b>Add Activity Plan</b></h4>
          <h5>Select Month:</h5>
          <select value={selectedMonth} onChange={handleSelectMonth}>
            {months.map(month => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>

          <h5>Activities:</h5>
          <table>
            <thead>
              <tr>
                <th>Activity Number</th>
                <th>Activity</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <input
                      type="text"
                      value={activity}
                      onChange={(e) => handleSelectActivity(index, e)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleAddActivityPlan}>Add Activity Plan</button>
        </div>
      )}

      {isTrackSectionVisible && (
        // Track Activity Plan Section
        <div>
          <h4><b>Track Activity Plan</b></h4>
          <h5>Select Month:</h5>
          <select value={selectedMonth} onChange={handleSelectMonth}>
            {months.map(month => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>

          {activityPlanDetails && (
            <div>
              <h5>Activity Plan Tracking Data:</h5>
              <table>
                <thead>
                  <tr>
                    <th>Activity Number</th>
                    <th>Activity Name</th>
                    <th>Date of Completion</th>
                    <th>Description</th>
                    <th>Notes</th>
                    <th>Suggestions</th>
                  </tr>
                </thead>
                <tbody>
                  {activityPlanDetails.activities.map((activity, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{activity}</td>
                      <td>
                        <input
                          type="date"
                          value={(activityPlanDetails.trackingData[index]?.dateOfCompletion || '')}
                          onChange={(e) => {
                            const updatedTrackingData = [...activityPlanDetails.trackingData];
                            if (!updatedTrackingData[index]) {
                              updatedTrackingData[index] = {};
                            }
                            updatedTrackingData[index].dateOfCompletion = e.target.value;
                            setActivityPlanDetails(prevState => ({
                              ...prevState,
                              trackingData: updatedTrackingData,
                            }));
                          }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={(activityPlanDetails.trackingData[index]?.description || '')}
                          onChange={(e) => {
                            const updatedTrackingData = [...activityPlanDetails.trackingData];
                            if (!updatedTrackingData[index]) {
                              updatedTrackingData[index] = {};
                            }
                            updatedTrackingData[index].description = e.target.value;
                            setActivityPlanDetails(prevState => ({
                              ...prevState,
                              trackingData: updatedTrackingData,
                            }));
                          }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={(activityPlanDetails.trackingData[index]?.notes || '')}
                          onChange={(e) => {
                            const updatedTrackingData = [...activityPlanDetails.trackingData];
                            if (!updatedTrackingData[index]) {
                              updatedTrackingData[index] = {};
                            }
                            updatedTrackingData[index].notes = e.target.value;
                            setActivityPlanDetails(prevState => ({
                              ...prevState,
                              trackingData: updatedTrackingData,
                            }));
                          }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={(activityPlanDetails.trackingData[index]?.suggestions || '')}
                          onChange={(e) => {
                            const updatedTrackingData = [...activityPlanDetails.trackingData];
                            if (!updatedTrackingData[index]) {
                              updatedTrackingData[index] = {};
                            }
                            updatedTrackingData[index].suggestions = e.target.value;
                            setActivityPlanDetails(prevState => ({
                              ...prevState,
                              trackingData: updatedTrackingData,
                            }));
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={handleUpdateTrackingData}>Update Tracking Data</button>
            </div>
          )}

        </div>
      )} 
    </div>
  );
}

export default ActivityPlans;

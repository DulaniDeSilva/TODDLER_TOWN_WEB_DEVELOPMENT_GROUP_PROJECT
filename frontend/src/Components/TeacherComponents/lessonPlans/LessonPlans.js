import React, { useState, useEffect } from 'react';
import { addLessonPlan, getLessonPlanByMonth, updateLessonPlan, updateLessonPlanTracking } from '../../../api'; // Import your API functions
import '../../../Assets/Styles/StaffInterface.css';

function LessonPlans() {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const [selectedMonth, setSelectedMonth] = useState('');
  const [lessons, setLessons] = useState(Array(20).fill(''));
  const [lessonPlanDetails, setLessonPlanDetails] = useState(null);
  const [isUpdateSectionVisible, setUpdateSectionVisible] = useState(false);
  const [isAddSectionVisible, setAddSectionVisible] = useState(false);
  const [isTrackSectionVisible, setTrackSectionVisible] = useState(false);

  useEffect(() => {
    // Fetch lesson plan details when selectedMonth changes
    if (selectedMonth) {
      const fetchLessonPlanDetails = async () => {
        try {
          const lessonPlan = await getLessonPlanByMonth(selectedMonth);
          setLessonPlanDetails(lessonPlan);
        } catch (error) {
          console.error('Failed to fetch lesson plan details:', error);
          // Handle error
        }
      };

      fetchLessonPlanDetails();
    }
  }, [selectedMonth]);

  const handleTrackLessonPlan = () => {
    setTrackSectionVisible(true);
    setAddSectionVisible(false);
    setUpdateSectionVisible(false);
  };

  const handleUpdateTrackingData = async () => {
    try {
      // Perform the update using the updateLessonPlanTracking API function
      await updateLessonPlanTracking(selectedMonth, lessonPlanDetails.trackingData);

      // Optionally, you can fetch and display the updated lesson plan
      const updatedLessonPlan = await getLessonPlanByMonth(selectedMonth);
      console.log('Updated Lesson plan (tracking data):', updatedLessonPlan);

      // Reset the form fields
      setSelectedMonth('');
      setLessonPlanDetails(null);

      // Display success message to the user
      alert('Lesson plan tracking data updated successfully!');
    } catch (error) {
      console.error('Failed to update lesson plan tracking data:', error);
      // Display error message to the user
      alert('Failed to update lesson plan tracking data. Please try again.');
    }
  };

  const handleAddLessonPlan = async () => {
    try {
      const newLessonPlan = {
        month: selectedMonth,
        lessons,
        trackingData: [],
      };

      const response = await addLessonPlan(newLessonPlan);
      console.log('Lesson plan added:', response);

      // Optionally, you can fetch and display the added lesson plan
      const fetchedLessonPlan = await getLessonPlanByMonth(selectedMonth);
      console.log('Fetched Lesson plan:', fetchedLessonPlan);

      // Display success message to the user
      alert('Lesson plan added successfully!');
    } catch (error) {
      console.error('Failed to add lesson plan:', error);
      // Display error message to the user
      alert('Failed to add lesson plan. Please try again.');
    }
  };

  const handleUpdateLessonPlan = async () => {
    try {
      // Ensure lessonPlanDetails is not null
      if (lessonPlanDetails) {
        // Perform the update using the updateLessonPlan API function
        await updateLessonPlan(selectedMonth, lessonPlanDetails);

        // Optionally, you can fetch and display the updated lesson plan
        const updatedLessonPlan = await getLessonPlanByMonth(selectedMonth);
        console.log('Updated Lesson plan:', updatedLessonPlan);

        // Reset the form fields
        setSelectedMonth('');
        setLessons(Array(20).fill(''));
        setLessonPlanDetails(null);

        // Display success message to the user
        alert('Lesson plan updated successfully!');
      } else {
        alert('No lesson plan to update. Please select a month first.');
      }
    } catch (error) {
      console.error('Failed to update lesson plan:', error);
      // Display error message to the user
      alert('Failed to update lesson plan. Please try again.');
    }
  };

  const handleSelectMonth = (event) => {
    const selectedMonth = event.target.value;
    setSelectedMonth(selectedMonth);
  };

  const handleSelectLesson = (index, event) => {
    const updatedLessons = [...lessons];
    updatedLessons[index] = event.target.value;
    setLessons(updatedLessons);
  };

  return (
    <div className="information-container">
        <h2 className="container">Lesson Planning</h2>
      <button onClick={() => { setAddSectionVisible(true); setUpdateSectionVisible(false); setTrackSectionVisible(false); }}>Add Lesson Plan</button>
      <button onClick={() => { setUpdateSectionVisible(true); setAddSectionVisible(false); setTrackSectionVisible(false); }}>Update Lesson Plan</button>
      <button onClick={handleTrackLessonPlan}>Track Lesson Plan</button>
      
      {isUpdateSectionVisible && (
        <div>
          <h4><b>Update Lesson Plan</b></h4>
          <h5>Select Month:</h5>
          <select value={selectedMonth} onChange={handleSelectMonth}>
            {months.map(month => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>

          {lessonPlanDetails && (
            <div>
              <h5>Lesson Plan Details:</h5>
              <table>
                <thead>
                  <tr>
                    <th>Lesson Number</th>
                    <th>Lesson</th>
                  </tr>
                </thead>
                <tbody>
                  {lessonPlanDetails.lessons.map((lesson, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <input
                          type="text"
                          value={lesson}
                          onChange={(e) => handleSelectLesson(index, e)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={handleUpdateLessonPlan}>Update Lesson Plan</button>
            </div>
          )}
        </div>
      )}

      {/* Add Lesson Plan Section */}
      {isAddSectionVisible && (
        <div>
          <h4><b>Add Lesson Plan</b></h4>
          <h5>Select Month:</h5>
          <select value={selectedMonth} onChange={handleSelectMonth}>
            {months.map(month => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>

          <h5>Lessons:</h5>
          <table>
            <thead>
              <tr>
                <th>Lesson Number</th>
                <th>Lesson</th>
              </tr>
            </thead>
            <tbody>
              {lessons.map((lesson, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <input
                      type="text"
                      value={lesson}
                      onChange={(e) => handleSelectLesson(index, e)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleAddLessonPlan}>Add Lesson Plan</button>
        </div>
      )}

      {isTrackSectionVisible && (
        // Track Lesson Plan Section
        <div>
          <h4><b>Track Lesson Plan</b></h4>
          <h5>Select Month:</h5>
          <select value={selectedMonth} onChange={handleSelectMonth}>
            {months.map(month => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>

          {lessonPlanDetails && (
            <div>
              <h5>Lesson Plan Tracking Data:</h5>
              <table>
                <thead>
                  <tr>
                    <th>Lesson Number</th>
                    <th>Lesson Name</th>
                    <th>Date of Completion</th>
                    <th>Description</th>
                    <th>Notes</th>
                    <th>Suggestions</th>
                  </tr>
                </thead>
                <tbody>
                  {lessonPlanDetails.lessons.map((lesson, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{lesson}</td>
                      <td>
                        <input
                          type="date"
                          value={(lessonPlanDetails.trackingData[index]?.dateOfCompletion || '')}
                          onChange={(e) => {
                            const updatedTrackingData = [...lessonPlanDetails.trackingData];
                            if (!updatedTrackingData[index]) {
                              updatedTrackingData[index] = {};
                            }
                            updatedTrackingData[index].dateOfCompletion = e.target.value;
                            setLessonPlanDetails(prevState => ({
                              ...prevState,
                              trackingData: updatedTrackingData,
                            }));
                          }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={(lessonPlanDetails.trackingData[index]?.description || '')}
                          onChange={(e) => {
                            const updatedTrackingData = [...lessonPlanDetails.trackingData];
                            if (!updatedTrackingData[index]) {
                              updatedTrackingData[index] = {};
                            }
                            updatedTrackingData[index].description = e.target.value;
                            setLessonPlanDetails(prevState => ({
                              ...prevState,
                              trackingData: updatedTrackingData,
                            }));
                          }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={(lessonPlanDetails.trackingData[index]?.notes || '')}
                          onChange={(e) => {
                            const updatedTrackingData = [...lessonPlanDetails.trackingData];
                            if (!updatedTrackingData[index]) {
                              updatedTrackingData[index] = {};
                            }
                            updatedTrackingData[index].notes = e.target.value;
                            setLessonPlanDetails(prevState => ({
                              ...prevState,
                              trackingData: updatedTrackingData,
                            }));
                          }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={(lessonPlanDetails.trackingData[index]?.suggestions || '')}
                          onChange={(e) => {
                            const updatedTrackingData = [...lessonPlanDetails.trackingData];
                            if (!updatedTrackingData[index]) {
                              updatedTrackingData[index] = {};
                            }
                            updatedTrackingData[index].suggestions = e.target.value;
                            setLessonPlanDetails(prevState => ({
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

export default LessonPlans;

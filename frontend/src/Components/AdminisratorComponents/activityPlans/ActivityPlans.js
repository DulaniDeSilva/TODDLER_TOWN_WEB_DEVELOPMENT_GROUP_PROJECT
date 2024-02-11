
import React, { useState } from 'react';
import '../../../Assets/Styles/StaffInterface.css'; 
function ActivityPlans() {
    const [lessonPlans, setLessonPlans] = useState({});
    const [trackingData, setTrackingData] = useState([]);

    // For Adding Lesson Plans
    const [showForm, setShowForm] = useState(false);
    const [selectedMonthToAdd, setSelectedMonthToAdd] = useState('');
    const [lessonsForTheMonth, setLessonsForTheMonth] = useState(Array(20).fill(''));

    // For Tracking Lesson Plans
    const [showTracking, setShowTracking] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState('');

    const handleLessonPlanSubmission = (month, lessons) => {
        setLessonPlans(prev => ({ ...prev, [month]: lessons }));
        setShowForm(false);
    };

    const handleTrackingDataSubmission = (index, data) => {
        const updatedData = [...trackingData];
        updatedData[index] = data;
        setTrackingData(updatedData);
    };

    const handleMonthSelection = (month) => {
        setSelectedMonth(month);
        if (lessonPlans[month]) {
            setTrackingData(Array(20).fill({}));
        } else {
            setTrackingData([]);
        }
    };

    return (
        <div className="lesson-plans-container">
            <h2>Activity Plans</h2>

            {!showForm && <button className="main-tab" onClick={() => setShowForm(true)}>Add Activity Plan</button>}
            

            {showForm && (
                <div>
                    <h3>Add Activity Plan</h3>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        handleLessonPlanSubmission(selectedMonthToAdd, lessonsForTheMonth);
                    }}>
                        <label>Select Month: </label>
                        <select value={selectedMonthToAdd} onChange={e => setSelectedMonthToAdd(e.target.value)}>
                            <option value="">-- Select --</option>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                            
                        </select>

                        {Array.from({ length: 20 }).map((_, index) => (
                            <div key={index}>
                                <label>{`Lesson ${index + 1}: `}</label>
                                <input 
                                    type="text"
                                    value={lessonsForTheMonth[index] || ''}
                                    onChange={e => {
                                        const newLessons = [...lessonsForTheMonth];
                                        newLessons[index] = e.target.value;
                                        setLessonsForTheMonth(newLessons);
                                    }}
                                />
                            </div>
                        ))}
                        <button type="submit">Submit Lesson Plan</button>
                    </form>
                </div>
            )}

{!showTracking && <button className="main-tab" onClick={() => setShowTracking(true)}>Activity Plan Tracking</button>}
            {showTracking && (
                <div>
                    <h3>Activity Plan Tracking</h3>
                    <label>Select Month: </label>
                    <select value={selectedMonth} onChange={e => handleMonthSelection(e.target.value)}>
                        <option value="">-- Select --</option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>

                    {selectedMonth && lessonPlans[selectedMonth] && (
                        <div>
                            {lessonPlans[selectedMonth].map((lesson, index) => (
                                <div key={index}>
                                    <h4>Lesson {index + 1}: {lesson}</h4>
                                    <div>
                                        <label>Date of Completion: </label>
                                        <input
                                            type="date"
                                            value={trackingData[index]?.dateOfCompletion || ''}
                                            onChange={e => handleTrackingDataSubmission(index, { ...trackingData[index], dateOfCompletion: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label>Description: </label>
                                        <textarea
                                            value={trackingData[index]?.description || ''}
                                            onChange={e => handleTrackingDataSubmission(index, { ...trackingData[index], description: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label>Notes: </label>
                                        <textarea
                                            value={trackingData[index]?.notes || ''}
                                            onChange={e => handleTrackingDataSubmission(index, { ...trackingData[index], notes: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label>Suggestions: </label>
                                        <textarea
                                            value={trackingData[index]?.suggestions || ''}
                                            onChange={e => handleTrackingDataSubmission(index, { ...trackingData[index], suggestions: e.target.value })}
                                        />
                                    </div>
                                    <button onClick={() => alert("Submitted!")}>Submit</button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default ActivityPlans;
import React, { useState, useEffect } from 'react';
import { getAcademicStaff, postAttendance, getAttendanceByDate } from '../../../api';
import '../../../Assets/Styles/StaffInterface.css';

const Attendance = () => {
  const [staff, setStaff] = useState([]);
  const [attendanceList, setAttendanceList] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [viewAttendance, setViewAttendance] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');


  useEffect(() => {
    fetchAcademicStaff();
  }, []);

  const fetchAcademicStaff = async () => {
    try {
      const data = await getAcademicStaff();
      setStaff(data);
      const initialAttendanceList = data.map(({ emp_id }) => ({ emp_id, status: 'absent' }));
      setAttendanceList(initialAttendanceList);
    } catch (error) {
      console.error('Failed to fetch academic staff:', error);
    }
  };

  const handleMarkAttendance = (emp_id, status) => {
    const updatedAttendanceList = attendanceList.map((entry) => {
      if (entry.emp_id === emp_id) {
        return { ...entry, status };
      }
      return entry;
    });
    setAttendanceList(updatedAttendanceList);
  };

  const handleSubmitAttendance = async () => {
    try {
      const date = selectedDate ? selectedDate : new Date().toISOString().split('T')[0];
      const filteredAttendanceList = attendanceList.map(({ emp_id, status }) => ({
        emp_id,
        status,
      }));
      await postAttendance({ date, attendanceList: filteredAttendanceList });
      setAttendanceList([]);
      setSelectedDate('');
      setSuccessMessage('Attendance submitted successfully!');
    } catch (error) {
      console.error('Failed to submit attendance:', error);
    }
  };

  const handleViewAttendance = async () => {
    try {
      const data = await getAttendanceByDate(selectedDate);
      setViewAttendance(data);
    } catch (error) {
      console.error('Failed to fetch attendance:', error);
    }
  };

  return (
    <div className="information-container">
      <h1>Attendance Management</h1>
      <div>
        <h2>Mark Attendance</h2>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
        {staff.map(({ emp_id, name }) => {
          const attendanceEntry = attendanceList.find((entry) => entry.emp_id === emp_id);
          const status = attendanceEntry ? attendanceEntry.status : 'absent';

          return (
            <div key={emp_id}>
              <span>{`${emp_id} - ${name}`}</span>
              <select
                value={status}
                onChange={(e) => handleMarkAttendance(emp_id, e.target.value)}
              >
                <option value="present">Present</option>
                <option value="absent">Absent</option>
              </select>
            </div>
          );
        })}
        <button onClick={handleSubmitAttendance}>Submit Attendance</button>
        {successMessage && <p>{successMessage}</p>}

      </div>
      <div>
        <h2>View Attendance</h2>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
        <button onClick={handleViewAttendance}>View Attendance</button>
        {viewAttendance && (
          <ul>
            {viewAttendance.attendanceList.map(({ emp_id, status }) => (
              <li key={emp_id}>{`${emp_id} - ${status}`}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Attendance;

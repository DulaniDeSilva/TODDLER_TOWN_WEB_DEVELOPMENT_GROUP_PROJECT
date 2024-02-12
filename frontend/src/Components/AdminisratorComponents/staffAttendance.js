import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../Assets/Styles/StaffInterface.css';
import { getAcademicStaff } from '../../api'; // Update the path to match your file structure

const StaffAttendance = () => {
    const [employees, setEmployees] = useState([]);
    const [attendance, setAttendance] = useState({});
    const [selectedDate, setSelectedDate] = useState(new Date());

    // Fetch academic staff from the database
    useEffect(() => {
        const fetchAcademicStaff = async () => {
            try {
                const response = await getAcademicStaff(); // Call the getAcademicStaff function from your api.js file
                setEmployees(response); // Assuming the response contains an array of academic staff objects with empId and name properties
                // Initialize attendance object with default values
                const initialAttendance = {};
                response.forEach(employee => {
                    initialAttendance[employee.empId] = 'Present'; // Default to 'Present'
                });
                setAttendance(initialAttendance);
            } catch (error) {
                console.error('Failed to fetch academic staff:', error);
            }
        };
        fetchAcademicStaff();
    }, []);

    // Handle selecting attendance status
    const handleSelectAttendance = async (empId, status) => {
        setAttendance(prevAttendance => ({
            ...prevAttendance,
            [empId]: status,
        }));

        try {
            const response = await axios.post('/api/staffAttendance/add', {
                date: selectedDate,
                staffId: empId,
                isPresent: status === 'Present',
            });
            console.log('Attendance submitted:', response.data);
        } catch (error) {
            console.error('Failed to submit attendance:', error);
        }
    };

    // Render the component
    return (
        <div className="lesson-plans-container">
            <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
            />
            <div>
                {employees.map((employee) => (
                    <div key={employee.empId}>
                        <p>{`${employee.empId} - ${employee.name}`}</p>
                        <select value={attendance[employee.empId]} onChange={(e) => handleSelectAttendance(employee.empId, e.target.value)}>
                            <option value="Present">Present</option>
                            <option value="Absent">Absent</option>
                        </select>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StaffAttendance;

import React, { useState, useEffect } from 'react';
import './Attendance.css';

function Attendance() {
    const [staffAttendance, setStaffAttendance] = useState({});
    const [selectedCategory, setSelectedCategory] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAttendanceData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/attendance');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const attendanceData = await response.json();
                setStaffAttendance(attendanceData);
                setSelectedCategory(Object.keys(attendanceData)[0]); // Set the default category
                setLoading(false);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchAttendanceData();
    }, []);

    const togglePresence = (category, index) => {
        const updatedCategory = [...staffAttendance[category]];
        updatedCategory[index].present = !updatedCategory[index].present;
        setStaffAttendance({ ...staffAttendance, [category]: updatedCategory });
    };

    const handleSubmit = async () => {
        const currentDate = new Date().toISOString().split('T')[0];
        const attendanceData = {
            date: currentDate,
            category: selectedCategory,
            attendance: staffAttendance[selectedCategory]
        };

        try {
            const response = await fetch('http://localhost:5000/api/attendance', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(attendanceData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            console.log('Attendance submitted successfully');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="attendance-container">
            <h2>Staff Attendance</h2>
            <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
                {Object.keys(staffAttendance).map(category => (
                    <option key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                ))}
            </select>

            <ul>
                {staffAttendance[selectedCategory].map((staff, index) => (
                    <li key={index}>
                        {staff.name}
                        <button
                            onClick={() => togglePresence(selectedCategory, index)}
                            data-status={staff.present ? 'present' : 'absent'}
                        >
                            {staff.present ? 'Present' : 'Absent'}
                        </button>
                    </li>
                ))}
            </ul>

            <button onClick={handleSubmit}>Submit Attendance</button>
        </div>
    );
}

export default Attendance;


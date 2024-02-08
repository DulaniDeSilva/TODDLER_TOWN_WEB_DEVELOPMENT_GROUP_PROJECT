
import React, { useState } from 'react';
import './Attendance.css';

function Attendance() {
    const [students, setStudents] = useState([
        { name: 'Sandun Perera', present: false },
        { name: 'Sama Wijesinghe', present: false },
        { name: 'Tharushi Fernando', present: false },
        { name: 'Samagi Marasinghe', present: false },
        { name: 'Shehani Gunasinghe', present: false }
        
    ]);

    const togglePresence = (index) => {
        const updatedStudents = [...students];
        updatedStudents[index].present = !updatedStudents[index].present;
        setStudents(updatedStudents);
    };

    return (
        <div className="attendance-container">
            <h2>Attendance Tracking</h2>
            <ul>
                {students.map((student, index) => (
                    <li key={index}>
                        {student.name}
                        <button 
                            onClick={() => togglePresence(index)} 
                            data-status={student.present ? 'present' : 'absent'}
                        >
                            {student.present ? 'Present' : 'Absent'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Attendance;

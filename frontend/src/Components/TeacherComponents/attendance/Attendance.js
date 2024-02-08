
import React, { useState } from 'react';
import './Attendance.css';

function Attendance() {
    const [students, setStudents] = useState([
        { name: 'Mihiru Perea', present: false },
        { name: 'Samathi Dikwalla', present: false },
        { name: 'Tharulee Fernando', present: false },
        { name: 'Menuki Adithya', present: false },
        { name: 'Yasath Dintharu', present: false }
        
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

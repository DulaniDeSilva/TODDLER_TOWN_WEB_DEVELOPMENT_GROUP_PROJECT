import React, { useState, useEffect } from 'react';
import '../../../Assets/Styles/StaffInterface.css'; // Ensure this path is correct
import { getStaffSalaryByID, updateStaffSalary } from '../../../api';


function SalaryDetails() {
    const [empId, setEmpId] = useState('');
    const [salaryData, setSalaryData] = useState(null);

    const fetchSalaryData = async () => {
        try {
            const data = await getStaffSalaryByID(empId);
            setSalaryData(data);
        } catch (error) {
            console.error('Failed to fetch salary data:', error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSalaryData({ ...salaryData, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            await updateStaffSalary(empId, salaryData);
            alert('Salary data updated successfully');
        } catch (error) {
            console.error('Failed to update salary data:', error);
        }
    };

    return (
        <div className="information-container">
            <label>
                Enter emp_id:
                <input type="text" value={empId} onChange={(e) => setEmpId(e.target.value)} />
            </label>
            <button onClick={fetchSalaryData}>Fetch Salary Data</button>

            {salaryData && (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Field</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(salaryData).map((key) => (
                                <tr key={key}>
                                    <td>{key}</td>
                                    <td>
                                        <input
                                            type="text"
                                            name={key}
                                            value={salaryData[key]}
                                            onChange={handleInputChange}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            )}
        </div>
    );
}

export default SalaryDetails;

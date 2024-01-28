import React, { useState, useEffect } from 'react';
import './salary.css'; // Ensure this path is correct

function SalaryDetails() {
    const [salaries, setSalaries] = useState([]);
    const [selectedSalary, setSelectedSalary] = useState(null);
    const [salaryForm, setSalaryForm] = useState({
        basicSalary: 0,
        bonus: 0,
        deduction: 0,
        isPaid: false
    });
    const [regNumber, setRegNumber] = useState('');
    const [mode, setMode] = useState('view'); // 'view' or 'edit'

    useEffect(() => {
        if (regNumber) {
            fetch(`/api/salaries/${regNumber}`)
                .then(response => response.json())
                .then(data => setSalaries(data))
                .catch(error => console.error('Error fetching salaries:', error));
        }
    }, [regNumber]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSalaryForm({ ...salaryForm, [name]: value });
    };

    const handleModeChange = (newMode) => {
        setMode(newMode);
        setSelectedSalary(null);
        setSalaryForm({ basicSalary: 0, bonus: 0, deduction: 0, isPaid: false });
    };

    const handleEdit = (salary) => {
        setSelectedSalary(salary);
        setSalaryForm(salary);
        setMode('edit');
    };

    const handleAddOrUpdate = async () => {
        // Implement add or update functionality
        console.log('Submit salary data', salaryForm);
        // Reset after submission
        setSalaryForm({ basicSalary: 0, bonus: 0, deduction: 0, isPaid: false });
        setSelectedSalary(null);
    };

    const handleDelete = async (salaryId) => {
        // Implement delete functionality
        console.log('Delete salary ID', salaryId);
    };

    const renderEditForm = () => (
        <div>
            <input
                type="text"
                name="basicSalary"
                placeholder="Basic Salary"
                value={salaryForm.basicSalary}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="bonus"
                placeholder="Bonus"
                value={salaryForm.bonus}
                onChange={handleInputChange}
            />
            <input
            
                type="text"
                name="deduction"
                placeholder="Deduction"
                value={salaryForm.deduction}
                onChange={handleInputChange}
            />
            <label>
                Is Paid:
                <input
                    type="checkbox"
                    name="isPaid"
                    checked={salaryForm.isPaid}
                    onChange={(e) => setSalaryForm({ ...salaryForm, isPaid: e.target.checked })}
                />
            </label>
            <button onClick={handleAddOrUpdate}>
                {selectedSalary ? 'Update Salary' : 'Add Salary'}
            </button>
        </div>
    );

    return (
        <div className="container">
            <h4 className="headerr">Salary Management</h4>
            <div className="button-container">
                <button onClick={() => handleModeChange('view')}>View Salary</button>
                <button onClick={() => handleModeChange('edit')}>Edit Salary</button>
            </div>

            <input 
                type="text" 
                value={regNumber} 
                onChange={(e) => setRegNumber(e.target.value)} 
                placeholder="Enter Staff Registration Number" 
            />

            {mode === 'view' && (
                <div className="report-output">
                    <h5>Salary Details</h5>
                    <table border="1" cellPadding="10">
                        <thead>
                            <tr>
                                <th>Month</th>
                                <th>Basic Salary</th>
                                <th>Bonus</th>
                                <th>Deductions</th>
                                <th>Net Salary</th>
                                <th>Paid</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {salaries.map(salary => (
                                <tr key={salary._id}>
                                    <td>{new Date(salary.month).toLocaleString('default', { month: 'long' })}</td>
                                    <td>Rs {salary.basicSalary}</td>
                                    <td>Rs {salary.bonus}</td>
                                    <td>Rs {salary.deduction}</td>
                                    <td>Rs {salary.netSalary}</td>
                                    <td>{salary.isPaid ? "Yes" : "No"}</td>
                                    <td>
                                        <button onClick={() => handleEdit(salary)}>Edit</button>
                                        <button onClick={() => handleDelete(salary._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {mode === 'edit' && (
                <div className="report-output">
                    {renderEditForm()}
                </div>
            )}
        </div>
    );
}

export default SalaryDetails;

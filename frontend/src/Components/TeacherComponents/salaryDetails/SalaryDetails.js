import React, { useState, useEffect } from 'react';

function SalaryDetails() {
    const [salaries, setSalaries] = useState([]);
    const [regNumber, setRegNumber] = useState('');

    useEffect(() => {
        if (regNumber) {
            fetch(`/api/salaries/${regNumber}`)
                .then(response => response.json())
                .then(data => setSalaries(data))
                .catch(error => console.error('Error fetching salaries:', error));
        }
    }, [regNumber]);

    return (
        <div>
            <h4>Salary Details</h4>
            <input 
                type="text" 
                value={regNumber} 
                onChange={e => setRegNumber(e.target.value)}
                placeholder="Enter Registration Number"
            />
            {salaries.length > 0 ? (
                <table border="1" cellPadding="10">
                    <thead>
                        <tr>
                            <th>Month</th>
                            <th>Basic Salary</th>
                            <th>Bonus</th>
                            <th>Deductions</th>
                            <th>Net Salary</th>
                            <th>Paid</th>
                        </tr>
                    </thead>
                    <tbody>
                        {salaries.map(salary => (
                            <tr key={salary._id}>
                                <td>{new Date(salary.month).toLocaleString('default', { month: 'long', year: 'numeric' })}</td>
                                <td>Rs {salary.basicSalary}</td>
                                <td>Rs {salary.bonus}</td>
                                <td>Rs {salary.deduction}</td>
                                <td>Rs {salary.netSalary}</td>
                                <td>{salary.isPaid ? "Yes" : "No"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No salary records found for this registration number.</p>
            )}
        </div>
    );
}

export default SalaryDetails;

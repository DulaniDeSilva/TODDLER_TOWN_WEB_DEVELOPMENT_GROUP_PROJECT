import React, { useState, useEffect } from 'react';

function SalaryDetails() {
    const [salaries, setSalaries] = useState([]);

    useEffect(() => {
        // Fetch all salaries from the backend API
        fetch('/api/salaries')
            .then(response => response.json())
            .then(data => setSalaries(data))
            .catch(error => console.error('Error fetching salaries:', error));
    }, []);

    return (
        <div>
            <h4>Salary Details</h4>
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
                            <td>{new Date(salary.month).toLocaleString('default', { month: 'long' })}</td>
                            <td>Rs {salary.basicSalary}</td>
                            <td>Rs {salary.bonus}</td>
                            <td>Rs {salary.deduction}</td>
                            <td>Rs {salary.netSalary}</td>
                            <td>{salary.isPaid ? "Yes" : "No"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SalaryDetails;


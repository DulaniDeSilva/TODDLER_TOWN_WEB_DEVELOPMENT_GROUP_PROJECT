
import React, { useState } from 'react';
import '../../../Assets/Styles/StaffInterface.css';


function SalaryDetails() {
    const [months, setMonths] = useState([
        { id: 1, name: 'January', basic: 50000, bonus: 5000, deductions: 2000, netSalary: 53000 , paid: true},
        { id: 2, name: 'February', basic: 55000, bonus: 6000, deductions: 2500, netSalary: 58500 , paid: false},
       
    ]);

    return (
        <div className="information-container">
            <h4>Salary Details</h4>
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>Basic Salary</th>
                        <th>Bonus</th>
                        <th>Deductions</th>
                        <th>Net Salary</th>
                        <th>paid</th>
                    </tr>
                </thead>
                <tbody>
                    {months.map(month => (
                        <tr key={month.id}>
                            <td>{month.name}</td>
                            <td>Rs{month.basic}</td>
                            <td>Rs{month.bonus}</td>
                            <td>Rs{month.deductions}</td>
                            <td>Rs{month.netSalary}</td>
                            <td>{month.paid}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SalaryDetails;

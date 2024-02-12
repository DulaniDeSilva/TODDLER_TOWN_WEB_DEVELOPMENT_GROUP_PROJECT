import React from 'react';

const PrintableContent = ({ staffList }) => (
    <div>
        {staffList.length > 0 && (
            <table>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Name</th>
                        <th>Date of Birth</th>
                        <th>Address</th>
                        <th>Gender</th>
                        <th>NIC</th>
                        <th>Qualifications</th>
                        <th>Year Joined</th>
                        <th>Salary</th>
                        {/* Add more columns as needed */}
                    </tr>
                </thead>
                <tbody>
                    {staffList.map((staff) => (
                        <tr key={staff.emp_id}>
                            <td>{staff.emp_id}</td>
                            <td>{staff.name}</td>
                            <td>{staff.dob}</td>
                            <td>{staff.address}</td>
                            <td>{staff.gender}</td>
                            <td>{staff.NIC}</td>
                            <td>{staff.qualifications}</td>
                            <td>{staff.year_joined}</td>
                            <td>{staff.salary}</td>
                            {/* Add more columns as needed */}
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
    </div>
);

export default PrintableContent;

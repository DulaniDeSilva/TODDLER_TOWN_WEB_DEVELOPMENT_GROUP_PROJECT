import React, { useState, useEffect } from 'react';
import { deleteAcademicStaff, addAcademicStaff, getAcademicStaff, updateAcademicStaff } from '../../../api';
import ChildInformation from './childInformation';

function Information() {
    const [showChildInfo, setShowChildInfo] = useState(false);
    const [showStaffInfo, setShowStaffInfo] = useState(false);
    const [showAddForm, setShowAddForm] = useState(false);
    const [showDeleteForm, setShowDeleteForm] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [showTableView, setShowTableView] = useState(false);

    const [formData, setFormData] = useState({
        emp_id: '',
        emp_type: '',
        name: '',
        dob: '',
        address: '',
        gender: '',
        NIC: '',
        qualifications: '',
        year_joined: '',
        salary: '',
    });

    const [staffList, setStaffList] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleAddFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await addAcademicStaff(formData);
            console.log('Staff added successfully:', response);
            window.alert('Record added successfully!');
            fetchStaffList(); // Fetch updated staff list after addition
        } catch (error) {
            console.error('Failed to add staff:', error);
            window.alert('Failed to add record. Please try again.');
        } finally {
            // Reset the form fields after submission
            setFormData({
                emp_id: '',
                emp_type: '',
                name: '',
                dob: '',
                address: '',
                gender: '',
                NIC: '',
                qualifications: '',
                year_joined: '',
                salary: '',
            });
        }
    };

    const handleDeleteFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await deleteAcademicStaff(formData.emp_id);
            console.log('Staff deleted successfully:', response);
            window.alert('Record deleted successfully!');
            fetchStaffList(); // Fetch updated staff list after deletion
        } catch (error) {
            console.error('Failed to delete staff:', error);
            window.alert('Failed to delete record. Please check the emp_id and try again.');
        } finally {
            setShowDeleteForm(false);
        }
    };

    const handleViewButtonClick = () => {
        setShowStaffInfo(!showStaffInfo);
        setShowAddForm(false);
        setShowDeleteForm(false);
        setShowUpdateForm(false);
    };

    const handleUpdateFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await updateAcademicStaff(formData);
            console.log('Staff updated successfully:', response);
            window.alert('Record updated successfully!');
            fetchStaffList(); // Fetch updated staff list after updating
        } catch (error) {
            console.error('Failed to update staff:', error);
            window.alert('Failed to update record. Please try again.');
        } finally {
            setShowUpdateForm(false);
            // Reset the form fields after submission
            setFormData({
                emp_id: '',
                emp_type: '',
                name: '',
                dob: '',
                address: '',
                gender: '',
                NIC: '',
                qualifications: '',
                year_joined: '',
                salary: '',
            });
        }
    };

    const fetchStaffList = async () => {
        try {
            const staffData = await getAcademicStaff();
            setStaffList(staffData);
        } catch (error) {
            console.error('Failed to fetch staff list:', error);
        }
    };

    useEffect(() => {
        fetchStaffList();
    }, []);

    return (
        <div className="information-container">
            <h3><b>Information Management</b></h3>

            {!showChildInfo && <button className="main-tab" onClick={() => setShowChildInfo(true)}>Child Information</button>}
            {showChildInfo && (
                <div>
                    <ChildInformation showChildInfo={showChildInfo} setShowChildInfo={setShowChildInfo} />
                </div>
            )}

            {!showStaffInfo && <button className="main-tab" onClick={handleViewButtonClick}>Staff Information</button>}
            {showStaffInfo && (
                <div>
                    <h3><b>Staff Information</b></h3>
                    <div>
                        <button onClick={() => setShowAddForm(true)}>Add</button>
                        <button onClick={() => setShowDeleteForm(true)}>Delete</button>
                        <button onClick={() => setShowUpdateForm(true)}>Update</button>
                        <button onClick={handleViewButtonClick}>View</button>
                        <button>Print</button>
                    </div>

                    {showAddForm && (
                        <div>
                            <h4><b>Add New Staff Member</b></h4>
                            <form onSubmit={handleAddFormSubmit}>
                                {/* ... (input fields for adding new staff member) */}
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    )}

                    {showDeleteForm && (
                        <div>
                            <h4><b>Delete Staff Member</b></h4>
                            <form onSubmit={handleDeleteFormSubmit}>
                                {/* ... (input fields for deleting staff member) */}
                                <button type="submit">Delete</button>
                            </form>
                        </div>
                    )}

                    {showUpdateForm && (
                        <div>
                            <h4><b>Update Staff Member</b></h4>
                            <form onSubmit={handleUpdateFormSubmit}>
                                {/* ... (input fields for updating staff member data) */}
                                <button type="submit">Update</button>
                            </form>
                        </div>
                    )}

                    {showStaffInfo && (
                        <div>
                            {staffList.length > 0 && (
                                <div>
                                    <h4><b>View Staff Members</b></h4>
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
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Information;

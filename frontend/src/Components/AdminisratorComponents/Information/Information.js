import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../../Assets/Styles/StaffInterface.css';
import { deleteAcademicStaff, addAcademicStaff, getAcademicStaff, updateAcademicStaff } from '../../../api';
import ChildInformation from './childInformation';


const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";


function Information() {
    const [showChildInfo, setShowChildInfo] = useState(false); 
    const [showStaffInfo, setShowStaffInfo] = useState(false);
    const [showAddForm, setShowAddForm] = useState(false);
    const [showDeleteForm, setShowDeleteForm] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    
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
    const handleCancel = () => {
        setShowStaffInfo(false);
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

            {!showStaffInfo && <button className="main-tab" onClick={() => setShowStaffInfo(true)}>Staff Information</button>}
            {showStaffInfo && (
                <div>
                    <h3><b>Staff Information</b></h3>
                    <div>
                        <button onClick={() => setShowAddForm(true)}>Add</button>
                        <button onClick={() => setShowDeleteForm(true)}>Delete</button>
                        <button onClick={() => setShowUpdateForm(true)}>Update</button>
                        <button onClick={() => setShowUpdateForm(true)}>View</button> 
                        <button onClick={() => setShowUpdateForm(true)}>Print</button>
                        <button onClick={handleCancel}>Cancel</button>
                        
            
                        
                    </div>

                    {showAddForm && (
                        <div>
                            <h4><b>Add New Staff Member</b></h4>
                            <form onSubmit={handleAddFormSubmit}>
                                <label>Employee ID: <input type="text" name="emp_id" value={formData.emp_id} onChange={handleInputChange} required /></label>
                                <label>Employee Type: <input type="text" name="emp_type" value={formData.emp_type} onChange={handleInputChange} /></label>
                                <label>Name: <input type="text" name="name" value={formData.name} onChange={handleInputChange} /></label>
                                <label>Date of Birth: <input type="text" name="dob" value={formData.dob} onChange={handleInputChange} /></label>
                                <label>Address: <input type="text" name="address" value={formData.address} onChange={handleInputChange} /></label>
                                <label>Gender: <input type="text" name="gender" value={formData.gender} onChange={handleInputChange} /></label>
                                <label>NIC: <input type="text" name="NIC" value={formData.NIC} onChange={handleInputChange} /></label>
                                <label>Qualifications: <input type="text" name="qualifications" value={formData.qualifications} onChange={handleInputChange} /></label>
                                <label>Year Joined: <input type="text" name="year_joined" value={formData.year_joined} onChange={handleInputChange} /></label>
                                <label>Salary: <input type="text" name="salary" value={formData.salary} onChange={handleInputChange} /></label>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    )}

                    {showDeleteForm && (
                        <div>
                            <h4><b>Delete Staff Member</b></h4>
                            
                            <form onSubmit={handleDeleteFormSubmit}>
                                <label>Employee ID to Delete: <input type="text" name="emp_id" value={formData.emp_id} onChange={handleInputChange} required /></label>
                                <button type="submit">Delete</button>
                            </form>
                        </div>
                    )}

                    {showUpdateForm && (
                        <div>
                            <h4><b>Update Staff Member</b></h4>
                            <form onSubmit={handleUpdateFormSubmit}>
                                <label>Employee ID to Update: <input type="text" name="emp_id" value={formData.emp_id} onChange={handleInputChange} required /></label>
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

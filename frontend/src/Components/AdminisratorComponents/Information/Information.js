import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../../Assets/Styles/StaffInterface.css';
import { deleteAcademicStaff, addAcademicStaff, getAcademicStaff, updateAcademicStaff } from '../../../api';
import {getChild, getChildByEnrollmentNo, addChild, updateChild, deleteChild} from '../../../api'
// import ChildInformation from './childInformation';
import PrintableContent from './printableContent'; // Import the PrintableContent component

const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

function Information() {
    const [showChildInfo, setShowChildInfo] = useState(false);
    const [showStaffInfo, setShowStaffInfo] = useState(false);

    const [showAddForm, setShowAddForm] = useState(false);
    const [showChildAddForm, setShowChildAddForm] = useState(false);

    const [showDeleteForm, setShowDeleteForm] = useState(false);
    const [showChildDeleteForm, setShowChildDeleteForm] = useState(false);

    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [showUpdateChildForm, setShowUpdateChildForm] = useState(false);

    const [showViewStaff, setShowViewStaff] = useState(false);
    const [showViewChild, setShowViewChild] = useState(false);


    const [childList, setChildList] = useState([]);
    const [staffList, setStaffList] = useState([]);

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
    const [childFormData, setChildFormData] = useState({
        name: '',
        initials: '',
        firstName: '',
        lastName: '',
        enrollmentNo: '',
        birthday: '',
        age: '',
        gender: '',
        address: '',
        city: '',
        zip: '',
        serviceType: '',
        motherName: '',
        motherAddress: '',
        motherOccupation: '',
        motherNicNo: '',
        motherTelephoneNo: '',
        motherWorkTelephoneNo: '',
        motherEmail: '',
        fatherName: '',
        fatherAddress: '',
        fatherOccupation: '',
        fatherNicNo: '',
        fatherTelephoneNo: '',
        fatherWorkTelephoneNo: '',
        fatherEmail: '',
        guardianName: '',
        guardianAddress: '',
        guardianNicNo: '',
        guardianTelephoneNo: '',
        guardianEmail: '',
        cardHolderName: '',
        nameOnCard: '',
        cardNumber: '',
        expiration: '',
        cvv: ''
    });

    

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleChildInputChange = (e) => {
        const { name, value } = e.target;
        setChildFormData((prevData) => ({ ...prevData, [name]: value }));
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
    const handleChildAddFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await addChild(childFormData);
            console.log('Child added successfully:', response);
            window.alert('Child record added successfully!');
            fetchChildList(); // Fetch updated child list after addition
        } catch (error) {
            console.error('Failed to add child:', error);
            window.alert('Failed to add child record. Please try again.');
        } finally {
            // Reset the form fields after submission
            setChildFormData({
                name: '',
                initials: '',
                firstName: '',
                lastName: '',
                enrollmentNo: '',
                birthday: '',
                age: '',
                gender: '',
                address: '',
                city: '',
                zip: '',
                serviceType: '',
                motherName: '',
                motherAddress: '',
                motherOccupation: '',
                motherNicNo: '',
                motherTelephoneNo: '',
                motherWorkTelephoneNo: '',
                motherEmail: '',
                fatherName: '',
                fatherAddress: '',
                fatherOccupation: '',
                fatherNicNo: '',
                fatherTelephoneNo: '',
                fatherWorkTelephoneNo: '',
                fatherEmail: '',
                guardianName: '',
                guardianAddress: '',
                guardianNicNo: '',
                guardianTelephoneNo: '',
                guardianEmail: '',
                cardHolderName: '',
                nameOnCard: '',
                cardNumber: '',
                expiration: '',
                cvv: ''
            });
        }
    };

    const fetchChildList = async () => {
        try {
            const childData = await getChild();
            setChildList(childData);
        } catch (error) {
            console.error('Failed to fetch child list:', error);
        }
    };

    useEffect(() => {
        fetchChildList();
    }, []);

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

    const handleChildDeleteFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await deleteChild(formData.enrollmentNo);
            console.log('Child deleted successfully:', response);
            window.alert('Record deleted successfully!');
            fetchChildList(); // Fetch updated staff list after deletion
        } catch (error) {
            console.error('Failed to delete child:', error);
            window.alert('Failed to delete record. Please check the enrollmentNo and try again.');
        } finally {
            setShowChildDeleteForm(false);
        }
    };

    const handleUpdateFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await updateAcademicStaff(formData.emp_id, formData);
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

    const handleUpdateChildFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const childData = await getChildByEnrollmentNo(formData.enrollmentNo);
            setChildFormData(childData);
            const response = await updateChild(formData.enrollmentNo, childFormData);
            console.log('Child updated successfully:', response);
            window.alert('Record updated successfully!');
            fetchChildList(); // Fetch updated child list after updating
        } catch (error) {
            console.error('Failed to update child:', error);
            window.alert('Failed to update record. Please try again.');
        } finally {
            setFormData({
                enrollmentNo: '',
            });
            setShowUpdateChildForm(false);
        }
    };

    const handleCancel = () => {
        setShowStaffInfo(false);
        setShowChildInfo(false);
    };

    

    const handleShowChildInfo = () => {
        setShowChildInfo(true);
        setShowStaffInfo(false);

        setShowAddForm(false);
        

        setShowDeleteForm(false);
        setShowChildDeleteForm(false);

        setShowUpdateForm(false);
        setShowUpdateChildForm(false);

        setShowViewStaff(false);
        setShowViewChild(false);
    };

    const handleShowStaffInfo = () => {
        setShowChildInfo(false);
        setShowStaffInfo(true);

        setShowAddForm(false);
        

        setShowDeleteForm(false);
        setShowChildDeleteForm(false);

        setShowUpdateForm(false);
        setShowUpdateChildForm(false);

        setShowViewStaff(false);
        setShowViewChild(false);
    };

    const handleShowAddForm = () => {
        setShowChildInfo(false);
        setShowStaffInfo(true);
        setShowAddForm(true);
        setShowDeleteForm(false);
        setShowChildDeleteForm(false);

        setShowUpdateForm(false);
        setShowUpdateChildForm(false);

        setShowViewStaff(false);
        setShowViewChild(false);
    };

    const handleShowDeleteForm = () => {
        setShowChildInfo(false);
        setShowStaffInfo(true);
        setShowAddForm(false);
        setShowDeleteForm(true);
        setShowChildDeleteForm(false);

        setShowUpdateForm(false);
        setShowUpdateChildForm(false);

        setShowViewStaff(false);
        setShowViewChild(false);
    };

    const handleShowUpdateForm = () => {
        setShowChildInfo(false);
        setShowStaffInfo(true);
        setShowAddForm(false);
        setShowDeleteForm(false);
        setShowChildDeleteForm(false);

        setShowUpdateForm(true);
        setShowUpdateChildForm(false);

        setShowViewStaff(false);
        setShowViewChild(false);
    };

    const handleShowChildAddForm = () => {
        setShowChildInfo(true);
        setShowStaffInfo(false);

        setShowAddForm(false);
        setShowChildAddForm(true);
        setShowDeleteForm(false);
        setShowChildDeleteForm(false);

        setShowUpdateForm(false);
        setShowUpdateChildForm(false);

        setShowViewStaff(false);
        setShowViewChild(false);
    };

    const handleShowChildDeleteForm = () => {
        setShowChildInfo(true);
        setShowStaffInfo(false);

        setShowAddForm(false);
        setShowChildAddForm(false);
        setShowDeleteForm(false);
        setShowChildDeleteForm(true);

        setShowUpdateForm(false);
        setShowUpdateChildForm(false);

        setShowViewStaff(false);
        setShowViewChild(false);
    };

    const handleShowUpdateChildForm  = () => {
        setShowChildInfo(true);
        setShowStaffInfo(false);

        setShowAddForm(false);
        setShowChildAddForm(false);
        setShowDeleteForm(false);
        setShowChildDeleteForm(false);

        setShowUpdateForm(false);
        setShowUpdateChildForm(true);

        setShowViewStaff(false);
        setShowViewChild(false);
    };

    



    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="information-container">
            <h3><b>Information Management</b></h3>

            {!showChildInfo && <button className="main-tab" onClick={handleShowChildInfo}>Child Information</button>}
            {showChildInfo && (
                <div>
                    <h3><b>Child Information</b></h3>
                    <div>
                        <button onClick={handleShowChildAddForm}>Add</button>
                        <button onClick={handleShowChildDeleteForm}>Delete</button>
                        <button onClick={handleShowUpdateChildForm}>Update</button>
                        <button onClick={() => setShowViewChild(true)}>View</button>
                        <button onClick={handlePrint}>Print</button>
                        <button onClick={handleCancel}>Cancel</button>
                    </div>
                    {showChildAddForm && (
                     <div>
        <h4><b>Add New Child</b></h4>
        <form onSubmit={handleChildAddFormSubmit}>
            <label>Name: <input type="text" name="name" value={childFormData.name} onChange={handleChildInputChange} required /></label>
            <label>Initials: <input type="text" name="initials" value={childFormData.initials} onChange={handleChildInputChange} /></label>
            <label>First Name: <input type="text" name="firstName" value={childFormData.firstName} onChange={handleChildInputChange} /></label>
            <label>Last Name: <input type="text" name="lastName" value={childFormData.lastName} onChange={handleChildInputChange} /></label>
            <label>Enrollment Number: <input type="text" name="enrollmentNo" value={childFormData.enrollmentNo} onChange={handleChildInputChange} /></label>
            <label>Birthday: <input type="text" name="birthday" value={childFormData.birthday} onChange={handleChildInputChange} /></label>
            <label>Age: <input type="text" name="age" value={childFormData.age} onChange={handleChildInputChange} /></label>
            <label>Gender: <input type="text" name="gender" value={childFormData.gender} onChange={handleChildInputChange} /></label>
            <label>Address: <input type="text" name="address" value={childFormData.address} onChange={handleChildInputChange} /></label>
            <label>City: <input type="text" name="city" value={childFormData.city} onChange={handleChildInputChange} /></label>
            <label>Zip: <input type="text" name="zip" value={childFormData.zip} onChange={handleChildInputChange} /></label>
            <label>Service Type: <input type="text" name="serviceType" value={childFormData.serviceType} onChange={handleChildInputChange} /></label>
            <label>Mother's Name: <input type="text" name="motherName" value={childFormData.motherName} onChange={handleChildInputChange} /></label>
            <label>Mother's Address: <input type="text" name="motherAddress" value={childFormData.motherAddress} onChange={handleChildInputChange} /></label>
            <label>Mother's Occupation: <input type="text" name="motherOccupation" value={childFormData.motherOccupation} onChange={handleChildInputChange} /></label>
            {/* Add more fields as needed */}
            <button type="submit">Submit</button>
        </form>
    </div>
)}
{showUpdateChildForm && (
    <div>
        <h4><b>Update Child</b></h4>
        <form onSubmit={handleUpdateChildFormSubmit}>
            <label>Enter Enrollment Number: <input type="text" name="enrollmentNo" value={formData.enrollmentNo} onChange={handleInputChange} required /></label>
            <button type="submit">Fetch Child Data</button>
        </form>
        <div>
                <h4><b>Child Information</b></h4>
                <form onSubmit={handleUpdateChildFormSubmit}>
                    <label>Name: <input type="text" name="name" value={childFormData.name} onChange={handleChildInputChange} required /></label>
                    <label>Initials: <input type="text" name="initials" value={childFormData.initials} onChange={handleChildInputChange} required /></label>
                    
                    <button type="submit">Update Child Data</button>
                </form>
            </div>
            <button type="submit">Update</button>
        
    </div>
)}

{showChildDeleteForm && (
    <div>
        <h4><b>Delete Child</b></h4>
        <form onSubmit={handleChildDeleteFormSubmit}>
            <label>Enrollment Number to Delete: <input type="text" name="enrollmentNo" value={formData.enrollmentNo} onChange={handleInputChange} required /></label>
            <button type="submit">Delete</button>
        </form>
    </div>
)}
{showViewChild && (
    <div>
        <h4><b>View Children</b></h4>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Initials</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Enrollment Number</th>
                    <th>Birthday</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Zip</th>
                    <th>Service Type</th>
                    <th>Mother's Name</th>
                    <th>Mother's Address</th>
                    <th>Mother's Occupation</th>
                   
                </tr>
            </thead>
            <tbody>
                {childList.map((child) => (
                    <tr key={child.enrollmentNo}>
                        <td>{child.name}</td>
                        <td>{child.initials}</td>
                        <td>{child.firstName}</td>
                        <td>{child.lastName}</td>
                        <td>{child.enrollmentNo}</td>
                        <td>{child.birthday}</td>
                        <td>{child.age}</td>
                        <td>{child.gender}</td>
                        <td>{child.address}</td>
                        <td>{child.city}</td>
                        <td>{child.zip}</td>
                        <td>{child.serviceType}</td>
                        <td>{child.motherName}</td>
                        <td>{child.motherAddress}</td>
                        <td>{child.motherOccupation}</td>
                       
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
)}

                </div>
            )}
            {!showStaffInfo && <button className="main-tab" onClick={handleShowStaffInfo}>Staff Information</button>}
            {showStaffInfo && (
                <div>
                    <h3><b>Staff Information</b></h3>
                    <div>
                        <button onClick={handleShowAddForm}>Add</button>
                        <button onClick={handleShowDeleteForm}>Delete</button>
                        <button onClick={handleShowUpdateForm}>Update</button>
                        <button onClick={() => setShowViewStaff(true)}>View</button>
                        <button onClick={handlePrint}>Print</button>
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
                                
                                <button type="submit">Update</button>
                            </form>
                        </div>
                    )}
                    {showViewStaff && (
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
                                            
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Information;

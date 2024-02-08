import React, { useState, useEffect } from 'react';
import { addAcademicStaff, getAcademicStaff, updateAcademicStaff, deleteAcademicStaff } from '../../../api'; // Import API functions for academic staff (adjust these based on your API)

function StaffInformationManagement() {
  const [academicStaff, setAcademicStaff] = useState([]);
  const [formData, setFormData] = useState({
    emp_id: '',
    emp_type: 'academic', // Default to academic staff
    name: '',
    dob: '',
    address: '',
    gender: '',
    NIC: '',
    qualifications: '',
    year_joined: '',
    salary: '',
  });
  const [operation, setOperation] = useState('add'); // Operation can be 'add' or 'update'

  useEffect(() => {
    // Fetch academic staff data when the component mounts
    fetchAcademicStaff();
  }, []);

  const fetchAcademicStaff = async () => {
    try {
      const staffData = await getAcademicStaff();
      setAcademicStaff(staffData);
    } catch (error) {
      console.error('Error fetching academic staff data:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleOperation = async () => {
    try {
      if (operation === 'add') {
        await addAcademicStaff(formData);
      } else if (operation === 'update') {
        await updateAcademicStaff(formData.emp_id, formData);
      }

      // Reset form data and fetch updated academic staff data
      setFormData({
        emp_id: '',
        emp_type: 'academic',
        name: '',
        dob: '',
        address: '',
        gender: '',
        NIC: '',
        qualifications: '',
        year_joined: '',
        salary: '',
      });
      setOperation('add');
      fetchAcademicStaff();
    } catch (error) {
      console.error('Error performing staff operation:', error);
    }
  };

  const handleEditClick = (staff) => {
    // Set form data for editing
    setFormData({ ...staff });
    setOperation('update');
  };

  const handleDeleteClick = async (emp_id) => {
    try {
      await deleteAcademicStaff(emp_id);
      fetchAcademicStaff();
    } catch (error) {
      console.error('Error deleting staff:', error);
    }
  };

  return (
    <div>
      <h2>Staff Information Management</h2>
      <form>
        {/* Add your form fields here */}
        <button type="button" onClick={handleOperation}>{operation === 'add' ? 'Add' : 'Update'} Staff</button>
      </form>

      <h3>Staff List</h3>
      <table>
        <thead>
          <tr>
            <th>Emp ID</th>
            <th>Name</th>
            {/* Add more headers based on your staff fields */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {academicStaff.map((staff) => (
            <tr key={staff.emp_id}>
              <td>{staff.emp_id}</td>
              <td>{staff.name}</td>
              {/* Add more cells based on your staff fields */}
              <td>
                <button type="button" onClick={() => handleEditClick(staff)}>Edit</button>
                <button type="button" onClick={() => handleDeleteClick(staff.emp_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StaffInformationManagement;

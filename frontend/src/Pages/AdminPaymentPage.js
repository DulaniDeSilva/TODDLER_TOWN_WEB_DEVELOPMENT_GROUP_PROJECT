import React, { useEffect, useState } from 'react';
import '../Assets/Styles/AdminPayment.css';

const AdminPaymentPage = () => {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const response = await fetch('/adminPayment');
                if (!response.ok) {
                    throw new Error('Failed to fetch payments');
                }
                const data = await response.json();
                setPayments(data);
            } catch (error) {
                console.error('Error fetching payments:', error.message);
            }
        };

        fetchPayments();
    }, []);

    return (
        <div className='AdminPaymentPage'>
      <h2>Summary of All Payments</h2>
      {payments.length > 0 ? (
        <table className='AdminPaymentTable'>
          <thead>
            <tr>
              <th>Type</th>
              <th>Name</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map(payment => (
              <tr key={payment._id}>
                <td>{payment.paymentType}</td>
                <td>{payment.paymentName}</td>
                <td>{payment.description}</td>
                <td>{payment.amount}</td>
                <td>{new Date(payment.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No payments available.</p>
      )}
    </div>
    );
};

export default AdminPaymentPage;

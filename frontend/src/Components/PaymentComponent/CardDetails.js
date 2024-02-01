import React from 'react';
import { useAuthContext } from "../../hooks/useAuthContext";
import { useChildEnrollmentContext } from "../../hooks/useChildEnrollmentContext";

const CardDetails = ({ child }) => {
  const { dispatch } = useChildEnrollmentContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user || !child) {
      return;
    }

    const response = await fetch('/children/' + child._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_CHILD', payload: json });
    }
  };

  // Check if 'child' is defined before accessing its properties
  if (!child) {
    return null; // or render a loading state or error message
  }

  return (
    <div className="children-details">
      <p><strong>Card Number:</strong>{child.cardNumber}</p>
      <p><strong>Name on Card:</strong>{child.nameOnCard}</p>
      <p><strong>Expiration:</strong>{child.expiration}</p>
      <p><strong>CVV:</strong>{child.cvv}</p>
      <button><span onClick={handleClick}>Delete</span></button>
    </div>
  );
};

export default CardDetails;

import React, { useEffect, useState } from 'react';
import '../Assets/Styles/AdminMessagePage.css';

const AdminMessagePage = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await fetch('/waitingList/');
                if (!response.ok) {
                    throw new Error('Failed to fetch messages');
                }
                const data = await response.json();
                setMessages(data);
            } catch (error) {
                console.error('Error fetching messages:', error.message);
            }
        };

        fetchMessages();
    }, []);


    const handleDelete = async (id) =>{
        try{
            const response = await fetch(`/waitingList/${id}`,{
                method: 'DELETE'
            });
            if(!response.ok){
                throw new Error('Failed to delete messages');
            }
            setMessages(messages.filter(message =>message._id !== id))
        }catch(error){
            console.error('Error deleting messages', error.message);
        }
    };

    // const handleUpdate = async (id, updatedData) =>{
    //     try{
    //         const response = await fetch(`/waitingList/${id}`,{
    //             method: 'PATCH',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body:JSON.stringify(updatedData)
    //         });
    //         if(!response.ok){
    //             throw new Error('Failed to update messages');
    //         }

    //         const updatedMessagesResponse = await fetch(`/waitingList/`);
    //         if(!updatedMessagesResponse.ok){
    //             throw new Error ('Failed to fetch updated messages');
    //         }
    //         const updatedMessagesData = await updatedMessagesResponse.json();
    //         setMessages(updatedMessagesData);
    //     }catch(error){
    //         console.error('Error updating message:', error.message);
    //     }
    // }

    return (
        <div className='admin-message-page'>
      <h2>Summary of All Messages</h2>
      {messages.length > 0 ? (
        <table className='AdminMessageTable'>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {messages.map(messages => (
              <tr key={messages._id}>
                <td>{messages.fullName}</td>
                <td>{messages.email}</td>
                <td>{messages.description}</td>
                <td>
                    <button onClick = {() =>handleDelete(messages._id)} className='common-button'>Delete</button>
                </td>
                {/* <td>
                    <button onClick = {() =>handleUpdate(messages._id,messages)}>Update</button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No messages available.</p>
      )}
    </div>
    );
};

export default AdminMessagePage;

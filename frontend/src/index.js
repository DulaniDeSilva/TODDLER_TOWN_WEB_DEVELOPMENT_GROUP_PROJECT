import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { InventoryContextProvider } from './context/InventoryContext';
import { AuthContextProvider } from './context/AuthContext';
import { ChildEnrollmentContextProvider } from './context/ChildEnrollmentContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <AuthContextProvider>
   <ChildEnrollmentContextProvider>
    <InventoryContextProvider>
      <App/>
    </InventoryContextProvider>
    </ChildEnrollmentContextProvider>
  </AuthContextProvider>
  </React.StrictMode>
);
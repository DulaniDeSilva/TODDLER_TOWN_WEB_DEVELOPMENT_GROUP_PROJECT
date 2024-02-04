import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { InventoryContextProvider } from './context/InventoryContext';
import { AuthContextProvider } from './context/AuthContext';
import { ChildEnrollmentContextProvider } from './context/ChildEnrollmentContext';
import { PaymentContextProvider } from './context/PaymentContext';
import { WaitingListContextProvider } from './context/WaitingListContext';
import { PaymentCardContextProvider } from './context/PaymentCardContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <AuthContextProvider>
  <PaymentContextProvider>
  <PaymentCardContextProvider>
   <ChildEnrollmentContextProvider>
    <InventoryContextProvider>
      <WaitingListContextProvider>
        <App/>
      </WaitingListContextProvider>
    </InventoryContextProvider>
    </ChildEnrollmentContextProvider>
    </PaymentCardContextProvider>
    </PaymentContextProvider>
  </AuthContextProvider>
  </React.StrictMode>
);
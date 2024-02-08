import { paymentContext } from "../context/PaymentContext";
import { useContext } from "react";

export const usePaymentContext = ()=>{
    const context = useContext(paymentContext);

    if(!context){
        throw Error('usePaymentContext must be used inside an PaymentContextProvider');
    }

    return context;
}
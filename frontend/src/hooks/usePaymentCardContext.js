import { paymentCardContext } from "../context/PaymentCardContext";
import { useContext } from "react";

export const usePaymentCardContext = ()=>{
    const context = useContext(paymentCardContext);

    if(!context){
        throw Error('usePaymentCardContext must be used inside an PaymentCardContextProvider');
    }

    return context;
}
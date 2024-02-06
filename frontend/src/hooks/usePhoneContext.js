import { phoneContext } from "../context/PhoneContext";
import { useContext } from "react";

export const usePhoneContext = ()=>{
    const context = useContext(phoneContext);

    if(!context){
        throw Error('usePhoneContext must be used inside an PhoneContextProvider');
    }

    return context;
}
import { ChildEnrollmentContext } from "../context/ChildEnrollmentContext";
import { useContext } from "react";

export const useChildEnrollmentContext = ()=>{
    const context = useContext(ChildEnrollmentContext);

    if(!context){
        throw Error('useChildCOntext must be used inside an ChildContextProvider');
    }

    return context;
}
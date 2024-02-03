import { waitingListContext } from "../context/WaitingListContext";
import { useContext } from "react";

export const useWaitingListContext = ()=>{
    const context = useContext(waitingListContext);

    if(!context){
        throw Error('useWaitingListContext must be used inside an WaitingListContextProvider');
    }

    return context;
}
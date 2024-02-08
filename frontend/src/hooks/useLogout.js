import { useAuthContext } from "./useAuthContext";
import { useInventoryContext } from "./useInventoryContext";

export const useLogout = () =>{
    const {dispatch} =  useAuthContext();
    const {dispatch: inventoryDispatch} =  useInventoryContext();

    const logout = () =>{
        //remove user from storage
        localStorage.removeItem('user');

        //dispatch logout action
        dispatch({type:'LOGOUT'});
        inventoryDispatch({type: 'SET_INVENTORY',payload:null})

    }
    return {logout};
}
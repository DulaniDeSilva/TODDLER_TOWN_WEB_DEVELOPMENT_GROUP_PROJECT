import {createContext, useReducer} from 'react';

//creating a new context and store it in WaitingLiatContext
export const waitingListContext = createContext();

export const waitingListReducer = (state, action)=>{
    switch(action.type){
        case 'SET_WAITINGLIST':
            return{
                //getting all
                waitingList:action.payload
            }
        case 'CREATE_WAITINGLIST':
            return{
              //single object(new one): [action.payload], get the rest ...state.inventory
                waitingList: [action.payload, ...state.waitingList]
            }
        case 'DELETE_WAITINGLIST':
            return{
                waitingList:state.waitingList.filter((w) =>w._id !==action.payload._id)
            }
        default:
            return state
    }
}


export const WaitingListContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(waitingListReducer, {
        waitingList: []
    })
    return(
        <waitingListContext.Provider value = {{...state, dispatch}}>
            {children}
        </waitingListContext.Provider>
    )
 
}
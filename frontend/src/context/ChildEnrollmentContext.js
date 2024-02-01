import {createContext, useReducer} from 'react';

export const ChildEnrollmentContext = createContext();

export const childenrollmentReducer = (state, action)=>{
    switch(action.type){
        case 'SET_CHILD':
            return{
                
                child:action.payload
            }
        case 'CREATE_CHILD':
            return{
              
                // child: [action.payload, ...state.child]
                child: state.child ? [action.payload, ...state.child] : [action.payload]
            }
        case 'DELETE_CHILD':
            return{
                // child:state.child.filter((w) =>w._id !==action.payload._id)
                child: state.child ? state.child.filter((w) => w._id !== action.payload._id) : null
            }
        case 'UPDATE_CHILD':
            const updatedChildren =  state.child.map((child) =>
                child._id === action.payload._id ? action.payload : child
            );
            return{
                child:updatedChildren,
            }
        default:
            return state
    }
}


export const ChildEnrollmentContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(childenrollmentReducer, {
        child: null
    })
    return(
        <ChildEnrollmentContext.Provider value = {{...state, dispatch}}>
            {children}
        </ChildEnrollmentContext.Provider>
    )
 
}
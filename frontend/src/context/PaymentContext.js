import {createContext, useReducer} from 'react';

//creating a new context and store it in paymentContext
export const paymentContext = createContext();

export const paymentReducer = (state, action)=>{
    switch(action.type){
        case 'SET_PAYMENT':
            return{
                //getting all
                payment:action.payload
            }
        case 'CREATE_PAYMENT':
            return{
              //single object(new one): [action.payload], get the rest ...state.inventory
                payment: [action.payload, ...state.payment]
            }
        case 'DELETE_PAYMENT':
            return{
                payment:state.payment.filter((w) =>w._id !==action.payload._id)
            }
        default:
            return state
    }
}


export const PaymentContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(paymentReducer, {
        payment: null
    })
    return(
        <paymentContext.Provider value = {{...state, dispatch}}>
            {children}
        </paymentContext.Provider>
    )
 
}
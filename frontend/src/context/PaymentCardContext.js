import {createContext, useReducer} from 'react';

//creating a new context and store it in paymentContext
export const paymentCardContext = createContext();

export const paymentCardReducer = (state, action)=>{
    switch(action.type){
        case 'SET_PAYMENTCARD':
            return{
                //getting all
                paymentCard:action.payload
            }
        case 'CREATE_PAYMENTCARD':
            return{
              //single object(new one): [action.payload], get the rest ...state.inventory
                paymentCard: [action.payload, ...state.payment]
            }
        case 'DELETE_PAYMENTCARD':
            return{
                paymentCard:state.payment.filter((w) =>w._id !==action.payload._id)
            }
        case 'UPDATE_PAYMENTCARD':
            const updatedPayments = state.payment.map((paymentCard) =>
                paymentCard._id === action.payload._id ? action.payload : paymentCard
            );
            return{
                paymentCard:updatedPayments,
            }
        default:
            return state
    }
}


export const PaymentCardContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(paymentCardReducer, {
        paymentCard: []
    })
    return(
        <paymentCardContext.Provider value = {{...state, dispatch}}>
            {children}
        </paymentCardContext.Provider>
    )
 
}
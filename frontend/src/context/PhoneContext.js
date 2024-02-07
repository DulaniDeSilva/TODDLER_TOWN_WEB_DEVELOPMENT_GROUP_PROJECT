import {createContext, useReducer} from 'react';


//creating a new context and store it in inventoryContext
export const phoneContext = createContext();


export const phoneReducer = (state, action)=>{
    switch(action.type){
        case 'SET_PHONE':
            return{
                //getting all
                phone:action.payload
            }
        case 'CREATE_PHONE':
            return{
              //single object(new one): [action.payload], get the rest ...state.inventory
                phone: [action.payload, ...state.phone]
            }
        case 'DELETE_PHONE':
            return{
                phone:state.phone.filter((w) =>w._id !==action.payload._id)
            }
        case 'VERIFY_PHONE':
            return{
            phone:state.phone.map((item)=>
                item._id === action.payload._id ? {...item, isVerified:true}:item
                ),
            };
        default:
            return state
    }
}


export const PhoneContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(phoneReducer, {
        phone: []
    })
    return(
        <phoneContext.Provider value = {{...state, dispatch}}>
            {children}
        </phoneContext.Provider>
    )
 
}
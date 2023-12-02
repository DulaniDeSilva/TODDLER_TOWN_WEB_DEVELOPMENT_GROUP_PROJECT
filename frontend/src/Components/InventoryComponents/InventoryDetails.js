import { useInventoryContext } from "../../hooks/useInventoryContext";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { useAuthContext } from "../../hooks/useAuthContext";

const InventoryDetails = ({inventory})=>{
    const {dispatch} = useInventoryContext();
    const {user} = useAuthContext();
    
     const handleClick = async() =>{
        if(!user){
            return 
        }
        const response = await fetch('/inventory/' + inventory._id,{
            method:'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json();

        if(response.ok){
            dispatch({type: 'DELETE_INVENTORY', payload:json})
        }
    }

    return(
        <div className = "inventory-details">
            <h6><strong>Item Name:</strong>{inventory.itemName}</h6>
            <p><strong>Description:</strong>{inventory.description}</p>
            <p><strong>Quantity</strong>{inventory.quantity}</p>
            <p><strong>Date</strong>{inventory.date}</p>
            <p>{formatDistanceToNow(new Date(inventory.createdAt), {addSuffix:true})}</p>
            <button><span onClick={handleClick}>Delete</span></button>
        </div>
    )
};

export default InventoryDetails;
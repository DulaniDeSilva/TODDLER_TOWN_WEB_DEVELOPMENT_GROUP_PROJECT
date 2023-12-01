import {useState} from 'react'
import { useInventoryContext } from '../../hooks/useInventoryContext';

const Inventoryform =()=>{
    const {dispatch} = useInventoryContext();
    const [itemName, setItemName] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');
    const [date, setDate] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([])
    
    const handleSubmit = async (e) =>{
        e.preventDefault();

        const inventory = {itemName, description, quantity, date};

        const response = await fetch('/inventory',{
            method: 'POST',
            body: JSON.stringify(inventory),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json();

        if(!response.ok){
            setError(json.error);
            setEmptyFields(json.emptyFields);
        }
        if(response.ok){
            setItemName('');
            setDescription('');
            setQuantity('');
            setDate('');
            setError(null);
            setEmptyFields([]);
            console.log("new inventory added", json);
            dispatch({type: 'CREATE_INVENTORY', payload: json});
        }
    }

    return(
        <div>

            <form onSubmit = {handleSubmit}>
                <h4> Add a new item to the inventory</h4>

                <label>ItemName</label>
                <input
                    type = "text"
                    onChange={(e)=> setItemName(e.target.value)}
                    value = {itemName}
                    className = {emptyFields.includes('itemName')? 'error': ''}
                />

                <label>Description</label>
                <input
                    type = "text"
                    onChange={(e)=> setDescription(e.target.value)}
                    value = {description}
                    className = {emptyFields.includes('description')? 'error': ''}
                />

                <label>Quantity</label>
                <input
                    type = "number"
                    onChange={(e)=> setQuantity(e.target.value)}
                    value = {quantity}
                    className = {emptyFields.includes('quantity')? 'error': ''}
                />

                <label>Date</label>
                <input
                    type = "date"
                    onChange={(e)=> setDate(e.target.value)}
                    value = {date}
                    className = {emptyFields.includes('date')? 'error': ''}
                />

                <button>Add To Inventory</button>
                {error && <div className ="error">{error}</div>}


            </form>

        </div>
    )
};

export default Inventoryform;

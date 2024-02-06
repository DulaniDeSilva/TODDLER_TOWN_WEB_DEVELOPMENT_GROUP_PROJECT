import {useEffect} from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import '../Assets/Styles/InventorySystem/Navbar.css';
import '../Assets/Styles/InventorySystem/InventoryDetails.css';
import '../Assets/Styles/InventorySystem/InventoryPage.css';
import '../Assets/Styles/InventorySystem/Inventoryform.css';

import { useInventoryContext } from '../hooks/useInventoryContext';
import InventoryDetails from '../Components/InventoryComponents/InventoryDetails';
import Inventoryform from '../Components/InventoryComponents/Inventoryform';
import Navbar from '../Components/InventoryComponents/Navbar';

const InventoryPage = ()=>{
    const {inventory, dispatch} = useInventoryContext();
    const {user} = useAuthContext();
    useEffect(()=>{
        const fetchInventory = async () =>{
            const response = await fetch('/inventory/',{
                headers:{
                    
                    'Authorization': `Bearer ${user.token}`

                }
            });
            const json = await response.json();

            if(response.ok){
                console.log(json);
               dispatch({type: 'SET_INVENTORY', payload: json});
            }
        };

        if(user){
            fetchInventory();
        }

       
    }, [dispatch, user]);



    return(
        <div className='pages'>
            <Navbar/>
        <div className="InventoryHome">
           <div>
               {inventory && inventory.map((inventory)=>(
                   <InventoryDetails key ={inventory._id} inventory = {inventory}/>
               ))}
           </div>
           <Inventoryform />
       </div>
        </div>

    )
   
};

export default InventoryPage;
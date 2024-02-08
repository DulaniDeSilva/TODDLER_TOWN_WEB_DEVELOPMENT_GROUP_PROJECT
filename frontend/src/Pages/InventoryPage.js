import {useEffect, useState} from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import '../Assets/Styles/InventorySystem/Navbar.css';
import '../Assets/Styles/InventorySystem/InventoryDetails.css';
import '../Assets/Styles/InventorySystem/InventoryPage.css';
import '../Assets/Styles/InventorySystem/Inventoryform.css';

import { useInventoryContext } from '../hooks/useInventoryContext';
import InventoryDetails from '../Components/InventoryComponents/InventoryDetails';
import Inventoryform from '../Components/InventoryComponents/Inventoryform';
// import Navbar from '../Components/InventoryComponents/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const InventoryPage = ()=>{
    const {inventory, dispatch} = useInventoryContext();
    const {user} = useAuthContext();
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const fetchInventory = async () =>{
            try{
                const response = await fetch('/inventory/', {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                });
                const json = await response.json();

                if (response.ok) {
                    dispatch({ type: 'SET_INVENTORY', payload: json });
                } else {
                    throw new Error(json.error || 'Failed to fetch inventory');
                }
            }catch(error){
                console.error('Error fetching payment cards:', error.message);
            }finally{
                setLoading(false);
            }
        };    

        if(user){
            fetchInventory();
        }

       
    }, [dispatch, user]);



    return(
        <div className='pages'>
        <div className="InventoryHome">
        
        <Row>
            <Col>
                {loading ? (
                    <p>Loading...</p>
                    ) : (
                    inventory.map(item => (
                        <div key={item._id} className="inventory-item">
                            <InventoryDetails inventory={item} />
                        </div>
                    ))
                )}
            </Col>

            <Col>
                <Inventoryform />
            </Col>
        </Row>
       </div>
        </div>

    )
   
};

export default InventoryPage;
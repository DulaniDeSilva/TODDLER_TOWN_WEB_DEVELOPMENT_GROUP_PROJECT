import React, { useState} from 'react';
import './../../Assets/Styles/Admin/Inventory.css';
//import DatePicker from 'react-datepicker';
//import 'react-datepicker/dist/react-datepicker.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronRight, faChevronLeft,  faPlus } from '@fortawesome/free-solid-svg-icons';
import {  faMinus,  faPlus } from '@fortawesome/free-solid-svg-icons';



//import logo from "../Assets/Images/transparent-logo.jpg";

function InventorySystem() {

  //const [date, setDate] = useState(new Date());

  const [items, setItems] = useState([
    {itemName: 'item 1', quantity: 1, isSelected:false},
    
  ]);

  const [inputValue, setInputValue] = useState('');
  const [totalItemCount, setTotalItemCount] = useState(0);

  const handleAddButtonClick = () =>{
    const newItem = {
      itemName : inputValue,
      quantity: 1,
      isSelected:false,
    };


  const newItems = [...items, newItem];
  setItems(newItems);
  setInputValue('');
  calculateTotal(); 

  };

  const handleQuantityIncrease = (index) => {
		const newItems = [...items];

		newItems[index].quantity++;

		setItems(newItems);
		calculateTotal();
	};

  const handleQuantityDecrease = (index) => {
		const newItems = [...items];

		newItems[index].quantity--;

		setItems(newItems);
		calculateTotal();
	};

  const toggleComplete = (index) =>{
    const newItems = [...items];
    newItems[index].isSelected = !newItems[index].isSelected;
    setItems(newItems);
  };

  const calculateTotal = () =>{
    const totalItemCount = items.reduce((total, item) =>{
      return total + item.quantity;
    }, 0);
    setTotalItemCount(totalItemCount);
  };


  const handleRemoveItem = (index) => {
    const newItems = [...items];
    newItems.splice(index,1);
    setItems(newItems);
    calculateTotal();
  }



  return (
    <>
    {/* starting div */}
     
 

    <div  className='header_'>
    <Container>
      <Row className='headerRow' xs={12} md={8}>
        {/* <Col className='headerCol' xs = {4}>  <img className='headerlogo' src={logo} alt = "logo"/></Col> */}
        <Col className='headerCol' xs = {8}>
        <Row className='headerSubRow'> <h1>INVENTORY SYSTEM</h1></Row>
        <Row className='headerSubRow'> <h4>Toddler Town Pre School and Childcare center </h4> </Row>
        </Col>
      </Row>
    </Container> 
    </div>
   

    <Row className='inventoryrow'>
      <h3> Manage Inventory Items</h3>
    </Row>


    <Row className="mb-3 selectRow" >
        <Form.Group as={Col} className='additem' >
          <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className='add-item-input'
          style={{
            border: '1px solid #ccc',
            padding: '10px',


          }} placeholder='Add an item...' />
        </Form.Group>

        <Form.Group as={Col} >
          <Button variant="primary"  onClick={() => handleAddButtonClick()}>
               +
          </Button>

        </Form.Group>

        {/* <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Sort By:</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Name</option>
            <option>Number</option>
            <option>Type</option>
          </Form.Select>
        </Form.Group> */}

        {/* <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Choose Category</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group> */}

        
        
        

        {/* <Form.Group as={Col} controlId="formGridState">
        <Button variant="primary" type="submit">
        Search 
        </Button>
        </Form.Group>
        */}
      </Row>






    <Table responsive style={{
      textAlign: 'center',
      opacity: '0.7',
    }}>
      <thead>
        <tr>
          <th>#</th>
          <th>Item</th>
          <th>Remove Item </th>
          <th>Add Item</th>
          <th>Total Items</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>

{items.map((item, index) => (


<tr key = {index}>
       
         <td>{index +1}</td>


         <td >
           <div >
             <div  onClick={() => toggleComplete(index)}>
               {item.isSelected ? (
                 <>
                   <span >{item.itemName}</span>
                 </>
               ) : (
                 <>
                   <span>{item.itemName}</span>
                 </>
               )}
             </div>	
           </div>
         </td>


         <td>
           <div >
             <div  onClick={() => toggleComplete(index)}>
               
             <div >
               <button>
                 <FontAwesomeIcon icon={faMinus} onClick={() => handleQuantityDecrease(index)} />
               </button>
               
             </div>
               
             </div>	
           </div>
         </td>


         <td>
           <div >
             <div  onClick={() => toggleComplete(index)}> 
             <div >
               <button>
                 <FontAwesomeIcon icon={faPlus} onClick={() => handleQuantityIncrease(index)} />
               </button>
             </div>
               
             </div>	
           </div>
        </td>






        


         <td> 
           <div >
             <div  onClick={() => toggleComplete(index)}> 
             <div >
               <span> {item.quantity} </span> 
             </div>
             </div>	
           </div>
         </td>


         <td>
         <input type='date' />
          
         {/* <DatePicker selected={date} onChange={(date) => setDate(date)} /> */}
         </td>


         <td>
         <button onClick={() => handleRemoveItem(index)}>Remove</button>
         </td>
           
   
       </tr>
















 ))}




              
        




      </tbody>
    </Table>







     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
       
     
     </>
  )
};

export default InventorySystem;
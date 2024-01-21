import {useEffect} from 'react';
import { useAuthContext } from '../hooks/useAuthContext';


import { useChildEnrollmentContext } from '../hooks/useChildEnrollmentContext';
import ChildEnrollmentDetails from '../Components/ChildEnrollmentComponent/ChildEnrollmentDetails';
// import ChildEnrollmentform from '../Components/ChildEnrollmentComponent/ChildEnrollmentform';


const ChildEnrollmentPage = ()=>{
    const {child, dispatch} = useChildEnrollmentContext();
    const {user} = useAuthContext();
    useEffect(()=>{
        const fetchChildren = async () =>{
            const response = await fetch('/children',{
                headers:{
                    'Authorization': `Bearer ${user.token}`

                }
            });
            const json = await response.json();

            if(response.ok){
               dispatch({type: 'SET_CHILD', payload: json});
            }
        };

        if(user){
            fetchChildren()
        }

       
    }, [dispatch, user]);



    return(
        <div className='pages'>
            
        <div className="ChildEnrollmentHome">
           <div>
               {child && child.map((child)=>(
                   <ChildEnrollmentDetails key ={child._id} child = {child}/>
               ))}
           </div>
           {/* <ChildEnrollmentform /> */}
       </div>
        </div>

    )
   
};

export default ChildEnrollmentPage;
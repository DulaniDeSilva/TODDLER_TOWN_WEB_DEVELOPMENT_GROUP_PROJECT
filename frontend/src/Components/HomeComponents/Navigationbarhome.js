import {Link} from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';

// import Navbar from 'react-bootstrap/Navbar';

const Navigationbarhome = () =>{
    const {logout} = useLogout();
    const {user} = useAuthContext();

    const handleClick = () =>{
        logout();
    }

 
 
    return(
        <div className='mainnav-button-area' >
               
                    {user &&(
                        <div className = "mainnav-logout">
                        <span>{user.email}</span>
                        <button onClick = {handleClick} className='links' >Log out</button>
                        </div>
                    )}
                   
                    {!user && (
                    <div className = "mainnav-logout">
                        <Link to = "/loginPage" className='links' >Login</Link>
                        <Link to = "/signupPage" className='links'>Sign up</Link>
                    </div>
                    )}
              
                
        </div>
    )
};

export default Navigationbarhome;
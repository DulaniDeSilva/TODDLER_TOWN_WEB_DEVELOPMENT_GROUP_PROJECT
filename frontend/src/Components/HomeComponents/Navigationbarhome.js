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
        <div  >
               
                    {user &&(
                        <div className='navigationbarhome-logout'>
                        <span>{user.email}</span>
                        <Link to = "/" className='common-link' >
                            <button onClick = {handleClick} className = "common-button" >Log out</button>
                        </Link>
                        
                        </div>
                    )}
                   
                    {!user && (
                    <div >
                        <Link to = "/loginPage" className='common-link' >Login</Link>
                        <Link to = "/signupPage" className='common-link'>Sign up</Link>
                    </div>
                    )}
              
                
        </div>
    )
};

export default Navigationbarhome;
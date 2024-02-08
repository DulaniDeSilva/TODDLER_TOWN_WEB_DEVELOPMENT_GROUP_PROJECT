import {Link} from 'react-router-dom';

const Navbar = () =>{
    return (
        <header>
            <div className = "container ">
                <Link to = '/inventoryPage'>
                    {/* <h1> Inventory System</h1> */}
                </Link>
            </div>
        </header>
    )
};

export default Navbar;
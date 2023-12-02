import React from 'react';
import {Link} from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

export default function ChildInterface() {
    const {logout} = useLogout();
    const handleClick = ()=>{
        logout();
    }
  return (
    <div>

        <button onClick={handleClick}>Log Out</button>
        <h1> Child interface</h1>
    </div>
  )
}

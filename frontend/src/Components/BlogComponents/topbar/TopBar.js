import React from "react";
import "./topbar.css"
import {Link} from "react-router-dom";

export default function TopBar() {
    return (
        <div className='top'>
            <div className="topLeft">
                {/* <img className="logo"  src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" /> */}
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <Link className="link" to="/blogHome" style={{textDecoration:"none",color:"inherit"}}>HOME</Link>
                    <Link className="link" to="/write" style={{textDecoration:"none",color:"inherit"}}>WRITE</Link>
                </ul>
            </div>
            <div className="topRight">
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
                <i className="topProfileIcon fa-solid fa-user"></i>
            </div>
        </div>
    )
}

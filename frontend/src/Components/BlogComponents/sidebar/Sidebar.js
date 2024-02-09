import React from "react";
import "./sidebar.css"

export default function Sidebar() {
    return(
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <p>lorem</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">
                    CATEGORIES
                </span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
            </div>
        </div>
    )
}
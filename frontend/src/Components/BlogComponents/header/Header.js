import React from "react"; 
import "./header.css"; 

export default function Header() {
    return(
        <div className="header">
            <div className="headerTitles">
                <span className="headerS">l</span>
                <span className="headerL">Blog</span>
            </div>
            {/* <img className="headerImage"  src={process.env.PUBLIC_URL + '/headerImage (4).jpg'} alt="headerImage" /> */}
        </div>
    )
}
import React from "react";
// import Sidebar from "../../sidebar/Sidebar";
// import SinglePost from "../../singlePost/SinglePost";
import "./single.css";
import SinglePost from "../../../Components/BlogComponents/singlePost/SinglePost";
import Sidebar from "../../../Components/BlogComponents/sidebar/Sidebar";

export default function Single() {
    return(
        <div className="single">
        <SinglePost/>
        <Sidebar/>
            {/* <SinglePost /> */}
            {/* <Sidebar/> */}
        </div>
    )
}
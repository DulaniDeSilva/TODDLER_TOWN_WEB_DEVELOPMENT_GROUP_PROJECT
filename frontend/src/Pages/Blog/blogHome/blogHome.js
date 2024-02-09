import React from "react";
import Header from "../../header/Header";
import Sidebar from "../../sidebar/Sidebar";
import Posts from "../../posts/Posts";
import "./home.css";

export default function blogHome() {
    return(
        <>
        <Header/>
        <div className="bloghome-maindiv">
            <Posts/>
            <Sidebar/>
        </div>
        </>
    )
}
import React from "react";
import "./post.css";

export default function Post() {
    return(
        <div className="post">
            {/* <img className="postImage"  src={process.env.PUBLIC_URL + '/concert.jpg'} alt="concert" /> */}
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Concert</span>
                <hr/>
                <span className="postDate">1 hour Ago</span>
            </div>
            <p className="postDesc">lorem ipsum</p>
        </div>
    )
}
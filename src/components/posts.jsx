import React, { useEffect, useState } from 'react';
import "../style.css"
import data from '../data/data.json'

const Post = (props) => {
    console.log(props)
    const [post, setPost] = useState({});


    useEffect(() => {
        const postID = props.match.params.postId;
        const post = data.data.find(post => post.id == postID);
        setPost(post)
    })
    return ( 
        <div className=".insidePost">
            {/* Main Posts are Starting from Here */}
            <h4 className="ptitle">{post.title}</h4>
            <img src={post.Image} className="pimage" alt="post.Image"/>
            <span className = "pdescription">Description: {post.description}</span>
            <span className="preview">Review: {post.Review}</span>

        </div>
     );
}
 
export default Post;

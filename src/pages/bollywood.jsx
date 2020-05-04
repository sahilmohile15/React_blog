import React, { Component } from 'react';
import pdata from "../data/data.json"; 
import Sidebar from '../components/sidebar';
import { NavLink} from 'react-router-dom';
//import Post from '../components/posts';

class Hollywood extends Component {
    constructor(props) {
        super(props);
    }

	render() {
		return (
            <div>
                <h2 className = "postHeader">Bollywood Posts</h2>
                <div className = "containers">
                <div className="insidePost">
                    {pdata.data.map((post, index) => {
                        return(
                            <div>
                                {post.category == 'bollywood' ?
                                <div className= "content">
                                    <h3 className = "title">{post.title}</h3>
                                    <div className= "image-content">
                                        <img src={post.Image} className = "image" alt=""/>
                                        <span className = "description">{post.description}</span>
                                    </div>
                                    <NavLink className = "link" to = {`/post/${post.id}`} >Read More</NavLink>
                                
                                </div> : ''}
                            </div>
                        )
                    })}
                </div>
                <Sidebar/>
                </div>
            </div>
        );
    }
} 
export default Hollywood;


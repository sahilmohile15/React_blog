import React, { Component } from 'react';
import "../style.css"

class Sidebar extends Component {
    state = {  }
    render() { 
        return (
            <div className="sideBar">
                {/* Side Bar Starting From Here */}
    
                <h4 className="ml-5">About Us</h4>
                <p>This is a Movies Blog Created for demo.
                    Using Reactjs and FireBase.
                </p>
            
            </div> 
        );
    }
}
 
export default Sidebar;
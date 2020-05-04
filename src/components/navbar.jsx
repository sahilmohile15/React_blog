import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to="/">Movies Blog</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/hollywood">Hollywood</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/bollywood">Bollywood</NavLink>
                    </li>
                    </ul>
                </div>
                </nav>
            </div>
         );
    }
}
 
export default NavBar;


/*
<nav className="navbar navbar-dark bg-dark">
                 <p className="navbar-brand">Movies Blog</p>
                 <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="navbar-item">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>
                    </ul>
                 </div>
                </nav>
*/
import React from 'react';
import { NavLink } from 'react-router-dom';


import './Header.css';

const Header = (props) =>{
    let link = "link navlink"
    if(props.inverse){
        link = "link navlink inverse"
    }
    
    return (
        <header>
            <nav>
                <div>
                    <ul className="nav-list">
                        <li><NavLink className={link} to="/" exact>Home</NavLink></li>
                        <li><NavLink className={link} to="/about" exact>About Me</NavLink></li>
                        <li><NavLink className={link} to="/projects" exact>Projects</NavLink></li>
                        <li><NavLink className={link} to="/links" exact>Links</NavLink></li>
                    </ul>   
                </div>
            </nav>
        </header>
    )
}

export default Header;
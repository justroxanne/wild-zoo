import React from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css';

function Navbar() {
    return (
        <div className="Navbar">
            <a href="/"><img className="logo" src={logo} alt="Zoo loo"/></a>
        </div> 
    )
}

export default Navbar;
